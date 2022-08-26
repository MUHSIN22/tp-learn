import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as ChevronRight } from '../../Assests/icons/chvron-right.svg';
import loginVector from '../../Assests/OTP-vector.png'
import OTP from '../IconInput/OTP'
import { useDispatch, useSelector } from 'react-redux';
import { resendOTP, selectAutheError, selectAuthLoading, selectAuthMessage, selectOtp_verified, selectReg_id, signupOtp } from '../../redux/Features/AuthenticationSlice';
import Countdown from '../../Countdown';
import Alert from '../Alert/Alert';
export default function OTPSignup() {
  const location = useLocation()
  const navigate = useNavigate();
  const reg_id = useSelector(selectReg_id)
  const error = useSelector(selectAutheError)
  const loading = useSelector(selectAuthLoading)
  const message = useSelector(selectAuthMessage)
  const otp_verified = useSelector(selectOtp_verified)
  const [otp,setOtp] = useState('')
  const [toggleOTP,setToggleOTP] = useState(false)
  const dispatch = useDispatch();
  console.log(reg_id, navigate,location,message,otp_verified,'all details');
  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      dispatch(signupOtp({user_id:reg_id,otp})).unwrap()
      setToggleOTP(!toggleOTP)
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    if(otp_verified) navigate('/create-password')
  
    return () => {
      
    }
  }, [otp_verified,navigate])
  const [expired,setExpired] = useState(false)
  function handleExpire(){
    setExpired(true)
  }
  const resendCode = (event) => {
    event.preventDefault();
    dispatch(resendOTP({user_id: reg_id,country_code: location.state.code, mobile_no: location.state.num}))
  }
  useEffect(() => {
    console.log(message, "this is message");
  },[message])
  return (
    <div className="login">
      <div className="col-30 otp-side">
        <form>
        {message&&!loading&&<Alert error={error} message={typeof message === "string" ? message:null} />}
          <h1>Enter the OTP here to set your password</h1>
          <p>Enter OTP sent to {location.state.mobile_no}</p>
          {expired? <p>Please resend code</p> :<p> This code will expire in <Countdown minutes={1} seconds={30} trigger={handleExpire}/></p>}
           <div className="form-row">
            <OTP setOtp={setOtp} toggleOTP={toggleOTP}/> 
            </div> 
            <div className="form-row">
              <div className="col-20 code-not-recieve">
              <p>Didn’t recieve the code? <button className='btn-link' onClick={resendCode}>Resend Code </button> </p>
              </div>
              
            </div>
            <div className="form-row my-2">
              <button onClick={handleSubmit} className='btn primary'>Continue <ChevronRight/></button>
            </div>

        </form>
      </div>
      <div className="col-70 image-side">
        <img src={loginVector} alt="" />
      </div>
    </div>
  )
}
