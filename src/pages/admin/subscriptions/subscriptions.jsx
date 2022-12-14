import SubscriptionAnalytics from "../../../partials/admin/subscriptions/subscriptionAnalytics"
import SubscriptionTable from "./subscriptionTable";

const Subscriptions = () => {
    return (
        <>
            <SubscriptionAnalytics />
            <div className="mt-4">
                <SubscriptionTable />
            </div>
        </>
    )
}
export default Subscriptions;