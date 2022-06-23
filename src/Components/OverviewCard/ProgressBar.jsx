import React from 'react'

export default function ProgressBar({ value, color, hide_percent,label }) {
    return (
        <div className="progress-container">
            <div className="col-100 align-start g-0-5">
                <label htmlFor="">{label}</label>
                <div className="progressbar">
                    <div className={`progress-fill ${color}`} role="progressbar" style={{ width: value + '%' }} ></div>
                </div>
            </div>

            <span hidden={hide_percent}>{value}%</span>
        </div>

    )
}
