import Autocomplete from "react-google-autocomplete";

import React from 'react'
import './IconInput.css'
export default function IconAutoComplete({ label, name, form,setForm, icon, width = 100, validation }) {
    return (
        <div className="iconInput" style={{ width: width + '%' }}>
            <label htmlFor={name}>{label}</label>
            <div className="input-container">
                {icon}
                <Autocomplete
                    apiKey={'AIzaSyCg8cTb0PQbR3TeufAsTj84yxcpQwqwsFo'}
                    onPlaceSelected={(place) => {
                        setForm(place.formatted_address)
                    }}
                />
            </div>
            {validation && <span className='validation-message .shake-horizontal'>{validation}</span>}
        </div>
    )
}
