

const Button = (
    {
        type,
        title,
        isDisabled = false,
        isLoading = false,
        handleClick,
        style
    }
) => {
    return (
        <button
            type={type}
            className={`btn bg-black min-w-[140px] hover:bg-lightBlack text-white ${(isDisabled || isLoading) ? ' disabled:border-slate-200 disabled:bg-lightBlack disabled:text-slate-400 disabled:cursor-not-allowed' : ''} ${style}`}
            disabled={isDisabled || isLoading}
            onClick={handleClick}
        >
            {
                isLoading
                    ? <svg className="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                    </svg>
                    : title
            }
        </button>
    )
}

export default Button;