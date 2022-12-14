import UserAnalytics from "../../partials/userPlaylst/userAnalytics";
import UserPlaylistTable from "../../partials/userPlaylst/userPlaylistTable";

const UserPlaylist = () => {
    return (
        <>
            <UserAnalytics />
            <div className="mt-5">
                <UserPlaylistTable />
            </div>
        </>
    )
}
export default UserPlaylist;