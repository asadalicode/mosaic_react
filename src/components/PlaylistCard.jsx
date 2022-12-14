const PlaylistCard = ({ item }) => {
    return (
        <div className="flex flex-col h-[250px] w-full relative">
            {
                item.type &&
                <div className="absolute right-4 top-2 rounded-lg bg-secondary pt-0 pb-1 pl-4 pr-4">
                    <span className="text-xs text-black">{item.type}</span>
                </div>
            }
            <div className="flex flex-1 justify-center items-center border">
                <span className="text-black">{item.title}</span>

            </div>
            <div className="flex justify-center items-center bg-black h-[50px] ">
                <span className="text-white">{item.plays}</span>
            </div>
        </div>
    )
}
export default PlaylistCard;