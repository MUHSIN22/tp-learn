import React from 'react'
import "../../App.css";
import { SidebarData } from './SidebarData';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'
import logo from "../../Assests/LOGO.png"
import {FiMenu} from "react-icons/fi"
import { useNavigate } from "react-router-dom";

function Sidebar(props) { 

  const sendProp = (pagelink) => {
    props.currentPage(pagelink)
  }

  const navigate = useNavigate();

  return (
    <div className='Sidebar close'>
      <div className='logo-details'>
        <span className='sidebar-logo_img'> <img src={logo} alt='LOGO_IMG' style={{"width":"12rem","paddingTop":"3.5rem"}}></img> </span>
        <span className="menu-icon mt-4" > <FiMenu style={{"width":"2rem","height":"2rem","color":"white","marginLeft":"2rem"}}/> </span>
      </div>

      <div style={{"height":"1px","borderBottom":"1px solid white","opacity":"0.25","marginTop":"2rem"}}>
      </div>
      <div>
        
<ul className='SidebarList'>
         {
         SidebarData.map((val,key)=>{
             return (
                 <li key={key} id={window.location.pathname == val.link ? "active" : ""} onClick={()=>{navigate(`${val.link}`);}} className="SidebarRow">{" "}
                 <div id="icon"> {val.icon}</div>{" "}
                 &nbsp; &nbsp; &nbsp;
                {val.title != 'My Profile' ?  <div id="title">{val.title}</div> : (
                   <Tippy content={
                     <div className='text-left' style={{"margin":"2rem 2rem 2rem 2rem","z-index":"1000"}}>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Personal Information</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Career Timeline</h4>
                         <h4 onClick={()=>{sendProp("/Experience")}}>Experience</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Full-stack Developer</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Roles and Responsibilities</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Projects worked on</h4>
                         <h4 onClick={()=>{sendProp("/Certification")}}>Certification Courses</h4>
                         <h4 onClick={()=>{sendProp("/Education")}}>Education</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Portfolio</h4>
                         <h4 onClick={()=>{sendProp("/Recommendation")}}>Recommendation</h4>
                         <h4 onClick={()=>{sendProp("/languages")}}>Languages</h4>
                         <h4 onClick={()=>{sendProp("/hobbies")}}>Hobbies</h4>
                         <h4 onClick={()=>{sendProp("/SocialContribution")}}>Social Contribution</h4>
                         <h4 onClick={()=>{sendProp("/Docs")}}>Docs files</h4>
                         <h4 onClick={()=>{sendProp("/Videos")}}>Video files</h4>
                         <h4 onClick={()=>{sendProp("/SocialMedia")}}>Social Media</h4>
                         <h4 onClick={()=>{sendProp("/personal-information")}}>Self-Declaration</h4>
                     </div>
                    
                   } placement="right-start" interactive={true}>
                      <div id="title">{val.title}</div>
                   </Tippy>
                )}

                 </li>
             )
         })}
         </ul>
      </div>

    </div>

  )
}

export default Sidebar

// {page === "/personal-information" && <Section1 />}
// {page === "/Experience" && <Section3 />}
// {page === "/Education" && <Education />}
// {page === "/Docs" && <Docs />}
// {page === "/hobbies" && <Languages />}
// {page === "/hobbies" && <Hobby />}
// {page === "/Videos" && <Videos />}
// {page === "/Timeline" && <Section2 />}
// {page === "/SocialMedia" && <SocialMedia />}
// {page === "/Videos" && <Videos />}
// {page === "/Cerification" && <Cerification />}