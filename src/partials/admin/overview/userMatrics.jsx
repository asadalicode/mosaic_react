import BarChart01 from "../../../charts/BarChart01";

const chartData = {
    labels: [
        '09-25', '09-26', '09-27',
        '09-28', '09-29', '09-30', '10-01', '10-02'
    ],
    datasets: [
        // Stack
        {
            label: 'User matrics',
            data: [
                0,20,  15 , 25, 30,5, 10,
            ],
            backgroundColor: '#414040',
            hoverBackgroundColor: 'black',
            barPercentage: 0.7,
            categoryPercentage: 1,
        }
    ],
};
const UserMatrics = () => {
    return (
        <>
            <div className="p-3 bg-white">
                <BarChart01 data={chartData} width={595} height={248} />
            </div>
        </>
    )
}
export default UserMatrics;