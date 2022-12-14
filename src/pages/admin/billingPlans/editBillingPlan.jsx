import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OverlayLoader from "../../../components/OverlayLoader";
import { getBillingPlanDetailAPICall } from "../../../services/billing/billing";
import AddBillingPlan from "./addBillingPlan";

const EditbillingPlan = () => {

    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            getPlan();
        }
    }, [id]);

    const getPlan = async () => {
        // setIsLoading(true);
        // let _response = await getBillingPlanDetailAPICall(id);
        // setIsLoading(false);
    }

    return (
        <>
            <AddBillingPlan isEdit={true} />
            {
                isLoading && <OverlayLoader />
            }
        </>
    )
}
export default EditbillingPlan;