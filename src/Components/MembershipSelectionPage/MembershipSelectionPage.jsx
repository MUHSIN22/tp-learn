import React from 'react'
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
    isCurrent: true,
    planPrice: "1,200/ yr",
    planDiscount: '50',
    planDescription: "Download and share online to attract high paying jobs",
    planIncludes: [
        "Download ATS friendly resume in PDF format",
        "Select from multiple PDF formats",
        "Share your profile link with recruiters, LinkedIn, and other social media"
    ]   

}

let professional = {
    planName: "PROFESSIONAL",
    planPrice: "2,400/ yr",
    planDiscount: '30',
    planDescription: "Learn and do every thing to make success a habit",
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

export default function MembershipSelectionPage() {
  return (
    <div className="membership-cv-container">
        <h3 className="membership-btn-header">Talentplace Career Profile</h3>
        <h1 className="membership-main-header">More Power and Scale When You Need It</h1>
        <p className="membership-description">Get shortlisted for an interview almost every time Get your mail bombarded with job offers Share on social media to flaunt your skills</p>
        <div className="membership-cards-wrapper">
            <MembershipSelectionCard data={starter} />
            <MembershipSelectionCard data={standard} />
            <MembershipSelectionCard data={professional} />
        </div>
    </div>
  )
}
