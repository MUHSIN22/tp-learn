import React from 'react'
import CVProfileSidebar from '../CVProfileSidebar/CVProfileSidebar'
import MainCV from '../MainCv/MainCV'
import './CVProfile.css'

export default function CVProfile() {
  return (
    <div className="cv-profile-container">
        <CVProfileSidebar />
        <div className="main-cv-wrapper">
          <MainCV />
        </div>
    </div>
  )
}

