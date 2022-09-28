import React, { useCallback, useEffect, useState } from 'react'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import certificate from '../../Assets/edit icons/certification.png'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addCertification, reload, selectCertificate, selectNewCertificate, selectResumeError, selectResumeLoading, selectResumeMessage, setReloadDecider } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import useDebounce from '../../DebouncedSearch';
import DateInput from '../../Util Components/Inputs/DateInput/DateInput';
import MultiSelectedOptions from '../EditForms/MultiSelectedOptions';
import SuggestionInput from '../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import PlainInput from '../../Util Components/Inputs/PlainInput/PlainInput';
import DragDropInput from '../DragDropInput/DragDropInput';
import EditFormController from '../../Util Components/EditFormController/EditFormController';
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { getCertificateID } from '../../redux/Features/EditSlice';
import { useNavigate } from 'react-router-dom';
import dateConverter from '../../functionUtils/dateConverter';

const DEBOUNCE_DELAY = 600;

export default function CertificateEditorForms() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form, setForm] = useState({
        project_name: '',
        institute_name: '',
        skills_ids: [],
        certificate_start_date: '',
        certificate_end_date: '',
        certificate_project_info: '',
        is_online: 'no',
        certification_record_id: '',

    })
    const [file, setFile] = useState(null);
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const message = useSelector(selectResumeMessage);
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const [selected_options, set_Selected_options] = useState([])
    const certificates = useSelector(selectCertificate)
    const [reloadFlag, setReloadFlag] = useState(false)
    const newCertificate = useSelector(selectNewCertificate)
    const [updated, setUpdated] = useState(false);
    const certificateID = useSelector(getCertificateID);

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const temp = {
        skill_id: '',
        skill_name: '',
    }
    const selectSkillHandler = (e) => {
        console.log(skillList);
        console.log(e);
        // temp.skill_id = skillList[i].id
        // temp.skill_name = skillList[i].skill_name
        // console.log(temp,'this is temp');
        // set_Selected_options([...selected_options, temp])
    }

    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
    }
    function searchHandler(e) {
        console.log('here e,e', e);
        if (e.nativeEvent.inputType === "insertText" || e.nativeEvent.inputType === 'deleteContentBackward') {
            setSearch(e.target.value)
        } else {
            console.log(skillList);
            let selected = skillList.filter((skill) => skill.skill_name === e.target.value)[0]
            console.log(e, e.target.value, "selected", selected);
            temp.skill_id = selected?.id
            temp.skill_name = selected.skill_name
            set_Selected_options([...selected_options, temp])
        }

    }

    async function handleSubmit(e, isAdd) {
        e.preventDefault();
        let body = form
        if (file && typeof file === 'object') body.certificate_file = file

        body.user_id = user_id
        body.skills_ids = selected_options.map((skill) => {
            let obj = {}
            obj.skill_id = skill.skill_id;
            obj.skill_name = skill.skill_name
            return obj
        })

        if (isAdd) {
            body.reload_request = "yes"
        }

        let form_data = JsonToFormData(body)
        try {
            dispatch(setReloadDecider(true))
            let data = await dispatch(addCertification({ auth: token, body: form_data, setUpdated, dispatch })).unwrap()
            navigate('/dashboard/certificate-history')
            if (data) {
                setUpdated(true);
            }
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }

    }
    const searchSkillList = useCallback(
        (keywords) => {
            try {
                dispatch(searchSkills({ auth: token, body: { search_skill: keywords } })).unwrap()
            } catch (error) {
            }
        },
        [dispatch, token],
    )
    useEffect(() => {
        if (debouncedSearchState.length > 1) searchSkillList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState, searchSkillList, dispatch])
   
    // useEffect(() => {
    //     if (!newCertificate && certificates && certificates.length > 0) {
    //         let lastCertificate = certificates[certificates.length - 1]
    //         let skills = lastCertificate.skills_ids && lastCertificate.skills_ids.split(',').map((id, i) => {
    //             return {
    //                 skill_id: id,
    //                 skill_name: lastCertificate.skills_names && lastCertificate.skills_names.split(',')[i]
    //             }
    //         })
    //         setForm({
    //             ...form,
    //             project_name: lastCertificate.project_name,
    //             institute_name: lastCertificate.institute_name,
    //             skills_ids: JSON.stringify(skills),
    //             certificate_start_date: lastCertificate.certificate_start_date.split("-").reverse().join("-"),
    //             certificate_end_date: lastCertificate.certificate_end_date.split("-").reverse().join("-"),
    //             certificate_project_info: lastCertificate.project_name,
    //             is_online: lastCertificate.is_online === 1 ? 'yes' : 'no',
    //             certification_record_id: lastCertificate.certificate_record_id,
    //         })
    //         setFile(lastCertificate.certificate_file)
    //         set_Selected_options(skills)
    //     } else {
    //         if (updated) {
    //             setForm({
    //                 project_name: '',
    //                 institute_name: '',
    //                 skills_ids: '',
    //                 certificate_start_date: '',
    //                 certificate_end_date: '',
    //                 certificate_project_info: '',
    //                 is_online: 'no',
    //                 certification_record_id: '',
    //             })
    //             set_Selected_options([])
    //             setSearch('')
    //         }
    //     }

    //     return () => {

    //     }
    // }, [newCertificate, certificates, loading, updated])
    
    
    useEffect(() => {
        if(!newCertificate){
            let lastCertificate = certificates.filter((certificate) => certificate.certificate_record_id === certificateID)[0];
            let skills = lastCertificate.skills_ids && lastCertificate.skills_ids.split(',').map((id, i) => {
                return {
                    skill_id: id,
                    skill_name: lastCertificate.skills_names && lastCertificate.skills_names.split(',')[i]
                }
            })
            setForm({
                ...form,
                project_name: lastCertificate.project_name,
                institute_name: lastCertificate.institute_name,
                skills_ids: JSON.stringify(skills),
                certificate_start_date: lastCertificate.certificate_start_date.split("-").reverse().join("-"),
                certificate_end_date: lastCertificate.certificate_end_date.split("-").reverse().join("-"),
                certificate_project_info: lastCertificate.project_name,
                is_online: lastCertificate.is_online === 1 ? 'yes' : 'no',
                certificate_record_id: lastCertificate.certificate_record_id,
            })
            setFile(lastCertificate.certificate_file)
            set_Selected_options(skills)
        }
    },[certificates])

    // useEffect(() => {

    //     if (reloadFlag && !loading) {
    //         setReloadFlag(false)
    //         dispatch(reload())

    //     }
    // }, [reloadFlag, loading])

    return (
        <EditFormTemplate title="Certification Courses" icon={certificate}>
            <div className="main-form-wrapper">
                <h2 className="form-title">Skill Certification courses / trainings</h2>
                <div className="grid-1-1">
                    {console.log(form)}  
                    <PlainInput value={form.project_name} name='project_name' handleChange={handleChange} label='Name of the program*' placeholder='e.g. Digital Marketing Associate' />
                    <PlainInput value={form.institute_name} name='institute_name' handleChange={handleChange} label='Institution*' placeholder='Udemy' />
                </div>
                <div className="grid-1-1">
                    <DateInput value={dateConverter(form.certificate_start_date)} name='certificate_start_date' handleChange={handleChange} type={'date'} label='Duration (From)*' placeholder='i.e. Duration date' width={50} />
                    <DateInput value={dateConverter(form.certificate_end_date)} name='certificate_end_date' handleChange={handleChange} type={'date'} label='Duration (to)*' placeholder='i.e. Duration date' width={50} />
                </div>
                <MultiSelectedOptions options={selected_options} value_field={'skill_name'} deleteHandler={handleDeleteSkill} />
                <SuggestionInput name='Skills' searchHandler={searchHandler} label={`Key skills learned*`} placeholder='Skills mastered in this course' width={100} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />
                <PlainInput value={form.certificate_project_info} name='certificate_project_info' handleChange={handleChange} label='Projects, if any' placeholder='Tell us how you applied those skills?' width={100} />
                <div className="common-input-wrapper">
                    <label htmlFor="">Upload Certificate</label>
                    <DragDropInput file={file} setFile={setFile} />
                </div>
                {/* <div className="flex-row-end">
                    <button onClick={e => handleSubmit(e, true)} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more certifications</button>
                </div> */}
                <EditFormController isSkip={true} handleSubmit={(e) => {
                    handleSubmit(e)
                }} handlePreviousNavigation={() => navigate('/dashboard/certificate-history')} />
            </div>
        </EditFormTemplate>
    )
}

const JsonToFormData = (json = {}) => {
    var form_data = new FormData();
    for (var key in json) {
        if (key == "skills_ids") {
            form_data.append(key, JSON.stringify(json[key]))
        } else {
            form_data.append(key, json[key]);
        }
    }

    return form_data
}