import React from 'react'
import Logo from '../../Assests/logo.svg'
import { ReactComponent as User } from '../../Assests/icons/user.svg';
import './Navbar.css'
import { useSelector } from 'react-redux';
import { selectUserFirstName } from '../../redux/Features/ResumeSlice';
export default function Navbar() {
  const user = useSelector(selectUserFirstName)
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
       {user&& <div className="controls">
        <span className='flex-row-start align-center g-0-5'><button className='profile'><User/></button>{user}</span>
          
          <button className='btn tirtiary'>Save As Draft</button>
        </div>}
    </nav>
  )
}
