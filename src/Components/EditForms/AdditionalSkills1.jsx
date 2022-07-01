import React, { useState } from 'react'
import IconInput from '../IconInput/IconInput'
import IconSelect from '../IconInput/IconSelect'
import IconTextArea from '../IconInput/IconTextArea'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux'
import { additionalSkills, reload, selectResumeError, selectResumeLoading } from '../../redux/Features/ResumeSlice'
import Control from './Control';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
export default function AdditionalSkills1() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        role: '',
        organization_name:'',
        from_duration: '',
        to_duration: '',
        currently_working:'no',
        description:'',
        additional_skill_record_id: '',
    })
    const error = useSelector(selectResumeError);
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
    const handleSubmit = (e)=>{
        e.preventDefault();
        let body = form
        body.user_id = user_id
        try {
          dispatch(additionalSkills({auth:token,body:{...form,user_id}})).unwrap()
         console.log(form)
        } catch (error) {
            showAlert(true)
        }finally{
            setShowAlert(true)
        }
    }
    return (
        <>
            <h1>Have you ever volunteered for/contributed to any social cause. If yes, please let us know about it.</h1>
            {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Information': 'Information added'}/>}
            <div className="form-row">
                <IconInput name='role' handleChange={handleChange} label='Your role' placeholder='i.e. Volunteer' width={100} />
            </div>
            <div className="form-row">
                <IconSelect name='organization_name' handleChange={handleChange} label='Organisation name' placeholder='i.e. Gooni' width={100} options={[{id:'1',name:'Goonj'}, {id:'2',name: 'LPU'}, {id:'3',name:'CSIT'}]} name_field={'name'}/>
            </div>
            <div className="form-row">
                <IconInput name='from_duration' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' width={50} />
                <IconInput name='to_duration' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' width={50} />
            </div>
            <label className="control control-checkbox">
                I am currently working here
                <input name='currently_working' onChange={handleChange} value={'yes'} type="checkbox" />
                <div className="control_indicator"></div>
            </label>
            <div className="form-row">
                <IconTextArea  name='description' handleChange={handleChange} label='Please describe your cause in brief' placeholder="e.g. Set up a 'Goonj' kiosk for clothing collection for needy " width={100} rows={8} />
            </div>
            <div className="flex-row-end">
                <button onClick={handleSubmit} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more</button>
            </div>
            <Control handleSubmit={()=>dispatch(reload())}/>
        </>
    )
}
