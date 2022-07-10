import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import resume1 from '../../Assests/resume/resume1.png'
import './ResumeSlider.css'
export default function ResumeSlider() {
    const sliderRef = useRef(null);
    let itemPerWindow = 3;
    const [slideWidth,setSlideWidth] = useState(0);
    const [slideCount,setSlideCount] = useState(0);
    const [activeIndex,setActiveIndex] = useState(1)

    useEffect(() => {
        setSlideWidth(sliderRef.current.offsetWidth / itemPerWindow)
        setSlideCount(sliderRef.current.children[0].children.length);
        sliderRef.current.children[0].children[activeIndex].classList.add("slide--active")
    },[])

    return (
        <div className="resume-slider" ref={sliderRef}>
            <div className="resume-slider-wrapper" style={{gridTemplateColumns: `repeat(${slideCount},${slideWidth}px)`}}> 
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
            </div>
        </div>
    )
}
