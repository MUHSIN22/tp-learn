import React from 'react'
import { useSelector } from 'react-redux'
import { selectResumeLoading } from '../../redux/Features/ResumeSlice'


export default function Experience7({setProgress}) {
  const loading = useSelector(selectResumeLoading)
  return (
    <>
        <h1>Do you want to add another job roles in this company?</h1>
        <div className="flex-row-start g-1">
            <div className="col-20">
                <button className='btn secondary' onClick={()=>setProgress(0)} disabled={loading}>Yes</button>
            </div>
            <div className="col-20">
                <button className='btn primary' onClick={()=>setProgress(6)} disabled={loading}>{loading?"Loading...":"No"}</button>
            </div>
        </div>
    </>
  )
}
