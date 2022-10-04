import React, { useState } from 'react'
import { BsDownload, BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FiEdit, FiShare2 } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getPayment from '../../Razorpay/getPayment'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changeDownloading, changePlanPopup, downloadCV, getDownloadMedia, getPlanPopup, selectResumeDetails } from '../../redux/Features/ResumeSlice'
import MainCV from '../MainCv/MainCV'
import { MdContentCopy } from 'react-icons/md'
import { IoLogoWhatsapp } from 'react-icons/io'
import './DashboardCV.css'
import shareResume from '../../Razorpay/shareResume'
import { getPaymentStatus } from '../../redux/Features/PaymentSlice'
import PlanActionPopup from '../PlanActionPopup/PlanActionPopup'
import CVHiddenForm from '../CVHiddenForm/CVHiddenForm'

export default function DashboardCv() {
    const navigate = useNavigate();
    const user_id = useSelector(selectUser_id)
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken)
    const resumeDetails = useSelector(selectResumeDetails)
    const paymentStatus = useSelector(getPaymentStatus);
    const isPlanPopup = useSelector(getPlanPopup);
    const [isShare, setShare] = useState(false)
    const downloadMedia = useSelector(getDownloadMedia)

    const downloadCVPDF = async () => {
        if ((paymentStatus)) {
            dispatch(changeDownloading('download'))
        } else {
            dispatch(changePlanPopup(true))
        }
    }

    const share = async (media, user_id) => {
        if (paymentStatus) {
            dispatch(changeDownloading(media))
        } else {
            dispatch(changePlanPopup(true))
        }
    }

    console.log(downloadMedia,'this is download media');


    return (
        <div className="main-cv-wrapper">
            {
                isPlanPopup &&
                <PlanActionPopup />
            }
            {
                downloadMedia ?
                    <CVHiddenForm />
                    :
                    <>
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
                                    <IoLogoWhatsapp onClick={() => share("whatsapp", user_id)} className='tooltip-icon wp-icon' />
                                    <BsFacebook onClick={() => share("facebook", user_id)} className='tooltip-icon fb-icon' />
                                    <BsLinkedin onClick={() => share("linkedin", user_id, resumeDetails.fname + " " + resumeDetails.lname)} className='tooltip-icon in-icon' />
                                    <MdContentCopy onClick={() => share("copy", user_id)} className='tooltip-icon cp-icon' />
                                </div>
                            </div>
                        </div>
                        <MainCV />
                    </>
            }
        </div>
    )
}
