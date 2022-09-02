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
import moment  from 'moment'
import Control from './Control'
import IconAutoComplete from '../IconInput/IconAutocomplete'
import { BiLocationPlus } from 'react-icons/bi'
const DEBOUNCE_DELAY = 600;
export default function Experience3({data}) {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        designation_id:data.designation_id,
        other_designation_name:data.other_designation_name || '',
        designation_name : data.designation_name,
        level_id:data.level_id,
        location:data.location || '',
        remote_work: data.remote_work ? 'yes' : 'no',
        functional_area_id:data.functional_area_id,
        user_company_record_id:data.user_company_record_id,
        user_company_job_record_id:data.user_company_job_record_id,
        start_date: moment(data.start_date,'DD-MM-YYYY').format('YYYY-MM-DD'),
        start_salary:data.start_salary,
        end_date: moment(data.end_date,'DD-MM-YYYY').format('YYYY-MM-DD'),
        end_salary:data.end_salary,
        start_salary_currency:data.start_salary_currency,
        end_salary_currency:data.end_salary_currency,
        current_working:data.current_working ? 'yes' : 'no',
        hide_salary:data.hide_salary ? 'yes' : 'no',

    })
    const [showAlert,setShowAlert] = useState(false);
    const [otherDesignation,setOtherDesignation] = useState(false);
    const [isCurrentWorking,setCurrentWorking] = useState(false)
    const [isRemoteWorking, setRemoteWorking] = useState(false);
    const [isHideSalary, setHideSalary] = useState(false);
    const [location,setLocation] = useState('')
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
    const [search, setSearch] = useState( data.designation_name || '')
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
        let value = evt.target.value;
        if(evt.target.type == 'checkbox'){
            value = form[evt.target.name] == 'yes' ? 'no' : 'yes';
        }
        console.log('========',value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const selectHandler = (i,selected, value) => {
        if(selected.id !== null){
            setForm({ ...form, designation_id: designationlist[i].id })
            setSearch(designationlist[i].job_title_name)
        }else{
            setOtherDesignation(true);
            setForm({ ...form, other_designation_name: value })
        }
    }
    function handleAddDesignation() {
        const body = {...form, user_id}
        if(form.remote_work!=='yes')  body.remote_work = 'no'
        if(form.hide_salary!=='yes')  body.hide_salary = 'no'
        if(form.current_working!=='yes')  body.current_working = 'no'
        console.log(form)
        try {
            dispatch(addJobDesignation({auth:token,body,dispatch})).unwrap()
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
        <div className='designation-form'>  
            {showAlert &&!loading&&<Alert error={error} message={error ? Object.values(message): message} />}
            <h1>Now tell us about all the job roles at which you have worked, starting with the latest one.</h1>
            <div className="form-row">
                <SuggestiveInput icon={<></>} value={search} name={'designation_id'} placeholder={'Your job title'} label='Your Designation' width={45} suggestions={[...designationlist,{id:null,job_title_name: "Add designation"}]} name_field={'job_title_name'} searchHandler={searchHandler} selected={selectHandler}  />
                <IconSelect value={form.level_id} name='level_id' handleChange={handleDesignationForm} label='Define your management level' placeholder='Your seniority level' width={45} options={[{id:0,level_name: "Select a level"},...managementLevelList]} name_field={'level_name'} />
            </div>
            <div className="form-row">
                <IconAutoComplete icon={<BiLocationPlus />} value={form.location} form={location} setForm={setLocation} name="address" type='text' label="Location" placeholder="Bangalore" width={45} validation={message&&message.address} />
                <IconSelect value={form.functional_area_id} name='functional_area_id' handleChange={handleDesignationForm} label='Functional Area' placeholder='i.e. CXO Level' width={45} options={[{id:0,functional_area_name: "Select a functional area"},...functionalAreaList]} name_field='functional_area_name' />
            </div>
            <div className="flex-row-start" style={{width: '100%'}}>
                <label className="control control-checkbox">
                    I work remotely
                    <input name='remote_work' value={isRemoteWorking ? 'yes' : 'no'} onChange={event => {
                        handleDesignationForm(event)
                        setRemoteWorking(!isRemoteWorking)
                    }} type="checkbox" checked={form.remote_work==='yes'} />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <div className="form-row">
                <IconInput value={form.start_date} name='start_date' handleChange={handleDesignationForm} type='date' label='When did you start' placeholder='MM/DD/YYYY' width={40} />
                <div className="salary-wrapper">
                    <IconInput value={form.start_salary} name='start_salary'  handleChange={handleDesignationForm} label='Your starting package' placeholder='120000' width={100} />
                    <IconSelect value={form.start_salary_currency} name='start_salary_currency'  handleChange={handleDesignationForm} label='Currency' options={currencyList} name_field='currency_name' width={100} />
                </div>
            </div>
                <div className="form-row">
                    {
                        !isCurrentWorking&&
                        <IconInput value={form.end_date} name='end_date'  handleChange={handleDesignationForm} type='date' label='Last date of this role' placeholder='MM/DD/YYYY' width={40} />
                    }
                    <div className="salary-wrapper">
                        <IconInput value={form.end_salary} name='end_salary'  handleChange={handleDesignationForm} label='Last drawn package in this role' placeholder='120000' width={100} />
                        <IconSelect value={form.end_salary_currency} name='end_salary_currency'  handleChange={handleDesignationForm} label='Currency' options={currencyList} name_field='currency_name' width={100} />
                    </div>
                </div>
            <div className="form-row">
                <div className="control-group">
                    <label className="control control-checkbox">
                        I am currently working in this job role
                        <input name='current_working' value={!isCurrentWorking ? 'yes' : "no"}  onChange={handleDesignationForm} type="checkbox" checked={form.current_working==='yes'} />
                        <div className="control_indicator"></div>
                    </label>
                </div>
            </div>
            <div className="control-group">
                <label className="control control-checkbox">
                     Hide my salary
                    <input name='hide_salary' value={!isHideSalary ? 'yes' : "no"} onChange={(event) => {
                        handleDesignationForm(event);
                        setHideSalary(!isHideSalary);
                    }} type="checkbox" checked={form.hide_salary==='yes'}  />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <div className="note">
                <p>Check this box to hide salary from others. It is only for data analytics and predicting your future salary.</p>
            </div>
            <Control handleSubmit={handleAddDesignation} />
        </div>
    )
}
function lastElement(arr){
    return arr[arr.length - 1]
}