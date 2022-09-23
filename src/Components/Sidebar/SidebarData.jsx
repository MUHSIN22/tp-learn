import React from 'react'
import { FaHome,FaUserAlt,FaPortrait, FaUserFriends,FaUserTie} from "react-icons/fa";
import { MdOutlineDashboard, MdAssessment, MdSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";



export const SidebarData = [
    // {
    //     title : "Dashboard",
    //     icon : <MdOutlineDashboard/>,
    //     link : "/dashboard"
    // },
    {
        title : "My Profile",
        icon : <FaUserAlt/>,
        link : "/dashboard/cv"
    },
    // {
    //     title : "Assessments",
    //     icon : <MdAssessment/>,
    //     link : "/assessments"
    // },
    // {
    //     title : "My Portfolio",
    //     icon : <FaPortrait/>,
    //     link : "/MyPortfolio"
    // },
    // {
    //     title : "Interview Preparation",
    //     icon : <FaUserTie/>,
    //     link : "/IP"
    // },
    {
        title : "Membership",
        icon : <FaUserFriends/>,
        link : "/membership"
    },
    {
        title : "Settings",
        icon : <MdSettings/>,
        link : "/settings"
    },
    {
        title : "Logout",
        icon : <RiLogoutCircleRLine/>,
        link : "/"
    },

]
  
