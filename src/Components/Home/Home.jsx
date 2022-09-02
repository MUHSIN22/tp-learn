import React, { useRef } from 'react'
import homeBannerImage from '../../Assets/Home Banner.svg'
import bannerWave from '../../Assets/Banner wave.png'
import bannerBackground from '../../Assets/Banner background.gif'
import secondSectionImage from '../../Assets/section 2.png'
import thirdSectionImage from '../../Assets/section 3.png'
import credibilityBadge from '../../Assets/credibility badge.png'
import lineBackground from '../../Assets/line background.png'
import orangeWave from '../../Assets/orange wave.png'
import fifthSectionImage from '../../Assets/section 5.svg'
import slide1 from '../../Assets/home slider/slide 1.jpg'
import slide2 from '../../Assets/home slider/slide 2.jpg'
import slide3 from '../../Assets/home slider/slide 3.jpg'
import demoVideo from '../../Assets/video/Testimonial video.m4v'
import { GrPlayFill } from 'react-icons/gr'
import { IoMdPause } from 'react-icons/io'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import ResumeSlider from '../ResumeSlider/ResumeSlider'
import Header from '../Header/Header'
import Lottie from 'react-lottie'
import bannerAnimation from '../../Assets/Animations/Banner Image.json'
import easyBuildAnimation from '../../Assets/Animations/animationnumber2.json'
import secondSectionAnimation from '../../Assets/Animations/secondSection.json'
import graphAnimation from '../../Assets/Animations/graphAnimation.json'
import circle from '../../Assets/circle.png'
import { usePDF } from '@react-pdf/renderer'
import PdfGenerator from '../Resume2/PdfGenerator'
import API from '../../API'

let team = [
    {
        name: 'Anuradha',
        designation: "Team Lead",
        company: "Accenture",
        testimonial: "Talentplace cv builder is highly recommended for experienced professionals. Even if you are not looking for a switch, this CV builder will show you the trajectory of your career and help you to plan it further. its roles and responsibility analysis and suggestion is impressive."
    },
    {
        name: 'Roshni Rawat',
        designation: "Senior Associate",
        company: "Larsen & Toubro Infotech",
        testimonial: "TalentPlace cv builder is the most potent and must-use tool for growing professionals. It has very few data input points, and in most places, it uses its intelligent mechanism to analyze your skills, roles, responsibilities, etc., and develop a stunning resume."
    },
    {
        name: 'Tulsi Gurung',
        designation: "Marketing Specialist",
        company: "Book my Wizard",
        testimonial: "I am wowed with this website. Putting my experience into words was the most challenging task for me, but with the help of TalentPlace CV builder, I created my CV within no time and with complete professionalism. It helped me represent my true self."
    }
]


