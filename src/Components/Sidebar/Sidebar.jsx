import React from 'react'
import "../../App.css";
import { SidebarData } from './SidebarData';
import { Navigate } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='Sidebar'>
        <div>
            <img src=''></img>
        </div>
        <ul className='SidebarList'>
        {
        SidebarData.map((val,key)=>{
            return (
                <li key={key} id={window.location.pathname == val.link ? "active" : ""} onClick={() => {window.location.pathname = val.link}} className="SidebarRow">{" "}
                <div id="icon"> {val.icon}</div>{" "}
                &nbsp; &nbsp; &nbsp;
                <div id="title">{val.title}</div>

                </li>
            )
        })}
        </ul>
    </div>
  )
}

export default Sidebar