import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from '../../../DebouncedSearch';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { getJobNatureList, searchCompany, selectCompanyList, selectJobNatureList } from '../../../redux/Features/MasterSlice';
import { addCompany, resetError, selectLastCompany, selectNewJob, selectResumeError, selectResumeLoading, selectResumeMessage } from '../../../redux/Features/ResumeSlice';
import FormController from '../../../Util Components/FormController/FormController';
import SuggestionInput from '../../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import CardRadioGroup from '../../CardRadioGroup/CardRadioGroup';
import SuggestiveInput from '../../IconInput/SuggestiveInput';

const DEBOUNCE_DELAY = 600;

export default function CompanyBasicForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        user_id: '',
        nature_of_job_id: '',
        company_id: '',
        other_company_name: '',
        user_company_record_id: '',
    })
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const companyList = useSelector(selectCompanyList)
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const message = useSelector(selectResumeMessage);
    const error = useSelector(selectResumeError);
    const loading = useSelector(selectResumeLoading)
    const [showAlert, setShowAlert] = useState(false);
    const jobNatureList = useSelector(selectJobNatureList)
    const lastCompany = useSelector(selectLastCompany)
    const newJob = useSelector(selectNewJob)
    const [isNewCompany, setNewCompany] = useState(true)
    const searchCompanyList = useCallback(
        (keywords) => {
            try {
                dispatch(searchCompany({ auth: token, body: { search_company: keywords } })).unwrap()
            } catch (error) {
            }
        },
        [dispatch, token],
    )

    function searchHandler(e) {
        setSearch(e.target.value)
    }

    const companySearchToggler = () => {
        setNewCompany(true)
    }

    const selectHandler = (i) => {
        setForm({ ...form, company_id: companyList[i].id })
        setSearch(companyList[i].name)
        setNewCompany(false)
    }
    function handleSubmit() {
        let body = form
        if (isNewCompany) {
            body.company_id = ""
        }
        if (form.company_id.length < 1) {
            body.other_company_name = debouncedSearchState
        }
        if (form.company_name !== "" && form.company_name !== search) {
            form.other_company_name = search
            form.company_id = ""
        }

        body.user_id = user_id
        try {
            dispatch(addCompany({ auth: token, body, dispatch })).unwrap()
        } catch (error) {
        } finally {
            setShowAlert(true);
        }

    }

    useEffect(() => {

        if (debouncedSearchState.length > 1) searchCompanyList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState, searchCompanyList])
    useEffect(() => {
        if (jobNatureList.length === 0) dispatch(getJobNatureList(token)).unwrap()
        return () => {

        }
    }, [jobNatureList.length, dispatch, token])

    useEffect(() => {
        if (message === 'Company Added') {

            // dispatch(nextForm())
        }
        return () => {
            dispatch(resetError())
        }
    }, [message, dispatch])
    useEffect(() => {
        if (!newJob && lastCompany) {
            setForm({
                ...form,
                nature_of_job_id: lastCompany.nature_of_job_id,
                company_id: lastCompany.company_id,
                user_company_record_id: lastCompany.company_record_id,
                company_name: lastCompany.company_name

            })
            setSearch(lastCompany.company_name)
        }

        return () => {

        }
    }, [newJob, lastCompany])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Let's start with your latest Job.</h2>
            <SuggestionInput
                value={search}
                name={'company_name'}
                placeholder={'Company / Organization Name'}
                label='Company Name'
                width={98}
                suggestions={companyList}
                name_field='name'
                searchHandler={(e) => {
                    searchHandler(e);
                    companySearchToggler();
                }}
                selected={selectHandler}
            />
            <CardRadioGroup autofill  label={'Select the nature of your job?'} name={'nature_of_job_id'} state={form} setState={setForm} option={jobNatureList} name_field={'job_name'} />
            <FormController handleSubmit={handleSubmit}/>
        </div>
    )
}
