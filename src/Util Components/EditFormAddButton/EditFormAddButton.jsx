import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import './EditFormAddButton.css'

export default function EditFormAddButton({title}) {
  return (
    <div className="edit-form-add-btn">
        <MdAddCircle className='icon' />
        <strong>{title}</strong>
    </div>
  )
}
