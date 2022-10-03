import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { changePaymentInitiated, getPaidPlanCode, getPaymentDetails, getPaymentInitiated, getPlanDetails } from '../../redux/Features/PaymentSlice'
import MembershipSelectionCard from '../MembershipSelectionCard/MembershipSelectionCard'
import './MembershipSelectionPage.css'

let starter = {
    planName: "STARTER",
    planPrice: "FREE forever",
    planDescription: "Make your incredibly smart career profile",
    planIncludes: [
        "AI powered auto suggestions",
        "Keyword rich job role description",
        "Designer Profile (Resume)",
        "Career summary with key insights",
        "Salary growth chart",
        "Industry analysis",
        "Edit Profile"
    ]

}

let standard = {
    planName: "STANDARD",
    // isCurrent: true,
    paymentURL:"https://subscriptions.zoho.in/subscribe/69d7b2493f9189c309b441be327302aae44e140e4ef38aaedbde1ccf1c7a189d/STD",
    planPrice: "1,200/ yr",
    planDiscount: '50',
    planDescription: "Download and share online to attract high paying jobs",
    planCode: 'STD',
    coupenCode: "STAND50",
    planIncludes: [
        "Download ATS friendly resume in PDF format",
        "Select from multiple PDF formats",
        "Share your profile link with recruiters, LinkedIn, and other social media"
    ]   

}

let professional = {
    planName: "PROFESSIONAL",
    paymentURL: "https://subscriptions.zoho.in/subscribe/69d7b2493f9189c309b441be327302aae44e140e4ef38aaedbde1ccf1c7a189d/PRO",
    planPrice: "2,400/ yr",
    planDiscount: '30',
    planDescription: "Learn and do every thing to make success a habit",
    planCode: 'PRO',
    coupenCode: 'PRO30',
    planIncludes: [
        'Membership of "Talentplace professional network"',
        "Access to our podcast, and webinars on career development",
        'Access to "Career SuccessMasterclass"',
        'Priority listing on job board (Coming soon)',
        'Access to AI-assisted gamified platform for career planning (coming soon)'
    ]

}

export default function MembershipSelectionPage() {
    const dispatch = useDispatch()
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)
    const planCode = useSelector(getPaidPlanCode);
    const isPaymentInitiated = useSelector(getPaymentInitiated)
    useEffect(() => {
        dispatch(getPaymentDetails({auth: token,body:{user_id}}));
    },[])
    
  return (
    <div className="membership-cv-container">
        <h3 className="membership-btn-header">Talentplace Career Profile</h3>
        <h1 className="membership-main-header">More Power and Scale When You Need It</h1>
        <p className="membership-description">Get shortlisted for an interview almost every time Get your mail bombarded with job offers Share on social media to flaunt your skills</p>
        <div className="membership-cards-wrapper">
            <MembershipSelectionCard data={starter} planCode={planCode} />
            <MembershipSelectionCard data={standard} planCode={planCode} />
            <MembershipSelectionCard data={professional} planCode={planCode} />
        </div>
    </div>
  )
}
