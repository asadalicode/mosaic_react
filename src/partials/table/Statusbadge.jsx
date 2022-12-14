const badge = {
    published: 'published',
    unpublished: 'unpublished'
}
const StatusBadge = ({ value }) => {
    const statusColor = (status) => {
        switch (status?.toLowerCase()) {
            case badge.published:
                return 'bg-emerald-100 text-emerald-600';
            case badge.unpublished:
                return 'bg-amber-100 text-amber-600';
            default:
                return 'bg-slate-100 text-slate-500';
        }
    };
    return (
        <>
            <div className={`flex font-medium  text-center uppercase`}>
                <span className={`rounded-full px-2.5 py-0.5 text-xs ${statusColor(value)}`}>
                    {value}
                </span>
            </div>
        </>
    )
}
export default StatusBadge;