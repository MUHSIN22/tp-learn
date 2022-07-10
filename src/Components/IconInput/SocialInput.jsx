import React, { useEffect, useState } from 'react'
import './IconInput.css'
import { ReactComponent as Cross } from '../../Assests/icons/cross.svg';
export default function SocialInput({ type, label, name, handleChange=()=>{}, icon, placeholder, width,state, handleSubmit=()=>{} }) {
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  function submitHandler(e) {
    setSubmit(true);
    handleSubmit(e)
  }
  function changeHandler(e) {
    handleChange(e)
  }
  useEffect(() => {
    if(!show){
      setShow(state[name]?.length>0)
      setSubmit(state[name]?.length>0)
    }
   
  
    return () => {
      
    }
  }, [state])

  return (
    <div className="socialInput" style={{ width: width || 100 + '%' }}>

      <div className="input-container">
        <div className='align'>
          {icon}
          <label htmlFor={name}>{label}</label>
        </div>
        {!submit ? <div className='align'>
          {show ? <> <input autoComplete='off' type={type} value={state[name]} onChange={changeHandler} name={name} placeholder={placeholder} />
            <button className='btn-link' onClick={submitHandler}>Submit</button>
            <button onClick={() => { setShow(false) }} className='btn-fit transparent'><Cross /></button></> :
            <button onClick={() => { setShow(true) }} className='btn-show slide-in-right'>Link</button>}
        </div> :
          <div className="align">
            <span>{state[name]}</span>
            <button onClick={() =>  setSubmit(false) } className='btn-fit transparent'><Cross /></button>
          </div>}
      </div>

    </div>
  )
}
