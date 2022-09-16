import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useDebounce from '../../DebouncedSearch';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import { addProject, SelectCompanyDetails, selectNewProject, selectResumeError, selectResumeInfo, selectResumeLoading, setReloadDecider, toggleNewProject } from '../../redux/Features/ResumeSlice';
import EditFormController from '../../Util Components/EditFormController/EditFormController';
import PlainInput from '../../Util Components/Inputs/PlainInput/PlainInput';
import SuggestionInput from '../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import MultiSelectedOptions from '../EditForms/MultiSelectedOptions';
import MarkedSlider from '../MarkedSlider/MarkedSlider';
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { changeExperienceForm, getEditProjectID, selectCompanyForEdit, selectDesignationForEdit } from '../../redux/Features/EditSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const DEBOUNCE_DELAY = 600;
let temp = { skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' }

export default function ProjectEditForm() {
    const designationID = useSelector(selectDesignationForEdit);
    const companyID = useSelector(selectCompanyForEdit);
    const companyDetails = useSelector(SelectCompanyDetails);
    const projectID = useSelector(getEditProjectID)
    const [data, setData] = useState({});
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        project_name: '',
        client_name: '',
        project_skills: [],
        user_company_record_id: '',
        user_company_job_record_id: '',
        user_company_job_project_record_id: ''
    })
    const [selected_options, set_Selected_options] = useState([])
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const resumeInfo = useSelector(selectResumeInfo)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const [temporary, setTemporary] = useState({ skill_id: '', skill_name: '', skill_complexity: '', skill_desc: '' })
    const [validationError, setValidationError] = useState(null)
    const [showAlertInner, setAlertInnder] = useState(false)
    const newProject = useSelector(selectNewProject)
    const navigate = useNavigate();

    const handleAddProject = async (e, isReload) => {
        e.preventDefault();
        let body = form
        // delete body.user_company_job_project_record_id
        body.user_id = user_id
        body.project_skills = selected_options.map((x) => { return { skill_id: x.skill_id, skill_complexity: x.skill_complexity, skill_name: x.skill_name, skill_desc: x.skill_desc } })
        body.project_skills = JSON.stringify(body.project_skills)
        let formValidation = projectFormValidator();
        if (!isReload) {
            body.dispatch = dispatch;
        }
        if (formValidation) {
            try {
                dispatch(setReloadDecider(true))
                await dispatch(addProject({ auth: token, body: { ...form, user_id }, dispatch: isReload ? dispatch : null })).unwrap()
                navigate('/dashboard/edit')
                dispatch(changeExperienceForm(0))
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
        if (e.nativeEvent.inputType !== "deleteContentBackward" && e.nativeEvent.inputType !== "insertText") {
            let selectedSkill = skillList.filter(skill => skill.skill_name === e.target.value)[0]
            temp.skill_id = selectedSkill.id
            temp.skill_name = selectedSkill.skill_name
            setTemporary(temp)

        }
        setSearch(e.target.value)
    }

    const selectSkillHandler = (i, suggestion, value) => {
        console.log(skillList);
        temp.skill_id = skillList[i].id
        temp.skill_name = skillList[i].skill_name
        setTemporary(temp)
    }
    const handleComplexity = (e) => {
        temp.skill_complexity = e.target.value
        console.log(temp, 'complexity');
        setTemporary(temp)

    }
    const handleSkill_desc = (e) => {
        temp.skill_desc = e.target.value
        console.log(temp, 'desc');
        setTemporary(temp)
    }
    const handleAddSkill = (event) => {
        setAlertInnder(false)
        if (temp.skill_desc && temp.skill_complexity && (temp.skill_name || temp.skill_id)) {
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
            }
            if (temp.skill_complexity.length <= 0) {
                setAlertInnder(true);
                setValidationError("Skill complexity required!")
                return false;
            }
            if( temp.skill_id === "" || temp.skill_name ===""){
                setValidationError("Skill name is required!")
            }
        }
    }

    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
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
        if (validationError) {
            toast.error(validationError)
        }
    }, [validationError])

    useEffect(() => {
        set_Selected_options([...form.project_skills])
    }, [])

    useEffect(() => {
        if (debouncedSearchState.length > 1) searchSkillList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState, searchSkillList, dispatch])
    // useEffect(()=>{
    //     if(resumeInfo.company && (!form.user_company_job_record_id || !form.user_company_record_id)){
    //         setForm({ ...form,
    //             user_company_record_id: resumeInfo.company.slice(-1)[0].company_record_id,
    //             user_company_job_record_id: resumeInfo.company.slice(-1)[0].job_role.slice(-1)[0].company_job_record_id
    //         })
    //     }

    // },[resumeInfo,form])
    // useEffect(()=>{
    //     if(showAlert&&!error) {
    //         document.getElementById('iconinput-project_name').value =''
    //         document.getElementById('iconinput-client_name').value =''
    //         document.getElementById('iconinput-project_desc').value =''
    //         document.getElementById('iconinput-Skills').value =''    
    //         document.getElementById('iconinput-skill_desc').value =''
    //         set_Selected_options([])
    //     }
    // },[showAlert,error])

    useEffect(() => {
        console.log(newProject);
        if (!newProject) {
            let company = companyDetails.filter(company => company.company_record_id === companyID)
            let jobRole = company[0].job_role.filter(role => role.company_job_record_id === designationID);
            let project = jobRole[0].project && jobRole[0].project[0] && jobRole[0].project.filter(project => project.job_project_record_id == projectID)
            console.log(project[0]);
            setData(project.length > 0 ? project[0] : [])
        }
    }, [])

    useEffect(() => {
        if (data && !newProject) {
            setForm({
                ...form,
                project_name: data.project_name,
                client_name: data.client_name,
                project_skills: data.project_skill,
                user_company_record_id: companyID,
                user_company_job_record_id: designationID,
                user_company_job_project_record_id: data.job_project_record_id
            })
            set_Selected_options(data.project_skill || [])
        }else if(newProject){
            setForm({
                project_name: "",
                client_name: "",
                project_skills: "",
                user_company_record_id: companyID,
                user_company_job_record_id: designationID,
                user_company_job_project_record_id: ""
            })
        }
    }, [data])

    return (
        <div className="main-form-wrapper">
            {newProject && <h2 className="form-title">Now the most amazing part! If you have worked on any projects in this job role, please mention the skills you specifically used, how you applied them and its complexity level.</h2>}
            <div className="grid-1-1">
                <PlainInput value={form.project_name} name='project_name' handleChange={handleChange} label='Project Name' placeholder='Name of the project.' />
                <PlainInput value={form.client_name} name='client_name' handleChange={handleChange} label='Client Name' placeholder='e.g. ICICI Bank' />
            </div>
            <PlainInput value={form.project_desc} name='project_desc' handleChange={handleChange} label='Project Description' placeholder='Brief description of the project' />
            <MultiSelectedOptions options={selected_options} value_field={'skill_name'} subValue_field='skill_complexity' deleteHandler={handleDeleteSkill} />
            <div className="grid-1-1">
                <SuggestionInput name='Skills' searchHandler={searchHandler} label={`Skill`} placeholder='Select Skills' value={search} suggestions={[...skillList]} name_field={'skill_name'} selected={selectSkillHandler} />
                <MarkedSlider handleChange={handleComplexity} value={temp.skill_complexity} name={'skill_complexity'} state={form} setState={setForm} min={1} max={10} width={'100%'} label={'Complexity Level'} />
            </div>
            <PlainInput handleChange={handleSkill_desc} name='skill_desc' id="iconinput-skill_desc" label='Application of skills + Outcome' placeholder='Mention how you used the skills in the project' />
            <button className='btn-fit small' onClick={handleAddSkill}>+ Add Skill</button>
            {/* <button className="btn-fit transparent g-0-5" style={{ marginLeft: "auto" }} onClick={(e) => handleAddProject(e, true)}><AddCircle width={30} /> Add another Project</button> */}
            <EditFormController handleSubmit={(e) => {
                handleAddProject(e)
                // dispatch(toggleNewProject(false))
            }} isSkip={true} handlePreviousNavigation={() => dispatch(changeExperienceForm(2))} />
        </div>
    )
}
