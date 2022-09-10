import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeFormId, selectFormId, selectResumeLoading } from '../../redux/Features/ResumeSlice'
import './FormController.css'

export default function FormController({handleSubmit,isSkip}) {
    const dispatch = useDispatch()
    const token = useSelector(selectAuthToken)
    const form_id = useSelector(selectFormId)
    const user_id =useSelector(selectUser_id)
    const loading = useSelector(selectResumeLoading)
    const [btnClicked,setBtnClicked] = useState(true)

    const backHandler = (event)=>{
        event.preventDefault();
        if(form_id>0){
            let body = {
                form_id:form_id-1,
                user_id: user_id
              }
              try {
                  dispatch(changeFormId({auth:token,body})).unwrap()
              } catch (error) {
                
              }
              setBtnClicked(false)
        }
    }

    const skipHandler = (event) => {
        event.preventDefault();
        if(form_id < 18){
            let body = {
                form_id:form_id+1,
                user_id: user_id
              }
              try {
                  dispatch(changeFormId({auth:token,body})).unwrap()
              } catch (error) {
                
              }
              setBtnClicked(false)
        }
    }
  return (
    <div className="form-controller-primary">
        <button className="btn-controller btn-back" onClick={backHandler}>Back</button>
        {
            isSkip &&
            <button className="btn-controller btn-skip" onClick={skipHandler}>Skip</button>
        }
        <button className="btn-controller btn-next" onClick={handleSubmit}>Next</button>
    </div>
  )
}
