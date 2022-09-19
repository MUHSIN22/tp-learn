import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice'
import { getCollageList, getDegreeList, getUniversityList, selectCollageList, selectDegreeList, selectUniversityList } from '../../../redux/Features/MasterSlice'
import { addEducation, reload, selectEducation, selectNewEducation, selectResumeError, selectResumeLoading, selectResumeMessage, setReloadDecider, toggleNewEducation } from '../../../redux/Features/ResumeSlice'
import FormController from '../../../Util Components/FormController/FormController'
import DateInput from '../../../Util Components/Inputs/DateInput/DateInput'
import LocationInput from '../../../Util Components/Inputs/LocationInput/LocationInput'
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput'
import SuggestionInput from '../../../Util Components/Inputs/SuggestionInput/SuggestionInput'
import TextArea from '../../../Util Components/Inputs/TextArea/TextArea'
import Alert from '../../Alert/Alert'
import DragDropInput from '../../DragDropInput/DragDropInput'
import './EducationForm.css'
import { ReactComponent as AddCircle } from '../../../Assests/icons/add-circle.svg';

export default function EducationForm() {
    const dispatch = useDispatch()
    const [location, setLocation] = useState('')
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
    const [universities, setUniversities] = useState(universityList)
    const [colleges, setColleges] = useState(collageList);
    const [degree, setDegree] = useState(degreeList);
    const [updated, setUpdated] = useState(false);
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
            let regex = new RegExp(`^${e.target.value}`, "gi");
            return item.education_name.match(regex);
        })
        setUniversities(ul);
    }

    const addDegreeHandler = (e) => {
        setForm({ ...form, degree_id: '', other_degree_name: e.target.value });
        let ul = degreeList;
        ul = ul.filter(item => {
            let regex = new RegExp(`${e.target.value}`, "gi");
            return item.degree_name.match(regex);
        })
        setDegree(ul);
    }

    const addCollageHandler = (e) => {
        setForm({ ...form, collage_id: '', other_collage_name: e.target.value })
        let cl = collageList;
        cl = cl.filter((item) => {
            let regex = new RegExp(`^${e.target.value}`, "gi");
            return item.education_name.match(regex);
        })
        setColleges(cl);
    }
    async function handleSubmit(e, isAdd) {
        e.preventDefault();
        let body = form
        body.location = location;
        body.user_id = user_id
        if (file && typeof file === "object") body.upload_degree = file
        if (isAdd) {
            body.reload_request = "yes"
        }
        body = JsonToFormData(body)
        try {
            dispatch(setReloadDecider(true))
            let data = await dispatch(addEducation({ auth: token, body, dispatch })).unwrap()
            if (isAdd) {
                dispatch(toggleNewEducation(true))
            }
            if (data) {
                setUpdated(true)
            }
        } catch (error) {
            setShowAlert(true)
        } finally {
            setShowAlert(true)
        }
    }

    useEffect(() => {
        dispatch(getDegreeList(token)).unwrap()
        dispatch(getUniversityList(token)).unwrap()
        dispatch(getCollageList(token)).unwrap()
    }, [])

    useEffect(() => {

        if (degreeList.length === 0) dispatch(getDegreeList(token)).unwrap()
        if (universityList.length === 0) dispatch(getUniversityList(token)).unwrap()
        if (collageList.length === 0) dispatch(getCollageList(token)).unwrap()


        return () => { }
    }, [degreeList.length, universityList.length, collageList.length, dispatch, token])
    useEffect(() => {
        if (!newEducation && education && education.length > 0) {
            let lastEducation = education[education.length - 1]
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
            setFile(lastEducation.upload_degree)
            setLocation(lastEducation.location)
        } else {
            if (updated) {
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
                setLocation('')
                setUpdated(false);
            }
            setLocation('')
        }

        return () => {

        }
    }, [newEducation, education, loading])
    useEffect(() => {

        if (reloadFlag && !loading) {
            dispatch(reload())
        }
    }, [reloadFlag, loading])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Now, let's move on to your learning journey so far</h2>
            <div className="grid-1-1">
                <SuggestionInput value={form.other_degree_name} name={'degree_id'} selected={degreeSelectHandler} label='Degree/Qualification*' placeholder={'e.g. BSc Computer Science'} searchHandler={addDegreeHandler} suggestions={degree} name_field={'degree_name'} />
                <SuggestionInput value={form.other_university_name} name={'university_id'} selected={UniversitySelectHandler} label='University/Institution*' placeholder={'e.g. University of Delhi'} searchHandler={addUniversityHandler} suggestions={universities} name_field={'education_name'} />
            </div>
            <div className="grid-1-1">
                <SuggestionInput value={form.other_collage_name} name={'collage_id'} selected={CollageSelectHandler} label='College*' placeholder={'e.g. Bharti College'} searchHandler={addCollageHandler} suggestions={colleges} name_field='education_name' />
                <LocationInput value={form.location} form={location} setForm={setLocation} name="address" type='text' label="Location" placeholder="eg. New Delhi" validation={message && message.address} />
            </div>
            <label className="control control-checkbox">
                Online Course
                <input name type="checkbox" />
                <div className="control_indicator"></div>
            </label>
            <div className="grid-1-1">
                <DateInput value={form.course_start_date.length > 7 ? new Date(form.course_start_date).getFullYear() + "-" + new Date(form.course_start_date).getMonth() : form.course_start_date} type={'date'} handleChange={handleChange} name={'course_start_date'} label='Duration (From)*' placeholder={'Bachelor/Honors'} />
                <DateInput value={form.course_end_date.length > 7 ? new Date(form.course_end_date).getFullYear() + "-" + new Date(form.course_end_date).getMonth() : form.course_end_date} type={'date'} handleChange={handleChange} name={'course_end_date'} label='Duration (to)*' placeholder={'i.e. University name'} />
            </div>
            <PlainInput value={form.course_cgpa} name={'course_cgpa'} type="number" handleChange={handleChange} label='CGPA' placeholder={'CGPA'} />
            <TextArea value={form.course_extra_activity} rows={8} name={'course_extra_activity'} handleChange={handleChange} label='Extra-curricular activities' placeholder={'Extra-academic participation'} />
            <PlainInput value={form.course_project_info} name={'course_project_info'} handleChange={handleChange} label='Projects, if any' placeholder={'Academic projects undertaken'} />
            <div className="common-input-wrapper">
                <label htmlFor="">Upload File</label>
                <DragDropInput file={file} setFile={setFile} />
            </div>
            <button onClick={(e) => handleSubmit(e,true)} className="btn-fit transparent g-0-5" style={{marginLeft: "auto"}}><AddCircle width={30} /> Add Another Qualification</button>
            <FormController handleSubmit={(e) => {
                handleSubmit(e)
                dispatch(toggleNewEducation(false))
                setReloadFlag(true)
            }} />
        </div>
    )
}
const JsonToFormData = (json = {}) => {
    var form_data = new FormData();
    for (var key in json) {
        form_data.append(key, json[key]);
    }

    return form_data
}
