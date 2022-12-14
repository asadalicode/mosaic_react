    import { columnEnum } from "../table/columnEnum";
    import Table from "../table/Table";
    import { useState, useEffect } from "react";
    import TablePagination from "../table/TablePagination";
    import Dropdown from "../table/Dropdown";
    import { useNavigate } from "react-router-dom";
    import Popup from "../../components/Popup";
    import DeleteModal from "../../components/DeleteModal";
    import Spinner from "../../components/Spinner";
    import { deleteSongAPICall, getSongsAPICall } from "../../services/songs/songs";
    const filters = [
        {
            name: 'New artists',
            value: 'new'
        },
        {
            name: 'Top artists',
            value: 'top'
        }
    ];

    const columns = [{
        name: 'Title',
        orderBy: true,
        key: 'title'
    },
    {
        name: 'Artist',
        orderBy: true,
        key: 'artist'
    },
    {
        name: 'Playlist',
        orderBy: true,
        key: 'playlist'

    },
    {
        name: 'Tag',
        orderBy: true,
        key: 'tag'
    },
    {
        name: 'Released',
        orderBy: false,
        key: 'released'
    },
    {
        name: 'Rating',
        orderBy: false,
        key: 'rating',

    },
    {
        name: 'Status',
        orderBy: false,
        key: 'status',

    },
    {
        name: 'Actions',
        orderBy: false,
        key: 'action',

    }
    ]


    const SongsTable = () => {

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
            getSongs(limit, pageNumber);
        }, [])


        const getSongs = async (limit, pageNumber, loading = true) => {
            if (loading) {
                setIsLoading(true);
            }
            let _response = await getSongsAPICall(pageNumber, limit);
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
                        value: item.metadata.title,
                        columnType: columnEnum.text,
                        key: 'title',
                        id: item.id
                    },
                    {
                        value: item.metadata.displayArtists?.[0].artist.stageName,
                        columnType: columnEnum.text,
                        key: 'artist',
                        isLink: true,
                        id: item.metadata.displayArtists?.[0].artist.id
                    },
                    {
                        value: '',
                        columnType: columnEnum.text,
                        key: 'playlist',
                        id: item.id
                    },
                    {
                        value:item.metadata.tags.map((item)=>item.name).join(', '),
                        columnType: columnEnum.text,
                        key: 'tag',
                        id: item.id

                    },
                    {
                        value: '',
                        columnType: columnEnum.text,
                        key: 'released',
                        id: item.id

                    },
                    {
                        value: 0,
                        columnType: columnEnum.rating,
                        key: 'rating',
                        id: item.id

                    },
                    {
                        value: item.metadata.status,
                        columnType: columnEnum.status,
                        key: 'status',
                        id: item.id

                    },
                    {
                        value: [
                            {
                                isAdd: true,
                                value: '+ Add to playlist'
                            }
                        ],
                        id: item.id,
                        columnType: columnEnum.action,
                        key: 'action',

                    }

                ];


                return _album;
            });
            setRows(_data);
        }
        const handleShowData = (value) => {
            setLimit(value);
            getSongs(value, pageNumber, false);
        }

        const paginate = (value) => {
            setPageNumber(value);
            getSongs(limit, value, false);
        }

        const paginateBack = () => {
            setPageNumber((prev) => --prev);
            getSongs(limit, pageNumber - 1, false);
        }

        const paginateFront = () => {
            setPageNumber((prev) => ++prev);
            getSongs(limit, pageNumber + 1, false);
        }

        const coloumnClick = (item) => {
            if (item.key === "artist") {
                navigate(`/artists/${item.id}`);
            }

            if (item.key === 'action') {
                if (item?.isAdd) {
                    navigate("/playlist/clonePlaylist");
                }
                if (item?.isDelete) {
                    setDeletId(item.id);
                    setShowDeletePopup(true);
                }
            }

        }

        const confirmDelete = async () => {
            setDeleteLoading(true);
            let _response = await deleteSongAPICall(deleteId);
            setDeleteLoading(false);
            setShowDeletePopup(false);
            setDeletId(null);
            if (_response.isSuccess) {
                handleToastMessage("success", "Song delete successfully");
                getSongs(limit, pageNumber, false);
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
                            title={"songs"}
                            coloumnClick={coloumnClick}
                            totalRecords={totalRecords}
                            pageNumber={pageNumber}
                            limit={limit}
                        >
                            <Dropdown handleSelectedOption={handleShowData} limit={limit} />
                        </Table>
                        <TablePagination
                            title={"songs"}
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
                            description={"Are you sure you want to Delete Song?"}
                            handleClick={confirmDelete}
                            isLoading={deleteLoading}
                        />
                    </Popup>
                }
            </div>
        )

    }
    export default SongsTable;