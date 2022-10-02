import React from 'react'
import ReactGoogleAutocomplete from 'react-google-autocomplete'
import { FaPencilAlt } from 'react-icons/fa'
import './PersonalInfoInput.css'

function PersonalInfoInput({ name, label, type, isSelect, value, onChange, isNonEditable, setEditable, setAddress, name_field,options, handleChange, defaultValue  }) {
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
          : isSelect ?
            <select id={name} onChange={handleChange} value={value} name={name} defaultValue={defaultValue}>
              <option value="abc" hidden selected={true}>Select One</option>
              {console.log(options, "options")}
              {
                options && options[0] &&
                options.map((option, index) => (
                  <option value={name_field ? option.id : option} key={index}>{name_field ? option[name_field] : option}</option>
                ))
              }
            </select>
            : <>
              <input disabled={isNonEditable} type={type} value={value} name={name} id={name} onChange={e => onChange(e)} className='personal-info-input' />
              {
                isNonEditable &&
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