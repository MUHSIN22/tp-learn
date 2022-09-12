import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../DebouncedSearch';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { getRoleSuggestionList, searchSkills, selectRoleSuggestionList, selectSkillList } from '../../../redux/Features/MasterSlice';
import { addJobSkills, selectLastCompany, selectLastJob, selectNewRoles, selectResumeError, selectResumeLoading, selectResumeMessage, setResumeError } from '../../../redux/Features/ResumeSlice';
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput';
import SuggestionInput from '../../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import MultiSelectedOptions from '../../../Util Components/MultiSelectedOptions';
import parse from 'html-react-parser';
import SuggestionBox from '../../../Util Components/SuggestionBox/SuggestionBox'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './RolesAndResponsibilitiesForm.css'
import FormController from '../../../Util Components/FormController/FormController';
import Alert from '../../Alert/Alert';

const DEBOUNCE_DELAY = 600;
export default function RolesAndResponsibilitiesForm() {
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
    const newRoles = useSelector(selectNewRoles);

    const searchSkillList = useCallback(
        (keywords) => {
            try {
                dispatch(searchSkills({ auth: token, body: { search_skill: keywords } })).unwrap()
            } catch (error) {
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
        temp.skill_complexity = e.target.value
    }
    const handleAddSkill = async () => {
        temp.skill_name = temp.skill_id == '' ? search : temp.skill_name;
        if (parseInt(temp.skill_complexity) > 100 || temp.skill_complexity < 0) {
            dispatch(setResumeError({ skill_complexity: ["Skill complexity should be a percentage between 0 to 100"] }))
            setShowAlert(true)
            document.getElementById('iconinput-Skills').value = '';
            document.getElementById('iconinput-complexity').value = '';
            return true;
        }
        if ((temp.skill_id !== "" || temp.skill_name !== "") && temp.skill_complexity !== "") {
            set_Selected_options([...selected_options, temp])
            document.getElementById('iconinput-Skills').value = '';
            document.getElementById('iconinput-complexity').value = '';
        }
    }
    const handleDeleteSkill = (i) => {
        const newList = selected_options.filter((x, index) => index !== i)
        set_Selected_options(newList)
    }
    const handleSuggestion = (value) => {
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
        try {
            dispatch(addJobSkills({ auth: token, body, dispatch })).unwrap()
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    useEffect(() => {
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
        }

        return () => {

        }
    }, [dispatch, job_title_id, token])

    useEffect(() => {
        if ((lastJob || lastCompany) && form.user_company_record_id === '' && !newRoles) {
            setForm({
                ...form,
                role_responsibilities: lastJob.role_responsibilties ? parse(lastJob.role_responsibilties) : "",
                external_client_desc: lastJob.external_client_desc == "undefined" ? "" : lastJob.external_client_desc,
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
        <div className="main-form-wrapper">
            <h2 className="form-title">So far so good! Now it’s time to flaunt your amazing skills.</h2>
            {showAlert && !loading && <Alert error={error} message={error ? Object.values(message) : message} />}
            <MultiSelectedOptions options={selected_options} value_field='skill_name' subValue_field='skill_complexity' deleteHandler={handleDeleteSkill} />
            <div className="role-skills-container">
                <div className="skill-and-complexity">
                    <SuggestionInput name='Skills' searchHandler={searchHandler} label='Please enter all the skills you applied' placeholder='Select Skills' id="iconinput-Skills" suggestions={skillList} name_field={'skill_name'} selected={selectSkillHandler} />
                    <PlainInput name='complexity' handleChange={handleComplexity} label='Expertise level' placeholder='60%' type='number' id="iconinput-complexity" max={100}  />
                </div>
                <button className="btn-add" onClick={handleAddSkill} >Add Skill</button>
            </div>
            <div className="roles-and-suggestion-grid">
                <div className="common-input-wrapper">
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
            <FormController handleSubmit={handleSubmit} />
        </div>
    )
}
