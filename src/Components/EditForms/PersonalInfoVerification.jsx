import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { reload, sendVerificationCode, setReloadDecider, verifyOTP } from '../../redux/Features/ResumeSlice';
import PersonalInfoInput from '../PersonalInfoInput/PersonalInfoInput'
import './PersonalInfoVerification.css'

export default function PersonalInfoVerification({ type, setType }) {
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const [otpStatus,setOtpStatus] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        let fields = document.querySelectorAll(".otp-field")
        fields.forEach(field => {
            field.value = ""
            field.addEventListener('keyup',handleOtpChange)
        })
        if(type === "email"){
            dispatch(sendVerificationCode({
                auth: token,
                body:{
                    user_id,
                    email_address: localStorage.getItem("email"),
                    mode: "email"
                }
            }));
        }else{
            dispatch(sendVerificationCode({
                auth: token,
                body: {
                    user_id,
                    mobile: localStorage.getItem("mobile"),
                    mode: "mobile"
                }
            }));
        }
    },[type])

    const handleOtpChange = (event) => {
        event.preventDefault();
        let currentElement = event.target;
        if(event.key === "Backspace" && currentElement.previousElementSibling){
            currentElement.previousElementSibling.focus();
        }else if(currentElement.nextElementSibling && currentElement.value !== "" && currentElement.value){
            currentElement.nextElementSibling.focus();
        }
    }

    const handleOTPVerification = async (event) => {
        event.preventDefault();
        let fields = document.querySelectorAll(".otp-field")
        let otp = ""
        fields.forEach((item) => {
            otp += item.value
        })
        if(otp.length < 6){
            setOtpStatus("Please Enter OTP!!")
            return
        }
        if(type === "email"){
            dispatch(setReloadDecider(true))
            await dispatch(verifyOTP({
                auth: token,
                body:{
                    user_id,
                    email_address: localStorage.getItem("email"),
                    mode: "email",
                    otp_number: otp
                }
            }));
            if(type !== "mobile" && localStorage.getItem('mobile')){
                setType("mobile");
            }else{
                navigate('/dashboard/edit')
            }
        }else{
            dispatch(setReloadDecider(true))
            await dispatch(verifyOTP({
                auth: token,
                body: {
                    user_id,
                    mobile: localStorage.getItem("mobile"),
                    mode: "mobile",
                    otp_number: otp
                }
            }));
            navigate('/dashboard/edit')
        }
    }

    return (
        <form className="personal-info-verification-wrapper" onSubmit={handleOTPVerification}>
            <h1 className="title">{type === "email" ? "Email":"Mobile Number"} Verification</h1>
            <div className="verify-input-wrapper">
                <PersonalInfoInput name={type === "email"?"email":"contact"} label={type === "email"?"Email":"Mobile No"} type={type === "email" ? "email" : "number"} value={localStorage.getItem(type === "email"?"email":"mobile")}/>
            </div>
            <div className="otp-wrapper">
                <label htmlFor="">Get OTP</label>
                <div className="otp-fields-wrapper">
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                    <input type="text" pattern='[0-9]' maxLength="1" className="otp-field" />
                </div>
            </div>
            <button type='submit'>Verify</button>
        </form>
    )
}
