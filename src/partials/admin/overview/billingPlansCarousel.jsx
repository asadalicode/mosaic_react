import Button from "../../../components/Button";
import Carousel from "../../../components/Carousel";
import image from '../../../images/2.jpg';

const data = [
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Paystack'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
    {
        planName: 'Daily', price: '50', duration: '3', gateway: 'Stripe'
    },
]
const BillingPlansCarousel = () => {
    return (
        <>
            <div className="bg-white p-4">
                <h5 className="text-black font-bold">Billing plans</h5>
                <Carousel>
                    {
                        data.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </Carousel>
                <div className="flex justify-center">
                    <Button title={"Add billing plan"} />
                </div>
            </div>
        </>

    )
}
export default BillingPlansCarousel;

const Card = ({ item }) => {
    return (
        <div
            className="carousel-item relative w-64 h-64 snap-start"
        >
            <div
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image || ''})` }}
            >
                <div className='flex flex-col h-full p-4 border border-slate-200 items-center justify-between'>
                    <div className="flex flex-col items-center">
                        <span className="text-sm">Plan name:{item.planName}</span>
                        <h4 className="text-sm text-black font-bold">Price:{item.price}</h4>
                        <span className="text-sm">Price:{item.duration}</span>
                    </div>
                    <div className="bg-secondary pl-3 pr-3 rounded-md text-black">
                        {item.gateway}
                    </div>

                </div>
            </div>

        </div>
    )
}