import logo from '../images/icons/logo.svg'

const AnalyticsCard = ({item}) => {
    return (
        <div className="flex col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200 p-4 items-center">
            <div>
                <img src={logo} />
            </div>
            <div className="ml-3 flex-col col-span-full">
                <h3 className="text-sm font-semibold text-slate-500 -mb-1">
                    {item.title}
                </h3>
                <span className="text-2xl font-bold text-slate-800">
                  {item.value}
                </span>
            </div>
        </div>
    )
}
export default AnalyticsCard;