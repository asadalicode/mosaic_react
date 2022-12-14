
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import Popup from "../../components/Popup";
import { columnEnum } from "../../partials/table/columnEnum";
import Dropdown from "../../partials/table/Dropdown";
import Table from "../../partials/table/Table";
import TablePagination from "../../partials/table/TablePagination";
import { deleteArtistAPICall, getArtistAPICall } from "../../services/artist/artist";
import Spinner from "../../components/Spinner";
import { handleToastMessage } from "../../shared/handleToastMessage";

const columns = [
    {
        name: 'Name',
        key: 'name',
        orderBy: true,
    },
    {
        name: 'Songs',
        key: 'songs',
        orderBy: true,
    },
    {
        name: 'Playlists',
        key: 'playlists',
        orderBy: true,
    },
    {
        name: 'Streams',
        key: 'streams',
        orderBy: true,
    },
    {
        name: 'Projects',
        key: 'projects',
        orderBy: false,
    },
    {
        name: 'Followers',
        key: 'followers',
        orderBy: false,
    },
    {
        name: 'Favorites',
        key: 'Favorites',
        orderBy: false
    },
    {
        name: 'Actions',
        key: 'action',
        orderBy: false
    }
]

const ArtistList = () => {
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
        getArtists(limit, pageNumber);
    }, [])


    const getArtists = async (limit, pageNumber, loading = true) => {
        if (loading) {
            setIsLoading(true);
        }
        let _response = await getArtistAPICall(pageNumber, limit);
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
                    value: item.stageName,
                    columnType: columnEnum.text,
                    key: 'name',
                    isLink: true,
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
                    key: 'playlists',
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
                    key: 'projects',
                    id: item.id
                },
                {
                    value: item.statistics.followers,
                    columnType: columnEnum.text,
                    key: 'followers',
                    id: item.id
                },
                {
                    value: item.statistics.playlistLikes,
                    columnType: columnEnum.text,
                    key: 'favoites',
                    id: item.id
                },
                {
                    key: 'action',
                    columnType: columnEnum.action,
                    id: item.id,
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
        getArtists(value, pageNumber, false);
    }

    const paginate = (value) => {
        setPageNumber(value);
        getArtists(limit, value,false);
    }

    const paginateBack = () => {
        setPageNumber((prev) => --prev);
        getArtists(limit, pageNumber - 1,false);
    }

    const paginateFront = () => {
        setPageNumber((prev) => ++prev);
        getArtists(limit, pageNumber + 1,false);
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
        if (item.key === "name") {
            navigate(`/artists/${item.id}`);
        }
    }

    const confirmDelete = async () => {
        setDeleteLoading(true);
        let _response = await deleteArtistAPICall(deleteId);
        setDeleteLoading(false);
        setShowDeletePopup(false);
        setDeletId(null);
        if (_response.isSuccess) {
            handleToastMessage("success", "Artist delete successfully");
            getArtists(limit, pageNumber, false);
        }
    }

    return (
        <div >

            {isLoading && <Spinner />
            }
            {
                !isLoading &&
                <>
                    <Table
                        columns={columns}
                        rows={rows}
                        title={"artists"}
                        coloumnClick={coloumnClick}
                        totalRecords={totalRecords}
                        pageNumber={pageNumber}
                        limit={limit}
                    >
                        <Dropdown handleSelectedOption={handleShowData} limit={limit} />
                    </Table>
                    <TablePagination
                        title={"artists"}
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
                        description={"Are you sure you want to Delete Artist?"}
                        handleClick={confirmDelete}
                        isLoading={deleteLoading}
                    />
                </Popup>
            }
        </div>
    )
}
export default ArtistList;