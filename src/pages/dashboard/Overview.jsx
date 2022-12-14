import Albums from "../../partials/overview/Albums";
import OverviewAnalytics from "../../partials/overview/OverviewAnalytics";
import OverviewPlaylist from "../../partials/overview/OverviewPlaylist";
import OverviewSongs from "../../partials/overview/OverviewSongs";
import OverviewSummery from "../../partials/overview/OverviewSummery";

const Overview = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-full sm:col-span-9 xl:col-span-9">
                    <OverviewAnalytics />
                    <OverviewSongs />
                    <OverviewPlaylist />
                    <OverviewSummery />
                </div>
                <div className="col-span-full sm:col-span-3 xl:col-span-3">
                    <Albums />
                </div>
            </div>
        </div>
    )
}
export default Overview;