import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Check } from '../../Assests/icons/check.svg';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { changeFormId } from '../../redux/Features/ResumeSlice';
export default function Steps({name, state,index,id}) {
  const dispatch = useDispatch()
  const user_id = useSelector(selectUser_id)
  const token = useSelector(selectAuthToken)
  const handleClick= ()=>{
    let body = {
      form_id:id-1,
      user_id: user_id
    }
    try {
        dispatch(changeFormId({auth:token,body})).unwrap()
    } catch (error) {
      
    }
  }
  return (
    <div className={`step ${state}`} onClick={handleClick} style={{cursor:"pointer"}}>
        <div className="circle">
            {state==='complete'?<Check/>:index}
        </div>
        {name}
    </div>
  )
}
