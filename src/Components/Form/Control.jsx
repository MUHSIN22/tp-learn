import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { changeFormId, prevForm, selectFormId} from '../../redux/Features/ResumeSlice'
import { ReactComponent as ChevronLeft } from '../../Assests/icons/chvron-left.svg';
import { ReactComponent as ChevronRight } from '../../Assests/icons/chvron-right.svg';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
export default function Control({handleSubmit}) {
    const dispatch = useDispatch()
    const token = useSelector(selectAuthToken)
    const form_id = useSelector(selectFormId)
    const user_id =useSelector(selectUser_id)
    const backHandler = ()=>{
        let body = {
          form_id:form_id-1,
          user_id: user_id
        }
        try {
            dispatch(changeFormId({auth:token,body})).unwrap()
        } catch (error) {
          
        }
      }
    return (
        <div className="form-row">
            <div className="col-30">
                <button className='btn tertiary' onClick={() =>backHandler()}><ChevronLeft /> Back</button>
            </div>

            <div className="col-30">
                <button className='btn primary' onClick={handleSubmit} >Next <ChevronRight /></button>
            </div>

        </div>
    )
}
