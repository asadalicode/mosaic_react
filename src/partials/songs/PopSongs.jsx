import Carousel from "../../components/Carousel";

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
    {
        "title": "Some sort of third title",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "https://placeimg.com/300/300/architecture"
    },

    {
        "title": "Welcome to Ark Labs",
        "imageUrl": "https://placeimg.com/300/300/animals"
    },
    {
        "title": "Some sort of third title",
        "imageUrl": "https://placeimg.com/300/300/architecture"
    },

    {
        "title": "Super item number the last",
        "imageUrl": "https://placeimg.com/300/300/tech"
    }
];

const PopSongs = () => {
    return (
        <div className="mt-5">
            <h5 className='text-sm font-bold text-slate-800 -mb-1'>Newly added pop songs</h5>
            <Carousel>
                {
                    data.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
            </Carousel>
        </div>
    )
}
export default PopSongs;

const Card = ({ item }) => {
    return (
        <div
            className="carousel-item text-center relative w-64 h-64 snap-start"
        >
            <div
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${item.imageUrl || ''})` }}
            >
                <img
                    src={item.imageUrl || ''}
                    alt={item.title}
                    className="w-full aspect-square hidden"
                />
            </div>
            <div
                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
            >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {item.title}
                </h3>
            </div>
        </div>
    )
}
