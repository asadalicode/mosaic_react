import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';
import image from '../../../images/2.jpg';
import { getBillingPlanAPICall } from '../../../services/billing/billing';

const BillingPlanList = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [billingList, setBillingList] = useState([]);

    useEffect(() => {
        getBillingList();
    }, [])

    const getBillingList = async () => {
        setIsLoading(true);
        const _response = await getBillingPlanAPICall();
        setIsLoading(false);
        if (_response.isSuccess) {
            setBillingList([..._response.result.data]);
        }

    }

    return (
        <>
            <div className='mt-5 flex gap-5 flex-wrap justify-center'>
                {
                    isLoading && <Spinner />
                }
                {
                    !isLoading && billingList.map((item, index) => (
                        <Card item={item} key={index} />
                    ))
                }
            </div>
        </>
    )
}
export default BillingPlanList;

const Card = ({ item }) => {

    const navigate = useNavigate();

    return (
        <div
            className="relative w-64 h-64 snap-start"
        >
            <div
                className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                style={{ backgroundImage: `url(${image || ''})` }}
            >
                <div className='flex flex-col h-full p-4 border border-slate-200 items-center justify-between'>
                    <div className="flex flex-col items-center">
                        <span className="text-sm">Plan name: {item?.provider}</span>
                        <h4 className="text-sm text-black font-bold">Price:{item?.amount} {item?.currency}</h4>
                        <span className="text-sm">Price: {item?.interval}</span>
                        <div className="bg-secondary pl-3 pr-3 rounded-md text-black">
                            {item.gateway}
                        </div>
                    </div>
                    <Button title="Edit"
                    
                    handleClick={()=>navigate(`/admin/editbillingPlans/${item.id}`)}
                    />
                </div>
            </div>

        </div>
    )
}