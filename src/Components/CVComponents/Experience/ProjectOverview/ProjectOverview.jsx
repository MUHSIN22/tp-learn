import React, { Fragment } from 'react'
import ProgressBar from '../../../../Util Components/ProgressBar/ProgressBar'
import './ProjectOverview.css'

let colors = ["#f2005c", "#00d3ac", "#01b550", "#00fefe", "#72b0fe", "#2c52ff"]

export default function ProjectOverview({ projects }) {
    return (
        <div className="cv-profile-container-secondary">
            <h2 className="cv-profile-title-secondary">Projects Worked on</h2>
            {
                projects.map((project, index) => (
                    <Fragment key={index}>
                        <div className="project-header-grid">
                            <h5 className="project-title">{project.project_name}</h5>
                            <div className="project-client-wrapper">
                                <p className="client">Client</p>
                                <hr className="client-pointer" />
                                <p className="client">{project.client_name}</p>
                            </div>
                            <span className="client-description-divider"></span>
                            <p className="project-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ducimus sequi optio quod voluptas ad numquam rem hic assumenda ea, deleniti nemo exercitationem consequuntur, porro placeat, esse corrupti ullam facilis.</p>
                        </div>
                        {
                            project.project_skill && project.project_skill[0] &&
                            <div className="project-skills-wrapper">
                                <div className="project-skill-grid">
                                    <h6 className="skill-title">Skill</h6>
                                    <h6 className="skill-title">Complexity</h6>
                                    <h6 className="skill-title">Application</h6>
                                </div>
                                {
                                    project.project_skill.map((skill, skillIndex) => (
                                        <div className="project-skill-grid">
                                            <p className="skill-btn">{skill.skill_name}</p>
                                            <ProgressBar percent={(skill.skill_complexity / 10) * 100} color={colors[0]} />
                                            <p className="skill-application">{skill.skill_desc}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}
