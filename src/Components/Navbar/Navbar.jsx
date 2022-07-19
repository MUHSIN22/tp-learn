import React from 'react'
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Logo from '../../Assests/logo.svg'
import { ReactComponent as User } from '../../Assests/icons/user.svg';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { selectUserFirstName } from '../../redux/Features/ResumeSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { selectAuthentication } from '../../redux/Features/AuthenticationSlice';

export default function Navbar(props) {
  const user = useSelector(selectUserFirstName)
console.log(window.location.pathname)
  let navigate = useNavigate();
  const auth = useSelector(selectAuthentication)
  const rendertomyprofile=()=>{
    navigate('/MyProfile')
  }
 
  
  return (
    <>
       <nav>
      <div className="logo">
          <img src={Logo} alt="" />
      </div>
     {(auth['authToken'] && user) && <div className="controls">
      <span className='flex-row-start align-center g-0-5' onClick={()=>rendertomyprofile()}><button className='profile'>
        
        <User/>
        </button>{user}</span>
        
        <button className='btn tirtiary' onClick={()=>rendertomyprofile()}>Save As Draft</button>
      </div>}
  </nav>
    </>
  )
}
