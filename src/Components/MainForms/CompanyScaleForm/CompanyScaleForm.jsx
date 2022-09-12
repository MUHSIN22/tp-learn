import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { getBuisnessScaleList, getCompanyBasedList, getIndustryList, selectBuisnessScaleList, selectCompanyBasedList, selectIndustryList } from '../../../redux/Features/MasterSlice';
import { addIndustryInfo, selectLastCompany, selectNewJob, selectResumeError, selectResumeLoading, selectResumeMessage, selectUserFirstName } from '../../../redux/Features/ResumeSlice';
import FormController from '../../../Util Components/FormController/FormController';
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput';
import SelectInput from '../../../Util Components/Inputs/SelectInput/SelectInput';
import CardRadioGroup from '../../CardRadioGroup/CardRadioGroup';

export default function CompanyScaleForm() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        industry_id: '',
        scale_id: '',
        type_of_company: '',
        company_record_id: '',
    })
    const [showAlert, setShowAlert] = useState(false);
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
    const newJob = useSelector(selectNewJob)

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    function handleSubmit() {
        let company_record_id = companyDetails.company_record_id
        const body = { ...form, user_id, company_record_id }
        try {
            dispatch(addIndustryInfo({ auth: token, body })).unwrap()
        } catch (error) {
        } finally {
            setShowAlert(true);
        }
    }

    useEffect(() => {

        if (industryList.length === 0) dispatch(getIndustryList(token)).unwrap()
        if (buisnessScaleList.length === 0) dispatch(getBuisnessScaleList(token)).unwrap()
        if (companyBasedList.length === 0) dispatch(getCompanyBasedList(token)).unwrap()

        return () => {

        }
    }, [industryList.length, buisnessScaleList.length, companyBasedList.length, dispatch, token])
    useEffect(() => {
        if (!newJob) {
            if (companyBasedList.length && form.type_of_company === '') setForm({ ...form, type_of_company: companyDetails.type_of_company_id !== "" ? companyDetails.type_of_company_id : companyBasedList[0].id })
            if (industryList.length && form.industry_id === '') setForm({ ...form, industry_id: companyDetails.industry_id !== "" ? companyDetails.industry_id : industryList[0].id })
            if (buisnessScaleList.length && form.scale_id === '') setForm({ ...form, scale_id: companyDetails.scale_id !== "" ? companyDetails.scale_id : "" })
        }
        return () => {

        }
    }, [companyBasedList, form, companyDetails, buisnessScaleList, industryList])
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Great going, <span className="form-highliter">Muhsin</span></h2>
            <SelectInput value={form.industry_id} disabled={companyDetails.industry_id !== ""} name={'industry_id'} label={'Select the industry'} field={'industry_size'} state={form} handleChange={handleChange} options={industryList} name_field={'industry_name'} defaultValue={'Information Technology'} />
            <CardRadioGroup autofill={companyDetails.scale_id !== ""} label='Define the scale of buisness?' name={'scale_id'} state={form} setState={setForm} option={buisnessScaleList} name_field={'scale_of_business_name'} disabled={companyDetails.scale_id !== ""} />
            <SelectInput value={form.type_of_company} disabled={companyDetails.type_of_company_id !== ""} placeholder={'Slsls'} name={'type_of_company'} label={'Product / Service based'} field={'industry_size'} handleChange={handleChange} options={companyBasedList} name_field={'company_based_name'} defaultValue={'Information Technology'} />
            <FormController handleSubmit={handleSubmit} />
        </div>
    )
}
