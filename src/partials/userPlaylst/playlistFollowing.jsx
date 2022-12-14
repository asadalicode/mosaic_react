import PlaylistCard from "../../components/PlaylistCard"

const playlist = [
    { title: 'Buga', plays: '1234 plays', type: 'pop' },
    { title: 'Buga', plays: '1234 plays', type: 'pop' },
    { title: 'Buga', plays: '1234 plays', type: 'pop' },
    { title: 'Buga', plays: '1234 plays', type: 'pop' },
]

const PlaylistFollowinng = () => {
    return (
        <>
            <div className="mt-5 ">
                <div className="flex justify-between">
                    <h5 className='text-sm font-bold text-slate-800 mb-1'>Playlist followinng</h5>
                    <a className='text-sm font-bold text-slate-800 mb-1 underline'>See all</a>
                </div>
                <div className="flex gap-5 mt-5">
                    {
                        playlist.map((item, index) => (
                            <div key={index} className="w-full lg:w-[25%]">
                                <PlaylistCard item={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default PlaylistFollowinng