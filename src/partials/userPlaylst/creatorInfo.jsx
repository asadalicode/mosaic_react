import artist from '../../images/2.svg';
import bg from '../../images/3.png';

const CreatorInfo = () => {
    return (
        <>
            <div className="grid grid-cols-12 relative gap-6 items-center bg-cover  p-5"
               style={{ backgroundImage: `url(${bg})` }}
            >
                <div className='bg-blackOpacity absolute top-0 h-full w-full'>

                </div>
                <div className="col-span-full relative  sm:col-span-6 xl:col-span-4 ">
                    <img src={artist} className='w-full h-[320px] object-cover' />
                </div>
                <div className="col-span-full sm:col-span-7 xl:col-span-8 relative">
                    <div className='flex justify-between'>
                        <div>
                            <h5 className='text-sm font-bold text-white -mb-1'>Joined Udux</h5>
                            <span className='text-sm font-thin text-white'>26,1,2022</span>

                            <div className='mt-5'>
                                <h5 className='text-sm font-bold text-white -mb-1'>Creator</h5>
                                <span className='text-sm font-thin  text-white'>Soba Tope</span>
                            </div>
                        </div>
                        <div className='items-center'>
                            <div className='flex gap-10 '>
                                <h5 className='text-sm font-bold text-white -mb-1'>22,344,124</h5>
                                <span className='text-sm  text-white'>Playlist Likes</span>
                            </div>

                            <div className='flex gap-10 mt-2'>
                                <h5 className='text-sm font-bold text-white -mb-1'>22,344,124</h5>
                                <span className='text-sm font-thin text-white'>Playlist Streams</span>
                            </div>
                            <div className='flex gap-10 mt-2'>
                                <h5 className='text-sm font-bold text-white -mb-1'>22,344,124</h5>
                                <span className='text-sm font-thin  text-white'>Playlist follower</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio */}

                    <div className='mt-4'>
                        <h5 className='text-sm font-bold text-white -mb-1'>User Bio</h5>
                        <p className='text-sm font-thin  text-white mt-2'>
                            A Nigerian native, Buju began making music under the name “The anonomis” in 2016. Initially focused primarily on the Hip-Hop and R&B genres, Buju began experimenting with new sounds and samples, eventually branching out and rebranding himself as “BNXN fka Buju”  in early 2022.
                        </p>
                        <p className='text-sm font-thin text-white mt-2'>
                            A Nigerian native, Buju began making music under the name “The anonomis” in 2016. Initially focused primarily on the Hip-Hop and R&B genres, Buju began experimenting with new sounds and samples, eventually branching out and rebranding himself as “BNXN fka Buju”  in early 2022.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CreatorInfo;