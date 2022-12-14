import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ArtistsInfo from "../../partials/artists/ArtistsInfo";
import NewReleases from "../../partials/artists/NewReleases";
import PlaylistItems from "../../partials/artists/PlaylistItems";
import ProjectsItems from "../../partials/artists/ProjectsItems";
import TopSongs from "../../partials/artists/TopSongs";
import PlaylistCreated from "../../partials/userPlaylst/playlistCreatd";

const Artists = () => {
    const { id } = useParams();

    return (
        <div>
            <ArtistsInfo id={id} />
            <div className="grid grid-cols-12 gap-6 ">

                <div className="col-span-full sm:col-span-12 xl:col-span-8">

                    <NewReleases />
                    <TopSongs />
                    <ProjectsItems />
                    <PlaylistItems />
                    <PlaylistCreated />
                </div>

                <div className="col-span-full sm:col-span-12 xl:col-span-4">
                    <div className='flex gap-5 flex-wrap mt-7'>
                        <div className='w-[100%]'>
                            <Input label={"Add Tags"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 1</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 2</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 3</div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <Input label={"Add Mood"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 1</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 2</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 3</div>
                            </div>
                        </div>
                        <div className='w-[100%]'>
                            <Input label={"Add Genre"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 1</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 2</div>
                                <div className='bg-secondary pl-2 pr-2 rounded'>Tag 3</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button title={"Edit artist"} style="mt-5 bg-secondary text-black" />
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Artists;