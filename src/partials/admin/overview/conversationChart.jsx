import PieChart from "../../../charts/PieChart";


const data = {
    labels: [
        'Premium', 'Freemium'
    ],
    datasets: [
        // Stack
        {
            data: [
                5, 20
            ],
            backgroundColor: ['#414040','black'],
            hoverBackgroundColor: 'black',
            barPercentage: 0.9,
            categoryPercentage: 1,
        }
    ],
}

const ConversationChart = () => {
    return (
        <div className="bg-white p-4" >
            <h5 className="text-sm text-black font-bold">Conversation</h5>
            <PieChart data={data} />
        </div>
    )
}
export default ConversationChart;
