import Carousel from '../../components/Carousel';
import image from '../../images/1.jpg';
const data = [
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    },
    {
        artistName: 'Kizz Daniel',
        trackName: 'Oshe',
        genre: 'Kizz Daniel',
        releaseDate: '25 September, 2022',
        aboutTrack: 'Kizz Daniel'
    }
]
const OverviewSongs = () => {
    return (
        <div className="my-7">
            <div className="flex justify-between items-center">
                <h5 className="text-sm font-bold">Songs</h5>
                <a className="text-xs cursor-pointer underline">View all songs</a>
            </div>
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
export default OverviewSongs;

const Card = ({ item }) => {
    return (
        <div
            className="carousel-item  shrink-0  grow relative w-3/4 snap-start"
        >
            <div >
                <div className="p-3 bg-white">
                    <div className="flex">
                        <img src={image} className="object-cover h-[250px] w-[200px]" />
                        <div className='ml-3 flex-1'>
                            <div className='flex justify-between my-6'>
                                <div className='w-1/2'>
                                    <Info name={"Artist name"} value={item.artistName} />
                                </div>
                                <div className='w-1/2'>
                                    <Info name={"Track name"} value={item.trackName} />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-1/2'>
                                    <Info name={"Genre"} value={item.genre} />
                                </div>
                                <div className='w-1/2'>
                                    <Info name={"Release date"} value={item.releaseDate} />
                                </div>
                            </div>
                            <div>
                                <span className='text-sm '>About track</span>
                                <div className='bg-slate-100 p-2 h-[95px]' >
                                    <h5 className='text-sm font-bold -mt-1'>{item.aboutTrack}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-black h-[70px] flex justify-center items-center'>
                    <a className='font-bold underline text-white'>Edit this track</a>
                </div>
            </div>
        </div>

    )
}

const Info = ({ name, value }) => {
    return (
        <div>
            <span className='text-sm '>{name}</span>
            <h5 className='text-sm font-bold -mt-1'>{value}</h5>
        </div>
    )
}