import React from 'react'
import Autocomplete from "react-google-autocomplete";

export default function LocationInput({label, name, form,setForm, icon, width = 100, validation, value}) {
    return (
        <div className="common-input-wrapper">
            <label htmlFor={name}>{label}</label>
            <Autocomplete
                defaultValue={value}
                apiKey={'AIzaSyCg8cTb0PQbR3TeufAsTj84yxcpQwqwsFo'}
                onPlaceSelected={(place) => {
                    setForm(place.formatted_address)
                }}
            />
        </div>
    )
}
