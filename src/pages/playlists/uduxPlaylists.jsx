import UduxAnalytics from "../../partials/uduxPlaylist/uduxAnalytics";
import UduxTable from "../../partials/uduxPlaylist/uduxTable";

const UduxPlaylist = () => {
    return (
        <>
            <UduxAnalytics />
            <div className="mt-4">
                <UduxTable />
            </div>
        </>
    )
}
export default UduxPlaylist;