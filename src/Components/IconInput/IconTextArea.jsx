import React from 'react'

import './IconInput.css'
export default function IconTextArea({rows, label, name, handleChange, state,icon, placeholder, width,validation,defaultValue,...props}) {
    return (
        <div className="iconInput" style={{width: width+'%'}}>
            <label htmlFor={name}>{label}</label>

            <div className="textArea-container">
                {icon}
                <textarea rows={rows} value={state} onChange={handleChange} name={name} placeholder={placeholder} defaultValue={defaultValue} {...props} />
                
            </div>
            {validation&&<span className='validation-message .shake-horizontal'>{validation}</span>}
        </div>
    )
}