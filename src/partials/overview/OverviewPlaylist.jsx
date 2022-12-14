import Carousel from '../../components/Carousel';
import image from '../../images/2.jpg';
const data = [
    {
        title: 'Sad songs (In the bathroom)',
    },
    {
        title: 'Sad songs (In the bathroom)',
    }, {
        title: 'Sad songs (In the bathroom)',
    }, {
        title: 'Sad songs (In the bathroom)',
    }, {
        title: 'Sad songs (In the bathroom)',
    }, {
        title: 'Sad songs (In the bathroom)',
    }, {
        title: 'Sad songs (In the bathroom)',
    },
]
const OverviewPlaylist = () => {
    return (
        <div className="my-7">
            <div className="flex justify-between items-center">
                <h5 className="text-sm font-bold">Songs</h5>
                <a className="text-xs cursor-pointer underline">Playlist</a>
            </div>
            <div className="mt-3">
                <Carousel>
                    {
                        data.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </Carousel>

            </div>
        </div>
    )
}
export default OverviewPlaylist;

const Card = ({ item }) => {
    return (
        <div
            className="carousel-item relative w-64 h-64 snap-start"
        >
            <div
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image || ''})` }}
            >
                <div className='flex flex-col h-full'>

                <div className='flex-1 relative'>
                    <div className=' top-0 p-2 h-full'>
                        <div className='flex flex-col h-full'>
                            <div className='flex-1'>
                                <span className='text-xs text-start'>Title</span>
                                <h5 className='font-bold text-black -mt-2'>{item.title}</h5>
                            </div>
                            <div className='flex justify-between w-full'>
                                <div>
                                    <h5 className='font-bold text-xs text-black '>Features</h5>

                                    <div className="flex justify-between items-center">
                                        {/* Avatars group */}
                                        <div className="flex -space-x-3 -ml-0.5">

                                            <img className="rounded-full border-2 border-white box-content w-[24px] h-[24px]" src={image} alt="Avatar" />
                                            <img className="rounded-full border-2 border-white box-content w-[24px] h-[24px]" src={image} alt="Avatar" />
                                            <img className="rounded-full border-2 border-white box-content w-[24px] h-[24px]" src={image} alt="Avatar" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <span className='font-bold text-xs text-black '>Tracks</span>
                                    <h5 className='font-bold text-lg text-black -mt-2 text-end'>50</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black h-[50px] flex justify-center items-center'>
                    <a className='font-bold underline text-white'>View Details</a>
                </div>
                </div>
            </div>

        </div>
    )
}