export default function Home() {
    const [credibilityMeter, setCredibilityMeter] = useState(0)
    const [isPlaying, setPlaying] = useState(false)
    const [itemCount, setItemCount] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const sliderRef = useRef(null);
    const teamSectionRef = useRef(null);
    const [link,setLink] = useState('')

    const defaultOptions = {
        loop: true,
        autoplay: true,
        renderer: 'svg'
    }

    useEffect(() => {
        setInterval(() => {
            setCredibilityMeter((prev) => {
                if (prev === 30) {
                    return 0
                } else {
                    return prev + 1
                }
            })
        }, 300)

        setItemCount(sliderRef.current.children[1].children.length);
        setSlideWidth(sliderRef.current.offsetWidth);
    }, [])

    const navigateSlider = (direction) => {
        teamSectionRef.current.classList.add("team-section-animation");
        setTimeout(() => {
            teamSectionRef.current.classList.remove("team-section-animation")
        }, 600)

        if (direction === 1) {
            if (marginLeft > 0) {
                setMarginLeft((prev) => prev - 1)
            }

        } else if (direction === -1) {
            if (marginLeft < 4) {
                setMarginLeft((prev) => prev + 1)
            }
        }
    }

    const playAndPauseVideo = () => {
        let video = document.querySelector('.video-player')
        if (isPlaying) {
            video.pause()
            setPlaying(false)
            return
        }
        video.play();
        setPlaying(true)
    }

    // useEffect(() => {
    //     API.post("/download-sample-file",{user_id: 203})
    //         .then((res) => {
    //             console.log(res.data.data.message,'blob');
    //             setLink(res.data.data.message)
    //         })
    // },[])
    return (
        <>
            {/* <Header /> */}
            <main className="home-page">
                <section className="home-banner" >
                    <div className="banner-content-wrapper">
                        <h1 className="banner-title">
                            Build a Data-Driven
                            <br />
                            <span>Intelligent Resume,</span>
                            <br />
                            in 11 Minutes
                        </h1>
                        <Link to="/signup" className='btn-primary'>Get Started</Link>
                    </div>
                    <div className="banner-image-wrapper">
                        <img src={bannerBackground} alt="TalentPlace Resume Builder" className="banner-image" />
                        {/* <Lottie options={{...defaultOptions,animationData: bannerAnimation}} className="banner-image" /> */}
                    </div>
                    <img src={bannerWave} className="banner-wave" alt="" />
                </section>

                <section className="easy-build-section container-padding">
                    <div className="easy-build-image-wrapper">
                        <Lottie options={{...defaultOptions, animationData: secondSectionAnimation}} className="easy-build-image" />
                        {/* <img src={secondSectionImage} alt="" className="easy-build-image" /> */}
                    </div>
                    <div className="easy-build-content-wrapper">
                        <h2 className="title-secondary">Wow recruiters and get more interview calls</h2>
                        <h3 className="para-primary">
                            Just fill in your current designation and our AI-engine will fetch a convincing description and roles & responsibilities fitting your profile, along with useful insights for your career
                        </h3>
                        <hr />
                        <div className="easy-build-list-wrapper">
                            <ul className="easy-build-list">
                                <li>
                                    <span></span>
                                    <p>Visually appealing resume with graphical representation of your career progression</p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>ATS-friendly resume builder to get past the tracking systems of top companies</p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>Get data-driven insights on how to advance on your career ladder.</p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>Suggested resume templates designed by a team of HR experts</p>
                                </li>
                                <li>
                                    <span></span>
                                    <p>Easily downloadable and shareable resume format you can use to apply for jobs and feature on LinkedIn.</p>
                                </li>
                            </ul>
                        </div>
                        <Link to="/signup" className='btn-primary'>Build My Resume</Link>
                    </div>
                </section>

                <section className="skill-industry-section container-padding">
                    <div className="skill-industry-content">
                        <h2 className="title-secondary">Skill & Industry <br /> Focussed Resume</h2>
                        <h3 className="para-primary">
                            Instead of using vague and non-measurable terms like proficient, highly-skilled, result-driven, etc, we feature your best skills and your level of expertise in each of those. This will help you match with best suited job roles and increase your chances of getting an interview
                        </h3>
                    </div>
                    <div className="skill-industry-image-wrapper">
                    <Lottie options={{...defaultOptions,animationData:easyBuildAnimation}} className="skill-industry-image"/>

                        {/* <img src={thirdSectionImage} alt="" className="skill-industry-image" /> */}
                    </div>
                </section>

                <section className="credibility-section container-padding">
                    <div className="credibility-meter-wrapper">
                        <img src={credibilityBadge} alt="" className="credibility-badge" />
                        <h6 className="credibility-meter-title">Congratulations</h6>
                        <p className="credibility-meter-description">You have earned expert badge in Java</p>
                        <div className="credibility-meter">
                            <h1 className="credibility-meter-counter">{credibilityMeter}/30</h1>
                        </div>
                        <Link to="/" className='btn-primary'>Take more test</Link>
                    </div>
                    <div className="credibility-content">
                        <h2 className="title-secondary">Increase credibility <br />through Assessment <br />badges</h2>
                        <h3 className="para-primary">
                            Proven skills serve as a point of differentiation. Stand out from competition and let hiring managers verify your skills through skill badges. Take free assessment tests and show off your score on your dynamic resume to increase your chances of getting hired
                        </h3>
                    </div>
                </section>

                <section className="analytics-section" style={{ backgroundImage: `url('${lineBackground}')` }}>
                    <div className="analytics-content">
                        <h2 className="title-secondary">Analytics that <br />measures your growth</h2>
                        <h3 className="para-primary">
                            Visually present your growth trajectory in the same company (promotions & appraisals). Back up your achievements with numbers. Your important metrics like sales numbers, customer satisfaction ratings, or tickets completed will be highlighted in your dynamic resume to let employers know you mean business.
                        </h3>
                    </div>
                    <div className="analytics-image-wrapper">
                        <Lottie options={{...defaultOptions,animationData: graphAnimation}} className="analytics-image" />
                        {/* <img src={fifthSectionImage} className="analytics-image" alt="" /> */}
                    </div>
                    <img src={orangeWave} alt="" className="analytics-wave" />
                </section>

                <section className="video-section container-padding">
                    <div className="video-wrapper">
                        <video width="100%" height="auto" controls={isPlaying} className='video-player'>
                            <source src={demoVideo}/>
                        </video>
                        {
                            !isPlaying &&
                            <div className="play-pause-wrapper">
                                <div className="play-and-pause-icon" onClick={playAndPauseVideo}>
                                    {
                                        !isPlaying ?
                                            <GrPlayFill />
                                            :
                                            <IoMdPause />
                                    }
                                </div>
                            </div>
                        }
                    </div>
                    <div className="video-content-wrapper">
                        <h2 className="title-secondary">What the Top <br />HR Leaders has to say?</h2>
                        <h3 className="para-primary">
                            Let's hear it from the experts who know it the best. Top hiring experts share their views on the best resumes they have seen, tips to craft a hireable resume, what makes them tick a candidate, along with meaningful career advice on getting hired by top companies.
                        </h3>
                        <hr />
                        <div className="video-list-wrapper">
                            <ul className="video-list">
                                <li>
                                    <span></span>
                                    Amazon
                                </li>
                                <li>
                                    <span></span>
                                    United Health Group
                                </li>
                            </ul>
                            <ul className="video-list">
                                <li>
                                    <span></span>
                                    Cisco
                                </li>
                                <li>
                                    <span></span>
                                    Accenture
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="team-section container-padding">
                    <img src={circle} className="bg-circle" alt="" />
                    <div className="team-content" ref={teamSectionRef}>
                        <p className="team-para">
                            {team[marginLeft].testimonial}
                        </p>
                        <strong className="team-member-name">{team[marginLeft].name}</strong>
                        <p className="team-member-designation">{team[marginLeft].designation}</p>
                        <p className="team-member-company">{team[marginLeft].company}</p>
                    </div>
                    <div className="team-slider" ref={sliderRef}>
                        <div className="slider-nav-wrapper">
                            <div className="slider-nav" onClick={() => navigateSlider(-1)}>
                                <AiOutlineLeft />
                            </div>
                            <div className="slider-nav" onClick={() => navigateSlider(1)}>
                                <AiOutlineRight />
                            </div>
                        </div>
                        <div className="team-slider-wrapper" style={{
                            gridTemplateColumns: `repeat(${itemCount},${slideWidth}px)`,
                            marginLeft: `-${marginLeft * slideWidth}px`
                        }}>
                            <img src={slide1} alt="Accenture " width="100px" className="team-slide" />
                            <img src={slide2} alt="L&T Infotech " width="100px" className="team-slide" />
                            <img src={slide3} alt="Marketing Strategiest " width="100px" className="team-slide" />
                        </div>
                    </div>
                </section>

                <section className="resume-section container-padding">
                    <h2 className="title-secondary">Pick a resume template. <br /> that defines you best.</h2>
                    <h3 className="para-primary">
                        Show off your skills and impress your future employer through these job-winning resume templates.
                    </h3>
                    <ResumeSlider />
                </section>

                <section className="footer-home container-padding">
                    <div className="footer-image-wrapper">
                        <img src={homeBannerImage} alt="Resume Maker TalentPlace" className="footer-image" />
                    </div>
                    <div className="footer-content">
                        <h2 className="title-secondary">Let you resume do <br />the work</h2>
                        <h3 className="para-primary">
                            Join 1,300,000 job seekers worldwide and get hired faster with your best resume yet
                        </h3>
                        <Link to="/signup" className='btn-primary' >Get Started</Link>
                    </div>
                </section>
            </main>
        </>
    )
}
