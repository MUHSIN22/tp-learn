import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleNewDesignation } from '../../redux/Features/ResumeSlice'


export default function Experience8({setProgress}) {
  const dispatch = useDispatch()
  return (
    <>
        <h1>Do you want to add another experience?</h1>
        <div className="flex-row-start g-1">
            <div className="col-20">
                <button className='btn secondary' onClick={()=>{
                  setProgress(2)
                  dispatch(toggleNewDesignation())
                  }}>Yes</button>
            </div>
            <div className="col-20">
                <button className='btn primary' onClick={()=>setProgress(7)}>No</button>
            </div>
        </div>
    </>
  )
}
