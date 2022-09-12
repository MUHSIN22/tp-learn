import React from 'react'
import { useNavigate } from 'react-router-dom'
import './EditSelector.css'

export default function EditSelector({icon, title, link}) {
  const navigate = useNavigate()
  return (
    <div className="edit-selector-wrapper">
        <div className="icon-wrapper">
            <img src={icon} alt="" className="edit-selector-icon" />
        </div>
        <div className="edit-details-wrapper">
            <p className="edit-content">{title}</p>
            <button className="btn-edit" onClick={() => navigate(link)}>Edit</button>
        </div>
    </div>
  )
}
