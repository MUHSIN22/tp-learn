import React from 'react'
import UdemyLogo from '../../Assests/udemy.jpg'
import dummyCertificate from '../../Assests/dummyCertificate.jpg'
import { useSelector } from 'react-redux'
import { selectCertificate, selectResumeLoading } from '../../redux/Features/ResumeSlice'
import CertificateCardLoader from '../Loaders/CerificateCardLoader'
export default function Cerification() {
    const loading = useSelector(selectResumeLoading)
    const Cerification = useSelector(selectCertificate) || []
    return (
        <div className='section_2 col-100 align-center'>
            <div className="col-90">
                <h3 className="text-left">Certification courses</h3>
                <span className="divider"></span>
                {!loading && Array.isArray(Cerification) ? <div className="col-100 g-1">
                    {

                        Cerification.map((c, i) => <CerificationCard logo={UdemyLogo} {...c} certificate={dummyCertificate} />)
                    }
                </div>:<CertificateCardLoader/>}

            </div>

        </div>
    )
}
function CerificationCard({ project_name, logo, certificate_start_date, certificate_end_date, skills_names ='', certificate }) {
    let skills = skills_names.split(',') 
    return (
        <div className="certificate-grid">
            <img src={logo} alt="" />
            <div className="col-100 align-start justify-between g-1">
                <div>
                    <h5>{project_name}</h5>
                    <p>{TimeDiff(certificate_end_date, certificate_start_date,)}</p>
                </div>

                <div className="flex-row-start g-0-5">
                    {skills.map((skill, i) => <div key={i} className="skill">
                        {skill}
                    </div>)}
                </div>

            </div>
            <img src={certificate} alt="" />
        </div>
    )
}
/*function TimeDiff(d1, d2) {
    d1 = new Date(d1)
    d2 = new Date(d2)
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}*/
function TimeDiff(date1, date2) {
    let year = parseInt((date1.split('-')[2])) -  parseInt((date2.split('-')[2]))
    let month = parseInt(date1.split('-')[1]) -parseInt(date2.split('-')[1])
    let days = parseInt(date1.split('-')[0]) -parseInt(date2.split('-')[0])

    if (year < 1) {
        if (month < 1) {
            return days + ' days'
        } else {
            return month + ' month'
        }
    } else {

        return year + ' years'
    }
}

