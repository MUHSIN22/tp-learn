import React from 'react'
import './DesignationOverview.css'
import { ReactComponent as HumanG } from "../../../../Assests/icons/human_g.svg";
import { ReactComponent as Webcam } from "../../../../Assests/icons/webcam.svg";
import { ReactComponent as BarGraphO } from "../../../../Assests/icons/chart_o.svg";
import { ReactComponent as Location } from "../../../../Assests/icons/location.svg";
import ProgressBar from '../../../../Util Components/ProgressBar/ProgressBar';
import moment from 'moment';
let colors = ["#fe4c1c", "#00dd97", "#008dff"]

export default function DesignationOverview({ jobRole }) {
    return (
        <div className="cv-designation-overview">
            <div className="designation-title-wrapper">
                <h2 className="designation-title">{jobRole.designation_name}</h2>
                <p>{(moment(jobRole.job_start_date, "DD-MM-YYYY").format("yyyy MMM") ||
                    "unknown") + " - " + (moment(jobRole.job_end_date, "DD-MM-YYYY").format("yyyy MMM") ||
                        "Present")}</p>
            </div>
            <div className="designation-grid">
                <div className="company-info-wrapper">
                    {
                        jobRole.job_level_name &&
                        <div className="company-info">
                            <BarGraphO />
                            <span>{jobRole.job_level_name}</span>
                        </div>
                    }
                    {
                        jobRole.function_area_name &&
                        <div className="company-info">
                            <HumanG />
                            <span>{jobRole.function_area_name}</span>
                        </div>
                    }
                    {
                        jobRole.job_location &&
                        <div className="company-info">
                            <Webcam />
                            <span>{jobRole.job_location}</span>
                        </div>
                    }
                </div>
                {
                    jobRole.skills && jobRole.skills[0] &&
                    <div className="designation-skills-wrapper">
                        <h6 className="designation-skills-title">Key skills used</h6>
                        {
                            jobRole.skills.map((skill, index) => (
                                <div className="designation-skill" key={index}>
                                    <p className="designation-skill-name">{skill.skill_name}</p>
                                    <ProgressBar percent={skill.skill_complexity} color={colors[index > 2 ? index % 2 : index]} />
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}
