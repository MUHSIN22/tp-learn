import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeFormId, toggleNewDesignation, toggleNewJob } from '../../redux/Features/ResumeSlice'


export default function Experience8({setProgress}) {
  const dispatch = useDispatch()
  const token = useSelector(selectAuthToken);
  const user_id = useSelector(selectUser_id)
  return (
    <>
        <h1>Do you want to add another experience?</h1>
        <div className="flex-row-start g-1" style={{display: 'flex',width: '100%', justifyContent:"center"}}>
            <div className="col-20">
                <button className='btn secondary' onClick={()=>{
                  setProgress(0)
                  dispatch(toggleNewJob(true))
                  // dispatch(changeFormId({auth:token,body:{form_id: 0, user_id}}))
                  }}>Yes</button>
            </div>
            <div className="col-20">
                <button className='btn primary' onClick={()=>setProgress(7)}>No</button>
            </div>
        </div>
    </>
  )
}
