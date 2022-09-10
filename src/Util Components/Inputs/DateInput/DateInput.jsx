import React from 'react'

export default function DateInput({value,name,isDisabled,handleChange,label,placeholder, defaultValue}) {
  return (
    <div className="common-input-wrapper">
        <label htmlFor={name}>{label}</label>
        <input type="month" disabled={isDisabled} value={value} defaultValue={defaultValue} placeholder={placeholder} onChange={handleChange}  name={name} id={name} />
    </div>
  )
}
