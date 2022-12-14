import AnalyticsCard from '../../components/AnalyticsCard';

const analytics=[
    {title:'Total playlist', value:123},
    {title:'New playlists', value:13},
    {title:'Published playlists', value:79},
]

const UduxAnalytics = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-6'>
                {
                    analytics.map((item ,index)=>(
                        <AnalyticsCard item={item} key={index} />
                    ))
                }
              
            </div>
        </>
    )
}
export default UduxAnalytics;
