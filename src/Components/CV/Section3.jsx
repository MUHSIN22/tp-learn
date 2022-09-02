import React from 'react'
import LineGraph from '../Graphs/LineGraph'
import Scale from '../Graphs/Scale'
import parser from 'html-react-parser';
import { ReactComponent as Device } from '../../Assests/icons/monitor-mobile.svg';
import { ReactComponent as Chart } from '../../Assests/icons/chart.svg';
import { ReactComponent as Headphone } from '../../Assests/icons/headphone.svg';
import { ReactComponent as Location } from '../../Assests/icons/location.svg';
import { ReactComponent as Calendar } from '../../Assests/icons/calendar.svg';
import { ReactComponent as Clock } from '../../Assests/icons/clock.svg';
import { ReactComponent as BarGraph } from '../../Assests/icons/barGraph.svg';
import { ReactComponent as BarGraphO } from '../../Assests/icons/chart_o.svg';
import { ReactComponent as Human } from '../../Assests/icons/human.svg';
import { ReactComponent as HumanG } from '../../Assests/icons/human_g.svg';
import { ReactComponent as Webcam } from '../../Assests/icons/webcam.svg';
import { ReactComponent as Right } from '../../Assests/icons/arrow-circle-right.svg';
import { ReactComponent as Left } from '../../Assests/icons/arrow-circle-left.svg';
import ProgressBar from '../OverviewCard/ProgressBar';
import { SelectCompanyDetails, selectResumeLoading, selectToEdit, changeToEdit, changeEditPageDetails, deleteCompany} from '../../redux/Features/ResumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceLoader from '../Loaders/ExperienceLoader';
import { useState } from 'react';
import JobOverviewLoader from '../Loaders/JobOverviewLoader';
import RoleLoader from '../Loaders/RoleLoader';
import { companyWiseGraph, companyWiseGraphForShare, selectCompanyWise } from '../../redux/Features/GraphSlice';
import { useEffect } from 'react';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { FaPencilAlt } from "react-icons/fa";
import { AiFillDelete } from 'react-icons/ai'
import EditFormContainer from "../EditForms/EditFromContainer";
import { useParams } from 'react-router-dom';
export default function Section3() {
  const loading = useSelector(selectResumeLoading);
  const companyInfo = useSelector(SelectCompanyDetails);
  const [index, setIndex] = useState(0);
  return (
    <>
      {
        companyInfo && companyInfo.map((item, index) => (
          <div className="section3Review col-100 align-center">
            {/* <Scale first={30} second={60} /> */}
            <div className="col-90">
              <div className="flex-row-between align-center">
                <h1 className="text-left">Experience</h1>
                {/* <div className="flex-row-fit g-1 align-center">
                  <button
                    className="btn-fit transparent"
                    onClick={() => {
                      index > 0 && setIndex(index - 1);
                    }}
                  >
                    <Left />
                  </button>
                  <button
                    className="btn-fit transparent"
                    onClick={() => {
                      index < companyInfo.length - 1 && setIndex(index + 1);
                    }}
                  >
                    <Right />
                  </button>
                </div> */}
              </div>

              <span className="divider"></span>
              {companyInfo && companyInfo.length > 0 ? (
                <CompanyOverview company={companyInfo[index]} />
              ) : (
                <ExperienceLoader />
              )}
              {companyInfo && companyInfo[index]?.job_role ?
                (
                  <>
                    {
                      companyInfo[index].job_role.map((jobRole, index) => (
                        <DesignationOverview
                          job_role={{
                            job_role: jobRole || [],
                            company_record_id: item.company_record_id,
                          }}
                        />
                      ))
                    }
                  </>
                ) : (
                  null
                )}
            </div>
          </div>
        ))
      }
    </>
  );
}
function CompanyOverview({ company }) {
  const user_id = useSelector(selectUser_id);
  const token = useSelector(selectAuthToken);
  const [companyWise, setCompanyWise] = useState(null)
  const dispatch = useDispatch();
  const toEdit = useSelector(selectToEdit);
  const {id} = useParams();
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };

  const handleDeleteForms = (data) =>  {
    dispatch(deleteCompany({auth: token, body: data, dispatch}));
  }

  useEffect(() => {
    try {

      (async () => {
        let response;
        if(window.location.pathname.split('/').includes('cv-share')){
          response = await dispatch(
            companyWiseGraphForShare({
              body: { user_id: id, user_company_record_id: company.company_record_id },
            })
          ).unwrap();
        }else{
          response = await dispatch(
            companyWiseGraph({
              auth: token,
              body: { user_id, user_company_record_id: company.company_record_id },
            })
          ).unwrap();
        }
        setCompanyWise(response.data.recordDetails.salary_management_graph)
      })()

    } catch (error) {
    }

    return () => { };
  }, [company.company_record_id, dispatch]);

  return (
    <div className="grid-35-65 company-overview-grid">
      <div className="col-100 g-1">
        <div className="flex-row-fit align-center g-1">
          <Device /> <p>{company.industry_name}</p>

        </div>
        <div className="flex-row-fit align-center g-1">
          <Chart /> <p>{company.scale_name}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <Headphone /> <p>{company.type_of_company_name}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <Location /> <p>{company.job_role && company.job_role.length>0 ? company.job_role[0].job_location : ''}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <Calendar /> <p>{StartEndDate(company.job_role)}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <Clock /> <p>{company.nature_of_job_name}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <BarGraph /> <p>{company.job_level_name}</p>
        </div>
        <div className="flex-row-fit align-center g-1">
          <Human /> <p>{company.function_area_name}</p>
        </div>
      </div>
      <div className="col-100 justify-end">
        <h5 className="text-right">{toEdit && (
              <>
                <span className="px-1" onClick={() =>
                  handleEditForms({
                    progress: 1,
                    company_record_id: company.company_record_id,
                    company_id: company.company_id,
                    company_name: company.company_name,
                    nature_of_job_id: company.nature_of_job_id,
                    nature_of_job_name: company.nature_of_job_name,
                    industry_id: company.industry_id,
                    industry_name: company.industry_name,
                    scale_id: company.scale_id,
                    scale_name: company.scale_name,
                    type_of_company_id: company.type_of_company_id,
                    type_of_company_name : company.type_of_company_name
                  })
                }>
                  <FaPencilAlt />
                </span>
                <span className='px-1' onClick={() => {
                  handleDeleteForms({
                    company_record_id: company.company_record_id,
                    user_id
                  })
                }}>
                  <AiFillDelete />
                </span>
              </>
            )} {company.company_name}</h5>
        {companyWise && (
          <LineGraph
            salary={companyWise.salary}
            category={companyWise.duration}
            management={companyWise.managementLevelValue}
          />
        )}
      </div>
    </div>
  );
}
function DesignationOverview(props) {
  const { job_role, company_record_id } = props.job_role;
  const [index, setIndex] = useState(0);
  const toEdit = useSelector(selectToEdit);
  const dispatch = useDispatch();
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  return (
    <>
      <div className="flex-row-between align-center">
        <h3 className="text-left m-0">{job_role.designation_name}</h3>
        <div className="flex-row-fit g-1 align-center">
          {toEdit && (
            <div
              onClick={() =>
                handleEditForms({
                    
                  designation_id:job_role.designation_id,
                  level_id:job_role.job_level,
                  location:job_role.job_location,
                  remote_work:job_role.job_remote_work,
                  functional_area_id:job_role.function_area_id,
                  start_salary: job_role.job_start_salary,
                  end_date: job_role.job_end_date,
                  start_date: job_role.job_start_date,
                  user_company_record_id: company_record_id,
                  user_company_job_record_id:job_role.company_job_record_id,
                  start_salary_currency:job_role.start_salary_currency,
                  end_salary_currency:job_role.end_salary_currency,
                  current_working:job_role.current_working,
                  hide_salary:job_role.hide_salary,
                  end_salary:job_role.job_end_salary,
                  designation_name: job_role.designation_name,
                  progress: 3,
                })
              }
            >
              <FaPencilAlt />
            </div>
          )}
        </div>
      </div>

      <p>
        {job_role.job_start_date ||
          "unknown" + " - " + job_role.job_end_date ||
          "unknown"}
      </p>
      <span className="divider"></span>
      <div className="grid-35-65">
        <div className="col-100 g-1">
          <div className="flex-row-fit align-center g-1">
            <BarGraphO /> <p>{job_role.job_level_name || ""}</p>
          </div>
          <div className="flex-row-fit align-center g-1">
            <HumanG /> <p>{job_role.function_area_name || ""}</p>
          </div>
          <div className="flex-row-fit align-center g-1">
            <Webcam />{" "}
            <p>{job_role.job_remote_work === 0 ? "No" : "Yes"}</p>
          </div>
          <div className="flex-row-fit align-center g-1">
            <Location /> <p>{job_role.job_location || ""}</p>
          </div>
        </div>
        {job_role && job_role?.skills && (
          <div className="col-100 skill-card">
            <h5 className="text-left">Key Skills Used</h5>
            {job_role.skills.map((skill, i) => (
              <div key={i} className="flex-row-between align-start">
                <p>{skill.skill_name}</p>
                <div className="col-70 justify-center">
                  <ProgressBar
                    value={skill.skill_complexity}
                    color={`_${i + 1}`}
                    hide_percent
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ResponsibiltiensOverview
        data={{
          role_responsibilties: job_role.role_responsibilties || false,
          company_job_record_id: job_role.company_job_record_id,
          company_record_id: company_record_id,
          external_client_desc: job_role.external_client_desc,
          skills: job_role.skills,
        }}
      />
      {job_role.project && 
        job_role?.project.map((project,index) => (
          <ProjectOverview key={index} projects={{projects: project,company_job_record_id: job_role.company_job_record_id,company_record_id: company_record_id}} />
        ))
      }
    </>
  );
}
function ResponsibiltiensOverview({ data }) {
  const toEdit = useSelector(selectToEdit);
  const dispatch = useDispatch();
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  return (
    <>
      <div className="flex-row-between align-center">
        <h3 className="text-left">Roles and Responsibilities</h3>
        {toEdit && (
          <div className="flex-row-fit g-1 align-center">
            <div onClick={() => handleEditForms({ ...data, progress: 4 })}>
              <FaPencilAlt />
            </div>
          </div>
        )}
      </div>
      <span className="divider"></span>
      {data && data.role_responsibilties ? (
        <div className="role col-100 g-0-5 text-left">
          {parser(parser(data.role_responsibilties))}
        </div>
      ) : (
        null
      )}
    </>
  );
}
function ProjectOverview({ projects:{projects,company_job_record_id,company_record_id} }) {
  const [index, setIndex] = useState(0);
  let { project_name, client_name, project_skill ,job_project_record_id} = projects;
  const toEdit = useSelector(selectToEdit);
  const dispatch = useDispatch();
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  return (
    <>
      <div className="flex-row-between align-center">
        <h3 className="text-left m-0">Projects worked on</h3>
        <div className="flex-row-fit g-1 align-center">
          {toEdit && (
            <div onClick={() => handleEditForms({ job_project_record_id,project_skill: project_skill ? project_skill : [],client_name,project_name,company_job_record_id,company_record_id,progress: 5 })}>
              <FaPencilAlt />
            </div>
          )}
        </div>
      </div>
      <span className="divider"></span>
      <div className="flex-wrap align-stretch g-1">
        <ProjectTile project_name={project_name} client_name={client_name} />
        <p>{}</p>
      </div>
      <span className="divider"></span>
      <div className="col-100 g-1" style={{marginBottom: '1rem'}}>
        <div className="skill-grid">
          <h5 className="text-left">Skill Used</h5>
          <h5 className="text-left">Complexity</h5>
          <h5 className="text-left">Applicaion</h5>
        </div>
         {
                    project_skill&& project_skill.map((skill, i) => <SkillGrid key={i} color={`_${i+1}`} {...skill} />)
                }
      </div>
    </>
  );
}
function ProjectTile({ project_name, client_name }) {
  return (
    <>
      <div className="project_tile col align-start g-1">
        <h5>{project_name}</h5>
        <div className="col-100">
          <div className="flex-row-between align-center">
            <p>Client</p>
            <span className="gradientDivider-h"></span>
            <p>{client_name}</p>
          </div>
        </div>
      </div>
      <span className="gradientDivider-v"></span>
    </>
  );
}
function SkillGrid({ color, skill_complexity, skill_desc, skill_name }) {
  return (
    <div className="skill-grid">
      <div className="skillName">{skill_name}</div>
      <div className="complexity flex-row-start g-0-5 align-center">
        <ProgressBar value={skill_complexity * 10} color={color} hide_percent />
        <p>{skill_complexity >0 && skill_complexity <10 ? "0"+skill_complexity + "/10" : skill_complexity + "/10"}</p>
      </div>
      <div className="application">
        <p>{skill_desc || "000000000"}</p>
      </div>
    </div>
  );
}

function StartEndDate(jobs = []) {
  let start = jobs[0] && jobs[0].job_start_date;
  let end = jobs[jobs.length - 1] && jobs[jobs.length - 1].job_end_date;

  return `${start || "unknown"}-${end || "unknown"}`;
}
