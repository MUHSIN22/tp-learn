import React from 'react'
import './MembershipSelectionCard.css'
import { TiTick } from 'react-icons/ti'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { changePaymentInitiated } from '../../redux/Features/PaymentSlice';

export default function MembershipSelectionCard({ data,planCode }) {
    const cardRef = useRef();
    const dispatch = useDispatch();
    const handleMemberCardClick = (event) => {
        let activeCard = document.querySelector(".membership-selection-card--active")
        if(activeCard){
            activeCard.classList.remove("membership-selection-card--active")
        }
        cardRef.current.classList.add("membership-selection-card--active")
    }

    const handlePayment = (paymentURL) => {
        dispatch(changePaymentInitiated(true))
        window.open(paymentURL)
    }
    return (
        <div className={"membership-selection-card"+(data.planCode === planCode ? " membership-selection-card--active" : "")} ref={cardRef} onClick={handleMemberCardClick}>
            {data.planCode === planCode && <span className="special-label">Current Plan</span>}
            {
                data.planDiscount ?
                <span className="discount-label">{data.planDiscount}% <small>OFF</small></span>
                : null
            }
            <h3 className="plan-name">{data.planName}</h3>
            <h2 className="plan-price">{data.planPrice}</h2>
            <p className="plan-description">{data.planDescription}</p>
            {
                data.planName !== 'STARTER' &&
                <button className="btn-buy" onClick={() => handlePayment(data.paymentURL)}><strong>{data.planCode === planCode ? "Renew" : "Buy"} Now</strong> for <big>{data.planPrice}</big></button>
            }
            {
                data.planName === "STANDARD" ? 
                    <p className="list-title">Starter plus:</p> 
                    : 
                    data.planName === "PROFESSIONAL" ?
                    <p className="list-title">Standard plus:</p>
                    :null
                
            }
            <ul className="plan-includes">
                {
                    data.planIncludes.map((include) => (
                        <li>
                            <div className="tick-wrapper">
                                <TiTick />
                            </div>
                            <span>{include}</span>
                        </li>
                    ))
                }
            </ul>
            {console.log(data.planCode,planCode,'this is code')}
            {
                (planCode  && (data.planCode === planCode)) &&
                <p className="manage-plan-btn">Cancel Plan</p>
            }
            {
                (data.coupenCode && data.coupenCode !== "") &&
                <p className="">
                    <b >Limited Period offer </b> <br />
                    Use '{data.coupenCode}' Coupon code to avail {data.planDiscount}% off
                </p>
            }
        </div>
    )
}
