import React, { useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import defaultAvatar from '../../Assests/icons/user.svg'
import './Header.css'
import { useSelector } from 'react-redux'
import { selectProfilePic } from '../../redux/Features/ResumeSlice'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'

export default function Header() {
    const [header, setHeader] = useState(false)
    const profilePic = useSelector(selectProfilePic);
    const user_id = useSelector(selectUser_id);
    const token = useSelector(selectAuthToken);
    const hamRef = useRef(null);
    const menuRef = useRef(null);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    })

    const handleHamburgerClick = (event) => {
        let activeItem = document.querySelector(".dropdown--active")
        event.target.classList.toggle("hamburger-home--active")
        menuRef.current.classList.toggle('btns-wrapper--active')
        if (activeItem) {
            activeItem.classList.remove("dropdown--active")
        }
    }
    return (
        <header className={'main-header container-padding' + (header ? " main-header--active" : '')}>
            <Link to="/">
                <img src={logo} className='logo-img' alt="" />
            </Link>
            {
                (user_id && token) ?
                    <Link to="/dashboard/cv">
                        <img src={profilePic ? profilePic : defaultAvatar} alt="" className="main-header-profile-img" />
                    </Link>
                    :
                    <div className="btns-wrapper" ref={menuRef}>
                        <Link to="/login" className='btn-primary btn-login'>Login</Link>
                        <Link to="/signup" className='btn-primary'>Create My Resume</Link>
                    </div>
            }
            <ul className="hamburger-home" ref={hamRef} onClick={handleHamburgerClick}>
                <li className="layer"></li>
                <li className="layer"></li>
                <li className="layer"></li>
            </ul>
        </header>
    )
}
