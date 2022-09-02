import React, { useState } from 'react'
import { ReactComponent as EyeSlash } from '../../Assests/icons/eye-slash.svg';
import { ReactComponent as Eye } from '../../Assests/icons/eye.svg';
import './IconInput.css'
export default function IconPasswordInput({label, name, handleChange, state,icon, placeholder, width,validation,tooltip}) {
    const [showPass,setShowPass] = useState(false)
    const handleClick= (e)=>{
        e.preventDefault();
        setShowPass(!showPass)
    }
  return (
        <div className="iconInput has-tooltip" style={{width: width+'%'}}>
            <label htmlFor={name}>{label}</label>

            <div className="input-container">
                {icon}
                <input type={showPass?'text':'password'} value={state} onChange={handleChange} name={name} placeholder={placeholder} />
                <button onClick={handleClick} className='show-pass'>{showPass?<EyeSlash/>:<Eye  height={'17px'} width={'17px'} />}</button>
            </div>
            {validation&&<span className='validation-message .shake-horizontal'>{validation}</span>}
            {tooltip&&<div className="tooltip">
                {tooltip}
            </div>}
        </div>
    )
  
}
