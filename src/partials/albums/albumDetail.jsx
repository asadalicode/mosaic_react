import { useParams } from "react-router-dom";
import AlbumInfo from "./albumInfo"
import AlbumSongs from './albumSongs';

const AlbumDetail = () => {
    const { id } = useParams();

    return (
        <>
            <AlbumInfo id={id} />
            <div className='mt-5'>
                <AlbumSongs id={id} />
            </div>
        </>
    )
}
export default AlbumDetail