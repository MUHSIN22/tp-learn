import React from 'react'
import './Referral.css'
import amount from '../../Assets/referal/icon 3.png'
import spread from '../../Assets/referal/icon 2.png'
import friend from '../../Assets/referal/icon 1.png'


export default function Referral() {
  return (
    <div className="referal-page-container">
        <div className="referal-landing">
            <h1 className="referal-title">
                Invite Friends & <br />
                You Both Get Up To ₹100
            </h1>
            <p className="referal-description">
                Introduce your friends to the easiest way to get things done
            </p>
            <div className="btn btn-invite">Invite</div>
        </div>
        <section className="step-section">
            <h1 className="referal-section-heading">Three Easy Steps</h1>
            <div className="steps-wrapper">
                <div className="step-card">
                    <img src={spread} className="step-card-icon" alt="" />
                    <p className="step-card-text">Spread the word by email or with your link via social sharing</p>
                </div>
                <div className="step-card">
                    <img src={friend} className="step-card-icon" alt="" />
                    <p className="step-card-text">Your friend signs up to Fiverr & gets 10% off their first purchase</p>
                </div>
                <div className="step-card">
                    <img src={amount} className="step-card-icon" alt="" />
                    <p className="step-card-text">You get 10% of their first order amount, up to ₹100</p>
                </div>
            </div>
        </section>

        <section className="section-condition">
            <h1 className="referal-section-heading">Don't Let Your Friends Waste Another Minute</h1>
            <p className="condition-text">Nobody likes to waste time. That's why Talentplace empowers entrepreneurs to connect with pros who can help them do more with less. You've experienced this power. Now, you can share it and earn up to ₹100 for every friend who signs up and makes their first order.</p>
            <a href="">Read More.</a>
        </section>
    </div>
  )
}
