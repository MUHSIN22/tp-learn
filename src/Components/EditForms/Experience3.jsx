import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useDebounce from '../../DebouncedSearch'
import { resetError, selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { getCurrencyList, getFunctionalAreaList, getLevelList, searchDesignation, selectCurrencylist, selectDesignationList, selectFunctionalAreaList, selectManagementLevelList } from '../../redux/Features/MasterSlice'
import { addJobDesignation, addJobSalary, nextForm, SelectCompanyDetails, SelectCompanyJobRecordId, selectResumeError, selectResumeInfo, selectResumeLoading, selectResumeMessage } from '../../redux/Features/ResumeSlice'
import Alert from '../Alert/Alert'
import IconInput from '../IconInput/IconInput'
import IconSelect from '../IconInput/IconSelect'
import SuggestiveInput from '../IconInput/SuggestiveInput'
import Control from './Control'
const DEBOUNCE_DELAY = 600;
export default function Experience3() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        designation_id:'',
        other_designation_name:'',
        level_id:1,
        location:'',
        remote_work:'no',
        functional_area_id:1,
        user_company_record_id:'',
        user_company_job_record_id:'',
        start_date:'',
        start_salary:'',
        end_date:'',
        end_salary:'',
        start_salary_currency:'' ,
        end_salary_currency:'',
        current_working:'no',
        hide_salary:'no',

    })

    const [showAlert,setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const designationlist = useSelector(selectDesignationList);
    const managementLevelList = useSelector(selectManagementLevelList);
    const functionalAreaList = useSelector(selectFunctionalAreaList);
    const currencyList = useSelector(selectCurrencylist);
    const resumeInfo = useSelector(selectResumeInfo)
    const job_Record_id = useSelector(SelectCompanyJobRecordId);
    const [search, setSearch] = useState('')
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);

    const searchCompanyList = useCallback(
        (keywords) => {
            try {
                dispatch(searchDesignation({ auth: token, body: { search_job_title: keywords } })).unwrap()
            } catch (error) {
                console.log(error)
            }
        },
        [dispatch, token],
    )
    function searchHandler(e) {
        setSearch(e.target.value)
    }
    function handleDesignationForm(evt){
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const selectHandler = (i) => {
        setForm({ ...form, designation_id: designationlist[i].id })
    }
    function handleAddDesignation() {
        const body = {...form, user_id}
        if(form.remote_work!=='yes')  body.remote_work = 'no'
        if(form.hide_salary!=='yes')  body.hide_salary = 'no'
        if(form.current_working!=='yes')  body.current_working = 'no'
        console.log(form)
        try {
            dispatch(addJobDesignation({auth:token,body})).unwrap()
            
        } catch (error) {
            console.log(error);
        }finally{
            setShowAlert(true);
        }
    }

    useEffect(() => {
        console.log(debouncedSearchState)
        if (debouncedSearchState.length > 1) searchCompanyList(debouncedSearchState)

        return () => {

        }
    }, [debouncedSearchState, dispatch])

    useEffect(() => {
        if (managementLevelList.length === 0) dispatch(getLevelList(token)).unwrap()
        if (functionalAreaList.length === 0) dispatch(getFunctionalAreaList(token)).unwrap()
        if (currencyList.length === 0) dispatch(getCurrencyList(token)).unwrap()

        return () => {

        }
    }, [managementLevelList.length, functionalAreaList.length,currencyList.length, dispatch, token])


    useEffect(()=>{

        if(resumeInfo && (!form.user_company_record_id)){
            
            let last_Company = lastElement(resumeInfo.company)
            let user_company_record_id = last_Company.company_record_id
            
            setForm({ ...form,
                user_company_record_id,
            })
        }
       
    },[])
    useEffect(()=>{
        if(currencyList.length>0&& (form.start_salary_currency===''||form.end_salary_currency==='')) setForm({...form , start_salary_currency: currencyList[0].id, end_salary_currency: currencyList[0].id})
    },[currencyList])
    return (
        <>  
            {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Industry details': 'Industry details added'}/>}
            <h1>Now tell us about all the job roles at which you have worked, starting with the latest one.</h1>
            <div className="form-row">
                <SuggestiveInput icon={<></>} name={'designation_id'} placeholder={'Your job title'} label='Your Designation' width={45} suggestions={designationlist} name_field={'job_title_name'} searchHandler={searchHandler} selected={selectHandler} />
                <IconSelect name='level_id' handleChange={handleDesignationForm} label='Define your management level' placeholder='Your seniority level' width={45} options={managementLevelList} name_field={'level_name'} />
            </div>
            <div className="form-row">
                <IconInput name='location' handleChange={handleDesignationForm} label='Location' placeholder='Your place of work' width={45} />
                <IconSelect name='functional_area_id' handleChange={handleDesignationForm} label='Functional Area' placeholder='i.e. CXO Level' width={45} options={functionalAreaList} name_field='functional_area_name' />
            </div>
            <div className="flex-row-start">
                <label className="control control-checkbox">
                    I work remotely
                    <input name='remote_work' value={'yes'} onChange={handleDesignationForm} type="checkbox" />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <div className="form-row">
                <IconInput name='start_date' handleChange={handleDesignationForm} type='date' label='When did you start' placeholder='MM/DD/YYYY' width={40} />
                <IconInput name='start_salary'  handleChange={handleDesignationForm} label='Your starting package' placeholder='Per Annum' width={40} />
                <IconSelect name='start_salary_currency'  handleChange={handleDesignationForm} label='Currency' options={currencyList} name_field='currency_name' width={10} />
            </div>
            <div className="form-row">
                <IconInput name='end_date'  handleChange={handleDesignationForm} type='date' label='Last date of this role' placeholder='MM/DD/YYYY' width={40} />
                <IconInput name='end_salary'  handleChange={handleDesignationForm} label='Last drawn package in this role' placeholder='Per Annum' width={40} />
                <IconSelect name='end_salary_currency'  handleChange={handleDesignationForm} label='Currency' options={currencyList} name_field='currency_name' width={10} />
            </div>
            <div className="form-row">
                <div className="control-group">
                    <label className="control control-checkbox">
                        I am currently working in this job role
                        <input name='current_working' value={'yes'}  onChange={handleDesignationForm} type="checkbox" />
                        <div className="control_indicator"></div>
                    </label>
                </div>
            </div>
            <div className="control-group">
                <label className="control control-checkbox">
                     Hide my salary
                    <input name='hide_salary' value={'yes'} onChange={handleDesignationForm} type="checkbox" />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <div className="note">
                <p>Check this box to hide salary from others. It is only for data analytics and predicting your future salary.</p>
            </div>
            <Control handleSubmit={handleAddDesignation} />
        </>
    )
}
function lastElement(arr){
    return arr[arr.length - 1]
}