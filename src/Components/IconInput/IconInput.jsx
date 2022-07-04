import React from 'react'
import './IconInput.css'
export default function IconInput({type='text', label, name, handleChange=()=>{},icon, placeholder, width=100,validation,defaultValue}) {
    return (
        <div className="iconInput" style={{width: width+'%'}}>
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                {icon}
                <input id={`iconinput-${name}`} defaultValue={defaultValue} autoComplete='off' type={type} onChange={handleChange} name={name} placeholder={placeholder} />  
            </div>
            {validation&&<span className='validation-message .shake-horizontal'>{validation}</span>}
        </div>
    )
}
