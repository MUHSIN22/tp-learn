import React, { useEffect } from 'react'
import { useRef } from 'react';
import './SuggestionInput.css'

export default function SuggestionInput({value, id, name,placeholder,label,suggestions,name_field,searchHandler,selected}) {
  const suggestionInput = useRef();
  const handleSuggestion = (event) => {
    console.log(event);
  }

  useEffect(() => {
    console.log(suggestionInput.current.value);
    suggestionInput.current.value = ""
  },[])
  return (
    <div className="suggestion-input-wrapper common-input-wrapper">
        <label htmlFor={name}>{label}</label>
        <input type="text" ref={suggestionInput} autoComplete="off" name={name} id={name} value={value}  list={name+"_list"} placeholder={placeholder} onChange={searchHandler} />
        <datalist id={name+"_list"} onChange={handleSuggestion}>
            <option value="" selected={true}></option>
            {
              suggestions && suggestions[0] &&
              suggestions.map((suggestion,index) => (
                <option value={suggestion[name_field]} className={"123"} key={index}/>
              ))
            }
        </datalist>
    </div>
  )
}
