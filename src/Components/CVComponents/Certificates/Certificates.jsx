import React from 'react'
import './Certificates.css'
import certificateLabel from '../../../Assets/Dashboard icons/certificate.png'
import { useSelector } from 'react-redux'
import { selectCertificate } from '../../../redux/Features/ResumeSlice'
import moment, { months } from 'moment/moment'
import getFileExtensionFromURI from '../../../functionUtils/getFileExtensionFromURI'

export default function Certificates() {
    const certificateData = useSelector(selectCertificate) || [];
    console.log(certificateData, "this is certificate data");
    const getMonthDifference = (from, to) => {
        console.log(from, to, "this is dates");
        let monthDiff = moment(to, "dd-mm-yyyy").diff(moment(from, "dd-mm-yyyy"), 'month')
        console.log(monthDiff, 'this is diff');
        return monthDiff === 0 ? "Less than a month" : `${monthDiff} Months`;
    }
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Certification Courses</h2>
            {
                certificateData.map((certificate, index) => (
                    <div className="certificates-grid" key={index}>
                        <img src={certificateLabel} alt="" className="certificates-label-img" />
                        <div className="certificate-details">
                            <h3 className="cv-profile-title-secondary">{certificate.project_name} <span>({certificate.institute_name})</span></h3>
                            <p className="certificate-other-details">{getMonthDifference(certificate.certificate_start_date, certificate.certificate_end_date)}</p>
                            <div className="certificate-skills-wrapper">
                                {
                                    certificate.skills_names &&
                                    certificate.skills_names.split(',').map((skill, skillIndex) => (
                                        <p className="skill-label" key={skillIndex}>{skill}</p>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            certificate.certificate_file &&
                            <div className="certificate-file-wrapper">
                                {
                                    getFileExtensionFromURI(certificate.certificate_file) === "image" ?
                                        <a href={certificate.certificate_file} target="_blank">
                                            <img src={certificate.certificate_file} alt="" />
                                        </a>
                                        :
                                        <a href={certificate.certificate_file} className="btn-certificate-download" target="_blank">View File</a>

                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
