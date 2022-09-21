import React from 'react'
import { BsDownload, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FiEdit, FiShare2 } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getPayment from '../../Razorpay/getPayment'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { downloadCV, selectResumeDetails } from '../../redux/Features/ResumeSlice'
import MainCV from '../MainCv/MainCV'
import {MdContentCopy} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import './DashboardCV.css'
import shareResume from '../../Razorpay/shareResume'

export default function DashboardCv() {
    const navigate = useNavigate();
    const user_id = useSelector(selectUser_id)
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken)
    const resumeDetails = useSelector(selectResumeDetails)

    console.log(resumeDetails);
    const downloadCVPDF = async () => {
        if ((resumeDetails.subscription_status && resumeDetails.subscription_status === 1)) {
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
        } else {
            getPayment(499,null,dispatch,user_id,token);
        }

    }


    return (
        <div className="main-cv-wrapper">
            <div className="profile-share-and-edit-wrapper">
                <div className="profile-icon-wrapper" onClick={() => navigate('/dashboard/edit')}>
                    <FiEdit />
                </div>
                <div className="profile-icon-wrapper" onClick={downloadCVPDF}>
                    <BsDownload />
                </div>
                <div className="profile-icon-wrapper">
                    <FiShare2 />
                    <div className="profile-share-tooltip">
                        <IoLogoWhatsapp onClick={() => shareResume("whatsapp",user_id)} className='tooltip-icon wp-icon'/>
                        <BsFacebook onClick={() => shareResume("facebook",user_id)} className='tooltip-icon fb-icon'/>
                        <BsLinkedin onClick={() => shareResume("linkedin",user_id,resumeDetails.fname+" "+resumeDetails.lname)}className='tooltip-icon in-icon'/>
                        <MdContentCopy onClick={() => shareResume("copy",user_id)} className='tooltip-icon cp-icon'/>
                    </div>
                </div>
            </div>
            <MainCV />
        </div>
    )
}
