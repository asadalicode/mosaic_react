import BillingPlanList from "../../../partials/admin/billingPlans/billingPlanList";
import BillingPlansAnalytics from "../../../partials/admin/billingPlans/billingPlansAnalytics";

const BillingPlans = () => {
    return (
        <>
            <BillingPlansAnalytics />
            <div className="mt-3">
                <BillingPlanList />
            </div>
        </>
    )
}
export default BillingPlans;