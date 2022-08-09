import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeFormId, selectResumeLoading, toggleNewDesignation, toggleNewJob } from '../../redux/Features/ResumeSlice'


export default function Experience7({setProgress}) {
  const loading = useSelector(selectResumeLoading)
  const dispatch = useDispatch()
  const token = useSelector(selectAuthToken)
  const user_id = useSelector(selectUser_id)
  return (
    <>
        <h1>Do you want to add another job roles in this company?</h1>
        <div className="flex-row-start g-1" style={{display: 'flex',width: '100%', justifyContent:"center"}}>
            <div className="col-20">
                <button className='btn secondary' onClick={()=>{
                  setProgress(0)
                  dispatch(changeFormId({auth:token,body:{form_id: 2, user_id}}))
                  }} disabled={loading}>Yes</button>
            </div>
            <div className="col-20">
                <button className='btn primary' onClick={()=>setProgress(6)} disabled={loading}>{loading?"Loading...":"No"}</button>
            </div>
        </div>
    </>
  )
}
