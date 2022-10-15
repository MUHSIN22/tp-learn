import React from 'react'
import './MembershipSelectionCard.css'
import { TiTick } from 'react-icons/ti'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { cancelSubscription, changePaymentInitiated, createCustomPlan, createSubscription, getPaymentDetails, selectSubscriptionDetails, updateSubscription } from '../../redux/Features/PaymentSlice';
import { useSelector } from 'react-redux';
import { selectResumeDetails, setReloadDecider } from '../../redux/Features/ResumeSlice';
import JsonToFormDataJS from '../../JsonToFormData.JS';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleMemberCardClick = (event) => {
        let activeCard = document.querySelector(".membership-selection-card--active")
        if(activeCard){
            activeCard.classList.remove("membership-selection-card--active")
        }
        cardRef.current.classList.add("membership-selection-card--active")
    }

    const handlePayment = async () => {
        const {name, email, country_code, contact} = user_info;
        let urlData;
        let formData = new FormData()
        if(data.planCode === "STAND"){
            formData.append("user_id",user_id)
            formData.append("plan_code","STAND")
            await dispatch(createCustomPlan({auth:token,body: formData}))
            navigate('/dashboard/cv')
        }else if(isUpgrade){
            formData.append('subscription_id',paymentDetails.subscription_id);
            formData.append('plan_code',data.planCode)
            urlData = await dispatch(updateSubscription({body:formData}));
        }else{
            formData.append('display_name',name)
            formData.append('email',email)
            formData.append('mobile',country_code+contact)
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
        if((subscriptionDetails && (data.planCode === subscriptionDetails.plan_code) && subscriptionDetails.status === "live") || (!data.planCode && subscriptionDetails.status !== "live" && subscriptionDetails.plan_code !== "STAND") || (data.planCode === "STAND" &&subscriptionDetails.plan_code === "STAND") ){
            setCurrentPlan(true)
        }else if(subscriptionDetails && ( ['PRO',"talentplace-pro"].includes(data.planCode) && ['STD',"STAND"].includes(subscriptionDetails.plan_code) && subscriptionDetails.status === "live")){
            setUpgrade(true)
        }else{
            setCurrentPlan(false)
        }
    },[data,planCode,subscriptionDetails])
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
                <button className="btn-buy" onClick={() => handlePayment(data.paymentURL)}><strong>{data.planCode === "STAND" ? "Enroll" :isCurrent ? "Renew" : "Buy"} Now</strong> for <big>{data.planCode === "STAND" ? "FREE" :data.planPrice}</big></button>
            }
            {
                (data.coupenCode && data.coupenCode !== "") &&
                <p className="">
                    Use <strong>'{data.coupenCode}'</strong> as coupon code on checkout page to avail {data.planDiscount}% off.
                </p>
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
                (planCode  && (data.planCode === planCode)) &&
                <p className="manage-plan-btn" onClick={cancelUserSubscription}>Cancel Plan</p>
            }
        </div>
    )
}
