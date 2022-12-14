const CarouselCard = ({ item }) => {
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
                className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-secondary bg-opacity-80 z-10"
            >
                <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {item.title}
                </h3>
            </div>
        </div>
    )
}
export default CarouselCard;