import AnalyticsCard from "../../../components/AnalyticsCard";

const analytics=[
    {title:'Net revenue', value:123},
    {title:'Total subscribers', value:13},
    {title:'Active subscribers', value:79},
]

const SubscriptionAnalytics = () => {
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
export default SubscriptionAnalytics;
