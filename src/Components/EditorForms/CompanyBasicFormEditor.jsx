import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useDebounce from '../../DebouncedSearch';
import { resetError, selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { selectCompanyForEdit, selectFormProgress } from '../../redux/Features/EditSlice';
import { getBuisnessScaleList, getCompanyBasedList, getIndustryList, getJobNatureList, searchCompany, selectBuisnessScaleList, selectCompanyBasedList, selectCompanyList, selectIndustryList, selectJobNatureList } from '../../redux/Features/MasterSlice';
import { addCompany, addIndustryInfo, selectLastCompany, selectResumeError, selectResumeLoading, selectResumeMessage, selectUserFirstName } from '../../redux/Features/ResumeSlice';
import EditFormController from '../../Util Components/EditFormController/EditFormController';
import SelectInput from '../../Util Components/Inputs/SelectInput/SelectInput';
import SuggestionInput from '../../Util Components/Inputs/SuggestionInput/SuggestionInput';
import CardRadioGroup from '../CardRadioGroup/CardRadioGroup';

const DEBOUNCE_DELAY = 600;

export default function CompanyBasicFormEditor() {
    const companyDetails = useSelector(selectCompanyForEdit)
    console.log(companyDetails,'company details');
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        user_id: "",
        nature_of_job_id: companyDetails.nature_of_job_id || "",
        company_id: companyDetails.company_id || "",
        other_company_name: companyDetails.company_name || "",
        user_company_record_id: companyDetails.company_record_id || "",
        company_name: companyDetails.company_name || "",
        industry_id: companyDetails.industry_id || "",
        scale_id: companyDetails.scale_id || "",
        type_of_company: companyDetails.type_of_company_id || 1,
    });
    const [search, setSearch] = useState("");
    const debouncedSearchState = useDebounce(search, DEBOUNCE_DELAY);
    const companyList = useSelector(selectCompanyList);
    const token = useSelector(selectAuthToken);
    const user_id = useSelector(selectUser_id);
    const message = useSelector(selectResumeMessage);
    const error = useSelector(selectResumeError);
    const [showAlert, setShowAlert] = useState(false);
    const jobNatureList = useSelector(selectJobNatureList);
    const lastCompany = useSelector(selectLastCompany);
    const firstName = useSelector(selectUserFirstName);
    const industryList = useSelector(selectIndustryList)
    const buisnessScaleList = useSelector(selectBuisnessScaleList)
    const companyBasedList = useSelector(selectCompanyBasedList);
    const loading = useSelector(selectResumeLoading);

    const searchCompanyList = useCallback(
        (keywords) => {
            try {
                dispatch(
                    searchCompany({ auth: token, body: { search_company: keywords } })
                ).unwrap();
            } catch (error) {
            }
        },
        [dispatch, token]
    );

    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value,
        });
    }

    function searchHandler(e) {
        setSearch(e.target.value);
    }
    const selectHandler = (i) => {
        setForm({ ...form, company_id: companyList[i].id });
    };
    async function handleSubmit() {
        const {
            nature_of_job_id,
            company_id,
            other_company_name,
            user_company_record_id,
            company_name,
        } = form;

        let body = {
            user_id,
            nature_of_job_id,
            company_id,
            other_company_name,
            user_company_record_id,
            company_name
        };

        const body2 = {
            industry_id: form.industry_id,
            scale_id: form.scale_id,
            type_of_company: form.type_of_company,
            user_id,
            company_record_id: form.user_company_record_id,
        };

        if (form.company_id.length < 1) {
            body.other_company_name = debouncedSearchState;
        }
        body.user_id = user_id;
        try {
            dispatch(addCompany({ auth: token, body, dispatch })).unwrap();
            dispatch(addIndustryInfo({ auth: token, body: body2, dispatch })).unwrap()
        } catch (error) {
        } finally {
            setShowAlert(true);
        }
    }

    useEffect(() => {
        if (debouncedSearchState.length > 1)
            searchCompanyList(debouncedSearchState);

        return () => { };
    }, [debouncedSearchState, searchCompanyList]);
    useEffect(() => {
        if (jobNatureList.length === 0) dispatch(getJobNatureList(token)).unwrap();
        if (industryList.length === 0) dispatch(getIndustryList(token)).unwrap();
        if (buisnessScaleList.length === 0) dispatch(getBuisnessScaleList(token)).unwrap();
        if (companyBasedList.length === 0) dispatch(getCompanyBasedList(token)).unwrap();
        return () => { };
    }, [jobNatureList.length, dispatch, token]);
    useEffect(() => {
        if (message === "Company Added") {
        }
        return () => {
            dispatch(resetError());
        };
    }, [message, dispatch, form]);
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Let's start with you most recent stint.</h2>
            <SuggestionInput
                name={"company_name"}
                placeholder={"Company / Organization Name"}
                label="Company Name"
                width={98}
                suggestions={companyList}
                name_field="name"
                searchHandler={searchHandler}
                selected={selectHandler}
                value={form.company_name}
                defaultValue={form.company_name}
            />
            <CardRadioGroup
                label={"Define the nature of your job?"}
                name={"nature_of_job_id"}
                state={form}
                setState={setForm}
                option={jobNatureList}
                name_field={"job_name"}
            />
            <SelectInput
                name={"industry_id"}
                label={"Select the industry"}
                field={"industry_size"}
                state={form}
                handleChange={handleChange}
                options={industryList}
                name_field={"industry_name"}
                defaultValue={form.industry_id}
            />
            <CardRadioGroup
                label="Define the scale of buisness?"
                name={"scale_id"}
                state={form}
                setState={setForm}
                option={buisnessScaleList}
                name_field={"scale_of_business_name"}
            />
            <SelectInput
                name={"type_of_company"}
                label={"Product / Service based"}
                field={"industry_size"}
                handleChange={handleChange}
                options={companyBasedList}
                name_field={"company_based_name"}
                defaultValue={form.type_of_company}
            />
            <EditFormController handleSubmit={handleSubmit} />
        </div>
    )
}
