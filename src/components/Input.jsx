const Input = ({
    type = "text",
    required = false,
    label,
    name,
    placeholder,
    leftIcon = null,
    numberOfRows,
    onBlur,
    className,
    error,
    labelClassName,
    touched,
    containerClass,
    onChange
}) => {
    return (
        <>

            <div className={`relative ${containerClass}`}>
                {
                    label &&
                    <h5 className={`text-sm font-bold text-slate-800 -mb-1 ${labelClassName}`}>{label} </h5>
                }
                {
                    type?.toLowerCase() === 'textarea'
                        ? <textarea
                            className={`form-input w-full mt-1 ${leftIcon && 'pl-9'}  ${className} ${touched && error && 'border-red'}`}
                            rows={numberOfRows}
                            name={name}
                            onChange={onChange}
                            required={required}
                            onBlur={onBlur}
                            placeholder={placeholder}
                        />
                        : <input
                            className={`form-input w-full mt-1 ${leftIcon && 'pl-9'} ${className} ${error && touched && 'border-red'}`}
                            type={type}
                            name={name}
                            onBlur={onBlur}
                            required={required}
                            onChange={onChange}
                            placeholder={placeholder}
                        />
                }
                {
                    leftIcon &&
                    <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                        <img src={leftIcon} className={'ml-2 w-[17px]'} />
                    </button>
                }

            </div>
            {
                error && touched && <span className="text-red">{error}</span>
            }
        </>
    )
}
export default Input;