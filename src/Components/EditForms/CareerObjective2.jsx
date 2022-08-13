import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { nextForm, selectResumeError, selectResumeLoading, selectResumeMessage, uploadCVvideos } from '../../redux/Features/ResumeSlice'
import Alert from '../Alert/Alert'

import IconInput from '../IconInput/IconInput'
import Control from './Control'

export default function CareerObjective2({data}) {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
       file_url:data.url || '',
    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        try {
            dispatch(uploadCVvideos({ auth: token, body,dispatch })).unwrap()
            console.log(form)
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
        if(!error&& message==='Video Added'){
          //dispatch(nextForm())
        }
      
        return () => {
          
        }
      }, [error,message,dispatch])
    return (
        <>
            <h1 className='text-left'>
                Videos are more engaging than text, and so in vogue. So, if you have your video CV, please upload the same on YouTube or a video
                sharing platform of your choice and
                share the link with us.
            </h1>
            {showAlert && !loading && <Alert error={error} message={error ? 'Failed to add Video' : 'Video added'} />}
            <div className="form-row">
                <IconInput name='video_from_url' handleChange={handleChange} label='Upload from a URL' placeholder='Paste the link to your video CV' width={100} defaultValue={form.file_url}/>
            </div>
            <Control handleSubmit={handleSubmit}/>
        </>
    )
}
