import React, { useEffect, useState } from 'react'
import CardRadioGroup from '../CardRadioGroup/CardRadioGroup'
import IconSelect from '../IconInput/IconSelect'
import { useDispatch, useSelector } from 'react-redux';
import { getBuisnessScaleList, getCompanyBasedList, getIndustryList, selectBuisnessScaleList, selectCompanyBasedList, selectIndustryList } from '../../redux/Features/MasterSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { addIndustryInfo, reload, SelectCompanyDetails, selectLastCompany, selectResumeError, selectResumeLoading, selectResumeMessage, selectUserFirstName } from '../../redux/Features/ResumeSlice';
import Control from './Control';
import Alert from '../Alert/Alert';
export default function Experience2({ }) {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        industry_id:'',
        scale_id:'',
        type_of_company:1,
        company_record_id:'',
    })
    const [showAlert,setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const firstName = useSelector(selectUserFirstName)
    const industryList = useSelector(selectIndustryList)
    const buisnessScaleList = useSelector(selectBuisnessScaleList)
    const companyDetails = useSelector(selectLastCompany)
    const companyBasedList = useSelector(selectCompanyBasedList)
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    async function handleSubmit() {
        let company_record_id = companyDetails.company_record_id
        const body = {...form, user_id,company_record_id}
        try {
            await dispatch(addIndustryInfo({auth:token,body,dispatch})).unwrap()
            dispatch(reload())
        } catch (error) {
        }finally{
            setShowAlert(true);
        }
    }

    useEffect(() => {
        if (industryList.length === 0) dispatch(getIndustryList(token)).unwrap()
        if (buisnessScaleList.length === 0) dispatch(getBuisnessScaleList(token)).unwrap()
        if (companyBasedList.length === 0) dispatch(getCompanyBasedList(token)).unwrap()    

        return () => {

        }
    }, [industryList.length,buisnessScaleList.length,dispatch,token])
    useEffect(() => {
      if(companyBasedList.length&&form.type_of_company==='') setForm({...form,type_of_company: companyBasedList[0].id})
    
      return () => {
        
      }
    }, [companyBasedList.length,form.type_of_company])
    
    return (
        <>  
             {showAlert&&!loading&&<Alert error={error} message={error?'Failed to add Industry details': 'Industry details added'}/>}
            <h1 className='text-left'>Great going, <span> {firstName}</span></h1>
            <div className="form-row">
                <IconSelect name={'industry_id'} label={'Select the industry'} field={'industry_size'} state={form} handleChange={handleChange}  options={industryList} name_field={'industry_name'} defaultValue={'Information Technology'} />
            </div>
            <div className="form-row">
                <CardRadioGroup label='Select the scale of buisness?' name={'scale_id'} state={form} setState={setForm}  option={buisnessScaleList} name_field={'scale_of_business_name'} />
            </div>
            <div className="form-row">
                <IconSelect placeholder={'Slsls'} name={'type_of_company'} label={'Product / Service based'} field={'industry_size'} handleChange={handleChange}  options={companyBasedList} name_field={'company_based_name'} defaultValue={'Information Technology'} />
            </div>
            <Control handleSubmit={handleSubmit}/>
        </>
    )
}
function lastElement(arr){
    return arr[arr.length - 1]
}