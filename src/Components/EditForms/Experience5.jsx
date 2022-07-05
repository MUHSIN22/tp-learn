import React, { useCallback, useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import IconInput from '../IconInput/IconInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../DebouncedSearch';
import { getRoleSuggestionList, searchSkills, selectRoleSuggestionList, selectSkillList } from '../../redux/Features/MasterSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import SuggestiveInput from '../IconInput/SuggestiveInput';
import { addJobSkills, nextForm, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage,changeEditPageDetails } from '../../redux/Features/ResumeSlice';
import Control from './Control';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
import parser from 'html-react-parser';
import { textContent } from 'domutils';

const DEBOUNCE_DELAY = 600;
export default function Experience5({data}) {
    let role_responsibilties = parser(data.role_responsibilties)
    role_responsibilties = role_responsibilties.replace( /(<([^>]+)>)/ig, '');
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        job_skills: data.skills || [],
        role_responsibilities: role_responsibilties || '',
        external_client_desc: data.external_client_desc || '',
        user_company_record_id: data.company_record_id || '',
        user_company_job_record_id: data.company_job_record_id || '',

    })
    const [selected_options,set_Selected_options] = useState([]) 
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const resumeInfo = useSelector(selectResumeInfo)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')

    const job_title_id = resumeInfo.company && resumeInfo.company[0].job_role[0].designation_id
    const roleSuggestions = useSelector(selectRoleSuggestionList)
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);

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
    function searchHandler(e) {
        setSearch(e.target.value)
    }
    const temp = {
        skill_id: '',
        skill_name:'',
        skill_complexity: ''
    }
    const selectSkillHandler = (i) => {

        temp.skill_id = skillList[i].id
        temp.skill_name = skillList[i].skill_name
    }
    const handleComplexity = (e) => {
        console.log(e.target.value)
        temp.skill_complexity = e.target.value
    }
    const handleAddSkill = () => {
        if(temp.skill_id==''){
            temp.skill_name=search;
        }
        console.log("tems",temp)
        set_Selected_options([...selected_options , temp])
        document.getElementById('iconinput-Skills').value = '';
        document.getElementById('iconinput-complexity').value = '';


    }
    const handleDeleteSkill = (i)=>{
      const newList =selected_options.filter((x,index)=> index!==i)
      set_Selected_options(newList) 
    }
    const handleSuggestion = (value) => {
        console.log(value)
        setForm({ ...form, role_responsibilities: form.role_responsibilities + value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        console.log("submit",selected_options)
        body.job_skills = JSON.stringify(body.job_skills)
        body.user_id = user_id
        body.job_skills =JSON.stringify( selected_options.map((x)=>{return {skill_id:x.skill_id, skill_complexity:x.skill_complexity,skill_name:x.skill_name} }))

        try {
            dispatch(addJobSkills({ auth: token, body })).unwrap()
            console.log(form)
            if(showAlert && !loading){
                dispatch(changeEditPageDetails({})).unwrap()
                }
        } catch (error) {
            showAlert(true)
        } finally {
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
    useEffect(() => {
        console.log(debouncedSearchState)
        set_Selected_options([...form.job_skills])
        if (debouncedSearchState.length > 1) searchSkillList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState, searchSkillList, dispatch])
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
    useEffect(() => {
        if (resumeInfo && (!form.user_company_job_record_id || !form.user_company_record_id)) {
            let last_Company = lastElement(resumeInfo.company)
            let user_company_record_id = last_Company.company_record_id
            let user_company_job_record_id = last_Company.job_role? lastElement(last_Company.job_role).company_job_record_id :''
            setForm({
                ...form,
                user_company_record_id,
                user_company_job_record_id
            })
        }

    }, [resumeInfo,form.user_company_job_record_id,form.user_company_record_id])

    useEffect(() => {
        if (showAlert && !loading ) {
            dispatch(changeEditPageDetails({})).unwrap()
        }

    }, [])
    return (
        <>
            {showAlert && !loading && <Alert error={error} message={error ? 'Failed to update Job skills' : 'Job skills updated'} />}
            <h1>So far so good! Now it’s time to flaunt your amazing skills.</h1>
            <MultiSelectedOptions options={selected_options} value_field='skill_name' subValue_field='skill_complexity'  deleteHandler={handleDeleteSkill} />
            <div className="form-row">
            
                <SuggestiveInput name='Skills' searchHandler={searchHandler} label='Please enter all the skills you applied' placeholder='Select Skills' width={70} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />

                <IconInput name='complexity' handleChange={handleComplexity} label='Expertise level' placeholder='60%' width={20} />
                <button onClick={handleAddSkill} className='btn-fit transparent'><AddCircle /></button>
            </div>
            <div className="form-col">
                <div className="flex-row-between align-stretch g-1">
                    <div className="editor col-50 g-0-5">
                        <label className='text-left' htmlFor="">Roles and Responsibilities</label>
                        <CKEditor

                            editor={ClassicEditor}
                            data={form.role_responsibilities}
                            config={{ placeholder: 'Keep it brief and to the point' }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setForm({ ...form, role_responsibilities: data })
                            }}
                        />
                    </div>
                    <SuggestionBox handleSelect={handleSuggestion} suggestions={roleSuggestions} name_field={'role_description'} />
                </div>
            </div>
            <div className="form-row">
                <IconInput name='external_client_desc' defaultValue={form.external_client_desc} handleChange={handleChange} label='Have you worked for any external clients? If yes, please mention below:' placeholder='Which clients did you work for' width={100} />
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
                {suggestions.map((s, i) => <div key={i} className="suggestion-card flex-row-start align-start g-0-5" onClick={() => handleSelect(s[name_field])}>
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
function lastElement(arr){
    return arr[arr.length - 1]
}