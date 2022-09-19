import React, { useEffect, useState } from 'react'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import contribution from '../../Assets/edit icons/voluntary.png'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addAdditionalSkills, selectAdditionalSkills, selectNewAdditionalSkill, selectResumeError, selectResumeLoading, selectResumeMessage, selectSocialContribution, setReloadDecider, toggleNewAdditionalSkills } from '../../redux/Features/ResumeSlice'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import PlainInput from '../../Util Components/Inputs/PlainInput/PlainInput'
import DateInput from '../../Util Components/Inputs/DateInput/DateInput'
import TextArea from '../../Util Components/Inputs/TextArea/TextArea'
import EditFormController from '../../Util Components/EditFormController/EditFormController'
import { useNavigate } from 'react-router-dom'
import { getContributionID } from '../../redux/Features/EditSlice'

export default function ContributionEditForm() {
    const contributions = useSelector(selectSocialContribution);
    const contributionID = useSelector(getContributionID);
    const navigate = useNavigate();
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
        try {
            dispatch(setReloadDecider(true))
            await dispatch(addAdditionalSkills({ auth: token, body: { ...form, user_id }, dispatch })).unwrap()
            navigate('/dashboard/contribution-history')
        } catch (error) {
            setShowAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    // useEffect(() => {
    //     if (!newAdditionalSkills && additionalSkills && additionalSkills.length > 0) {
    //         let lastAS = additionalSkills[additionalSkills.length - 1]
    //         console.log(lastAS, 'thsi is');
    //         setForm({
    //             ...form,
    //             role: lastAS.role,
    //             organization_name: lastAS.organization_name,
    //             from_duration: lastAS.from_duration.split("-").reverse().join("-"),
    //             to_duration: lastAS.to_duration.split("-").reverse().join("-"),
    //             currently_working: lastAS.currently_working,
    //             description: lastAS.description,
    //             additional_skill_record_id: lastAS.additional_skill_record_id,


    //         })
    //         setCurrentWorking(lastAS.currently_working === 1 ? true : false)
    //     } else {
    //         setForm({
    //             role: '',
    //             organization_name: '',
    //             from_duration: '',
    //             to_duration: '',
    //             currently_working: 'no',
    //             description: '',
    //             additional_skill_record_id: '',
    //         })
    //     }

    //     return () => {

    //     }
    // }, [newAdditionalSkills, additionalSkills, loading])


    useEffect(() => {
        if(!newAdditionalSkills){
            let lastAS = contributions.filter(contribution => contribution.additional_skill_record_id === contributionID)[0]
            console.log(lastAS);
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
        }
    },[contributions])

    return (
        <EditFormTemplate title="Voluntary Roles" icon={contribution}>
            <div className="main-form-wrapper">
                <h2 className="form-title">Have you ever volunteered for/contributed to any social cause. If yes, please let us know about it.</h2>
                <div className="grid-1-1">
                    <PlainInput value={form.role} name='role' handleChange={handleChange} label='Your role' placeholder='i.e. Volunteer' width={100} />
                    <PlainInput value={form.organization_name} name='organization_name' handleChange={handleChange} label='Organisation name' placeholder='i.e. Goonj' width={100} />
                </div>
                <div className="grid-1-1">
                    <DateInput value={form.from_duration > 7 ? new Date(form.from_duration).getFullYear() + "-" + new Date(form.from_duration).getMonth() : form.from_duration} name='from_duration' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' />
                    <DateInput value={form.to_duration > 7 ? new Date(form.to_duration).getFullYear() + "-" + new Date(form.to_duration).getMonth() : form.to_duration} isDisabled={isCurrentWorking} name='to_duration' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' />
                </div>
                <label className="control control-checkbox">
                    I am currently working here
                    <input name='currently_working' onChange={e => { handleChange(e); setCurrentWorking(!isCurrentWorking) }} value={!isCurrentWorking ? 'yes' : 'no'} checked={isCurrentWorking} type="checkbox" />
                    <div className="control_indicator"></div>
                </label>
                <TextArea value={form.description} name='description' handleChange={handleChange} label='Please describe your cause in brief' placeholder="e.g. Set up a 'Goonj' kiosk for clothing collection for needy " width={100} rows={8} />
                {/* <div className="flex-row-end">
                <button onClick={e => handleSubmit(e,true)} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more</button>
            </div> */}
                <EditFormController handleSubmit={(e) => {
                    handleSubmit(e)
                    dispatch(toggleNewAdditionalSkills(false))
                    setReloadFlag(true)
                }} isSkip={true} handlePreviousNavigation={() => navigate('/dashboard/contribution-history')} />
            </div>
        </EditFormTemplate>
    )
}
