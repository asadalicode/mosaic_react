import AdminOverviewAnalytics from "../../../partials/admin/overview/adminOverviewAnalytics";
import BillingPlansCarousel from "../../../partials/admin/overview/billingPlansCarousel";
import ConversationChart from "../../../partials/admin/overview/conversationChart";
import PaymentMethodChart from "../../../partials/admin/overview/paymentMethodChart";
import Subscribers from "../../../partials/admin/overview/subscribers";
import UserMatrics from "../../../partials/admin/overview/userMatrics";

const OverviewAdmin = () => {
    return (
        <>
            <AdminOverviewAnalytics />
            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="col-span-full sm:col-span-8 xl:col-span-8">
                    <UserMatrics />
                    <div className="mt-3">
                        <BillingPlansCarousel />
                    </div>
                    <div className="mt-3">
                        <Subscribers />
                    </div>
                </div>
                <div className="col-span-full sm:col-span-4 xl:col-span-4">
                    <ConversationChart />
                    <div className="mt-3">
                        <PaymentMethodChart />
                    </div>
                </div>
            </div>
        </>
    )
}
export default OverviewAdmin;