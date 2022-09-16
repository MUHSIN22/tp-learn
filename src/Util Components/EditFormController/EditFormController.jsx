import React from 'react'
import './EditFormController.css'

export default function EditFormController({handleSubmit,handlePreviousNavigation,isNext}) {
  return (
    <div className="edit-form-controller">
        <button className="btn btn-back" onClick={handlePreviousNavigation}>Back</button>
        <button className="btn btn-save" onClick={handleSubmit}>Save{isNext && " & Next"}</button>
    </div>
  )
}
