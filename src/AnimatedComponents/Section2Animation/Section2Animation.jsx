import React from 'react'
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import './Section2Animation.css'
import {MdOutlineVerified} from 'react-icons/md'

export default function Section2Animation() {
  return (
    <div className="second-section-animation">
      <div className="animated-search-box">
        <p>Software Developer</p>
        <AiOutlineSearch className='search-icon' />
      </div>
      <div className="animated-roles-wrapper">
        <div className="role-white">
          <h5 className="animated-card--title">Roles Respobsibilities</h5>
          <ul className="role-points">
            <li><MdOutlineVerified className="icon true-icon" /> <span>Worked with software development and testing team to design and develop robust solution to meet client requirement for functionality, scalability and performance</span></li>
            <li><MdOutlineVerified className="icon true-icon" /> <span>Reviews project specifications and designed technology solutions that met or exceeded performance expectation</span></li>
            <li><MdOutlineVerified className="icon true-icon" /> <span>Collaborated with fellow engineers to evaluate software and hardware interface.</span></li>
          </ul>
        </div>
        <div className="role-orange">
          <ul className="role-points">
            <li><AiOutlineCloseCircle className='icon false-icon'/> <span>Worked with software development and testing team to design and develop robust solution to meet client requirement for functionality, scalability and performance</span></li>
            <li><AiOutlineCloseCircle className='icon false-icon'/> <span>Reviews project specifications and designed technology solutions that met or exceeded performance expectation</span></li>
            <li><AiOutlineCloseCircle className='icon false-icon'/> <span>Collaborated with fellow engineers to evaluate software and hardware interface.</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
