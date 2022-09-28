import React, { Fragment, useEffect, useState } from 'react'
import { ReactComponent as Device } from "../../../../Assests/icons/monitor-mobile.svg";
import { ReactComponent as Chart } from "../../../../Assests/icons/chart.svg";
import { ReactComponent as Headphone } from "../../../../Assests/icons/headphone.svg";
import { ReactComponent as Location } from "../../../../Assests/icons/location.svg";
import { ReactComponent as Calendar } from "../../../../Assests/icons/calendar.svg";
import { ReactComponent as Clock } from "../../../../Assests/icons/clock.svg";
import { ReactComponent as BarGraph } from "../../../../Assests/icons/barGraph.svg";
import { ReactComponent as Human } from "../../../../Assests/icons/human.svg";
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectUser_id } from '../../../../redux/Features/AuthenticationSlice';
import { companyWiseGraph, companyWiseGraphForShare } from '../../../../redux/Features/GraphSlice';
import LineGraph from '../../../Graphs/LineGraph';
import DesignationOverview from '../DesignationOverview/DesignationOverview';
import RolesAndResponsibilities from '../roles and responsibilities/RolesAndResponsibilities';
import ProjectOverview from '../ProjectOverview/ProjectOverview';
import { useParams } from 'react-router-dom';

export default function CompanyOverview({ company }) {
    const [companyWise, setCompanyWise] = useState(null)
    const dispatch = useDispatch();
    const user_id = useSelector(selectUser_id);
    const token = useSelector(selectAuthToken)
    const { id } = useParams();

    useEffect(() => {
        let location = window.location.pathname.split('/');
        if (location.includes('cv-share')) {
            getCompanyWiseForShare()
        } else {
            getCompanyWise();
        }
    }, [company])

    function StartEndDate(jobs = []) {
        let start = jobs[0] && jobs[0].job_start_date;
        let end = jobs[jobs.length - 1] && jobs[jobs.length - 1].job_end_date;
        return `${start || "unknown"} to ${end || "Present"}`;
    }

    const getCompanyWise = async () => {
        let response = await dispatch(
            companyWiseGraph({
                auth: token,
                body: { user_id, user_company_record_id: company.company_record_id },
            })
        ).unwrap();
        setCompanyWise(response.data.recordDetails.salary_management_graph)
        return null
    }

    const getCompanyWiseForShare = async () => {
        let response = await dispatch(
            companyWiseGraphForShare({
                body: { user_id: id, user_company_record_id: company.company_record_id },
            })
        ).unwrap();
        setCompanyWise(response.data.recordDetails.salary_management_graph)
        return null
    }


    return (
        <section className="company-section cv-profile-container-secondary">
            <h2 className="cv-profile-company-name">{company.company_name}</h2>
            <div className="company-info-wrapper">
                {
                    company.industry_name &&
                    <div className="company-info">
                        <Device />
                        <span>{company.industry_name}</span>
                    </div>
                }
                {
                    company.scale_name &&
                    <div className="company-info">
                        <Chart />
                        <span>{company.scale_name}</span>
                    </div>
                }
                {
                    company.type_of_company_name &&
                    <div className="company-info">
                        <Headphone />
                        <span>{company.type_of_company_name}</span>
                    </div>
                }
                {
                    (company.job_role && company.job_role.length > 0) && company.job_role[0].job_location &&
                    <div className="company-info">
                        <Location />
                        <span>{company.job_role[0].job_location}</span>
                    </div>
                }
                {
                    StartEndDate(company.job_role) !== "unknown to present" &&
                    <div className="company-info">
                        <Calendar />
                        <span>Content</span>
                    </div>
                }
                {
                    company.nature_of_job_name &&
                    <div className="company-info">
                        <Clock />
                        <span>{company.nature_of_job_name}</span>
                    </div>
                }
                {
                    (company.job_role && company.job_role.length > 0) &&
                    company.job_role[0].job_level_name &&
                    <div className="company-info">
                        <BarGraph />
                        <span>{company.job_role[0].job_level_name}</span>
                    </div>
                }
                {
                    (company.job_role && company.job_role.length > 0) &&
                    company.job_role[0].function_area_name &&
                    <div className="company-info">
                        <Human />
                        <span>{company.job_role[0].function_area_name}</span>
                    </div>
                }
            </div>
            <div className="company-stats-wrapper">
                <div className="graph-notations-wrapper" style={{paddingRight: "1rem"}}>
                    <div className="graph-notation">
                        <div className="notation" style={{ background: '#f8633e' }}></div>
                        <p className="notation-text" >Salary</p>
                    </div>
                    <div className="graph-notation" >
                        <div className="notation" style={{ background: '#24e3a7' }}></div>
                        <p className="notation-text">Management</p>
                    </div>
                </div>
                {
                    companyWise &&
                    <LineGraph
                        salary={companyWise.salary}
                        category={companyWise.duration}
                        management={companyWise.managementLevelValue}
                    />
                }
            </div>
            <div className="company-other-details">
                {
                    company.job_role && company.job_role.map((jobRole, index) => (
                        <Fragment key={index}>
                            <DesignationOverview jobRole={jobRole} />
                            <RolesAndResponsibilities data={jobRole} />
                            {
                                jobRole.project && jobRole.project[0] &&
                                <ProjectOverview projects={jobRole.project} />
                            }
                        </Fragment>
                    ))
                }
            </div>
        </section>
    )
}
