import AnalyticsCard from '../../components/AnalyticsCard';

const analytics=[
    {title:'Albums', value:123},
    {title:'Tracks', value:123},
    {title:'Playlist', value:123},
]

const OverviewAnalytics = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-6'>
                {
                    analytics.map((item)=>(
                        <AnalyticsCard item={item} />
                    ))
                }
              
            </div>
        </>
    )
}
export default OverviewAnalytics;
