import React from 'react'

export default function SelectInput({name, disabled, label, value, handleChange, options = [], name_field, defaultValue}) {
  return (
    <div className="common-input-wrapper">
        <label htmlFor={name}>{label}</label>
        <select id={name} disabled={disabled} onChange={handleChange} value={value} name={name} defaultValue={defaultValue}>
            <option value="abc" hidden selected={true}>Select One</option>
            {
              options&&options[0] &&
              options.map((option,index) => (
                <option value={option.id} key={index}>{option[name_field]}</option>
              ))
            }
        </select>
    </div>
  )
}
