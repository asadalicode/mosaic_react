import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import { addBillingAPICall } from "../../../services/billing/billing";
import { useNavigate } from "react-router-dom";


const initialState = {
    name: '',
    amount: 0,
    interval: '',
    provider: 'Paystack',
    theme: '#5C5A5A',
    currency: 'NGN',
    description: ' ',
    features: []

}

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.amount > 0) {
        errors.amount = 'Required';
    }
    if (!values.interval) {
        errors.interval = 'Required';
    }
    if (!values.provider) {
        errors.provider = 'Required';
    }
    if (!values.theme) {
        errors.theme = 'Required';
    }
    return errors;
};




const AddBillingPlan = ({ isEdit = false }) => {
    const [gateways, setGatewys] = useState([
        { title: 'Paystack', selected: true },
        { title: 'Stripe', selected: false },
        { title: 'MTN', selected: false },
    ]);

    const [themes, setThemes] = useState([
        { color: '#5C5A5A', selected: true },
        { color: '#E78989', selected: false },
        { color: '#A28282', selected: false },
        { color: '#5D0606', selected: false },
        { color: '#FA0A0A', selected: false },
    ]);

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [featureValue, setFeatureValue] = useState('');


    const handleGatewayMethod = (index) => {
        let _previousIndex = gateways.findIndex((item) => item.selected);
        if (index !== _previousIndex) {
            let _gateways = [...gateways];
            _gateways[_previousIndex].selected = false;
            _gateways[index].selected = true;
            setGatewys([..._gateways]);
            formik.values.provider = _gateways[index].title
        }
    }

    const handleTheme = (index) => {
        let _previousIndex = themes.findIndex((item) => item.selected);
        if (index !== _previousIndex) {
            let _themes = [...themes];
            _themes[_previousIndex].selected = false;
            _themes[index].selected = true;
            setThemes([..._themes]);
            formik.values.theme = _themes[index].color
        }
    }
    const handleFeature = (e) => {
        setFeatureValue(e.target.value);
    }

    const addFeature = () => {
        formik.values.features.push(featureValue);
        setFeatureValue('');
    }


    const handleSubmit = async (values) => {
        setIsLoading(true);
        let _response = await addBillingAPICall(values);
        setIsLoading(false);
        if (_response.isSuccess) {
            navigate("/admin/billingPlans");
        }
    }
    const formik = useFormik({
        initialValues: initialState,
        validate,
        onSubmit: values => {
            handleSubmit(values);
        },
    });

    return (
        <>
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-full sm:col-span-8 xl:col-span-8">
                    <h5 className="font-bold text-black mb-4">Creating billing plan</h5>
                    <form onSubmit={formik.handleSubmit}>

                        <div className="flex flex-wrap gap-5 mb-4">
                            <div className="flex-1">
                                <Input
                                    label="Plan name"
                                    placeholder="Enter plan name"
                                    containerClass="flex-1"
                                    name={"name"}
                                    error={formik.errors.name}
                                    touched={formik.touched.name}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="flex-1">
                                <Input
                                    label="Billing price"
                                    type="number"
                                    name="amount"
                                    error={formik.errors.amount}
                                    touched={formik.touched.amount}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="Enter billing price (NGN)"
                                    containerClass="flex-1"
                                />
                            </div>
                        </div>
                        <Input label="Duration" placeholder="Enter Duration"
                            name="interval"
                            error={formik.errors.interval}
                            touched={formik.touched.interval}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        <div className="mt-4 mb-4">
                            <h5 className={`text-sm font-bold text-slate-800 -mb-1 `}>Payment gateway</h5>
                            <div className="flex flex-wrap gap-5 mt-3">
                                {
                                    gateways.map((paymentMethod, index) => (
                                        <Button
                                            key={index}
                                            type="button"
                                            title={paymentMethod.title}
                                            style={`flex-1 ${paymentMethod.selected ? 'bg-secondary text-black' : ''}`}
                                            handleClick={() => handleGatewayMethod(index)}
                                        />
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="font-bold text-black mb-4">Select theme</h5>
                            <div className="flex flex-wrap gap-3 mt-3">
                                {
                                    themes.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleTheme(index)}
                                            className={`w-[50px] h-[50px] rounded-full cursor-pointer ${item.selected ? 'border-black border-2' : ''}`}
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="mb-4">

                            <div className="flex gap-3 ">
                                <div className="flex-1">
                                    <h5 className={`text-sm font-bold text-slate-800 -mb-1`}>Feature </h5>
                                    <input
                                        className={`form-input w-full mt-1`}
                                        onChange={handleFeature}
                                        value={featureValue}
                                        placeholder="Enter feature"
                                    />
                                </div>
                                <Button title="Add feature" style="self-end" handleClick={addFeature} />
                            </div>
                            <div className="mt-4 flex gap-5">
                                {
                                    formik.values.features.map((item, index) => (
                                        <div key={index} >
                                            <span
                                                className="pl-5 pr-5 bg-lightBlack text-white mb-4 rounded-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>


                            <div className="mt-5">
                                <Button
                                    title={'Create plan'}
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    type="submit"
                                />
                            </div>
                        </div>
                    </form>

                </div>
                <div className="col-span-full sm:col-span-4 xl:col-span-4 justify-center flex">
                    <div
                        className="relative w-64 h-64 snap-start"
                    >
                        <div
                            className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                            style={{ backgroundColor: formik.values.theme }}
                        >
                            <div className='flex flex-col h-full p-4 border border-slate-200 items-center justify-between'>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm text-black">Plan name:{formik.values.name}</span>
                                    <h4 className="text-sm text-black font-bold">Price: NGN {formik.values.amount}</h4>
                                    <span className="text-sm text-black">Duration:{formik.values.interval}</span>
                                </div>
                                <div className="bg-secondary pl-3 pr-3 rounded-md text-black">
                                    {formik.values.provider}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AddBillingPlan;