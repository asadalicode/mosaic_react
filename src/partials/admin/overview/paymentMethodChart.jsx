import PieChart from "../../../charts/PieChart";

const data = {
    labels: [
        'Paystack', 'Stripe'
    ],
    datasets: [
        // Stack
        {
            data: [
                15, 20
            ],
            backgroundColor: ['#414040', 'black'],
            hoverBackgroundColor: 'black',
            barPercentage: 0.9,
            categoryPercentage: 1,
        }
    ],
}

const PaymentMethodChart = () => {
    return (
        <div className="bg-white p-4" >
            <h5 className="text-sm text-black font-bold">Payment method</h5>
            <PieChart data={data} />
        </div>
    )
}
export default PaymentMethodChart;
