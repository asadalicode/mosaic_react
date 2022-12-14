const data = [
    {
        "title": "Find me on Twitter",
        "imageUrl": "https://placeimg.com/300/300/any"
    },

    {
        "title": "Super item number the last",
        "imageUrl": "https://placeimg.com/300/300/tech"
    },
    {
        "title": "Welcome to Ark Labs",
        "imageUrl": "https://placeimg.com/300/300/animals"
    },


];


const Albums = () => {
    return (
        <div className="bg-white p-3">
            <div className="flex justify-between items-center">
                <h5 className="text-sm font-bold">New albums</h5>
                <a className="text-xs cursor-pointer underline">Go to albums</a>
            </div>
            <div className="flex flex-col gap-2 mt-4">
                {
                    data.map((item,index) => (
                        <AlbumCard item={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}
export default Albums;

const AlbumCard = ({ item }) => {
    return (

        <div
            className="text-center relative w-50 h-[250px] snap-start"
        >
            <div
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${item.imageUrl || ''})` }}
            >
                <img
                    src={item.imageUrl || ''}
                    alt={item.title}
                    className="w-full aspect-square hidden object-cover"
                />
            </div>
            <div
                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-secondary bg-opacity-80 z-10"
            >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {item.title}
                </h3>
            </div>
        </div>

    )
}