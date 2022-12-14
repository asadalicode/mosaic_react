import { useEffect, useState } from 'react';
import artist from '../../images/2.svg';
import bg from '../../images/3.png';
import { getArtistDetailAPICall } from '../../services/artist/artist';


const ArtistsInfo = ({ id }) => {

    const [artistData, setArtistData] = useState({});

    useEffect(() => {
        if (id) {
            getArtistDetail(id);
        }
    }, [id]);


    const getArtistDetail = async (id) => {
        let _response = await getArtistDetailAPICall(id);
        if (_response.isSuccess) {
            setArtistData(_response.result.data);
        }
    }

    return (
        <>
            <div className="grid grid-cols-12 gap-6 relative items-center  bg-cover  p-5"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='bg-blackOpacity absolute top-0 h-full w-full'>

                </div>
                <div className="col-span-full sm:col-span-6 xl:col-span-4 relative">
                    <img src={artistData?.coverArt?.url} className='w-full h-[320px] object-cover' />
                </div>
                <div className="col-span-full sm:col-span-7 xl:col-span-8 relative">
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm font-bold text-white -mb-1'>Artist name</h5>
                            <span className='text-sm  text-white'>{artistData?.stageName}</span>
                        </div>
                        <div className='flex gap-10 items-center'>
                            <div className='flex gap-1 items-center'>
                                <h5 className='text-sm font-bold text-white'>{artistData?.statistics?.followers}</h5>
                                <span className='text-xs text-white'>Followers</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <h5 className='text-sm font-bold text-white'>{artistData?.statistics?.playlistLikes}</h5>
                                <span className='text-xs text-white'>Likes</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}

                    <div className='mt-4'>
                        <h5 className='text-sm font-bold text-white -mb-1'>Bio</h5>
                        <p className='text-sm text-white font-thin mt-2'>
                            {artistData?.bio}
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ArtistsInfo;