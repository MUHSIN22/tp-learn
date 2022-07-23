import React, { useCallback, useEffect, useState } from 'react'
import DragDropInput from '../DragDropInput/DragDropInput'
import IconInput from '../IconInput/IconInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux'
import { addCertification, reload, selectCertificate, selectNewCertificate, selectResumeError, selectResumeLoading, selectResumeMessage, toggleNewCertificate } from '../../redux/Features/ResumeSlice'
import Control from './Control';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import useDebounce from '../../DebouncedSearch';
import SuggestiveInput from '../IconInput/SuggestiveInput';
const DEBOUNCE_DELAY = 600;
export default function Certificate1() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        project_name: '',
        institute_name: '',
        skills_ids:[],
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
    const [selected_options,set_Selected_options] = useState([]) 
    const certificates = useSelector(selectCertificate)
    const [reloadFlag, setReloadFlag] = useState(false)
    const newCertificate = useSelector(selectNewCertificate)
    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const temp = {
        skill_id: '',
        skill_name:'',
    }
    const selectSkillHandler = (i) => {
        temp.skill_id = skillList[i].id
        temp.skill_name = skillList[i].skill_name
        set_Selected_options([...selected_options , temp])
    }
    const handleDeleteSkill = (i)=>{
        const newList =selected_options.filter((x,index)=> index!==i)
        set_Selected_options(newList) 
      }
    function searchHandler(e) {
        setSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let body = form
        if(file) body.certificate_file = file
        
        body.user_id = user_id
        body.skills_ids = selected_options.map((skill)=>{
            let obj = {}
            obj.skill_id = skill.skill_id;
            obj.skill_name = skill.skill_name
            return obj
        })
        let form_data = JsonToFormData(body)
          try {
            dispatch(toggleNewCertificate(true))
              dispatch(addCertification({ auth: token, body:form_data })).unwrap()
              console.log(form)
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
    }, [debouncedSearchState, searchSkillList, dispatch])
    useEffect(() => {
      if(!newCertificate&&certificates&&certificates.length>0){
        let lastCertificate= certificates[certificates.length-1]
        console.log(lastCertificate)
        let skills = lastCertificate.skills_ids&&lastCertificate.skills_ids.split(',').map((id,i)=> {
            return {
                skill_id: id,
                skill_name: lastCertificate.skills_names&&lastCertificate.skills_names.split(',')[i]
            }
        })
        setForm({
            ...form,
            project_name: lastCertificate.project_name,
            institute_name: lastCertificate.institute_name,
            skills_ids:JSON.stringify(skills),
            certificate_start_date: lastCertificate.certificate_start_date.split("-").reverse().join("-"),
            certificate_end_date: lastCertificate.certificate_end_date.split("-").reverse().join("-"),
            certificate_project_info: lastCertificate.project_name,
            is_online: lastCertificate.is_online===1?'yes':'no',
            certification_record_id: lastCertificate.certificate_record_id,
        })
        set_Selected_options(skills)
      }else{
        setForm({
            project_name: '',
            institute_name: '',
            skills_ids:'',
            certificate_start_date: '',
            certificate_end_date: '',
            certificate_project_info: '',
            is_online: 'no',
            certification_record_id: '',
    
        })
        set_Selected_options([])
        setSearch('')
      }
       
      return () => {
        
      }
    }, [newCertificate,certificates,loading])
    useEffect(()=>{

        if(reloadFlag&&!loading){
            setReloadFlag(false)  
            dispatch(reload())
          
        }
      },[reloadFlag,loading])
    return (
        <>
            <h1>Add any certification courses/trainings you have done</h1>
            {showAlert &&!loading&&<Alert error={error} message={error&&message ? Object.values(message): message} />}
            <div className="form-row">
                <IconInput value={form.project_name} name='project_name' handleChange={handleChange} label='Name of the program' placeholder='e.g. Digital Marketing Associate' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.institute_name} name='institute_name' handleChange={handleChange} label='Institution' placeholder='Udemy' width={100} />
            </div>
            <div className="form-row">
                <IconInput value={form.certificate_start_date} name='certificate_start_date' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' width={50} />
                <IconInput value={form.certificate_end_date} name='certificate_end_date' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' width={50} />
            </div>
            <MultiSelectedOptions options={selected_options} value_field={'skill_name'} deleteHandler={handleDeleteSkill} />
            <div className="form-row">
                <SuggestiveInput name='Skills' searchHandler={searchHandler} label={`Key skills learned`} placeholder='Skills mastered in this course' width={100} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />
            </div>
            <div className="form-row">
                <IconInput value={form.certificate_project_info} name='certificate_project_info' handleChange={handleChange} label='Projects, if any' placeholder='Tell us how you applied those skills?' width={100} />
            </div>
            <div className="form-row">
                <div className="col-100 align-start g-0-5">
                    <label>Upload the Certificate</label>
                    <DragDropInput file={file} setFile={setFile} />
                </div>

            </div>
            <div className="flex-row-end">
                <button onClick={handleSubmit} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more certifications</button>
            </div>
            <Control handleSubmit={(e) =>{
                 handleSubmit(e)
                 dispatch(toggleNewCertificate(false))
                 setReloadFlag(true)
                 }} />
        </>
    )
}
const JsonToFormData = (json = {}) => {
    var form_data = new FormData();
    for (var key in json) {
        if(key=="skills_ids"){
            form_data.append(key, JSON.stringify(json[key]))
        }else{
        form_data.append(key, json[key]);
        }
    }
  
    return form_data
  }