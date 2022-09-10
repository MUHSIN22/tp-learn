import React from 'react'
import './PlainInput.css'

export default function PlainInput({ type="text", id, isSalary, label, name, handleChange,placeholder,validation,defaultValue,max,isDisabled, value }) {
    return (
        <div className="common-input-wrapper">
            <label htmlFor={name}>{label}</label>
            {
                isSalary ?
                    <div className="plain-input-wrapper">
                        <input max={max} id={id ? id : name} disabled={isDisabled} value={value} defaultValue={defaultValue} autoComplete='off' type={type} onChange={handleChange} name={name} placeholder={placeholder}/>
                        <div className="PA">PA</div>
                    </div>
                    :
                    <input max={max} id={name} disabled={isDisabled} value={value} autoComplete='off' type={type} onChange={handleChange} name={name} placeholder={placeholder} />
            }
        </div>
    )
}
