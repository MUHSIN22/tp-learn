import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import resume1 from '../../Assets/resume/resume 1.jpg'
import resume2 from '../../Assets/resume/resume 2.jpg'
import resume3 from '../../Assets/resume/resume 3.jpg'
import resume4 from '../../Assets/resume/resume 4.jpg'
import resume5 from '../../Assets/resume/resume 5.jpg'
import resume6 from '../../Assets/resume/resume 6.jpg'
import resume7 from '../../Assets/resume/resume 7.jpg'
import resume8 from '../../Assets/resume/resume 8.jpg'
import resume9 from '../../Assets/resume/resume 9.jpg'
import './ResumeSlider.css'
export default function ResumeSlider() {
    const sliderRef = useRef(null);
    let isLastCloned = false;
    let isFirstCloned = false;
    let itemPerWindow = 3;
    const [slideWidth,setSlideWidth] = useState(0);
    const [slideCount,setSlideCount] = useState(0);
    const [activeIndex,setActiveIndex] = useState(1 + itemPerWindow);
    const [marginCount,setMarginCount] = useState(itemPerWindow);
    const [isPaused,setPause] = useState(false);
    let initialPosition = 0;
    let slideInterval;

    useEffect(() => {
        let slides = document.querySelectorAll(".slide")
        let sliderContainer = document.querySelector('.resume-slider-wrapper')
        for(let i= slides.length - 1 ; i > slides.length - 1 - itemPerWindow;i--){
            if(!isLastCloned){
                sliderContainer.prepend(slides[i].cloneNode(true))
            }   
        }
        isLastCloned = true;

        for(let i = 0 ; i < itemPerWindow ;i++){
            if(!isFirstCloned){
                sliderContainer.append(slides[i].cloneNode(true))
            }   
        }
        isFirstCloned = true;

        setSlideWidth(sliderRef.current.offsetWidth / itemPerWindow)
        setSlideCount(sliderRef.current.children[0].children.length);    
    },[])

    useEffect(() => {
        let activeSlide = document.querySelector('.slide--active')
        if(activeSlide){
            activeSlide.classList.remove("slide--active")
        }
        sliderRef.current.children[0].children[activeIndex].classList.add("slide--active")
    },[activeIndex])


    useEffect(() => {
        if(isPaused){
            clearInterval(slideInterval)
        }else{
            slideInterval = setInterval(() => {
                shiftSlide(1)
            },2000)
        }
        return () => {
            clearInterval(slideInterval)
        }
    },[slideCount,isPaused])

    // const dragStart = (event) => {
    //     event = event || window.event;
    //     if(event.type === "touchstart"){
    //         initialPosition =  event.touches[0].clientX;
    //     }else{
    //         event.preventDefault();
    //         initialPosition = event.clientX
    //         document.onmouseup = dragEnd;
    //     }
    // }

    // const dragEnd = (event) => {
    //     event = event || window.event;

    //     let finalPosition;
    //     if(event.type === "touchend"){
    //          finalPosition = event.changedTouches[0].clientX
    //     }else{
    //          finalPosition = event.clientX
    //     }   

    //     if(initialPosition - finalPosition > 20){
    //         shiftSlide(1);
    //     }else if(initialPosition - finalPosition < -20){
    //         shiftSlide(-1);
    //     }
    // }
    

    const shiftSlide = (direction) => {
        let sliderContainer = document.querySelector('.resume-slider-wrapper')
        if(direction === 1){
            setMarginCount(prev => {
                if(prev ===slideCount - itemPerWindow - 1){
                    setTimeout(() => {
                        sliderContainer.style.transition = 'none';
                        setMarginCount(itemPerWindow)
                        setActiveIndex(1 + itemPerWindow)
                    },300)
                    setTimeout(() => {
                        sliderContainer.style.transition = 'all 0.3s ease';
                    },350)
                    return prev + 1
                }else{
                    setActiveIndex(prev => prev + 1)
                    return prev + 1;
                }
            })
        }else if(direction === -1){
            setMarginCount(prev => {
                if(prev === 1){
                    setTimeout(() => {
                        sliderContainer.style.transition = 'none';
                        setMarginCount(slideCount - (2*itemPerWindow))
                        setActiveIndex(slideCount - itemPerWindow - 2)
                    },300)
                    setTimeout(() => {
                        sliderContainer.style.transition = 'all 0.3s ease';
                    },350)
                    return prev - 1
                }else{
                    setActiveIndex(prev => prev - 1)
                    return prev - 1
                }
            });
        }
    }

    return (
        <div className="resume-slider" 
            ref={sliderRef} 
            // onMouseOver={() => setPause(true)}
            // onMouseOut={() => setPause(false)}
        >
            <div 
                className="resume-slider-wrapper" 
                style={{
                    gridTemplateColumns: `repeat(${slideCount},${slideWidth}px)`,
                    marginLeft: `-${marginCount * slideWidth}px`
                }} 
                // onMouseDown={dragStart} 
                // onTouchStart={dragStart} 
                // onTouchEnd={dragEnd}
            > 
                <div className="slide">
                    <img loading='lazy' src={resume1} className="resume" alt="" />
                    <h3 className="slider-title">Marketing Manager</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume2} className="resume" alt="" />
                    <h3 className="slider-title">Junior Data Analyst</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume3} className="resume" alt="" />
                    <h3 className="slider-title">Web & Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume4} className="resume" alt="" />
                    <h3 className="slider-title">IT Project Manager</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume5} className="resume" alt="" />
                    <h3 className="slider-title">Software Engineer</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume6} className="resume" alt="" />
                    <h3 className="slider-title">UI/UX Designer</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume7} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume8} className="resume" alt="" />
                    <h3 className="slider-title">Copywriter</h3>
                </div>
                <div className="slide">
                    <img loading='lazy' src={resume9} className="resume" alt="" />
                    <h3 className="slider-title">Graphic Designer</h3>
                </div>
            </div>
        </div>
    )
}

