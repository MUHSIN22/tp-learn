import React from 'react'

export default function TextArea({rows, label, name, handleChange, state,icon, placeholder, width,validation,defaultValue,...props}) {
  return (
    <div className="common-input-wrapper">
        <label htmlFor={name}>{label}</label>
        <textarea rows={rows} value={state} onChange={handleChange} name={name} placeholder={placeholder} defaultValue={defaultValue} {...props}></textarea>
    </div>
  )
}
