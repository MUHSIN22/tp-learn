import React, { useCallback, useEffect, useState } from 'react'
import IconInput from '../IconInput/IconInput'
import MarkedSlider from '../MarkedSlider/MarkedSlider'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addProject,reload, selectResumeError, selectResumeInfo, selectResumeLoading } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import Control from './Control';
import useDebounce from '../../DebouncedSearch';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
const DEBOUNCE_DELAY = 600;
export default function Experience6() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        project_name: '',
        client_name:'',
        project_skills: [],
        user_company_record_id: '',
        user_company_job_record_id: '',
    })
    const [selected_options,set_Selected_options] = useState([]) 
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const resumeInfo = useSelector(selectResumeInfo)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);

    const handleAddProject = (e)=>{
        e.preventDefault();
        let body = form
        body.user_id = user_id
        body.project_skills = selected_options.map((x)=>{return {skill_id:x.skill_id, skill_complexity:x.skill_complexity, skill_desc:x.skill_desc} })
        body.project_skills = JSON.stringify(body.project_skills)
        try {
          dispatch(addProject({auth:token,body:{...form,user_id}})).unwrap()
         console.log(form)
        } catch (error) {
            showAlert(true)
        }finally{
            setShowAlert(true)
        }
    }
    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    function searchHandler(e) {
        setSearch(e.target.value)
    }
    const temp = {skill_id: '', skill_name:'',skill_complexity: '',skill_desc:''}
    const selectSkillHandler = (i) => {

        temp.skill_id = skillList[i].id
        temp.skill_name = skillList[i].skill_name
    }
    const handleComplexity = (e) => {
        console.log(e.target.value)
        temp.skill_complexity = e.target.value
    }
    const handleSkill_desc = (e)=>{
        temp.skill_desc = e.target.value
    }
    const handleAddSkill = () => {
        console.log(temp)
        set_Selected_options([...selected_options,temp])
        document.getElementById('iconinput-Skills').value='';
        document.getElementById('iconinput-skill_complexity').value=0;
        document.getElementById('iconinput-skill_desc').value='';
        
    }
    const handleDeleteSkill = (i)=>{
        const newList =selected_options.filter((x,index)=> index!==i)
        set_Selected_options(newList) 
      }
    const searchSkillList = useCallback(
        (keywords) => {
            try {
                dispatch(searchSkills({ auth: token, body: { search_skill: keywords } })).unwrap()
            } catch (error) {
                console.log(error)
            }
        },
        [dispatch, token],
    )
    useEffect(() => {
        console.log(debouncedSearchState)
        if (debouncedSearchState.length > 1) searchSkillList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState,searchSkillList, dispatch])
    useEffect(()=>{
        if(resumeInfo.company && (!form.user_company_job_record_id || !form.user_company_record_id)){
            setForm({ ...form,
                user_company_record_id: resumeInfo.company.slice(-1)[0].company_record_id,
                user_company_job_record_id: resumeInfo.company.slice(-1)[0].job_role.slice(-1)[0].company_job_record_id
            })
        }
       
    },[resumeInfo,form])
    useEffect(()=>{
        if(showAlert&&!error) {
            document.getElementById('iconinput-project_name').value =''
            document.getElementById('iconinput-client_name').value =''
            document.getElementById('iconinput-role_Responsibilities').value =''
            document.getElementById('iconinput-Skills').value =''    
            document.getElementById('iconinput-skill_desc').value =''
            set_Selected_options([])
        }
    },[showAlert,error])
    return (
        <>  
        {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Project': 'Project added'}/>}
            <h1>Now the most amazing part! If you have worked on any projects in this job role, please mention the skills you specifically used, how you applied them and its complexity level.</h1>
            <div className="card g-1">
                <div className="form-row">
                    <IconInput name='project_name' handleChange={handleChange} label='Project Name' placeholder='Name of the project.' width={45} />
                    <IconInput name='client_name' handleChange={handleChange} label='Client Name' placeholder='e.g. ICICI Bank' width={45} />
                </div>
                <div className="form-row">
                    <IconInput name='role_Responsibilities'  label='Project Description' placeholder='Brief description of the project' width={98} />
                </div>
                <MultiSelectedOptions options={selected_options} value_field={'skill_name'} subValue_field='skill_complexity'  deleteHandler={handleDeleteSkill} />
                <div className="form-row">
                <SuggestiveInput name='Skills' searchHandler={searchHandler} label={`Skill ${form.project_skills.length+1}`} placeholder='Select Skills' width={45} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />
                    <MarkedSlider handleChange={handleComplexity} name={'skill_complexity'} state={form} setState={setForm} min={1} max={10} width={'48%'} label={'Complexity Level'} />
                </div>
                <div className="form-row">
                    <IconInput handleChange={handleSkill_desc} name='skill_desc' label='Application of skills + Outcome' placeholder='Mention how you used the skills in the project' width={98} />

                </div>
                <button className='btn-fit small' onClick={handleAddSkill}>+ Add Skill</button>
            </div>
            <div className="flex-row-end">
                <button className="btn-fit transparent g-0-5" onClick={handleAddProject}><AddCircle width={30} /> Add another Project</button>
            </div>
            <Control handleSubmit={()=>dispatch(reload())}/>
        </>
    )
}
