import React, { useEffect, useState } from 'react'
import './Section3Animation.css'

export default function Section3Animation() {
    const [count,setCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setCount((prev) => prev < 98 ? prev + 3 : 0);
        },200)
        return () => {
            clearInterval(interval)
        }
    },[])

    return (
        <div className="third-section-animation">
            <div className="third-section-content-wrapper">
                <div className="animated-skills-card">
                    <h2 className="card--title">Skill</h2>
                    <ul className="animated-skills">
                        <li>Software Developer</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>NodeJS</li>
                        <li>ReactJS</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>
                <div className="skill-meter-wrapper">
                    <div className="skill-meter-progress-bar">
                        <span className="skill-meter-progress" style={{width:`${count}%`}}></span>
                    </div>
                    <p className="skill-progress">{count}%</p>
                </div>
            </div>
            <div className="animation-circle-bg">
                <div className="animation-inner-circle"></div>
            </div>
        </div>
    )
}
