import React from 'react'
import CareerObjective from '../../Assets/edit icons/career objective.png'

export default function EditFormTemplate() {
  return (
    <div className="edit-forms-template">
        <div className="edit-form-template-header">
            <div className="edit-icon-wrapper">
                <img src={CareerObjective} alt="" />
            </div>
            <h1 className="edit-form-template-heading">Career Objective</h1>
        </div>
    </div>
  )
}
