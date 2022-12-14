import BarChart01 from "../../charts/BarChart01";

const chartData = {
    labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
        // Stack
        {
            label: 'Tracks',
            data: [
                5000, 4000, 4000, 3800, 5200, 5100,
            ],
            backgroundColor: '#414040',
            hoverBackgroundColor: 'black',
            barPercentage: 0.9,
            categoryPercentage: 0.2,
        },
        // Stack
        {
            label: 'Playlist',
            data: [
                2500, 2600, 4000, 4000, 4800, 3500,
            ],
            backgroundColor: 'black',
            hoverBackgroundColor: '#414040',
            barPercentage: 0.9,
            categoryPercentage: 0.2,

        },
        // Stack
        {
            label: 'Albums',
            data: [
                2300, 2000, 3100, 2700, 1300, 100,
            ],
            backgroundColor: '#ACA9A9',
            hoverBackgroundColor: 'black',
            barPercentage: 0.9,
            categoryPercentage: 0.2,

        },
    ],
};
const OverviewSummery = () => {
    return (
        <>
            <h5 className="text-sm font-bold my-6">Summery</h5>
            <div className="p-3 bg-white">
                <BarChart01 data={chartData} width={595} height={248} />
            </div>
        </>
    )
}
export default OverviewSummery;