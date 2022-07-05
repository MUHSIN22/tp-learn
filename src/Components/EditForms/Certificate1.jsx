import React, { useCallback, useEffect, useState } from 'react'
import DragDropInput from '../DragDropInput/DragDropInput'
import IconInput from '../IconInput/IconInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux'
import { addCertification, reload, selectResumeError, selectResumeLoading } from '../../redux/Features/ResumeSlice'
import Control from './Control';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
import { searchSkills, selectSkillList } from '../../redux/Features/MasterSlice';
import useDebounce from '../../DebouncedSearch';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import moment  from 'moment'
const DEBOUNCE_DELAY = 600;
export default function Certificate1({data}) {
    const dispatch = useDispatch()
    const {project_name,
        institute_name,
        skills_ids,
        certificate_start_date,
        certificate_end_date,
        certificate_project_info,
        certificate_file,
        is_online,
        certification_record_id} = data;
    const [form, setForm] = useState({
        project_name: project_name || 1,
        institute_name: institute_name || '',
        skills_ids:skills_ids || [],
        certificate_start_date: moment(certificate_start_date,'DD-MM-YYYY').format('YYYY-MM-DD'),
        certificate_end_date: moment(certificate_end_date,'DD-MM-YYYY').format('YYYY-MM-DD'),
        certificate_project_info: certificate_project_info,
        certificate_file: null,
        is_online: is_online ? 'yes' : 'no',
        certification_record_id: certification_record_id,

    })
    const [file, setFile] = useState(null);
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)

    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const [selected_options,set_Selected_options] = useState([]) 

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
        body.certificate_file = file
        body.user_id = user_id
        body.skills_ids = selected_options.map((skill)=>{
            let obj = {}
            obj.skill_id = skill.skill_id;
            obj.skill_name = skill.skill_name
            return obj
        })
        let form_data = JsonToFormData(body)
          try {
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
    return (
        <>
            <h1>Add any certification courses/trainings you have done</h1>
            {showAlert && !loading && <Alert error={error} message={error ? 'Failed to add Education Details' : 'Job Education Details'} />}
            <div className="form-row">
                <IconInput name='project_name' handleChange={handleChange} label='Name of the program' placeholder='e.g. Digital Marketing Associate' width={100} defaultValue={form.project_name}/>
            </div>
            <div className="form-row">
                <IconInput name='institute_name' handleChange={handleChange} label='Institution' placeholder='Udemy' width={100} defaultValue={form.institute_name}/>
            </div>
            <div className="form-row">
                <IconInput name='certificate_start_date' handleChange={handleChange} type={'date'} label='Duration (From)' placeholder='i.e. Duration date' width={50} defaultValue={form.certificate_start_date}/>
                <IconInput name='certificate_end_date' handleChange={handleChange} type={'date'} label='Duration (to)' placeholder='i.e. Duration date' width={50} defaultValue={form.certificate_end_date}/>
            </div>
            <MultiSelectedOptions options={selected_options} value_field={'skill_name'} deleteHandler={handleDeleteSkill} />
            <div className="form-row">
                <SuggestiveInput name='Skills' searchHandler={searchHandler} label={`Key skills learned`} placeholder='Skills mastered in this course' width={100} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />
            </div>
            <div className="form-row">
                <IconInput name='certificate_project_info' handleChange={handleChange} label='Projects, if any' placeholder='Tell us how you applied those skills?' width={100} />
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
            <Control handleSubmit={() => dispatch(reload())} />
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