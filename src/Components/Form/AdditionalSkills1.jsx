import React, { useState } from 'react'
import IconInput from '../IconInput/IconInput'
import IconTextArea from '../IconInput/IconTextArea'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux'
import { addAdditionalSkills, reload, selectAdditionalSkills, selectNewAdditionalSkill, selectResumeError, selectResumeLoading, selectResumeMessage, toggleNewAdditionalSkills } from '../../redux/Features/ResumeSlice'
import Control from './Control';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import { useEffect } from 'react';
export default function AdditionalSkills1() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        role: '',
        organization_name: '',
        from_duration: '',
        to_duration: '',
        currently_working: 'no',
        description: '',
        additional_skill_record_id: '',
    })
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const message = useSelector(selectResumeMessage);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const additionalSkills = useSelector(selectAdditionalSkills)
    const newAdditionalSkills = useSelector(selectNewAdditionalSkill)
    const [reloadFlag, setReloadFlag] = useState(false)
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
            dispatch(toggleNewAdditionalSkills(true))
            dispatch(addAdditionalSkills({ auth: token, body: { ...form, user_id } })).unwrap()
            console.log(form)
        } catch (error) {
            console.log(error)
            setShowAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
        console.log(additionalSkills)
        if (!newAdditionalSkills && additionalSkills && additionalSkills.length > 0) {
            let lastAS = additionalSkills[additionalSkills.length - 1]
            console.log(lastAS)
            setForm({
                ...form,
                role: lastAS.role,
                organization_name: lastAS.organization_name,
                from_duration: lastAS.from_duration.split("-").reverse().join("-"),
                to_duration: lastAS.to_duration.split("-").reverse().join("-"),
                currently_working: lastAS.currently_working,
                description: lastAS.description,
                additional_skill_record_id: lastAS.additional_skill_record_id,


            })
        } else {
            setForm({
                role: '',
                organization_name: '',
                from_duration: '',
                to_duration: '',
                currently_working: 'no',
                description: '',
                additional_skill_record_id: '',
            })
        }

        return () => {

        }
    }, [newAdditionalSkills,additionalSkills,loading])
    useEffect(()=>{
        if(reloadFlag&&!loading){
          setReloadFlag(false)
          dispatch(reload())
        }
      },[reloadFlag,loading])
    return (
        <>
            <h1>Have you ever volunteered for/contributed to any social cause. If yes, please let us know about it.</h1>
            {showAlert && !loading && <Alert error={error} message={error&&message ? Object.values(message) : message} />}
            <div className="form-row">
                <IconInput value={form.role} name='role' handleChange={handleChange} label='Your role' placeholder='i.e. Volunteer' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.organization_name} name='organization_name' handleChange={handleChange} label='Organisation name' placeholder='i.e. Goonj' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.from_duration} name='from_duration' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' width={50} />
                <IconInput value={form.to_duration} name='to_duration' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' width={50} />
            </div>
            <label className="control control-checkbox">
                I am currently working here
                <input name='currently_working' onChange={handleChange} value={'yes'} checked={form.currently_working==='yes'} type="checkbox" />
                <div className="control_indicator"></div>
            </label>
            <div className="form-row">
                <IconTextArea value={form.description} name='description' handleChange={handleChange} label='Please describe your cause in brief' placeholder="e.g. Set up a 'Goonj' kiosk for clothing collection for needy " width={100} rows={8} />
            </div>
            <div className="flex-row-end">
                <button onClick={handleSubmit} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more</button>
            </div>
            <Control handleSubmit={(e) => {
                handleSubmit(e)
                dispatch(toggleNewAdditionalSkills(false))
                setReloadFlag(true)

            }} />
        </>
    )
}
