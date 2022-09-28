import React from 'react'
import { useDispatch } from 'react-redux'
import { nextForm, setForm } from '../../redux/Features/ResumeSlice'

export default function Experience7({setProgress}) {
  const dispatch = useDispatch()
  return (
    <>
        <h1>Do you want to add another job role in this organization?</h1>
        <div className="flex-row-start g-1">
            <div className="col-20">
                <button className='btn secondary' onClick={()=>setProgress(0)}>Yes</button>
            </div>
            <div className="col-20">
                <button className='btn primary' onClick={()=>setProgress(6)}>No</button>
            </div>
        </div>
    </>
  )
}
