import React from 'react'
import './EditFormTemplate.css'

export default function EditFormTemplate({children,title,icon}) {
  return (
    <div className="edit-form-template">
      <div className="edit-form-template-header">
        <div className="edit-icon-wrapper">
          <img src={icon} alt="" />
        </div>
        <h1 className="edit-form-template-heading">{title}</h1>
      </div>
      <div className="edit-form-container">
        {children}
      </div>
    </div>
  )
}
