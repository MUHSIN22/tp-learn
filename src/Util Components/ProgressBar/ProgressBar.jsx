import React from 'react'
import './ProgressBar.css'

export default function ProgressBar({percent,color}) {
  return (
    <div className="progress-bar-wrapper">
        <div className="progress-bar">
            <div className="progress" style={{background: color, width: `${percent}%`}}></div>
        </div>
        <span className="progress-percent">{percent}%</span>
    </div>
  )
}
