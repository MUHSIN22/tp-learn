import React from 'react'
import './ProjectOverview.css'

export default function ProjectOverview({ projects }) {
    return (
        <div className="cv-profile-container-secondary">
            <h2 className="cv-profile-title-secondary">Projects Worked on</h2>
            {
                projects.map((project) => (
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
                ))
            }
        </div>
    )
}
