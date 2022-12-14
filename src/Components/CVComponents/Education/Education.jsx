import React from 'react'
import { useSelector } from 'react-redux'
import { selectEducation } from '../../../redux/Features/ResumeSlice'
import educationLabel from "../../../Assets/Dashboard icons/education.png";
import './Education.css'
import moment from 'moment';
import getFileExtensionFromURI from '../../../functionUtils/getFileExtensionFromURI';
import dateFormatter from '../../../functionUtils/dateFormatter';

export default function Education() {
    const education = useSelector(selectEducation);
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Education</h2>
            {
                education && education[0] &&
                education.map((item, index) => (
                    <div className="certificates-grid" key={index}>
                        <img src={educationLabel} alt="" className="certificates-label-img" />
                        <div className="certificate-details">
                            <h3 className="cv-profile-title-secondary">{item.degree_name}</h3>
                            <p className="certificate-other-details">{item.university_name} | {dateFormatter(item.course_start_date)} - {dateFormatter(item.course_end_date)}</p>
                            {
                                item.course_extra_activity.length > 0 &&
                                <p className="certificate-other-details">Extra Curricular Activities: {item.course_extra_activity}</p>
                            }
                            {
                                item.course_project_info.length > 0 &&
                                <p className="certificate-other-details">Projects: {item.course_project_info}</p>
                            }
                        </div>
                        {
                            item.upload_degree &&
                            <div className="certificate-file-wrapper">
                                {
                                    getFileExtensionFromURI(item.upload_degree) === "image" ?
                                        <a href={item.upload_degree} target="_blank">
                                            <img src={item.upload_degree} alt="" />
                                        </a>
                                        :
                                        <a href={item.upload_degree} className="btn-certificate-download" target="_blank">View File</a>

                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
