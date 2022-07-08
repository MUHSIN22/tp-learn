import React, {  useEffect, useState } from 'react'
import './CardRadioGroup.css'
export default function CardRadioGroup({ name , state, setState, option,name_field,label, default_value=null, disabled, autofill}) {
    const [current,setCurrent] = useState(default_value||'');
    const clickHandler = (index)=>{
        if(!disabled){
            let temp = state;
            temp[name] =option[index].id;
            console.log({temp})
            setState(temp)
            setCurrent(index)
        }

    }
    useEffect(() => {
    if(autofill){
        let i = option.findIndex((element) => element.id==state[name] )
        setCurrent(i)
    }
    
      return () => {
        
      }
    }, [default_value,state])
    
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