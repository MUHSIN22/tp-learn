import React from 'react'
import './MarkedSlider.css'
export default function MarkedSlider({min,max,value,name,state,setState,width,label, handleChange=()=>{},disabled=false}) {
    let range = []
    for(let i = min;i<=max;i++){
        range.push(i);
    }
    function changeHandler(e){
        handleChange(e);
        const value = state;
        value[name] = e.target.value
        setState(value)
    }
  return (
    <div className={"markedSlider g-0-5"+(disabled?" markedSlider--disabled" : '')} style={{width:width}}>
        <label htmlFor="">{label}</label>
        <input id={`iconinput-${name}`} class="slider" name={name} onChange={changeHandler} type="range" min={min} max={max} value={value} disabled={disabled}></input>
        <div className="range">
            {
                range.map(x=><span>{x}</span>)
            }
        </div>
    </div>
  )
}
