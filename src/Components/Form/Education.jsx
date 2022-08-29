import React, { useEffect, useState } from 'react'
import DragDropInput from '../DragDropInput/DragDropInput'
import IconInput from '../IconInput/IconInput'
import IconTextArea from '../IconInput/IconTextArea'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import IconSelect from '../IconInput/IconSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getCollageList, getDegreeList, getUniversityList, selectCollageList, selectDegreeList, selectUniversityList } from '../../redux/Features/MasterSlice';
import { addEducation, selectResumeError, selectResumeLoading, reload, selectResumeMessage, selectEducation, selectNewEducation, toggleNewEducation } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { ReactComponent as Location } from '../../Assests/icons/location.svg';
import Alert from '../Alert/Alert';
import Control from './Control';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import IconAutoComplete from '../IconInput/IconAutocomplete';
export default function Education() {
  const dispatch = useDispatch()
  const [location,setLocation] = useState('')
  const [form, setForm] = useState({
    degree_id: '',
    other_degree_name: '',
    university_id: '',
    other_university_name: [],
    collage_id: '',
    other_collage_name: '',
    location: '',
    course_start_date: '',
    course_end_date: '',
    course_cgpa: '',
    course_extra_activity: '',
    course_project_info: '',
    education_record_id: '',
    

  })
  const education = useSelector(selectEducation)
  const [file, setFile] = useState(null)
  const error = useSelector(selectResumeError);
  const loading = useSelector(selectResumeLoading);
  const [showAlert, setShowAlert] = useState(false);
  const message = useSelector(selectResumeMessage)
  const user_id = useSelector(selectUser_id)
  const token = useSelector(selectAuthToken)
  const degreeList = useSelector(selectDegreeList)
  const universityList = useSelector(selectUniversityList);
  const collageList = useSelector(selectCollageList);
  const newEducation = useSelector(selectNewEducation);
  const [reloadFlag, setReloadFlag] = useState(false)
  const [universities,setUniversities] = useState(universityList)
  const [colleges,setColleges] = useState(collageList);
  const [degree,setDegree] = useState(degreeList);
  const [updated,setUpdated] = useState(false);
  function handleChange(evt) {
    const value = evt.target.value;

    setForm({
      ...form,
      [evt.target.name]: value
    });
  }

  const UniversitySelectHandler = (i) => {
    setForm({ ...form, university_id: universities[i].id, other_university_name: universities[i].education_name })
  }

  const degreeSelectHandler = (i) => {
    setForm({ ...form, degree_id: degree[i].id, other_degree_name: degree[i].degree_name })
  }
  const CollageSelectHandler = (i) => {
    setForm({ ...form, collage_id: colleges[i].id, other_collage_name: colleges[i].education_name })
  }

  const addUniversityHandler = (e) => {
    setForm({ ...form, university_id: '', other_university_name: e.target.value })
    let ul = universityList;
    ul = ul.filter((item) => {
      let regex = new RegExp(`^${e.target.value}`,"gi");
      return item.education_name.match(regex);
    })
    setUniversities(ul);
  }

  const addDegreeHandler = (e) => {
    setForm({...form,degree_id: '', other_degree_name: e.target.value});
    let ul = degreeList;
    ul = ul.filter(item => {
      let regex = new RegExp(`${e.target.value}`,"gi");
      return item.degree_name.match(regex);
    })
    setDegree(ul);
  }

  const addCollageHandler = (e) => {
    setForm({ ...form, collage_id: '', other_collage_name: e.target.value })
    let cl = collageList;
    cl = cl.filter((item) => {
      let regex = new RegExp(`^${e.target.value}`,"gi");
      return item.education_name.match(regex);
    })
    setColleges(cl);
  }
  async function handleSubmit(e,isAdd) {
    e.preventDefault();
    let body = form
    body.location = location;
    body.user_id = user_id
    if(file) body.upload_degree = file
    if(isAdd){
      body.reload_request = "yes"
    }
    body = JsonToFormData(body)
    try {
      let data = await dispatch(addEducation({ auth: token, body,dispatch })).unwrap()
      if(isAdd){
        dispatch(toggleNewEducation(true))
      }
      if(data){
        setUpdated(true)
      }
    } catch (error) {
      console.log(error)
      setShowAlert(true)
    } finally {
      setShowAlert(true)
     
    }
  }

  useEffect(() =>{
      dispatch(getDegreeList(token)).unwrap()
      dispatch(getUniversityList(token)).unwrap()
      dispatch(getCollageList(token)).unwrap()
  },[])

  useEffect(() => {

      if (degreeList.length === 0) dispatch(getDegreeList(token)).unwrap()
      if (universityList.length === 0) dispatch(getUniversityList(token)).unwrap()
      if (collageList.length === 0) dispatch(getCollageList(token)).unwrap()


    return () => { }
  }, [degreeList.length, universityList.length, collageList.length, dispatch, token])
  useEffect(() => {
    console.log(newEducation)
    if (!newEducation&&education && education.length > 0) {
      let lastEducation = education[education.length - 1]
      console.log(lastEducation,"this is last education")
      setForm({
        ...form,
        degree_id: lastEducation.degree_id,
        university_id: lastEducation.university_id,
        other_degree_name: lastEducation.other_degree_name || lastEducation.degree_name,
        other_university_name: lastEducation.university_name,
        collage_id: lastEducation.collage_id,
        other_collage_name: lastEducation.collage_name,
        location: lastEducation.location,
        course_start_date: lastEducation.course_start_date.split("-").reverse().join("-"),
        course_end_date: lastEducation.course_end_date.split("-").reverse().join("-"),
        course_cgpa: lastEducation.course_cgpa,
        course_extra_activity: lastEducation.course_extra_activity,
        course_project_info: lastEducation.course_project_info,
        education_record_id: lastEducation.education_record_id,
        
      })
      setLocation(lastEducation.location)
    } else {
      console.log('reset')
          if(updated){
            setForm({
              degree_id: '',
              university_id: '',
              other_degree_name: '',
              other_university_name: [],
              collage_id: '',
              other_collage_name: '',
              location: '',
              course_start_date: '',
              course_end_date: '',
              course_cgpa: '',
              course_extra_activity: '',
              course_project_info: '',
              education_record_id: '',
              
            })
            setUpdated(false);
          }
    }

    return () => {
      
    }
  }, [newEducation,education,loading])
  useEffect(()=>{

    if(reloadFlag&&!loading){
      dispatch(reload())
    }
  },[reloadFlag,loading])

  return (
    <>
      <h1>Now, let’s move on to your learning journey so far. </h1>
      {showAlert && !loading && <Alert error={error} message={error ? Object.values(message) : message} />}
      <div className="form-row">
        {/* <IconSelect value={form.degree_id} name={'degree_id'} handleChange={handleChange} label='Degree/Qualification*' placeholder={'e.g. MCA (Masters in Computer Applications)'} width={50} options={[{id:0,degree_name:'Select your degree'},...degreeList]} name_field={'degree_name'} /> */}
        <SuggestiveInput value={form.other_degree_name} name={'degree_id'} selected={degreeSelectHandler} label='Degree/Qualification*' placeholder={'e.g. BSc Computer Science'} width={50} searchHandler={addDegreeHandler} suggestions={degree} name_field={'degree_name'} />
        <SuggestiveInput value={form.other_university_name} name={'university_id'} selected={UniversitySelectHandler} label='University/Institution*' placeholder={'e.g. University of Delhi'} width={50} searchHandler={addUniversityHandler} suggestions={universities} name_field={'education_name'} />
      </div>
      <div className="form-row">
        <SuggestiveInput value={form.other_collage_name} name={'collage_id'} selected={CollageSelectHandler} label='College*' placeholder={'e.g. Bharti College'} width={50} searchHandler={addCollageHandler} suggestions={colleges} name_field='education_name' />
        <IconAutoComplete icon={<Location />} value={form.location} form={location} setForm={setLocation} name="address" type='text' label="Location" placeholder="eg. New Delhi" width={45} validation={message&&message.address} />
      </div>
      <div className="flex-row-end" style={{width: '100%'}}>
        <label className="control control-checkbox">
          Online Course
          <input name type="checkbox" />
          <div className="control_indicator"></div>
        </label>
      </div>
      <div className="form-row">
        <IconInput value={form.course_start_date} type={'date'} handleChange={handleChange} name={'course_start_date'} label='Duration (From)*' placeholder={'Bachelor/Honors'} width={50} />
        <IconInput value={form.course_end_date} type={'date'} handleChange={handleChange} name={'course_end_date'} label='Duration (to)*' placeholder={'i.e. University name'} width={50} />
      </div>
      <IconInput value={form.course_cgpa} name={'course_cgpa'} type="number" handleChange={handleChange} label='CGPA' placeholder={'CGPA'} width={100} />
      {false && <IconInput name={'skills_learned'} label='Key Skills learnt' placeholder={'Skills mastered in this course'} width={100} />}
      <IconTextArea value={form.course_extra_activity} rows={8} name={'course_extra_activity'} handleChange={handleChange} label='Extra-curricular activities' placeholder={'Extra-academic participation'} width={100} />
      <IconInput value={form.course_project_info} name={'course_project_info'} handleChange={handleChange} label='Projects, if any' placeholder={'Academic projects undertaken'} width={100} />
      <div className="form-row">
        <div className="col-100 align-start g-0-5">
          <label htmlFor="">Upload Degree</label>
          <DragDropInput file={file} setFile={setFile} />
        </div>
      </div>
      <div className="flex-row-end">
        <button onClick={(e) => handleSubmit(e,true)} className="btn-fit transparent g-0-5"><AddCircle width={30} /> Add Another Qualification</button>
      </div>
      <Control handleSubmit={(e) => {
        handleSubmit(e)
        dispatch(toggleNewEducation(false))
        setReloadFlag(true)
      }} />

    </>
  )
}
const JsonToFormData = (json = {}) => {
  var form_data = new FormData();
  for (var key in json) {
    form_data.append(key, json[key]);
  }

  return form_data
}