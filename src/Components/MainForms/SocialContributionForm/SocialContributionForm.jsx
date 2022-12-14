import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { addAdditionalSkills, reload, selectAdditionalSkills, selectNewAdditionalSkill, selectResumeError, selectResumeLoading, selectResumeMessage, toggleNewAdditionalSkills } from '../../../redux/Features/ResumeSlice';
import FormController from '../../../Util Components/FormController/FormController';
import DateInput from '../../../Util Components/Inputs/DateInput/DateInput';
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput';
import TextArea from '../../../Util Components/Inputs/TextArea/TextArea';
import { ReactComponent as AddCircle } from '../../../Assests/icons/add-circle.svg';
import Alert from '../../Alert/Alert';
import dateConverter from '../../../functionUtils/dateConverter';

export default function SocialContributionForm() {
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
    const [isCurrentWorking, setCurrentWorking] = useState(false);
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
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = async (e, isAdd) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        if (isAdd) {
            body.reload_request = "yes"
        }
        try {

            await dispatch(addAdditionalSkills({ auth: token, body: { ...form, user_id }, dispatch })).unwrap()
            if (isAdd) dispatch(toggleNewAdditionalSkills(true))
        } catch (error) {
            setShowAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
        if (!newAdditionalSkills && additionalSkills && additionalSkills.length > 0) {
            let lastAS = additionalSkills[additionalSkills.length - 1]
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
            setCurrentWorking(lastAS.currently_working === 1 ? true : false)
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
    }, [newAdditionalSkills, additionalSkills, loading])
    useEffect(() => {
        if (reloadFlag && !loading) {
            setReloadFlag(false)
            dispatch(reload())
        }
    }, [reloadFlag, loading])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Your contribution to social causes</h2>
            {showAlert && !loading && <Alert error={error} message={error&&message ? Object.values(message) : message} />}
            <div className="grid-1-1">
                <PlainInput value={form.role} name='role' handleChange={handleChange} label='Your role' placeholder='i.e. Volunteer' width={100} />
                <PlainInput value={form.organization_name} name='organization_name' handleChange={handleChange} label='Organisation name' placeholder='i.e. Goonj' width={100} />
            </div>
            <div className="grid-1-1">
                <DateInput value={dateConverter(form.from_duration)} name='from_duration' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' />
                <DateInput value={dateConverter(form.to_duration)} isDisabled={isCurrentWorking} name='to_duration' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' />
            </div>
            <label className="control control-checkbox">
                I am currently working here
                <input name='currently_working' onChange={e => {handleChange(e);setCurrentWorking(!isCurrentWorking)}} value={!isCurrentWorking ? 'yes' : 'no'} checked={isCurrentWorking} type="checkbox" />
                <div className="control_indicator"></div>
            </label>
            <TextArea value={form.description} name='description' handleChange={handleChange} label='Please describe your cause in brief' placeholder="e.g. Set up a 'Goonj' kiosk for clothing collection for needy " width={100} rows={8} />
            <div className="flex-row-end">
                <button onClick={e => handleSubmit(e,true)} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more</button>
            </div>
            <FormController handleSubmit={(e) => {
                handleSubmit(e)
                dispatch(toggleNewAdditionalSkills(false))
                setReloadFlag(true)
            }} isSkip={true} />
        </div>
    )
}
