import React from 'react'
import './MembershipSelectionCard.css'
import { TiTick } from 'react-icons/ti'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { cancelSubscription, changePaymentInitiated, createSubscription, getPaymentDetails, selectSubscriptionDetails, updateSubscription } from '../../redux/Features/PaymentSlice';
import { useSelector } from 'react-redux';
import { selectResumeDetails, setReloadDecider } from '../../redux/Features/ResumeSlice';
import JsonToFormDataJS from '../../JsonToFormData.JS';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { useState } from 'react';
import { useEffect } from 'react';

export default function MembershipSelectionCard({ data,planCode }) {
    const cardRef = useRef();
    const dispatch = useDispatch();
    const user_info = useSelector(selectResumeDetails);
    const paymentDetails = useSelector(selectSubscriptionDetails)
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)
    const subscriptionDetails = useSelector(selectSubscriptionDetails)
    const [isCurrent,setCurrentPlan] = useState(false)
    const [isUpgrade, setUpgrade] = useState(false)

    console.log(paymentDetails,'this is payment details');
    const handleMemberCardClick = (event) => {
        let activeCard = document.querySelector(".membership-selection-card--active")
        if(activeCard){
            activeCard.classList.remove("membership-selection-card--active")
        }
        cardRef.current.classList.add("membership-selection-card--active")
    }

    const handlePayment = async () => {
        const {name, email} = user_info;
        let urlData;
        let formData = new FormData()
        if(isUpgrade){
            formData.append('subscription_id',paymentDetails.subscription_id);
            formData.append('plan_code',data.planCode)
            urlData = await dispatch(updateSubscription({body:formData}));
        }else{
            formData.append('display_name',name)
            formData.append('email',email)
            formData.append('plan_code',data.planCode)
            if(isCurrent) formData.append('customer_id',paymentDetails.customer_id)
            urlData = await dispatch(createSubscription({body:formData}));
        }
        if(urlData){
            let paymentURL = urlData.payload.data.hostedpage.url
            dispatch(changePaymentInitiated(true))
            window.open(paymentURL)
        }
    }

    const cancelUserSubscription = async () => {
        let formData = new FormData();
        formData.append('subscription_id',paymentDetails.subscription_id)
        formData.append("user_id",user_id)
        dispatch(setReloadDecider(true))
        await dispatch(cancelSubscription({auth: token,body: formData}))
        
    }

    useEffect(() => {
        if(subscriptionDetails && (data.planCode === subscriptionDetails.plan_code) && subscriptionDetails.status === "live"){
            setCurrentPlan(true)
        }else if(subscriptionDetails && ( ['PRO',"talentplace-pro"].includes(data.planCode) && ['STD',"STAND"].includes(subscriptionDetails.plan_code) && subscriptionDetails.status === "live")){
            setUpgrade(true)
        }
    },[data,planCode])
    return (
        <div className={"membership-selection-card"+(isCurrent ? " membership-selection-card--active" : "")} ref={cardRef} onClick={handleMemberCardClick}>
            {isCurrent && <span className="special-label">Current Plan</span>}
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
                <button className="btn-buy" onClick={() => handlePayment(data.paymentURL)}><strong>{isCurrent ? "Renew" : "Buy"} Now</strong> for <big>{data.planPrice}</big></button>
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
                (data.coupenCode && data.coupenCode !== "") &&
                <p className="">
                    <b >Limited Period offer </b> <br />
                    Use '{data.coupenCode}' Coupon code to avail {data.planDiscount}% off
                </p>
            }
            {
                (planCode  && (data.planCode === planCode)) &&
                <p className="manage-plan-btn" onClick={cancelUserSubscription}>Cancel Plan</p>
            }
        </div>
    )
}
