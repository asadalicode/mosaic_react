
import ArtistFollowLike from "./artistFollowLike";
import CreatorInfo from "./creatorInfo";
import LikeFollowSongs from "./likeFollowSongs";
import PlaylistCreated from "./playlistCreatd";
import PlaylistFollowinng from "./playlistFollowing";
import UserNewPlaylist from "./userNewPlaylist";
import UserTopArtist from "./userTopArtist";
import UserTopSongs from "./userTopSongs";

const Creator = () => {
    return (
        <div>
            <CreatorInfo />
            <div className="w-[100%] lg:w-[75%]">
                <UserNewPlaylist />
                <UserTopSongs />
                <LikeFollowSongs />
                <UserTopArtist />
                <ArtistFollowLike />
                <PlaylistCreated />
                <PlaylistFollowinng />

            </div>
        </div>
    )
}
export default Creator;