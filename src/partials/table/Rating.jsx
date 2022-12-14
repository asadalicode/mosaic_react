const Rating = ({ value }) => {

    const rows = () => {
        let _array = [];
        for (let i = 0; i < 5; i++) {
            _array.push(
                <svg key={i} className={`w-4 h-4 shrink-0 fill-current ${i<value? 'text-amber-500' : 'text-slate-300'}`} viewBox="0 0 16 16">
                    <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
                </svg>
            )
        }
        return _array;
    }

    return (
        <>
        <div className="flex gap-1">
            {
                rows()
            }
        </div>
        </>
    )
}
export default Rating;