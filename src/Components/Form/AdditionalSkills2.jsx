import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { addHobbies, nextForm, selectHobbies, selectResumeError, selectResumeLoading, selectResumeMessage } from '../../redux/Features/ResumeSlice'
import Alert from '../Alert/Alert'
import IconInput from '../IconInput/IconInput'
import Control from './Control'

export default function AdditionalSkills2() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        entertainment:'',
        music:'',
        sports:'',
        leisure:'',
        adventure:'',
        travel:'',
        books:'',
        any_other:''
    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const hobbies = useSelector(selectHobbies)
    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let body = form
        body.user_id = user_id
      
        try {
          dispatch(addHobbies({auth:token,body:{...form,user_id}})).unwrap()
        } catch (error) {
            showAlert(true)
        }finally{
            setShowAlert(true)
        }
    }

    useEffect(() => {
        if(hobbies){
            setForm({...hobbies})
        }
    
      return () => {
        
      }
    }, [])
    
    
    return (
        <>
            <h1 className='text-left'>We are eager to know you more. Please tell us about your hobbies, interests & passions in life.</h1>
            {showAlert &&!loading&&<Alert error={error} message={error&&message ? Object.values(message): message} />}
            <div className="form-row">
                <IconInput value={form.entertainment} name='entertainment' handleChange={handleChange} label='Entertainment' placeholder='e.g. Period dramas, Nat Geo, BBC History, etc. ' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.music} name='music' handleChange={handleChange} label='Music' placeholder='e.g. Indi Pop, Ed Sheeran, Prateek Kuhad, etc. ' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.sports} name='sports' handleChange={handleChange} label='Sports' placeholder='e.g. Football, Cricket, Tennis, etc.' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.leisure} name='leisure' handleChange={handleChange} label='Leisure' placeholder='e.g. Gardening, Beach walk, etc' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.adventure} name='adventure' handleChange={handleChange} label='Adventure' placeholder='e.g. Hiking, Camping, River Rafting, etc.' width={100} />
            </div>

            <div className="form-row">
                <IconInput value={form.travel} name='travel' handleChange={handleChange} label='Travel' placeholder='e.g. places explored' width={100} />
            </div>

            <div className="form-row">
                <IconInput value={form.books} name='books' handleChange={handleChange} label='Books' placeholder='e.g. Ogilvy on Advertising, Copywriting Secrets, etc.' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.any_other} name='any_other' handleChange={handleChange} label='Any other' placeholder='Other Hobbies' width={100} />
            </div>


            <Control handleSubmit={handleSubmit} handleSkip={() => dispatch(nextForm())}/>
        </>
    )
}
