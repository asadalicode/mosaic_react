import { useState, useEffect } from 'react';
import Input from '../../components/Input';
import StarRating from '../../components/StarRating';
import artist from '../../images/4.png';
import star from '../../images/icons/star.png';
import { getAlbumsDetailAPICall } from '../../services/albums/albums';

const AlbumInfo = ({ id }) => {

    const [albumDetail, setAlbumDetail] = useState({});
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        getAlbumDetail();
    }, [id]);

    const getAlbumDetail = async () => {
        let _response = await getAlbumsDetailAPICall(id);
        if (_response.isSuccess) {
            setAlbumDetail(_response.result.data);
            let _genre = _response.result.data.metadata.genre;
            if (_genre?.length > 0) {
                setGenre(_genre)
            } else {
                setGenre([_genre]);
            }
        }
    }



    return (
        <>
            <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-full sm:col-span-6 xl:col-span-4">
                    <img src={albumDetail?.metadata?.coverArt?.url} className='w-full h-[320px] object-cover' />
                    <div className='bg-secondary h-[100px] flex justify-center items-center'>
                        <StarRating value={albumDetail?.metadata?.statistics?.creatorRankings || 0} />
                    </div>

                </div>
                <div className="col-span-full sm:col-span-7 xl:col-span-8">
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <h5 className='text-sm font-bold text-slate-800 -mb-1'>Artist name</h5>
                                <span className='text-sm  text-slate-800'>{albumDetail?.metadata?.title}</span>
                            </div>
                            <div>
                                <h5 className='text-sm font-bold text-slate-800 -mb-1'>Project type</h5>
                                <span className='text-sm  text-slate-800'>{albumDetail?.type} </span>
                            </div>
                            <h5 className='text-sm font-bold text-slate-800 -mb-1'>Internal Notes </h5>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h5 className='text-sm font-bold text-slate-800 -mb-1'>Project Name</h5>
                                    <span className='text-sm  text-slate-800'>{albumDetail?.metadata?.provider?.name} </span>
                                </div>
                                <div>
                                    <h5 className='text-sm font-bold text-slate-800 -mb-1'>Number of Tracks </h5>
                                    <span className='text-sm  text-slate-800'>{albumDetail?.statistics?.collabPlaylist} </span>
                                </div>
                            </div>

                            <div className='flex gap-5'>
                                <div className='flex gap-1 items-center'>
                                    <h5 className='text-sm font-bold text-slate-800'>{albumDetail?.statistics?.followers}</h5>
                                    <span className='text-xs'>Followers</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <h5 className='text-sm font-bold text-slate-800'>{albumDetail?.statistics?.playlistLikes}</h5>
                                    <span className='text-xs'>Likes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}

                    <div className='mt-4'>

                        <p className='text-sm mt-2'>
                            {albumDetail?.metadata?.description || '...'}
                        </p>
                    </div>
                    <div className='flex gap-5 flex-wrap mt-7'>
                        <div className='w-[48%]'>
                            <Input label={"Add Tags"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                {
                                    albumDetail?.metadata?.tags?.map((item) => (
                                        <div className='bg-secondary pl-2 pr-2 rounded'>{item?.name}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-[48%]'>
                            <Input label={"Add Mood"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                {
                                    albumDetail?.metadata?.moods?.map((item) => (
                                        <div className='bg-secondary pl-2 pr-2 rounded'>{item?.name}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-[48%]'>
                            <Input label={"Add Genre"} type="textarea" numberOfRows={5} />
                            <div className='flex gap-3'>
                                {
                                    genre?.map((item) => (
                                        <div className='bg-secondary pl-2 pr-2 rounded'>{item?.name}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AlbumInfo;