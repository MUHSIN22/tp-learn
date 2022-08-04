import React, { useEffect, useState } from 'react'
import './IconInput.css'
export default function SuggestiveInput({ type, label, name, selected=()=>{alert('add select handler')}, icon, placeholder, width, validation, suggestions=[], searchHandler, name_field,value, defaultValue }) {
    const [showSuggestion,setShowSuggestion] = useState(false);

    function handleSuggestion(index,suggestion_name) {
        document.getElementById(`iconinput-${name}`).value = suggestion_name;
        selected(index,suggestions[index],value)
        setShowSuggestion(false)
    }
    useEffect(() => {
        const ele = document.querySelector(`#iconinput-${name}`)
       let x =  document.addEventListener('click',(e)=>{
            const outside = !ele.contains(e.target);
           if(outside) setShowSuggestion(false)
        })
      return () => {
        clearInterval(x)
      }
    }, [])
    
    return (
        <div className="iconInput" style={{ width: width + '%' }}>
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                {icon}
                <input id={`iconinput-${name}`} value={value} onChange={searchHandler} onFocus={()=>setShowSuggestion(true)} autoComplete='off' type={type} name={name} placeholder={placeholder} defaultValue={defaultValue} />
            </div>
            {validation && <span className='validation-message .shake-horizontal'>{validation}</span>}
            {showSuggestion && suggestions.length>0 && <div className="suggestion-list">
               { suggestions.map((x,i)=><div key={i} onClick={() => { handleSuggestion(i,x[name_field]) }} className="option"> <span>{x[name_field]}</span> </div>) }
            </div>}
        </div>
    )
}
