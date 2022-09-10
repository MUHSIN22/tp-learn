import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { FiEdit, FiShare2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import MainCV from '../MainCv/MainCV'

export default function DashboardCv() {
    const navigate = useNavigate();
    return (
        <div className="main-cv-wrapper">
            <div className="profile-share-and-edit-wrapper">
                <div className="profile-icon-wrapper" onClick={() => navigate('/dashboard/edit') }>
                    <FiEdit />
                </div>
                <div className="profile-icon-wrapper">
                    <BsDownload />
                </div>
                <div className="profile-icon-wrapper">
                    <FiShare2 />
                </div>
            </div>
            <MainCV />
        </div>
    )
}
