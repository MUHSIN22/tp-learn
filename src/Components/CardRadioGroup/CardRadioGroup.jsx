import React, {  useState } from 'react'
import './CardRadioGroup.css'
export default function CardRadioGroup({ name , state, setState, option,name_field,label }) {
    const [current,setCurrent] = useState('');
    const clickHandler = (index)=>{
        let temp = state;
        temp[name] =option[index].id;
        console.log({temp})
        setState(temp)
        setCurrent(index)
    }
    
    return (
        <div className='col-100 g-1 align-start'>
        <label>{label}</label>
         <div className="CardRadioGroup">
                {option.map((option,i)=>{
                    return  <RadioCard key={i} index={i} clickHandler={clickHandler} label={option[name_field]} status={current===i?'active':'inactive'} />
                }) 
               }
        </div>
        </div>
       
    )
}
function RadioCard({index,status,clickHandler,label}) {

    return (
    <div className={`radioCard ${status}`} onClick={()=>clickHandler(index)}>
        <div  className="radiobtn" >
            <div className="dot"></div>
        </div>
        <label>{label}</label>
    </div>)
}