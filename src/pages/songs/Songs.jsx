import SongsAnalytics from "../../partials/songs/SongsAnalytics";
import SongsTable from "../../partials/songs/SongsTable";
import Songs1 from "./Songs1";

const Songs = () => {
    return (
        <>
            <SongsAnalytics />
            <div className="mt-4">
                <SongsTable />
            </div>

            {/* <Songs1 /> */}
        </>
    )
}
export default Songs;