import React from 'react'
import CVProfileSidebar from '../CVProfileSidebar/CVProfileSidebar'
import MainCV from '../MainCv/MainCV'
import './CVProfile.css'
import { FiEdit, FiShare2 } from "react-icons/fi";
import { BsDownload } from "react-icons/bs"
import { Outlet } from 'react-router-dom';

export default function CVProfile() {
  return (
    <div className="cv-profile-container">
        <CVProfileSidebar />
        <Outlet />
    </div>
  )
}

