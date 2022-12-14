import AnalyticsCard from '../../components/AnalyticsCard';

const analytics=[
    {title:'Total Projects', value:123},
    {title:'New Albums', value:13},
    {title:'New EP', value:79},
]

const AlbumsAnalytics = () => {
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
export default AlbumsAnalytics;
