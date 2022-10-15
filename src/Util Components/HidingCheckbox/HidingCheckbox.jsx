import React, { useEffect } from 'react'
import './HidingCheckbox.css'

export default function HidingCheckbox({ name, id, checked, label, fieldID, setter, data, nameCheck, captureLoading }) {

    const handleInputChange = (event) => {
        if(nameCheck){
            setter({...data,[nameCheck]: (checked ? 0 : 1)})
            return true;
        }
        if (checked) {
            let newData = data;
            newData.splice(data.indexOf(fieldID),1);
            setter([...newData])
        } else {
            setter([...data, fieldID]);
        }
    }

    return (
        <label htmlFor={name} className="hiding-checkbox">
            <span>{label}</span>
            <input type="checkbox" on onChange={handleInputChange} name={name} id={id} checked={checked} />
        </label>
    )
}
