import React, { useState } from 'react'
import { useEffect } from 'react';
import animationResume from '../../Assets/banner-animation.png'
import './BannerAnimation.css'

export default function BannerAnimation() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        let dir = 2;
        let countInterval = setInterval(() => {
            setCount((prev) => {
                if(prev === 80){
                    dir = -2
                }else if(prev === 0){
                    dir = 2;
                }
                return prev + dir;
            })
        },100)

        return () => {
            clearInterval(countInterval)
        }
    },[])
    return (
        <div className="banner-animation">
            <div className="progress-wrapper">
                <svg width="100%" height="100%">
                    <circle class="circle" cx="50%" cy="50%" r="45%" stroke="#4101ff" stroke-width="4" fill-opacity="0" />
                    <circle class="circle" cx="50%" cy="50%" r="38%" stroke="#fe54c0" stroke-width="4" fill-opacity="0" />
                    <circle class="circle" cx="50%" cy="50%" r="31%" stroke="#fea968" stroke-width="4" fill-opacity="0" />
                </svg>
                <span className="count">{count}%</span>
            </div>
            <img src={animationResume} alt="" className="resume-img" />
            <div className="promotion-wrapper">
                <h6 className="promotion-title">Promoted 3 times in 4 years</h6>
                <ul className="promotion-timeline">
                    <li>
                        <span className="promotion-dot"></span>
                        <span>Software Architect</span>
                    </li>
                    <li>
                        <span className="promotion-dot"></span>
                        <span>Project Manager</span>
                    </li>
                    <li>
                        <span className="promotion-dot"></span>
                        <span>Software Developer</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
