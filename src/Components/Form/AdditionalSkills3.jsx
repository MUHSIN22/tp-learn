import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DragDropInput from '../DragDropInput/DragDropInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addBio, selectBio, selectFirstJob, selectLastJob, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage, selectUserInfo } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import { getRoleSuggestionList, getSummaryList, selectRoleSuggestionList, selectSummarySuggestionList } from '../../redux/Features/MasterSlice';
import Control from './Control';

export default function AdditionalSkills3() {
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

    const handleSuggestion = (value) => {
        setForm({ ...form, your_bio: form.your_bio + value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        if(file) body.profile_pic = file
        
        let form_Data = JsonToFormData(body)
        try {
            dispatch(addBio({ auth: token, body:form_Data })).unwrap()
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
            dispatch(getSummaryList({ auth: token, body })).unwrap().then((res) => {
            })
        } catch (e) {
        }

        return () => {

        }
    }, [dispatch, job_title_id, token])
    useEffect(() => {
      setForm({...form, your_bio: bio})
      return () => {
      }
    }, [])
    
    return (
        <>
            <h1 className='text-left'>Tell us about yourself.</h1>
            {showAlert &&!loading&&<Alert error={error} message={error&&message ? Object.values(message): message} />}
            <div className="form-col">
                <div className="flex-row-between align-stretch g-1 role-and-suggestions">
                    <div className="editor col-50 g-0-5">
                        <label className='text-left' htmlFor="">Professional summary</label>
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
            </div>
            <div className="form-col align-start g-0-5">
                <label htmlFor="">Upload your profile picture</label>
                <DragDropInput file={file} setFile={setFile}/>
            </div>

            <Control handleSubmit={handleSubmit} />
        </>


    )
}
function SuggestionBox({ handleSelect = () => { }, suggestions = [], name_field }) {
    return (
        <div className="suggestions col-50 align-center">
            <p className='head'>Suggestions</p>
            {
                (suggestions && suggestions[0]) ?
                    <div className="col-100">
                        {suggestions.map((s, i) => <div className="suggestion-card flex-row-start align-start g-0-5" onClick={() => handleSelect(s[name_field])}>
                            <div className="col-20">
                                <button><AddCircle /></button>
                            </div>
                            <div className="col-100">
                                <p>{s[name_field]}</p>
                            </div>
                        </div>)
                        }
                    </div>
                    :
                    <div className="col-100">
                        <p className="text-center">No suggestions</p>
                    </div>
            }


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
  
  