import React from 'react'
import PriceCard from './PriceCard/PriceCard'
import './PricingPage.css'

let plans = [
  {
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

  },
  {
    planName: "STANDARD",
    planPrice: "1,200/ yr",
    planDescription: "Download and share online to attract high paying jobs",
    planIncludes: [
      "Download ATS friendly resume in PDF format",
      "Select from multiple PDF formats",
      "Share your profile link with recruiters, LinkedIn, and other social media"
    ],
    planPlus: 'Starter'

  },
  {
    planName: "PROFESSIONAL",
    planPrice: "2,400/ yr",
    planDescription: "Learn and do every thing to make success a habit",
    planIncludes: [
      'Membership of "Talentplace professional network"',
      "Access to our podcast, and webinars on career development",
      'Access to "Career SuccessMasterclass"',
      'Priority listing on job board (Coming soon)',
      'Access to AI-assisted gamified platform for career planning (coming soon)'
    ],
    planPlus: "Standard"
  }
]


export default function PricingPage() {
  return (
    <div className="pricing-page">
      <h2 className="pricing-title--bg">Talentplace Career Profile</h2>
      <h1 className="pricing-tile">More Power and Scale When You Need It</h1>
      <p className="pricing-desc">
        e Power and Scale When You Need It <br />
        Get shortlisted for an interview almost every time <br />
        Get your mail bombarded with job offers <br />
        Share on social media to flaunt your skills
      </p>
      <div className="price-cards-wrapper">
        {
          plans.map((plan,index) => (
            <PriceCard data={plan} key={index} />
          ))
        }
      </div>
    </div>
  )
}
