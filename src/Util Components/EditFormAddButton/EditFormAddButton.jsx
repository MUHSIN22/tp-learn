import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import './EditFormAddButton.css'

export default function EditFormAddButton({title,addingHandler}) {
  return (
    <div className="edit-form-add-btn" onClick={addingHandler}>
        <MdAddCircle className='icon' />
        <strong>{title}</strong>
    </div>
  )
}
