import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import shareResume from '../../Razorpay/shareResume'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeDownloading, downloadCV, getDownloadMedia, manageResumeData, selectResumeDetails, setReloadDecider } from '../../redux/Features/ResumeSlice'
import HidingCheckbox from '../../Util Components/HidingCheckbox/HidingCheckbox'
import './CVHiddenForm.css'

export default function CVHiddenForm() {
  const {resume_info} = useSelector(selectResumeDetails)
  const [personal_info,setPersonalInfo] = useState({"name":0,"email":0,"mobile":0,"dob":0,"gender":0,"salary":0,"congetive_info":0})
  const [companyData,setCompany] = useState([])
  const [educationData,setEducation] = useState([])
  const [certificateData,setCertificate] = useState([])
  const [contributionData,setContribution] = useState([])
  const [portfolioData,setPortfolio] = useState([])
  const [languages,setLanguages] = useState([])
  const [hobbies,setHobbies] = useState({})
  const [socialMedia,setSocialMedia] = useState({})
  const downloadMedia = useSelector(getDownloadMedia);
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken)
  const user_id = useSelector(selectUser_id)


  const changeAllVisibility = (event,setter,data,field_name) => {
    if(event.target.checked){
      let hiddenData = data.map(item => item[field_name])
      setter(hiddenData)
    }else{
      setter([])
    }
  } 

  const checkAllPersonal = (event) => {
    if(event.target.checked){
      setPersonalInfo({"name":1,"email":1,"mobile":1,"dob":1,"gender":1,"salary":1,"congetive_info":1})
    }else{
      setPersonalInfo({"name":0,"email":0,"mobile":0,"dob":0,"gender":0,"salary":0,"congetive_info":0})
    }
  }

  useEffect(() => {
    let hobbies = {
      entertainment:resume_info.entertainment,
      adventure:resume_info.adventure,
      books:resume_info.books,
      leisure:resume_info.leisure,
      music:resume_info.music,
      sports:resume_info.sports,
      travel:resume_info.travel,
      any_other:resume_info.any_other,
    }
    let socialMedia = {
      link_facebook:resume_info.link_facebook,
      link_instagram:resume_info.link_instagram,
      link_twitter:resume_info.link_twitter,
      link_linkedin:resume_info.link_linkedin,
      link_other:resume_info.link_other
    }
    let socialMediaKeys = Object.keys(socialMedia)
    let hobbyKeys = Object.keys(hobbies);
    for(let i=0;i<hobbyKeys.length;i++){
      let key = hobbyKeys[i];
      if(hobbies[key] === ""){
        delete hobbies[key]
      }else{
        hobbies[key] = 0
      }
    }

    for(let i=0;i<socialMediaKeys.length;i++){
      let key = socialMediaKeys[i];
      if(socialMedia[key] === ""){
        delete socialMedia[key]
      }else{
        socialMedia[key] = 0
      }
    }
    setSocialMedia(socialMedia)
    setHobbies(hobbies)
  },[resume_info])


  const handleHiddenFormSubmission = async (event) => {
    event.preventDefault()
    let body = {
      personal_info,
      education: educationData,
      certificate: certificateData,
      company: companyData,
      additional_skill: contributionData,
      portfolio: portfolioData,
      languages: languages,
      hobbies: hobbies,
      socialMedia: socialMedia
    }
    dispatch(setReloadDecider(true));
    await dispatch(manageResumeData({body:{user_id, resume_data: JSON.stringify(body)}}))
    await downloadOrShare()
    dispatch(changeDownloading(false));
  }

  const downloadOrShare = () => {
    if(downloadMedia === "download"){
      downloadResume();
    }else if(downloadMedia){
      shareResume(downloadMedia, user_id)
    }
  }

  const downloadResume = async () => {
    let downloadTag = document.createElement('a')
      downloadTag.download = "resume.pdf"
      let CVData = await dispatch(downloadCV({ auth: token, body: { user_id } }))
      if (CVData) {
          downloadTag.href = CVData.payload.data.message;
      }
      downloadTag.dispatchEvent(new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
      }))
  }


  const checkAllHobbies = (event) => {
    let hobbiesAr = Object.keys(hobbies)
    let newHobbies = {}
    for(let i=0;i<hobbiesAr.length;i++){
      newHobbies[hobbiesAr[i]] = event.target.checked ? 1 : 0
    }
    setHobbies(newHobbies)
  }

  const checkAllSocialMedia = (event) => {
    let socialMediaAr = Object.keys(socialMedia)
    let newSocialMedia = {}
    for(let i=0;i<socialMediaAr.length;i++){
      newSocialMedia[socialMediaAr[i]] = event.target.checked ? 1 : 0
    }
    setSocialMedia(newSocialMedia)
  }

  return (
    <div className="cv-hidden-form">
      <h2 className="form-title">Check the boxes to hide the information from your Resume</h2>
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Personal Details</h3>
          <input type="checkbox" onChange={checkAllPersonal} />
        </div>
        <div className="grid-1-1-1">
          <HidingCheckbox 
            name="name" 
            label="Name" 
            id="name"
            nameCheck="name"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.name == 1}
          />
          <HidingCheckbox 
            name="salary" 
            label="Salary" 
            id="salary"
            nameCheck="salary"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.salary == 1}
          />
          <HidingCheckbox 
            name="gender" 
            label="Gender" 
            id="gender" 
            nameCheck="gender"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.gender == 1}
          />
          <HidingCheckbox 
            name="email" 
            label="Email" 
            id="email" 
            nameCheck="email"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.email == 1}
          />
          <HidingCheckbox 
            name="mobile" 
            label="Mobile" 
            id="mobile" 
            nameCheck="mobile"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.mobile == 1}
          />
          <HidingCheckbox 
            name="dob" 
            label="Date of birth" 
            id="dob" 
            nameCheck="dob"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.dob == 1}
          />
          <HidingCheckbox 
            name="cognetive_skills" 
            label="Cognitive Skills" 
            id="congetive_skills" 
            nameCheck="congetive_info"
            setter={setPersonalInfo}
            data={personal_info}
            checked={personal_info.congetive_info == 1}
          />
        </div>
      </div>

      {/* Experience */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Experience</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setCompany,resume_info.company,"company_record_id")} />
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.company && resume_info.company[0])&&
            resume_info.company.map((company,index) => (
              <HidingCheckbox 
                name={`company-${index}`} 
                id={`company-${index}`} 
                label={company.company_name} 
                checked={(company.company_record_id && companyData.includes(company.company_record_id))}
                fieldID={company.company_record_id}
                setter={setCompany}
                data={companyData}
              />
            ))
          }
        </div>
      </div>
      
      {/* Education */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Education</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setEducation,resume_info.education,"education_record_id")} />
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.education && resume_info.education[0])&&
            resume_info.education.map((education,index) => (
              <HidingCheckbox 
                name={`education-${index}`} 
                id={`education-${index}`} 
                label={education.degree_name} 
                checked={education.education_record_id && educationData.includes(education.education_record_id)}
                fieldID={education.education_record_id}
                setter={setEducation}
                data={educationData}
              />
            ))
          }
        </div>
      </div>

      {/* Certification */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Certifications</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setCertificate,resume_info.certificate,"certificate_record_id")} />
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.certificate && resume_info.certificate[0])&&
            resume_info.certificate.map((certificate,index) => (
              <HidingCheckbox 
                name={`certificate-${index}`} 
                id={`certificate-${index}`} 
                label={certificate.project_name}
                checked={certificate.certificate_record_id && certificateData.includes(certificate.certificate_record_id)}
                fieldID={certificate.certificate_record_id}
                setter={setCertificate}
                data={certificateData}
              />
            ))
          }
        </div>
      </div>

      {/* Voluntary Roles */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Social Contributions</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setContribution,resume_info.additional_skill,"additional_skill_record_id")} />
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.additional_skill && resume_info.additional_skill[0])&&
            resume_info.additional_skill.map((additional_skill,index) => (
              <HidingCheckbox 
                name={`additional_skill-${index}`} 
                id={`additional_skill-${index}`} 
                label={additional_skill.organization_name} 
                checked={additional_skill.additional_skill_record_id && contributionData.includes(additional_skill.additional_skill_record_id)}
                fieldID={additional_skill.additional_skill_record_id}
                setter={setContribution}
                data={contributionData}
              />
            ))
          }
        </div>
      </div>

      {/* Portfolio */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Portfolio</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setPortfolio,resume_info.upload_photo_media,"user_resume_photo_media_id")}/>
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.upload_photo_media && resume_info.upload_photo_media[0])&&
            resume_info.upload_photo_media.map((upload_photo_media,index) => (
              <HidingCheckbox 
                name={`upload_photo_media-${index}`} 
                id={`upload_photo_media-${index}`} 
                label={upload_photo_media.title} 
                checked={upload_photo_media.user_resume_photo_media_id && portfolioData.includes(upload_photo_media.user_resume_photo_media_id)}
                fieldID={upload_photo_media.user_resume_photo_media_id}
                setter={setPortfolio}
                data={portfolioData}
              />
            ))
          }
        </div>
      </div>

      {/* Languages */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Languages</h3>
          <input type="checkbox" onChange={(event) => changeAllVisibility(event,setLanguages,resume_info.language_info,"language_id")} />
        </div>
        <div className="grid-1-1-1">
          {
            (resume_info && resume_info.language_info && resume_info.language_info[0])&&
            resume_info.language_info.map((language_info,index) => (
              <HidingCheckbox 
                name={`language_info-${index}`} 
                id={`language_info-${index}`} 
                label={language_info.language_name}
                checked={language_info.language_id && languages.includes(language_info.language_id)}
                fieldID={language_info.language_id}
                setter={setLanguages}
                data={languages}
              />
            ))
          }
        </div>
      </div>

      {/* Languages */}
      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Hobbies</h3>
          <input type="checkbox" onChange={checkAllHobbies}/>
        </div>
        <div className="grid-1-1-1">
          {
            resume_info.entertainment&&
            <HidingCheckbox 
              name="entertainment" 
              id="entertainment" 
              label="Entertainment" 
              nameCheck="entertainment"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.entertainment == 1}
            />
          }
          {
            resume_info.adventure&&
            <HidingCheckbox 
              name="adventure" 
              id="adventure" 
              label="Adventure" 
              nameCheck="adventure"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.adventure == 1}
            />
          }
          {
            resume_info.books&&
            <HidingCheckbox 
              name="books" 
              id="books" 
              label="Books" 
              nameCheck="books"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.books == 1}
            />
          }
          {
            resume_info.leisure&&
            <HidingCheckbox 
              name="leisure" 
              id="leisure" 
              label="Leisure" 
              nameCheck="leisure"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.leisure == 1}
            />
          }
          {
            resume_info.music&&
            <HidingCheckbox 
              name="music" 
              id="music" 
              label="Music" 
              nameCheck="music"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.music == 1}
            />
          }
          {
            resume_info.sports&&
            <HidingCheckbox 
              name="sports" 
              id="sports" 
              label="Sports" 
              nameCheck="sports"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.sports == 1}
            />
          }
          {
            resume_info.travel&&
            <HidingCheckbox 
              name="travel" 
              id="travel" 
              label="Travel" 
              nameCheck="travel"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.travel == 1}
            />
          }
          {
            resume_info.any_other&&
            <HidingCheckbox 
              name="any_other" 
              id="any_other" 
              label="Other" 
              nameCheck="any_other"
              setter={setHobbies}
              data={hobbies}
              checked={hobbies.any_other == 1}
            />
          }
        </div>
      </div>

      <div className="hide-container">
        <div className="hide-header-wrapper">
          <h3 className="form-title">Social Media</h3>
          <input type="checkbox" onChange={checkAllSocialMedia}/>
        </div>
        <div className="grid-1-1-1">
          {
            resume_info.link_facebook&&
            <HidingCheckbox 
              name="link_facebook" 
              id="link_facebook" 
              label="Facebook" 
              nameCheck="link_facebook"
              setter={setSocialMedia}
              data={socialMedia}
              checked={socialMedia.link_facebook == 1}
            />
          }
          {
            resume_info.link_instagram&&
            <HidingCheckbox 
              name="link_instagram" 
              id="link_instagram" 
              label="Instagram" 
              nameCheck="link_instagram"
              setter={setSocialMedia}
              data={socialMedia}
              checked={socialMedia.link_instagram == 1}
            />
          }
          {
            resume_info.link_twitter&&
            <HidingCheckbox 
              name="link_twitter" 
              id="link_twitter" 
              label="Twitter" 
              nameCheck="link_twitter"
              setter={setSocialMedia}
              data={socialMedia}
              checked={socialMedia.link_twitter == 1}
            />
          }
          {
            resume_info.link_linkedin&&
            <HidingCheckbox 
              name="link_linkedin" 
              id="link_linkedin" 
              label="Linkedin" 
              nameCheck="link_linkedin"
              setter={setSocialMedia}
              data={socialMedia}
              checked={socialMedia.link_linkedin == 1}
            />
          }
          {
            resume_info.link_other&&
            <HidingCheckbox 
              name="link_other" 
              id="link_other" 
              label="Other" 
              nameCheck="link_other"
              setter={setSocialMedia}
              data={socialMedia}
              checked={socialMedia.link_other == 1}
            />
          }
        </div>
      </div>

      <div className="hidden-form-btns">
        <button className="btn btn-back">Back</button>
        <button className="btn btn-proceed" onClick={handleHiddenFormSubmission}>Proceed</button>
      </div>
    </div>
  )
}
