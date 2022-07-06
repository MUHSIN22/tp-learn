import React, { useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DragDropInput from '../DragDropInput/DragDropInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addBio, nextForm, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import { getRoleSuggestionList, selectRoleSuggestionList } from '../../redux/Features/MasterSlice';
import Control from './Control';

export default function AdditionalSkills3({data}) {
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        your_bio: data.bio || "",
        profile_pic: '',

    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const resumeInfo = useSelector(selectResumeInfo)
    const job_title_id = resumeInfo.company && resumeInfo.company[0].job_role[0].designation_id
    const roleSuggestions = useSelector(selectRoleSuggestionList)
    const handleSuggestion = (value) => {
        setForm({ ...form, your_bio: form.your_bio + value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        body.profile_pic = file
        if(body.profile_pic=='' || !body.profile_pic){
            delete body.profile_pic
        }
        let form_Data = JsonToFormData(body)
        try {
            dispatch(addBio({ auth: token, body:form_Data })).unwrap()
            console.log(form)
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    useEffect(() => {
        try {
            const body = {
                job_title_id: job_title_id,
                search_role: '',
                page_no: ''
            }
            dispatch(getRoleSuggestionList({ auth: token, body })).unwrap()
        } catch (e) {
            console.log(e)
        }

        return () => {

        }
    }, [dispatch, job_title_id, token])

    return (
        <>
            <h1 className='text-left'>Tell us about yourself.</h1>
            {showAlert && !loading && <Alert error={error} message={error ? 'Failed to update Bio' : 'Bio updated'} />}
            <div className="form-col">
                <div className="flex-row-between align-stretch g-1">
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
                    <SuggestionBox handleSelect={handleSuggestion} suggestions={roleSuggestions} name_field={'role_description'} />
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
  
  