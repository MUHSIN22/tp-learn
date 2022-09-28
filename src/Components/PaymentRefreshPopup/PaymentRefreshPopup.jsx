import React from 'react'
import { useDispatch } from 'react-redux'
import { changePaymentInitiated } from '../../redux/Features/PaymentSlice';
import { reload } from '../../redux/Features/ResumeSlice';

export default function PaymentRefreshPopup() {
    const dispatch = useDispatch();
    const handleHardRefresh = () => {
        dispatch(changePaymentInitiated(false))
        dispatch(reload())
    }
    return (
        <div className="plan-action-popup">
            <div className="plan-action-popup-container">
                <h2 className="form-title">
                    Click on the button below after your payment done
                </h2>
                <button className="btn btn-view-plan" onClick={handleHardRefresh}>Refresh</button>
            </div>
        </div>
    )
}