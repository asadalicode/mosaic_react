import { columnEnum } from "../table/columnEnum";
import Table from "../table/Table";
import { useEffect, useRef, useState } from "react";
import TablePagination from "../table/TablePagination";
import Dropdown from "../table/Dropdown";
import { useNavigate } from "react-router-dom";
import { getAlbumTracksAPICall } from "../../services/albums/albums";
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
    name: 'Time',
    orderBy: true,
    key: 'time'

},
{
    name: 'Streams',
    orderBy: true,
    key: 'streams'
},
{
    name: 'Liked',
    orderBy: false,
    key: 'liked'
},
{
    name: 'Udux Playlists',
    orderBy: false,
    key: 'uduxplaylists',

},
{
    name: 'User Playlists',
    orderBy: false,
    key: 'userplaylists',

},
{
    name: 'Actions',
    orderBy: false,
    key: 'action',

}
]

const AlbumSongs = ({ id }) => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            getAlbumTrack();
        }
    }, [id]);


    const getAlbumTrack = async () => {
        setIsLoading(true);
        let _response = await getAlbumTracksAPICall(id);
        setIsLoading(true);
        if (_response.isSuccess) {
            const { data } = _response.result;
            arrangeData(data);
        }
    }
    const arrangeData = (data) => {
        let _data = data.map((item) => {
            console.log("item",item);
            let _song = [
                {

                    key: 'title',
                    value: item.metadata.title,
                    columnType: columnEnum.text,
                    id: item.id
                },
                {
                    value:  item.metadata.displayArtists?.[0]?.artist?.stageName,
                    columnType: columnEnum.text,
                    key: 'artist',
                    id:item.metadata.displayArtists?.[0]?.artist?.id,
                    isLink: true,

                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'time'
                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'streams'

                },
                {
                    value: '',
                    columnType: columnEnum.text,
                    key: 'Liked'

                },
                {
                    value: 0,
                    columnType: columnEnum.text,
                    key: 'uduxplaylists',

                },
                {
                    value: 0,
                    columnType: columnEnum.text,
                    key: 'userplaylists',

                },
                {
                    value: [
                        {
                            isCreate: true,
                            value: 'Create Playlist'
                        },
                        {
                            isDelete: false,
                            value: 'Delete Playlist'
                        }
                    ],
                    columnType: columnEnum.action,
                    key: 'action',

                }

            ]


            return _song;
        });
        setRows(_data);
    }

    const coloumnClick = (item) => {
        console.log("item,", item)
        if (item.key === "artist") {
            navigate(`/artists/${item.id}`);
        }
    }

    return (
        <>
            <Table
                isHeader={false}
                columns={columns}
                rows={rows}
                title={"songs"}
                coloumnClick={coloumnClick}
            >
            </Table>

        </>
    )
}
export default AlbumSongs;