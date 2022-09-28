import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { getSummaryList, selectSummarySuggestionList } from '../../../redux/Features/MasterSlice';
import { addBio, selectBio, selectFirstJob, selectLastJob, selectProfilePic, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage, selectUserInfo } from '../../../redux/Features/ResumeSlice';
import FormController from '../../../Util Components/FormController/FormController';
import SuggestionBox from '../../../Util Components/SuggestionBox/SuggestionBox';
import Alert from '../../Alert/Alert';
import DragDropInput from '../../DragDropInput/DragDropInput';

export default function AboutForm() {
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        your_bio: '',

    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const resumeInfo = useSelector(selectResumeInfo)
    const recordDetails = useSelector(selectUserInfo)
    const firstjob = useSelector(selectFirstJob)
    const job_title_id = firstjob.designation_id
    const summarySuggestions = useSelector(selectSummarySuggestionList)
    const bio = useSelector(selectBio)
    const lastJob = useSelector(selectLastJob)
    const profile_pic = useSelector(selectProfilePic)

    const handleSuggestion = (value) => {
        setForm({ ...form, your_bio: form.your_bio + value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        if (file && typeof file === "object") body.profile_pic = file

        let form_Data = JsonToFormData(body)
        try {
            dispatch(addBio({ auth: token, body: form_Data })).unwrap()
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
        try {
            const body = {
                job_title_id: lastJob.designation_id,
                search_role: '',
                page_no: 12
            }
            console.log(lastJob);
            setFile()
            dispatch(getSummaryList({ auth: token, body })).unwrap().then((res) => {
            })
        } catch (e) {
        }

        return () => {

        }
    }, [dispatch, job_title_id, token])
    useEffect(() => {
        setForm({ ...form, your_bio: bio })
        setFile(profile_pic)
        return () => {
        }
    }, [])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Professional Summary</h2>
            {showAlert &&!loading&&<Alert error={error} message={error&&message ? Object.values(message): message} />}
            <div className="grid-1-1">
                <div className="common-input-wrapper">
                    <label className='text-left' htmlFor="">Mention your unique skillset, professional experience and accomplishments in brief</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data={form.your_bio}
                        config={{ placeholder: 'Keep it brief and to the point' }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setForm({ ...form, your_bio: data })
                        }}
                    />
                </div>
                <SuggestionBox handleSelect={handleSuggestion} suggestions={summarySuggestions} name_field={'summery'} />
            </div>
            <div className="common-input-wrapper">
                <label htmlFor="">Upload your profile picture</label>
                <DragDropInput file={file} setFile={setFile}/>
            </div>
            <FormController handleSubmit={handleSubmit} />
        </div>
    )
}
const JsonToFormData=  (json={}) => {
    var form_data = new FormData();
    for (var key in json) {
      form_data.append(key, json[key]);
    }
  
    return form_data
  }
  