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
export default function Navbar(props) {
  const user = useSelector(selectUserFirstName)
console.log(window.location.pathname)
  let navigate = useNavigate();
  
  const rendertomyprofile=()=>{
    navigate('/MyProfile')
  }
 

  
  return (
    <>
     {
      window.location.pathname !== '/'  || window.location.pathname !== '/membership' &&  <nav>
      <div className="logo">
          <img src={Logo} alt="" />
      </div>
     {user&& <div className="controls">
      <span className='flex-row-start align-center g-0-5' onClick={()=>rendertomyprofile()}><button className='profile'>
        
        <User/>
        </button>{user}</span>
        
        <button className='btn tirtiary'>Save As Draft</button>
      </div>}
  </nav>
    }
    </>
  )
}
