import React, { useState } from 'react'
import './Experience.css'
import { useDispatch, useSelector } from 'react-redux';
import { SelectCompanyDetails } from '../../../redux/Features/ResumeSlice';
import { companyWiseGraph } from '../../../redux/Features/GraphSlice';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import CompanyOverview from './CompanyOverview/CompanyOverview';

export default function Experience() {
    const companyInfo = useSelector(SelectCompanyDetails);

    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Experience</h2>
            {
                companyInfo && companyInfo[0] &&
                companyInfo.map((company, index) => (
                    <CompanyOverview company={company} key={index} />
                ))
            }
        </div>
    )
}
