import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { companyWiseGraphForShare, graphDetails, graphDetailsForShare } from '../../redux/Features/GraphSlice'
import { profileInfo, selectResumeDetails } from '../../redux/Features/ResumeSlice'
import CerificationReview from '../CV/CerificationReview'
import Education from '../CV/Education'
import EducationReview from '../CV/EducationReview'
import HobbyReview from '../CV/HobbyReview'
import Section1 from '../CV/Section1'
import Section2 from '../CV/Section2Review'
import Section3 from '../CV/Section3'
import Section3Review from '../CV/Section3Review'
import SocialContributionReview from '../CV/SocialContributionReview'
import SocialMedia from '../CV/SocialMedia'
import MainCV from '../MainCv/MainCV'
import './CVShare.css'

export default function CVShare() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const userInfo = useSelector(selectResumeDetails)
    const [fetched, setFetched] = useState(false)
    console.log(userInfo,'user ifo');
    useEffect(() => {
        const fetch = async () => {
            await dispatch(profileInfo({ user_id: id }))
            // await dispatch(companyWiseGraphForShare({use}))
            await dispatch(graphDetailsForShare({user_id: id}))
            setFetched(true)
        }
        fetch()
    }, [])
    return (
        <>
            <Helmet>
                <title>{userInfo.fname}</title>
                <meta property="og:image" content={userInfo.resume_info && userInfo.resume_info.profile_pic}/>  
                <meta property="og:title" content={userInfo.fname}/>  
                <meta property="og:description" content="Your description."/>  
            </Helmet>
            {
                fetched &&
                <>
                    {
                        userInfo && userInfo.subscription_status === 1 ?
                            <div className="cv-share-container">
                                <MainCV />
                            </div>
                            : <Navigate replace to="/" />
                    }
                </>

            }
        </>
    )
}
