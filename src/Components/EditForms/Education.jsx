import React, { useEffect, useState } from 'react'
import DragDropInput from '../DragDropInput/DragDropInput'
import IconInput from '../IconInput/IconInput'
import IconTextArea from '../IconInput/IconTextArea'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import IconSelect from '../IconInput/IconSelect';
import { useDispatch, useSelector } from 'react-redux';
import { getCollageList, getDegreeList, getUniversityList, selectCollageList, selectDegreeList, selectUniversityList } from '../../redux/Features/MasterSlice';
import { addEducation, selectResumeError, selectResumeLoading, reload } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import Control from './Control';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import moment  from 'moment'
export default function Education({data}) {
  console.log("===========================",data)
  let {
    degree_id,
    university_id,
    university_name,
    collage_id,
    collage_name,
    location,
    course_start_date,
    course_end_date,
    course_cgpa,
    course_extra_activity,
    course_project_info,
    education_record_id,
    upload_degree} = data;
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    degree_id: degree_id || 1,
    university_id: 135 ||university_id || '',
    other_university_name:university_name || [],
    collage_id: collage_id,
    other_collage_name: collage_name || '',
    location: location,
    course_start_date:moment(course_start_date,'DD-MM-YYYY').format('YYYY-MM-DD') ,
    course_end_date: moment(course_end_date,'DD-MM-YYYY').format('YYYY-MM-DD'),
    course_cgpa: course_cgpa,
    course_extra_activity:  course_extra_activity || '',
    course_project_info: course_project_info || '',
    education_record_id: education_record_id,
    upload_degree: '',
    university_name : university_name || ''

  })
  const [file, setFile] = useState(null)
  const error = useSelector(selectResumeError);
  const loading = useSelector(selectResumeLoading);
  const [showAlert, setShowAlert] = useState(false);
  const user_id = useSelector(selectUser_id)
  const token = useSelector(selectAuthToken)
  const degreeList = useSelector(selectDegreeList)
  const universityList = useSelector(selectUniversityList);
  const collageList = useSelector(selectCollageList);
  function handleChange(evt) {
    const value = evt.target.value;

    setForm({
      ...form,
      [evt.target.name]: value
    });
  }

  const UniversitySelectHandler = (i) => {
    setForm({ ...form, university_id: universityList[i].id })
  }
  const CollageSelectHandler = (i) => {
    setForm({ ...form, collage_id: collageList[i].id })
  }

  const addUniversityHandler = (e) => {
    setForm({ ...form, university_id: '',other_university_name:e.target.value })
  

  }
  const addCollageHandler = (e) => {
    setForm({ ...form, collage_id: '', other_collage_name: e.target.value })
  
  }
  function handleSubmit(e) {
    e.preventDefault();
    let body = form
    body.user_id = user_id
    body.upload_degree = file
    body = JsonToFormData(body)

    try {
      dispatch(addEducation({ auth: token, body })).unwrap()
      dispatch(reload())
    } catch (error) {
      showAlert(true)
    } finally {
      setShowAlert(true)
    }
  }

  useEffect(() => {
    if (degreeList.length === 0) dispatch(getDegreeList(token)).unwrap()
    if (universityList.length === 0) dispatch(getUniversityList(token)).unwrap()
    if (collageList.length === 0) dispatch(getCollageList(token)).unwrap()

    return () => { }
  }, [degreeList.length, universityList.length, collageList.length, dispatch, token])

  return (
    <>
      <h1>Now, let’s move on to your learning journey so far. </h1>
      {showAlert && !loading && <Alert error={error} message={error ? 'Failed to add Education Details' : 'Job Education Details'} />}
      <div className="form-row">
        <IconSelect name={'degree_id'} handleChange={handleChange} label='Degree/Qualification' placeholder={'e.g. MCA (Masters in Computer Applications)'} width={50} options={degreeList} name_field={'degree_name'} defaultValue={form.degree_id}/>
        <SuggestiveInput name={'university_id'} selected={UniversitySelectHandler} label='University/Institution' placeholder={'e.g. University of Delhi'} width={50} searchHandler={addUniversityHandler} suggestions={universityList} name_field={'education_name'} defaultValue={form.university_name}/>
      </div>
      <div className="form-row">
        <SuggestiveInput name={'collage_id'} selected={CollageSelectHandler} label='College' placeholder={'e.g. Bharti College'} width={50} searchHandler={addCollageHandler} suggestions={collageList} name_field='education_name' defaultValue={form.other_collage_name}/>
        <IconInput name={'location'} handleChange={handleChange} label='Your Location' placeholder={'e.g. New Delhi'} width={50}  defaultValue={form.location}/>
      </div>
      <div className="flex-row-end">
        <label className="control control-checkbox">
          Online Course
          <input name type="checkbox" />
          <div className="control_indicator"></div>
        </label>
      </div>
      <div className="form-row">
        <IconInput type={'date'} handleChange={handleChange} name={'course_start_date'} label='Duration (From)' placeholder={'Bachelor/Honors'} width={50} defaultValue={form.course_start_date}/>
        <IconInput type={'date'} handleChange={handleChange} name={'course_end_date'} label='Duration (to)' placeholder={'i.e. University name'} width={50} defaultValue={form.course_end_date}/>
      </div>
      <IconInput name={'course_cgpa'} handleChange={handleChange} label='CGPA' placeholder={'CGPA'} width={100} defaultValue={form.course_cgpa}/>
      {false&&<IconInput name={'skills_learned'} label='Key Skills learnt' placeholder={'Skills mastered in this course'} width={100} />}
      <IconTextArea rows={8} name={'course_extra_activity'} handleChange={handleChange} label='Extra-curricular activities' placeholder={'Extra-academic participation'} width={100} defaultValue={form.course_extra_activity}/>
      <IconInput name={'course_project_info'} handleChange={handleChange} label='Projects, if any' placeholder={'Academic projects undertaken'} width={100} defaultValue={form.course_project_info}/>
      <div className="form-row">
        <div className="col-100 align-start g-0-5">
          <label htmlFor="">Upload Degree</label>
          <DragDropInput file={file} setFile={setFile} />
        </div>
      </div>
      <div className="flex-row-end">
        <div className='col-30'>
        <button onClick={handleSubmit} className="btn primary g-0-5"> Save</button>
        </div>
      </div>
      {/* <Control handleSubmit={() => dispatch(reload())} /> */}

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