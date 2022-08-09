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
import { addJobSkills, selectLastCompany, selectLastJob, selectResumeError, selectResumeLoading, selectResumeMessage } from '../../redux/Features/ResumeSlice';
import Control from './Control';
import Alert from '../Alert/Alert';
import MultiSelectedOptions from './MultiSelectedOptions';
import parse from 'html-react-parser';
const DEBOUNCE_DELAY = 600;

export default function Experience5() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        job_skills: [],
        role_responsibilities: '',
        external_client_desc: '',
        user_company_record_id: '',
        user_company_job_record_id: '',

    })
    const [selected_options, set_Selected_options] = useState([])
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const skillList = useSelector(selectSkillList)
    const [search, setSearch] = useState('')

    const roleSuggestions = useSelector(selectRoleSuggestionList)
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const lastJob = useSelector(selectLastJob)
    const lastCompany = useSelector(selectLastCompany)
    const job_title_id = lastJob.designation_id

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
        skill_name: '',
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
        console.log(temp.skill_id,search,);
        temp.skill_name = temp.skill_id == '' ? search : temp.skill_name;
        console.log(temp,'this is temp');
        set_Selected_options([...selected_options, temp])
        document.getElementById('iconinput-Skills').value = '';
        document.getElementById('iconinput-complexity').value = '';


    }
    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
    }
    const handleSuggestion = (value) => {
        console.log(value)
        setForm({ ...form, role_responsibilities: form.role_responsibilities + value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.job_skills = JSON.stringify(body.job_skills)
        body.user_id = user_id
        body.job_skills = JSON.stringify(selected_options.map((x) => { return { skill_id: x.skill_id, skill_name: x.skill_name, skill_complexity: x.skill_complexity } }))
        body.user_company_job_record_id = lastJob.company_job_record_id
        body.user_company_record_id = lastCompany.company_record_id
        console.log(body,'this is body');
        try {
            dispatch(addJobSkills({ auth: token, body })).unwrap()
            console.log(form)
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
        if ((lastJob || lastCompany) && form.user_company_record_id === '') {
            setForm({
                ...form,
                role_responsibilities: lastJob.role_responsibilties ? parse(lastJob.role_responsibilties) : "",
                external_client_desc: lastJob.external_client_desc,
                user_company_record_id: lastCompany.company_record_id,
                user_company_job_record_id: lastJob.company_job_record_id,
                job_title_id
            })
            set_Selected_options(lastJob.skills || [])
        }

        return () => {

        }
    }, [lastJob, lastCompany, form])


    return (
        <>
            {console.log(form)}
            {showAlert && !loading && <Alert error={error} message={error ? Object.values(message) : message} />}
            <h1>So far so good! Now it’s time to flaunt your amazing skills.</h1>
            <MultiSelectedOptions options={selected_options} value_field='skill_name' subValue_field='skill_complexity' deleteHandler={handleDeleteSkill} />
            <div className="form-row">

                <SuggestiveInput name='Skills' searchHandler={searchHandler} label='Please enter all the skills you applied' placeholder='Select Skills' width={70} suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />

                <IconInput name='complexity' handleChange={handleComplexity} label='Expertise level' placeholder='60%' width={20} />
                <button onClick={handleAddSkill} className='btn-fit transparent'><AddCircle /></button>
            </div>
            <div className="form-col">
                <div className="flex-row-between align-stretch g-1 role-and-suggestions">
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
                <IconInput value={lastJob.external_client_desc} name='external_client_desc' handleChange={handleChange} label='Have you worked for any external clients? If yes, please mention below:' placeholder='Which clients did you work for' width={100} />
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
                suggestions[0] ?
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
                    :
                    <div className="col-100">
                        <p className='text-center w-100' >No Suggestions found</p>
                    </div>
            }


        </div>
    )
}