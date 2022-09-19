import React from 'react'
import './MembershipSelectionCard.css'
import { TiTick } from 'react-icons/ti'
import { useRef } from 'react'

export default function MembershipSelectionCard({ data }) {
    const cardRef = useRef();
    const handleMemberCardClick = (event) => {
        let activeCard = document.querySelector(".membership-selection-card--active")
        if(activeCard){
            activeCard.classList.remove("membership-selection-card--active")
        }
        cardRef.current.classList.add("membership-selection-card--active")
    }
    return (
        <div className={"membership-selection-card"+(data.isCurrent ? " membership-selection-card--active" : "")} ref={cardRef} onClick={handleMemberCardClick}>
            {data.isCurrent && <span className="special-label">Current Plan</span>}
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
                <button className="btn-buy"><strong>{data.isCurrent ? "Renew" : "Buy"} Now</strong> for <big>1200/</big>yr</button>
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
            {
                data.isCurrent &&
                <p className="manage-plan-btn">Cancel Plan</p>
            }
        </div>
    )
}
