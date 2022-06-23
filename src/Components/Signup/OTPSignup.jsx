import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as ChevronRight } from '../../Assests/icons/chvron-right.svg';
import loginVector from '../../Assests/OTP-vector.png'
import OTP from '../IconInput/OTP'
import { useDispatch, useSelector } from 'react-redux';
import { selectAutheError, selectOtp_verified, selectReg_id, signupOtp } from '../../redux/Features/AuthenticationSlice';
import Countdown from '../../Countdown';
import Alert from '../Alert/Alert';
export default function OTPSignup() {
  const location = useLocation()
  const navigate = useNavigate();
  const reg_id = useSelector(selectReg_id)
  const error = useSelector(selectAutheError)
  const otp_verified = useSelector(selectOtp_verified)
  const [otp,setOtp] = useState('')
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    try {
      dispatch(signupOtp({user_id:reg_id,otp})).unwrap()
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
  return (
    <div className="login">
      <div className="col-30">
        <form>
        {error&&<Alert error={error} message={'OTP did not match'}/>}
          <h1>Enter the OTP here to set your password</h1>
          <p>Enter OTP sent to {location.state.mobile_no}</p>
          {expired? <p>Please resend code</p> :<p> This code will expire in <Countdown minutes={1} seconds={30} trigger={handleExpire}/></p>}
           <div className="form-row">
            <OTP setOtp={setOtp}/> 
            </div> 
            <div className="form-row">
              <div className="col-20">
              <p>Didn’t recieve the code? <button className='btn-link'>Resend Code </button> </p>
              </div>
              
            </div>
            <div className="form-row my-2">
              <button onClick={handleSubmit} className='btn primary'>Continue <ChevronRight/></button>
            </div>

        </form>
      </div>
      <div className="col-70">
        <img src={loginVector} alt="" />
      </div>
    </div>
  )
}
