import React, { useCallback, useEffect, useState } from 'react'
import IconInput from '../IconInput/IconInput'
import MarkedSlider from '../MarkedSlider/MarkedSlider'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProject, nextForm, reload, selectLastCompany, selectLastJob, selectNewProject, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage, toggleNewProject } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import Control from './Control';
import useDebounce from '../../DebouncedSearch';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
import { FaClosedCaptioning } from 'react-icons/fa';
const DEBOUNCE_DELAY = 600;

let temp = { skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' }

export default function Experience6() {
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
    const [validationError,setValidationError] = useState(null)
    const [showAlertInner,setAlertInnder] = useState(false)
    const [temporary,setTemporary] = useState({ skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' })
    const handleAddProject = async (e,isAdd) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        body.project_skills = selected_options.map((x) => { return { skill_id: x.skill_id, skill_complexity: x.skill_complexity, skill_desc: x.skill_desc, skill_name: x.skill_name } })
        body.project_skills = JSON.stringify(body.project_skills)
        let formValidation = projectFormValidator();
        if(isAdd){
            body.reload_request = "yes"
        }
        if(formValidation){
            try {
                await dispatch(addProject({ auth: token, body: { ...body, user_id }, dispatch })).unwrap()
                if(isAdd){
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
    }
    const selectSkillHandler = (i,suggestion,value) => {
        console.log(value,'this is value');
        if(suggestion.id){
            temp.skill_id = skillList[i].id
            temp.skill_name = skillList[i].skill_name
        }else{
            temp.skill_id = null
            temp.skill_name = value
        }
        console.log(temp);
        console.log(temp);
        
        setTemporary(temp)
    }
    const handleComplexity = (e) => {
        temp.skill_complexity = e.target.value
        setTemporary(temp)
    }
    const handleSkill_desc = (e) => {
        temp.skill_desc = e.target.value
        setTemporary(temp)
    }
    const handleAddSkill = (event) => {
        setAlertInnder(false)
        console.log(temp);
        if(temp.skill_desc && temp.skill_complexity && temp.skill_name){
            setAlertInnder(false)
            set_Selected_options([...selected_options, temp])
            document.getElementById('iconinput-Skills').value = '';
            document.getElementById('iconinput-skill_complexity').value = 0;
            document.getElementById('iconinput-skill_desc').value = '';
            document.getElementById('iconinput-skill_desc').value = '';
            temp = { skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' }
        }else{
            if(temp.skill_desc.length <= 0){
                setAlertInnder(true);
                setValidationError("Skill description required!")
                return false;
            }else if(temp.skill_complexity.length  <= 0){
                setAlertInnder(true);
                setValidationError("Skill complexity required!")
                return false;
            }
        }
        

    }

    const projectFormValidator = () => {
        if(form.project_name != ""){
            if(temp.skill_id.length > 0 || temp.skill_name.length > 0){
                if(temp.skill_desc.length > 0 && temp.skill_complexity.length > 0){
                    setAlertInnder(false);
                    return true
                }else if(temp.skill_desc.length <= 0){
                    setAlertInnder(true);
                    setValidationError("Skill description required!")
                    return false;
                }else if(temp.skill_complexity.length  <= 0){
                    setAlertInnder(true);
                    setValidationError("Skill description required!")
                    return false;
                }
            }else{
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
                user_company_job_project_record_id:''
            })
        }

        return () => {
 
        }
    }, [lastJob, newProject,loading])
    useEffect(() => {

        if (reloadFlag && !loading) {
            dispatch(reload())
        }
    }, [reloadFlag, loading])
    return (
        <>
            {showAlert && !loading && <Alert error={error} message={error ? Object.values(message) : message} />}
            {showAlertInner && !loading && validationError && <Alert error={true} message={validationError} />}
            <h1>Now the most amazing part! If you have worked on any projects in this job role, please mention the skills you specifically used, how you applied them and its complexity level.</h1>
            <div className="card g-1">
                <div className="form-row">
                    <IconInput value={form.project_name} name='project_name' handleChange={handleChange} label='Project Name' placeholder='Name of the project.' width={45} />
                    <IconInput value={form.client_name} name='client_name' handleChange={handleChange} label='Client Name' placeholder='e.g. ICICI Bank' width={45} />
                </div>
                <div className="form-row">
                    <IconInput value={form.project_desc} name='project_desc' handleChange={handleChange} label='Project Description' placeholder='Brief description of the project' width={98} />
                </div>
                <MultiSelectedOptions options={selected_options} value_field={'skill_name'} subValue_field='skill_complexity' deleteHandler={handleDeleteSkill} />
                <div className="form-row">
                    <SuggestiveInput name='Skills' searchHandler={searchHandler} label={`Skill`} placeholder='Select Skills' value={search} width={45} suggestions={[...skillList,{id:null,skill_name:"Add other skill"}]} name_field={'skill_name'} selected={selectSkillHandler} />
                    <MarkedSlider handleChange={handleComplexity} name={'skill_complexity'} state={form} setState={setForm} min={1} max={10} width={'48%'} label={'Complexity Level'} />
                </div>
                <div className="form-row">
                    <IconInput handleChange={handleSkill_desc} name='skill_desc' label='Application of skills + Outcome' placeholder='Mention how you used the skills in the project' width={98} />

                </div>
                <button className='btn-fit small' onClick={handleAddSkill}>+ Add Skill</button>
            </div>
            <div className="flex-row-end">
                <button className="btn-fit transparent g-0-5" onClick={(e) => handleAddProject(e,true)}><AddCircle width={30} /> Add another Project</button>
            </div>
            <Control handleSubmit={(e) => {
                handleAddProject(e)
                setReloadFlag(true)
                dispatch(toggleNewProject(false))
            }} handleSkip={handleSkip}/>
        </>
    )
}
