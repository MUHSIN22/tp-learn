import React, { useEffect, useState } from 'react'
import CardRadioGroup from '../CardRadioGroup/CardRadioGroup'
import IconSelect from '../IconInput/IconSelect'
import { useDispatch, useSelector } from 'react-redux';
import { getBuisnessScaleList, getCompanyBasedList, getIndustryList, selectBuisnessScaleList, selectCompanyBasedList, selectIndustryList } from '../../redux/Features/MasterSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { addIndustryInfo, selectLastCompany , selectResumeError, selectResumeLoading, selectResumeMessage, selectUserFirstName } from '../../redux/Features/ResumeSlice';
import Control from './Control';
import Alert from '../Alert/Alert';
export default function Experience2() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        industry_id:'',
        scale_id:'',
        type_of_company:'',
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
        console.log("--------------",evt.target.value,evt.target.name)
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    function handleSubmit() {
        let company_record_id = companyDetails.company_record_id
        const body = {...form, user_id,company_record_id}
        console.log(form)
        try {
            dispatch(addIndustryInfo({auth:token,body})).unwrap()
        } catch (error) {
            console.log(error);
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
    }, [industryList.length,buisnessScaleList.length,companyBasedList.length,dispatch,token])
    useEffect(() => {
      if(companyBasedList.length&&form.type_of_company==='') setForm({...form,type_of_company:companyDetails.type_of_company_id!==""?companyDetails.type_of_company_id: companyBasedList[0].id})
      if(industryList.length&&form.industry_id==='') setForm({...form,industry_id:companyDetails.industry_id!==""?companyDetails.industry_id: industryList[0].id})
      if(buisnessScaleList.length&&form.scale_id==='') setForm({...form, scale_id: companyDetails.scale_id!==""?companyDetails.scale_id:buisnessScaleList[0].id})
      console.log(buisnessScaleList.length,form.scale_id==='')
      return () => {
        
      }
    }, [companyBasedList,form,companyDetails,buisnessScaleList,industryList])
    
    return (
        <>  
             {showAlert &&!loading&&<Alert error={error} message={error ? Object.values(message): message} />}
            <h1 className='text-left'>Great going, <span> {firstName}</span></h1>
            <div className="form-row">
                <IconSelect value={form.industry_id} disabled={companyDetails.industry_id!==""} name={'industry_id'} label={'Select the industry'} field={'industry_size'} state={form} handleChange={handleChange}  options={industryList} name_field={'industry_name'} defaultValue={'Information Technology'} />
            </div>
            <div className="form-row">
                <CardRadioGroup label='Define the scale of buisness?' autofill={companyDetails.scale_id!==""} name={'scale_id'} state={form} setState={setForm}  option={buisnessScaleList} name_field={'scale_of_business_name'} disabled={companyDetails.scale_id!==""} />
            </div>
            <div className="form-row">
                <IconSelect value={form.type_of_company} disabled={companyDetails.type_of_company_id!==""} placeholder={'Slsls'} name={'type_of_company'} label={'Product / Service based'} field={'industry_size'} handleChange={handleChange}  options={companyBasedList} name_field={'company_based_name'} defaultValue={'Information Technology'} />
            </div>
            <Control handleSubmit={handleSubmit}/>
        </>
    )
}
