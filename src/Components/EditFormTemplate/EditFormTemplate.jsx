import React from 'react'
import { Outlet } from 'react-router-dom'
import CareerObjective from '../../Assets/edit icons/career objective.png'
import './EditFormTemplate.css'

export default function EditFormTemplate() {
  return (
    <div className="edit-form-template">
      <div className="edit-form-template-header">
        <div className="edit-icon-wrapper">
          <img src={CareerObjective} alt="" />
        </div>
        <h1 className="edit-form-template-heading">Career Objective</h1>
      </div>
      <div className="edit-form-container">
        <Outlet />
      </div>
    </div>
  )
}
