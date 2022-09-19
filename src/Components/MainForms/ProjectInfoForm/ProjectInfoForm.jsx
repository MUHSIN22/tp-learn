import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../DebouncedSearch';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../../redux/Features/MasterSlice';
import { addProject, nextForm, reload, selectLastCompany, selectLastJob, selectNewProject, selectResumeError, selectResumeLoading, selectResumeMessage, toggleNewProject } from '../../../redux/Features/ResumeSlice';
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput';
import SuggestionInput from '../../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import MultiSelectedOptions from '../../../Util Components/MultiSelectedOptions';
import MarkedSlider from '../../MarkedSlider/MarkedSlider';
import { ReactComponent as AddCircle } from '../../../Assests/icons/add-circle.svg';
import FormController from '../../../Util Components/FormController/FormController';

const DEBOUNCE_DELAY = 600;
let temp = { skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' }

export default function ProjectInfoForm() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        project_name: '',
        client_name: '',
        project_skills: [],
        project_desc: "",
        user_company_record_id: '',
        user_company_job_record_id: '',
        user_company_job_project_record_id: '',
    })
    const [selected_options, set_Selected_options] = useState([])
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const message = useSelector(selectResumeMessage)
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const lastJob = useSelector(selectLastJob)
    const lastCompany = useSelector(selectLastCompany)
    const [reloadFlag, setReloadFlag] = useState(false)
    const newProject = useSelector(selectNewProject);
    const [validationError, setValidationError] = useState(null)
    const [showAlertInner, setAlertInnder] = useState(false)
    const [temporary, setTemporary] = useState({ skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' })
    const handleAddProject = async (e, isAdd) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        body.project_skills = selected_options.map((x) => { return { skill_id: x.skill_id, skill_complexity: x.skill_complexity, skill_desc: x.skill_desc, skill_name: x.skill_name } })
        body.project_skills = JSON.stringify(body.project_skills)
        let formValidation = projectFormValidator();
        if (isAdd) {
            body.reload_request = "yes"
        }
        if (formValidation) {
            try {
                await dispatch(addProject({ auth: token, body: { ...body, user_id }, dispatch })).unwrap()
                if (isAdd) {
                    dispatch(toggleNewProject(true))
                }
            } catch (error) {
                showAlert(true)
            } finally {
                setShowAlert(true)
            }
        }
    }
    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    function searchHandler(e) {
        setSearch(e.target.value)
        temp.skill_name = e.target.value
        setTemporary(temp)
    }
    const selectSkillHandler = (i, suggestion, value) => {
        temp.skill_id = skillList[i].id
        temp.skill_name = skillList[i].skill_name 
        setTemporary(temp)
    }
    const handleComplexity = (e) => {
        temp.skill_complexity = e.target.value
        console.log(temp,'complexity');
        setTemporary(temp)

    }
    const handleSkill_desc = (e) => {
        temp.skill_desc = e.target.value
        console.log(temp,'desc');
        setTemporary(temp)
    }
    const handleAddSkill = (event) => {
        setAlertInnder(false)
        if (temp.skill_desc && temp.skill_complexity && temp.skill_name) {
            console.log(temp,'this is skill');
            setAlertInnder(false)
            set_Selected_options([...selected_options, temp])
            document.getElementById('iconinput-Skills').value = '';
            document.getElementById('iconinput-skill_complexity').value = 0;
            document.getElementById('iconinput-skill_desc').value = '';
            temp = { skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' }
        } else {
            if (temp.skill_desc.length <= 0) {
                setAlertInnder(true);
                setValidationError("Skill description required!")
                return false;
            } else if (temp.skill_complexity.length <= 0) {
                setAlertInnder(true);
                setValidationError("Skill complexity required!")
                return false;
            }
        }
    }

    const projectFormValidator = () => {
        if (form.project_name != "") {
            if (temp.skill_id.length > 0 || temp.skill_name.length > 0) {
                if (temp.skill_desc.length > 0 && temp.skill_complexity.length > 0) {
                    setAlertInnder(false);
                    return true
                } else if (temp.skill_desc.length <= 0) {
                    setAlertInnder(true);
                    setValidationError("Skill description required!")
                    return false;
                } else if (temp.skill_complexity.length <= 0) {
                    setAlertInnder(true);
                    setValidationError("Skill description required!")
                    return false;
                }
            } else {
                setAlertInnder(false)
                return true
            }
        }
    }

    const handleSkip = () => {
        dispatch(nextForm());
    }

    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
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
    useEffect(() => {
        if (lastCompany && lastJob && (!form.user_company_job_record_id || !form.user_company_record_id)) {
            setForm({
                ...form,
                user_company_record_id: lastCompany.company_record_id,
                user_company_job_record_id: lastJob.company_job_record_id
            })
        }

    }, [lastCompany, lastJob, form])
    useEffect(() => {
        if (showAlert && !error) {
            document.getElementById('iconinput-project_name').value = ''
            document.getElementById('iconinput-client_name').value = ''
            document.getElementById('iconinput-project_desc').value = ''
            document.getElementById('iconinput-Skills').value = ''
            document.getElementById('iconinput-skill_desc').value = ''
            set_Selected_options([])
        }
    }, [showAlert, error])

    useEffect(() => {
        if (lastJob.project && lastJob.project[lastJob.project.length - 1] && !newProject) {
            let lastProject = lastJob.project[lastJob.project.length - 1]
            setForm({
                ...form,
                project_name: lastProject.project_name,
                client_name: lastProject.client_name,
                project_skills: lastProject.project_skill,
                user_company_record_id: lastCompany.company_record_id,
                user_company_job_record_id: lastJob.company_job_record_id,
                user_company_job_project_record_id: lastProject.job_project_record_id
            })
            set_Selected_options(lastProject.project_skill || [])
        } else {
            setForm({
                roject_name: '',
                client_name: '',
                project_skills: [],
                user_company_record_id: '',
                user_company_record_id: lastCompany.company_record_id,
                user_company_job_record_id: lastJob.company_job_record_id,
                user_company_job_project_record_id: ''
            })
        }

        return () => {

        }
    }, [lastJob, newProject, loading])
    useEffect(() => {

        if (reloadFlag && !loading) {
            dispatch(reload())
        }
    }, [reloadFlag, loading])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Now the most amazing part! If you have worked on any projects in this job role, please mention the skills you specifically used, how you applied them and its complexity level.</h2>
            <div className="grid-1-1">
                <PlainInput value={form.project_name} name='project_name' handleChange={handleChange} label='Project Name' placeholder='Name of the project.' />
                <PlainInput value={form.client_name} name='client_name' handleChange={handleChange} label='Client Name' placeholder='e.g. ICICI Bank' />
            </div>
            <PlainInput value={form.project_desc} name='project_desc' handleChange={handleChange} label='Project Description' placeholder='Brief description of the project' />
            <MultiSelectedOptions options={selected_options} value_field={'skill_name'} subValue_field='skill_complexity' deleteHandler={handleDeleteSkill} />
            <div className="grid-1-1">
                <SuggestionInput name='Skills' searchHandler={searchHandler} label={`Skill`} placeholder='Select Skills' value={search}  suggestions={[...skillList]} name_field={'skill_name'} selected={selectSkillHandler} />
                <MarkedSlider handleChange={handleComplexity} value={temp.skill_complexity} name={'skill_complexity'}  state={form} setState={setForm} min={1} max={10} width={'100%'} label={'Complexity Level'} />
            </div>
            <PlainInput handleChange={handleSkill_desc} name='skill_desc' id="iconinput-skill_desc" label='Application of skills + Outcome' placeholder='Mention how you used the skills in the project'/>
            <button className='btn-fit small' onClick={handleAddSkill}>+ Add Skill</button>
            <button className="btn-fit transparent g-0-5" style={{marginLeft: "auto"}} onClick={(e) => handleAddProject(e,true)}><AddCircle width={30} /> Add another Project</button>
            <FormController handleSubmit={(e) => {
                handleAddProject(e)
                setReloadFlag(true)
                dispatch(toggleNewProject(false))
            }} isSkip={true} />
        </div>
    )
}
