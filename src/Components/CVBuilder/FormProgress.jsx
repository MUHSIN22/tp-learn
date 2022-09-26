import React, { useState } from 'react'
import { useEffect } from 'react'
import { BsArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeFormId, getExperienceProgress, getOtherFormProgress, selectFormId, setReloadDecider } from '../../redux/Features/ResumeSlice'
import './FormProgress.css'


export default function FormProgress() {
    const [experienceProgress, setExperienceProgress] = useState(0)
    const experienceDetails = useSelector(getExperienceProgress);
    const otherForms = useSelector(getOtherFormProgress);
    const dispatch = useDispatch();
    const auth = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const currentFormID = useSelector(selectFormId)
    console.log(experienceDetails);

    useEffect(() => {
        if (experienceDetails) {
            let progress = 0;
            let data = Object.values(experienceDetails);
            for (let i = 0; i < data.length; i++) {
                if (data[i] === 1) {
                    progress++;
                }
            }
            setExperienceProgress((progress / 5) * 100)
        }
    }, [experienceDetails])
    
    const selectExperience = () => {
        let data = Object.values(experienceDetails);
        for(let i=0;i< data.length;i++){
            if(data[i] === 0){
                dispatch(setReloadDecider(true));
                dispatch(changeFormId({auth,body:{user_id,form_id: i}}))
                return;
            }
        }
        dispatch(changeFormId({auth,body:{user_id,form_id: 0}}))
    }

    const changeForm = (formID) => {
        dispatch(setReloadDecider(true));
        dispatch(changeFormId({auth,body:{user_id,form_id: formID}}))
    }

    return (
        <div className="cv-progress-wrapper">
            <div className="cv-form-progress-container">
                {/* <div className="progress"></div>
                <p className="progress-indicator">Career Objective</p> */}
                <span className={"progress-part "+([0,1,2,3,4,5,6,7].includes(currentFormID) ? "progress-part--active" : "")} onClick={selectExperience}>
                    {
                        experienceProgress > 0 &&
                        <div className={"progress-inside-progress" + ((experienceProgress < 100) ? " progress-inside--not-filled" : "")} style={{ width: `${experienceProgress}%` }}>
                            <p className="progress-title">Experience</p>
                        </div>
                    }
                </span>
                <span className={"progress-part "+(currentFormID === 8 ? "progress-part--active" : "")} onClick={() => changeForm(8)} >
                    {
                        otherForms.education_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Education</p>
                </span>
                <span className={"progress-part "+([9,10].includes(currentFormID) ? "progress-part--active" : "")} onClick={() => changeForm(9)} >
                    {
                        otherForms.certificate_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Certification</p>
                </span>
                <span className={"progress-part "+(currentFormID === 11 ? "progress-part--active" : "")} onClick={() => changeForm(11)} >
                    {
                        otherForms.voluntary_form === 1 &&
                        <div className="progress-inside-progress">
                            <p className="progress-title">Voluntary Roles</p>
                        </div>
                    }
                </span>
                <span className={"progress-part "+(currentFormID === 12 ? "progress-part--active" : "")} onClick={() => changeForm(12)} >
                    {
                        otherForms.hobby_form === 1 &&
                        <div className="progress-inside-progress">
                            <p className="progress-title">Hobby & Languanges</p>
                        </div>
                    }
                </span>
                <span className={"progress-part "+(currentFormID === 13 ? "progress-part--active" : "")} onClick={() => changeForm(13)} >
                    {
                        otherForms.career_objective_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Career Objective</p>
                </span>
                <span className={"progress-part "+(currentFormID === 14 ? "progress-part--active" : "")} onClick={() => changeForm(14)} >
                    {
                        otherForms.portfolio_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Portfolio</p>
                </span>
                <span className={"progress-part "+(currentFormID === 15 ? "progress-part--active" : "")} onClick={() => changeForm(15)} >
                    {
                        otherForms.cognitive_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Cognitive Skills</p>
                </span>
                <span className={"progress-part "+(currentFormID === 16 ? "progress-part--active" : "")} onClick={() => changeForm(16)} >
                    {
                        otherForms.social_media_form === 1 &&
                        <div className="progress-inside-progress">
                        </div>
                    }
                    <p className="progress-title">Social Media</p>
                </span>
            </div>
        </div>
    )
}
