import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { selectKeySkills } from '../../redux/Features/GraphSlice';
import { getDownLoadDetails, selectBio, selectCertificate, SelectCompanyDetails, selectEducation, selectHobbies, selectLastCompany, selectProfilePic, selectResumeDetails, selectResumeLoading, selectSocialContribution, selectSocilaLinks } from '../../redux/Features/ResumeSlice';

export default function Checking() {
    const companyInfo = useSelector(SelectCompanyDetails);
    const profile = useSelector(selectProfilePic);
    const bio = useSelector(selectBio);
    const resumeDetails = useSelector(selectResumeDetails);
    let lastCompany = useSelector(selectLastCompany);
    let lastJob = lastCompany ? lastCompany.job_role[lastCompany.job_role.length -1].designation_name : ""
    let keySkills = useSelector(selectKeySkills);
    const educations = useSelector(selectEducation) || [];
    const certificates = useSelector(selectCertificate) || [];
    const hobbies = useSelector(selectHobbies);
    const socialLink = useSelector(selectSocilaLinks)
    const socialContribution = useSelector(selectSocialContribution);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const downloadlink=useSelector(getDownLoadDetails)
    const loading = useSelector(selectResumeLoading);
    
    useEffect(() => {
        console.log("company", companyInfo);
        console.log("profile", profile);
        console.log("bio",bio);
        console.log('resumeDetails',resumeDetails);
        console.log("lastjob",lastJob);
        console.log("key skills",keySkills);
        console.log("educations",educations);
        console.log("certificates",certificates);
        console.log("hobbies",hobbies);
        console.log("socialLinks",socialLink);
        console.log("socialContribuition",socialContribution);
    },[])
  return (
    <div>Checking</div>
  )
}
