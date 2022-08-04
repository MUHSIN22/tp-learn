import React from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import { FaPencilAlt } from 'react-icons/fa'
import './PersonalInfoInput.css'

function PersonalInfoInput({name, label, type, value, onChange, isNonEditable, setEditable,setAddress}) {
  return (
    <div className="personal-info-input-wrapper">
        <label htmlFor={name}>{label}</label>
        {
          type === 'location' ?
          <ReactGoogleAutocomplete
                apiKey={'AIzaSyCg8cTb0PQbR3TeufAsTj84yxcpQwqwsFo'}
                onPlaceSelected={(place) => {
                  setAddress(place.formatted_address)
                }} 
                defaultValue={value}
          />
          :
          <>
            <input disabled={isNonEditable} type={type} value={value} name={name} id={name} onChange={e => onChange(e)} className='personal-info-input' />
            {
              isNonEditable&&
              <div className="edit-icon" onClick={() => setEditable(true)}>
                <FaPencilAlt />
              </div>
            }
          </>
        }
        
        
    </div>
  )
}

export default PersonalInfoInput