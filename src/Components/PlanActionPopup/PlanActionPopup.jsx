import React from 'react'
import './PlanActionPopup.css'
import {CgClose} from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { changePlanPopup } from '../../redux/Features/ResumeSlice';
import { useNavigate } from 'react-router-dom';

export default function PlanActionPopup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const navigateToPlans = () => {
    dispatch(changePlanPopup(false))
    navigate('/dashboard/plans')
  }
  return (
    <div className="plan-action-popup">
        <div className="plan-action-popup-container">
            <CgClose className="plan-popup-close" onClick={() => dispatch(changePlanPopup(false))}/>
            <h2 className="form-title">Choose any of our subscription plans to download or share your resume</h2>
            <button className="btn btn-view-plan" onClick={navigateToPlans}>View all plans</button>
        </div>
    </div>
  )
}
