import { columnEnum } from "../table/columnEnum";
import Table from "../table/Table";
import TablePagination from "../table/TablePagination";
import Dropdown from "../table/Dropdown";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteAlbumAPICall, getAlbumsAPICall } from "../../services/albums/albums";
import Popup from "../../components/Popup";
import DeleteModal from "../../components/DeleteModal";
import { handleToastMessage } from "../../shared/handleToastMessage";
import Spinner from "../../components/Spinner";

const columns = [
    {
        name: 'Title',
        key: 'title',
        orderBy: true,
    },
    {
        name: 'Creator',
        key: 'creator',
        orderBy: true,
    },
    {
        name: 'Songs',
        key: 'songs',
        orderBy: true,
    },
    {
        name: 'Streams',
        key: 'streams',
        orderBy: true,
    },
    {
        name: 'Favourites',
        key: 'favourites',
        orderBy: false,
    },
    {
        name: 'Released',
        key: 'released',
        orderBy: false,
    },
    {
        name: 'Type',
        key: 'type',
        orderBy: false
    },
    {
        name: 'Actions',
        key: 'action',
        orderBy: false
    }
]



const AlbumsTable = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [rows, setRows] = useState([]);

    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [limit, setLimit] = useState(10);
    const [deleteId, setDeletId] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        getAlbums(limit, pageNumber);
    }, [])


    const getAlbums = async (limit, pageNumber, loading = true) => {
        if (loading) {
            setIsLoading(true);
        }
        let _response = await getAlbumsAPICall(pageNumber, limit);
        setIsLoading(false);
        if (_response.isSuccess) {
            const { totalPages, data, totalDocuments } = _response.result;
            setTotalRecords(totalDocuments);
            setTotalRecords(totalDocuments);
            setTotalPages(totalPages);

            arrangeData(data);
        }
    }

    const arrangeData = (data) => {
        let _data = data.map((item) => {

            let _album = [
                {
                    key: 'title',
                    value: item.metadata.title,
                    columnType: columnEnum.text,
                    isLink: true,
                    id: item.id
                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'creator',
                    id: item.id
                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'songs',
                    id: item.id
                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'streams',
                    id: item.id
                },

                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'favourites',
                    id: item.id
                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'released',
                    id: item.id
                },
                {
                    value: item.type,
                    columnType: columnEnum.type,
                    key: 'type',
                    id: item.id
                },
                {
                    id: item.id,
                    key: 'action',
                    columnType: columnEnum.action,
                    value: [
                        {
                            isEdit: true,
                            value: 'Create playlist',
                        },
                        {
                            isDelete: true,
                            value: 'Delete',
                        },

                    ]
                }

            ];


            return _album;
        });
        setRows(_data);
    }
    const handleShowData = (value) => {
        setLimit(value);
        getAlbums(value, pageNumber, false);
    }

    const paginate = (value) => {
        setPageNumber(value);
        getAlbums(limit, value);
    }

    const paginateBack = () => {
        setPageNumber((prev) => --prev);
        getAlbums(limit, pageNumber - 1);
    }

    const paginateFront = () => {

        setPageNumber((prev) => ++prev);
        getAlbums(limit, pageNumber + 1);
    }

    const coloumnClick = (item) => {
        if (item.key === 'action') {
            if (item?.isEdit) {
                navigate("/playlist/clonePlaylist");
            }
            if (item?.isDelete) {
                setDeletId(item.id);
                setShowDeletePopup(true);
            }
        }
        if (item.key === "title") {
            navigate(`/albumdetails/${item.id}`);
        }
    }

    const confirmDelete = async () => {
        setDeleteLoading(true);
        let _response = await deleteAlbumAPICall(deleteId);
        setDeleteLoading(false);
        setShowDeletePopup(false);
        setDeletId(null);
        if (_response.isSuccess) {
            handleToastMessage("success", "Album delete successfully");
            getAlbums(limit, pageNumber);
        }
    }

    return (
        <div>

            {isLoading

                &&
                <Spinner />
            }
            {
                !isLoading &&
                <>
                    <Table
                        columns={columns}
                        rows={rows}
                        title={"songs"}
                        coloumnClick={coloumnClick}
                        totalRecords={totalRecords}
                        pageNumber={pageNumber}
                        limit={limit}
                    >
                        <Dropdown handleSelectedOption={handleShowData} limit={limit} />
                    </Table>
                    <TablePagination
                        title={"albums"}
                        totalRecords={totalRecords}
                        pageNumber={pageNumber}
                        limit={limit}
                        handleShowData={handleShowData}
                        paginate={paginate}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                    />
                </>
            }
            {
                showDeletePopup &&
                <Popup
                    showModal={showDeletePopup}
                    setShowModal={() => {
                        setDeletId(null);
                        setShowDeletePopup(false);
                    }}
                >
                    <DeleteModal
                        description={"Are you sure you want to Delete Album?"}
                        handleClick={confirmDelete}
                        isLoading={deleteLoading}
                    />
                </Popup>
            }
        </div>
    )
}
export default AlbumsTable;