import React, { useCallback, useEffect, useState } from "react";
import CardRadioGroup from "../CardRadioGroup/CardRadioGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  getJobNatureList,
  searchCompany,
  selectCompanyList,
  selectJobNatureList,
  getBuisnessScaleList,
  getCompanyBasedList,
  getIndustryList,
  selectBuisnessScaleList,
  selectCompanyBasedList,
  selectIndustryList
} from "../../redux/Features/MasterSlice";
import {
  resetError,
  selectAuthToken,
  selectUser_id,
} from "../../redux/Features/AuthenticationSlice";
import SuggestiveInput from "../IconInput/SuggestiveInput";
import useDebounce from "../../DebouncedSearch";
import IconSelect from "../IconInput/IconSelect";
import {
  addCompany,
  nextForm,
  selectLastCompany,
  selectResumeError,
  selectResumeMessage,
  reload,
  addIndustryInfo,
  selectResumeLoading,
  selectUserFirstName,
} from "../../redux/Features/ResumeSlice";
import Alert from "../Alert/Alert";
import Control from "./Control";

const DEBOUNCE_DELAY = 600;
export default function Experience1({ data }) {
  const dispatch = useDispatch();
  console.log(data,"this is data");
  const [form, setForm] = useState({
    user_id: "",
    nature_of_job_id: data.nature_of_job_id,
    company_id: data.company_id,
    other_company_name: "",
    user_company_record_id: data.company_record_id,
    company_name: data.company_name,
    industry_id: data.industry_id || "",
    scale_id: data.scale_id || "",
    type_of_company: data.type_of_company_id || 1,
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
        console.log(error);
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

    console.log(body,form,'form and body--------------');

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
    console.log(body2,"this is body 2");
    try {
     dispatch(addCompany({ auth: token, body,dispatch })).unwrap();
     dispatch(addIndustryInfo({auth:token,body:body2,dispatch})).unwrap()
    } catch (error) {
      console.log(error);
    } finally {
      setShowAlert(true);
    }
  }

  useEffect(() => {
    if (debouncedSearchState.length > 1)
      searchCompanyList(debouncedSearchState);

    return () => {};
  }, [debouncedSearchState, searchCompanyList]);
  useEffect(() => {
    if (jobNatureList.length === 0) dispatch(getJobNatureList(token)).unwrap();

    return () => {};
  }, [jobNatureList.length, dispatch, token]);
  useEffect(() => {
    if (message === "Company Added") {
      console.log('--')
    }
    return () => {
      dispatch(resetError());
    };
  }, [message, dispatch,form]);
  return (
    <>
      {" "}
      {showAlert && (
        <Alert
          error={error}
          message={
            error ? "Failed to update Company details" : "Company details updated"
          } 
        />
      )}
      {!lastCompany && (
        <h1 className="text-left">Let us start with your most recent stint.</h1>
      )}
      <div className="form-row">
        <SuggestiveInput
          icon={<></>}
          name={"company_name"}
          placeholder={"Company / Organization Name"}
          label="Company Name"
          width={98}
          suggestions={companyList}
          name_field="name"
          searchHandler={searchHandler}
          selected={selectHandler}
          defaultValue={form.company_name}
        />
      </div>
      <div className="form-row">
        <CardRadioGroup
          label={"Define the nature of your job?"}
          name={"nature_of_job_id"}
          state={form}
          setState={setForm}
          option={jobNatureList}
          name_field={"job_name"}
        />
      </div>
      <span className="divider"></span>
      <div className="form-row">
        <IconSelect
          name={"industry_id"}
          label={"Select the industry"}
          field={"industry_size"}
          state={form}
          handleChange={handleChange}
          options={industryList}
          name_field={"industry_name"}
          defaultValue={form.industry_id}
        />
      </div>
      <div className="form-row">
        <CardRadioGroup
          label="Define the scale of buisness?"
          name={"scale_id"}
          state={form}
          setState={setForm}
          option={buisnessScaleList}
          name_field={"scale_of_business_name"}
        />
      </div>
      <div className="form-row">
        <IconSelect
          placeholder={"Slsls"}
          name={"type_of_company"}
          label={"Product / Service based"}
          field={"industry_size"}
          handleChange={handleChange}
          options={companyBasedList}
          name_field={"company_based_name"}
          defaultValue={form.type_of_company}
        />
      </div>
      <Control handleSubmit={handleSubmit} />
    </>
  );
}
