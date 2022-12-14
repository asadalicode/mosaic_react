import Carousel from "../../components/Carousel";
import CarouselCard from "../../components/CarouselCard";

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

const TopPopSongs = () => {
    return (
        <div className="mt-5">
            <h5 className='text-sm font-bold text-slate-800 -mb-1'>Top pop songs</h5>
            <Carousel>
                {
                    data.map((item, index) => (
                        <CarouselCard item={item} key={index} />
                    ))
                }
            </Carousel>
        </div>
    )
}
export default TopPopSongs;

