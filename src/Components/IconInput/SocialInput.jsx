import React, { useState } from 'react'
import './IconInput.css'
import { ReactComponent as Cross } from '../../Assests/icons/cross.svg';
export default function SocialInput({ type, label, name, handleChange=()=>{}, handleSubmit, state, icon, placeholder, width }) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('')
  const [submit, setSubmit] = useState(false);
  function submitHandler() {
    setSubmit(true);
  }
  function changeHandler(e) {
    handleChange(e)
    setValue(e.target.value)
  }
  return (
    <div className="socialInput" style={{ width: width || 100 + '%' }}>

      <div className="input-container">
        <div className='align'>
          {icon}
          <label htmlFor={name}>{label}</label>
        </div>
        {!submit ? <div className='align'>
          {show ? <> <input autoComplete='off' type={type} value={value} onChange={changeHandler} name={name} placeholder={placeholder} />
            <button className='btn-link' onClick={submitHandler}>Submit</button>
            <button onClick={() => { setShow(false) }} className='btn-fit transparent'><Cross /></button></> :
            <button onClick={() => { setShow(true) }} className='btn-show slide-in-right'>Link</button>}
        </div> :
          <div className="align">
            <span>{value}</span>
            <button onClick={() => { setSubmit(false); setValue('') }} className='btn-fit transparent'><Cross /></button>
          </div>}
      </div>

    </div>
  )
}
