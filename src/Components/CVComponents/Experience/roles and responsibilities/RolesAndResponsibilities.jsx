import React from 'react';
import parser from "html-react-parser";
import { ReactComponent as TickCircle } from "../../../../Assests/icons/tick-circle.svg";
import './RolesAndResponsibilites.css'

export default function RolesAndResponsibilities({ data }) {
    let rolesList = []
    if (data.role_responsibilties) {
        let rolesString = parser(data.role_responsibilties)
        rolesString = rolesString.replace(/<\/?[^>]+(>|$)/g, "");
        rolesList = rolesString.split(".")
        console.log(rolesList);
    }
    return (
        <div className="cv-profile-container-secondary">
            <h2 className="cv-profile-title-secondary">Roles and Responsiblities</h2>
            <div className="responsibilities-grid">
                <div className="responsibilities">
                    <ul>
                        {
                            rolesList && rolesList[0] &&
                            rolesList.map((role, index) => (
                                <li key={index}>
                                    <TickCircle />
                                    <span>{role}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="resp-skills">
                    {console.log(data.skills,"this is skills")}
                    {
                        data.skills && data.skills[0] &&
                        data.skills.map((skill,index) => (
                            <div className="skill-btn" key={index}>
                                {skill.skill_name}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
