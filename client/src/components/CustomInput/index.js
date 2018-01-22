import React from 'react'

const CustomInput = ({
    input,
    label,
    type,
    className,
    textarea = false,
    rows = 5,
    placeholder,
    meta: { touched, error, warning }
}) => (
        <div className={className} >
            {label && <label className={`${className}-label`}>{label}</label>}

            {
                textarea ? (
                    <textarea
                        placeholder={placeholder}
                        className={`${className}-input`}
                        {...input}
                        rows={rows} />
                ) : (
                        <input
                            className={`${className}-input`}
                            {...input}
                            type={type}
                            placeholder={placeholder} />
                    )
            }
            {touched &&
                ((error && <span className={`${className}-error errorInput`}>{error}</span>) ||
                    (warning && <span className={`${className}-warning warningInput`}>{warning}</span>))}
        </div>
    )

export default CustomInput;