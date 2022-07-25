import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { selectResumeError, selectResumeLoading, selectResumeMessage, selectVideo, uploadCVvideos } from '../../redux/Features/ResumeSlice'
import Alert from '../Alert/Alert'

import IconInput from '../IconInput/IconInput'
import Control from './Control'

export default function CareerObjective2() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
       video_from_url:'',
    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const video_url = useSelector(selectVideo)
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
            let videoURL = dispatch(uploadCVvideos({ auth: token, body })).unwrap()
            console.log(videoURL,'video url------------------')
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
      if(video_url){
        console.log(video_url)
        setForm({
            ...form,
            video_from_url:video_url 
             
        })
      }
    
      return () => {
        
      }
    }, [])
    return (
        <>
            <h1 className='text-left'>
                Videos are more engaging than text, and so in vogue. So, if you have your video CV, please upload the same on YouTube or a video
                sharing platform of your choice and
                share the link with us.
            </h1>
            {console.log(error)}
            {message && showAlert &&!loading&&<Alert error={error} message={error ? Object.values(message): message} />}
            <div className="form-row">
                <IconInput value={form.video_from_url} name='video_from_url' handleChange={handleChange} label='Upload from a URL' placeholder='Paste the link to your video CV' width={100} />
            </div>
            <Control handleSubmit={handleSubmit}/>
        </>
    )
}
