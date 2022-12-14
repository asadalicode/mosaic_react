import AlbumsTable from "../../partials/albums/albumsTable";
import AlbumsAnalytics from "../../partials/albums/almbumsAnalytics";

const Albums = () => {
    return (
        <>
            <AlbumsAnalytics />
            <div className="mt-5">
                <AlbumsTable />
            </div>
        </>
    )
}
export default Albums;