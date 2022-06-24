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
import { SelectCompanyDetails, selectResumeLoading } from '../../redux/Features/ResumeSlice';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceLoader from '../Loaders/ExperienceLoader';
import { useState } from 'react';
import JobOverviewLoader from '../Loaders/JobOverviewLoader';
import RoleLoader from '../Loaders/RoleLoader';
import { companyWiseGraph, selectCompanyWise } from '../../redux/Features/GraphSlice';
import { useEffect } from 'react';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
export default function Section3() {
    const loading = useSelector(selectResumeLoading)
    const companyInfo = useSelector(SelectCompanyDetails)
    const [index, setIndex] = useState(0)
    return (
        <div className="section_2 col-100 align-center">
            <Scale first={30} second={60} />
            <div className="col-90">
                <div className="flex-row-between align-center">
                    <h3 className='text-left'>Experience</h3>
                    <div className='flex-row-fit g-1 align-center'>
                        <button className='btn-fit transparent' onClick={() => { index > 0 && setIndex(index - 1) }}><Left /></button>
                        <button className='btn-fit transparent' onClick={() => { index < companyInfo.length - 1 && setIndex(index + 1) }}><Right /></button>
                    </div>
                </div>


                <span className="divider"></span>
                {console.log(companyInfo)}
                {companyInfo && companyInfo.length > 0 ? <CompanyOverview company={companyInfo[index]} /> : <ExperienceLoader />}
                {companyInfo &&companyInfo[index]?.job_role ? <DesignationOverview job_role={companyInfo[index].job_role} /> : <JobOverviewLoader />}
            </div>


        </div>
    )
}
function CompanyOverview({ company }) {
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)
    const companyWise = useSelector(selectCompanyWise)
    const dispatch = useDispatch()
    useEffect(() => {
      try {
        dispatch(companyWiseGraph({auth:token,body:{user_id,user_company_record_id: company.company_record_id} })).unwrap()
      } catch (error) {
        console.log(error)
      }
    
      return () => {
        
      }
    }, [company.company_record_id,dispatch])
    
    return (
        <div className="grid-35-65">
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
                    <Location /> <p>{company.type_of_company_name}</p>
                </div>
                <div className="flex-row-fit align-center g-1">
                    <Calendar /> <p>{StartEndDate(company.job_role)}</p>
                </div>
                <div className="flex-row-fit align-center g-1">
                    <Clock /> <p>Full Time</p>
                </div>
                <div className="flex-row-fit align-center g-1">
                    <BarGraph /> <p>{company.job_level_name}</p>
                </div>
                <div className="flex-row-fit align-center g-1">
                    <Human /> <p>{company.function_area_name}</p>
                </div>

            </div>
            <div className="col-100 justify-end">
                <h5 className='text-right'>{company.company_name}</h5>{
                    console.log(companyWise)
                }
                {companyWise&&<LineGraph salary={companyWise.salary } management={companyWise.managementLevelValue} />}
            </div>
        </div>)
}
function DesignationOverview({ job_role = [] }) {
    const [index, setIndex] = useState(0)


    return (
        <>
            <div className="flex-row-between align-center">
                <h3 className='text-left m-0'>{job_role[index].designation_name}</h3>
                <div className='flex-row-fit g-1 align-center'>
                    <button className='btn-fit transparent' onClick={() => { index > 0 && setIndex(index - 1) }}><Left /></button>
                    <button className='btn-fit transparent' onClick={() => { index < job_role.length - 1 && setIndex(index + 1) }}><Right /></button>
                </div>
            </div>

            <p>{job_role[index].job_start_date || 'unknown' + ' - ' + job_role[index].job_end_date || 'unknown'}</p>
            <span className="divider"></span>
            <div className="grid-35-65">
                <div className="col-100 g-1">
                    <div className="flex-row-fit align-center g-1">
                        <BarGraphO /> <p>{job_role[index].job_level_name || ''}</p>
                    </div>
                    <div className="flex-row-fit align-center g-1">
                        <HumanG /> <p>{job_role[index].function_area_name || ''}</p>
                    </div>
                    <div className="flex-row-fit align-center g-1">
                        <Webcam /> <p>{job_role[index].job_remote_work === 0 ? 'No' : 'Yes'}</p>
                    </div>
                    <div className="flex-row-fit align-center g-1">
                        <Location /> <p>{job_role[index].job_location || ''}</p>
                    </div>

                </div>
                {job_role[index].skills && <div className="col-100 skill-card">
                    <h5 className='text-left'>Key Skills Used</h5>
                    {
                        job_role[index].skills.map((skill, i) => <div key={i} className="flex-row-between align-start">
                            <p>{skill.skill_name}</p>
                            <div className="col-70 justify-center">
                                <ProgressBar value={skill.skill_complexity} color={`_${i+1}`} hide_percent />
                            </div>

                        </div>)
                    }


                </div>}
            </div>
            <ResponsibiltiensOverview data={job_role[index].role_responsibilties || false} />
            {job_role[index].project&&<ProjectOverview projects= {job_role[index].project} />}

        </>
    )
}
function ResponsibiltiensOverview({ data }) {

    return (
        <>
            <h3 className="text-left">
                Roles and Responsibilities
            </h3>
            <span className="divider"></span>
            {data ? <div className="role col-100 g-0-5 text-left">
                {parser(parser(data))}
            </div>:<RoleLoader/> }
        </>
    )
}
function ProjectOverview({projects=[]}) {
   const [index,setIndex] = useState(0)
   let {project_name, client_name, project_skill} = projects[index]
    return (
        <>
           
            <div className="flex-row-between align-center">
                <h3 className='text-left m-0'>Projects worked on</h3>
                <div className='flex-row-fit g-1 align-center'>
                    <button className='btn-fit transparent' onClick={() => { index > 0 && setIndex(index - 1) }}><Left /></button>
                    <button className='btn-fit transparent' onClick={() => { index < projects.length - 1 && setIndex(index + 1) }}><Right /></button>
                </div>
            </div>
            <span className="divider"></span>
            <div className="flex-wrap align-stretch g-1">
                <ProjectTile project_name={project_name} client_name={client_name} />

                <p>{ }</p>
            </div>
            <span className="divider"></span>
            <div className="col-100 g-1">
            <div className="skill-grid">
                <h5 className='text-left'>Skill Used</h5>
                <h5 className='text-left'>Complexity</h5>
                <h5 className='text-left'>Complexity</h5>
            </div>
                {
                    project_skill.map((skill, i) => <SkillGrid key={i} color={`_${i+1}`} {...skill} />)
                }


            </div>
        </>
    )
}
function ProjectTile({ project_name, client_name }) {
    return (
        <>

            <div className="project_tile col align-start g-1">
                <h5>{project_name}</h5>
                <div className="col-100">
                    <div className="flex-row-between align-center">
                        <p>Client</p>
                        <span className='gradientDivider-h'></span>
                        <p>{client_name}</p>
                    </div>
                </div>


            </div>
            <span className='gradientDivider-v'></span>
        </>
    )
}
function SkillGrid({ color, skill_complexity, skill_desc, skill_name }) {
    return (
        <div className="skill-grid">
            <div className="skillName">
                {skill_name}
            </div>
            <div className="complexity flex-row-start g-0-5 align-center" >
                <ProgressBar value={skill_complexity * 10} color={color} hide_percent />
                <p>{skill_complexity + '/10'}</p>
            </div>
            <div className="application">
                <p>{skill_desc}</p>
            </div>
        </div>
    )
}

function StartEndDate(jobs = []) {
    let start = jobs[0] && jobs[0].job_start_date
    let end = jobs[jobs.length - 1] && jobs[jobs.length - 1].job_end_date

    return `${start || 'unknown'}-${end || 'unknown'}`

}