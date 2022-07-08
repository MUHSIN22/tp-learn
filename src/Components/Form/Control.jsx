import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { changeFormId, selectFormId, selectResumeLoading } from '../../redux/Features/ResumeSlice'
import { ReactComponent as ChevronLeft } from '../../Assests/icons/chvron-left.svg';
import { ReactComponent as ChevronRight } from '../../Assests/icons/chvron-right.svg';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { useState } from 'react';
export default function Control({handleSubmit}) {
    const dispatch = useDispatch()
    const token = useSelector(selectAuthToken)
    const form_id = useSelector(selectFormId)
    const user_id =useSelector(selectUser_id)
    const loading = useSelector(selectResumeLoading)
    const [btnClicked,setBtnClicked] = useState(true)
    const backHandler = ()=>{
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
    return (
        <div className="form-row">
            <div className="col-30">
                <button className={`btn tertiary ${loading&&'disabled'} `} onClick={() =>backHandler()} disabled={loading}><ChevronLeft /> {!btnClicked&&loading?'Loading...':'Back'}</button>
            </div>

            <div className="col-30">
                <button className={`btn primary ${loading&&'disabled'}`} onClick={handleSubmit} disabled={loading} >{btnClicked&&loading?'Saving...':'Next'} <ChevronRight /></button>
            </div>

        </div>
    )
}
