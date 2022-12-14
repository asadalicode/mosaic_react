import AnalyticsCard from '../../components/AnalyticsCard';

const analytics = [
    { title: 'Total songs', value: 123 },
    { title: 'New releases', value: 123 },
    { title: 'Playlists created', value: 123 },
]

const SongsAnalytics = () => {
    return (
        <>
            <div className='grid grid-cols-12 gap-6'>
                {
                    analytics.map((item, index) => (
                        <AnalyticsCard key={index} item={item} />
                    ))
                }

            </div>
        </>
    )
}
export default SongsAnalytics;
