import React from 'react'
import './EditSelector.css'

export default function EditSelector({icon, title, link}) {
  return (
    <div className="edit-selector-wrapper">
        <div className="icon-wrapper">
            <img src={icon} alt="" className="edit-selector-icon" />
        </div>
        <div className="edit-details-wrapper">
            <p className="edit-content">{title}</p>
            <button className="btn-edit">Edit</button>
        </div>
    </div>
  )
}
