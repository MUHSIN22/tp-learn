import React from 'react'
import './CVProfileSidebar.css'
import logo from "../../Assests/sidebarLogo.png";
import { NavLink } from 'react-router-dom';
import myProfile from '../../Assets/sidebar icons/my profile.png'
import membership from '../../Assets/sidebar icons/membership.png'
import settings from '../../Assets/sidebar icons/settings.png'
import logout from '../../Assets/sidebar icons/logout.png'
import { useRef } from 'react';

export default function CVProfileSidebar() {
    const sidebarRef = useRef();

    const toggleSidebar = (event) => {
        let isActive = document.querySelector('.breadcrump--active')
        event.target.classList.toggle("breadcrump--active")
        sidebarRef.current.classList.toggle("cv-profile-sidebar--active")
        if(!isActive){
            document.querySelector(".cv-profile-container").classList.add("cv-profile-container--expaned")
        }else{
            document.querySelector(".cv-profile-container").classList.remove("cv-profile-container--expaned")
        }
    }

    return (
        <nav className="cv-profile-sidebar" ref={sidebarRef}>
            <div className="sidebar-toggle-wrapper">
                <img src={logo} alt="Talentplace" className="sidebar-logo" />
                <div className="breadcrump" onClick={toggleSidebar}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div className="sidebar-links-wrapper">
                <NavLink to="/" className="sidebar-link">
                    <img src={myProfile} alt="" className="sidebar-link-icon" />
                    <span className='sidebar-link-text'>My Profile</span>
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <img src={membership} alt="" className="sidebar-link-icon" />
                    <span className='sidebar-link-text'>Membership</span>
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <img src={settings} alt="" className="sidebar-link-icon" />
                    <span className='sidebar-link-text'>Settings</span>
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <img src={logout} alt="" className="sidebar-link-icon" />
                    <span className='sidebar-link-text'>Logout</span>
                </NavLink>
            </div>
        </nav>
    )
}
