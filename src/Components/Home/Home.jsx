import React, { useRef } from 'react'
import homeBannerImage from '../../Assests/HomeBanner.svg'
import bannerWave from '../../Assests/Banner_wave.png'
import bannerBackground from '../../Assests/Bannerbackground.png'
import secondSectionImage from '../../Assests/section2.png'
import thirdSectionImage from '../../Assests/section3.png'
import credibilityBadge from '../../Assests/credibilitybadge.png'
import lineBackground from '../../Assests/linebackground.png'
import orangeWave from '../../Assests/orangewave.png'
import fifthSectionImage from '../../Assests/section5.svg'
import slide3 from '../../Assests/homeslider/slide3.jpg'
import slide1 from '../../Assests/homeslider/slide1.jpg'
import slide4 from '../../Assests/homeslider/slide4.jpg'
import slide5 from '../../Assests/homeslider/slide5.jpg'
import demoVideo from '../../Assests/video/demovideo.mp4'
import slide2 from '../../Assests/homeslider/slide2.jpg'
import { GrPlayFill } from 'react-icons/gr'
import { IoMdPause } from 'react-icons/io'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './Home.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import ResumeSlider from '../ResumeSlider/ResumeSlider'

let team = [
    {
        name: 'Julie Kendrick',
        designation: "Graphic designer",
        company: "Talentplace"
    },
    {
        name: 'John Doe',
        designation: "UI/UX designer",
        company: "Talentplace"
    },
    {
        name: 'Abhishek Kumar',
        designation: "Web Developer",
        company: "Talentplace"
    },
    {
        name: 'John Disosa',
        designation: "Bussiness Development",
        company: "Talentplace"
    },
    {
        name: 'Julie Kendrick',
        designation: "Graphic designer",
        company: "Talentplace"
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
    return (
        <main className="home-page">
            <section className="home-banner" style={{ background: `url('${bannerBackground}')` }}>
                <div className="banner-content-wrapper">
                    <h1 className="banner-title">
                        Build a Data-Driven
                        <br />
                        <span>Intelligent Resume,</span>
                        <br />
                        in 11 Minutes
                    </h1>
                    <Link to="/" className='btn-primary'>Build My Resume</Link>
                </div>
                <div className="banner-image-wrapper">
                    <img src={homeBannerImage} alt="" className="banner-image" />
                </div>
                <img src={bannerWave} className="banner-wave" alt="" />
            </section>

            <section className="easy-build-section container-padding">
                <div className="easy-build-image-wrapper">
                    <img src={secondSectionImage} alt="" className="easy-build-image" />
                </div>
                <div className="easy-build-content-wrapper">
                    <h2 className="title-secondary">Easy To Make Resume</h2>
                    <p className="para-primary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta ipsa, minima sit deserunt harum sed, eveniet ducimus eligendi sequi exercitationem in, rem non aperiam reiciendis aut quam nesciunt sint!
                    </p>
                    <hr />
                    <div className="easy-build-list-wrapper">
                        <ul className="easy-build-list">
                            <li>
                                <span></span>
                                As per the industry standard
                            </li>
                            <li>
                                <span></span>
                                Interactive and engaging
                            </li>
                            <li>
                                <span></span>
                                In just 11 minutes
                            </li>
                        </ul>
                        <ul className="easy-build-list">
                            <li>
                                <span></span>
                                Error free
                            </li>
                            <li>
                                <span></span>
                                ATS Friendly
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className='btn-primary'>Build My Resume</Link>
                </div>
            </section>

            <section className="skill-industry-section container-padding">
                <div className="skill-industry-content">
                    <h2 className="title-secondary">Skill & Industry <br /> Focussed Resume</h2>
                    <p className="para-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque cumque esse? Eaque iusto ad dolorum. Dolore tempora, voluptates corrupti dolorem, eos sunt unde veritatis officia quos dicta amet est. Veritatis doloribus mollitia dolorem quae ex ipsam id temporibus aliquam!
                    </p>
                </div>
                <div className="skill-industry-image-wrapper">
                    <img src={thirdSectionImage} alt="" className="skill-industry-image" />
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
                    <p className="para-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid rem enim recusandae id laboriosam ab esse praesentium architecto officiis quisquam, vero, quos possimus ut ducimus excepturi earum velit fuga fugiat totam! Aut incidunt expedita temporibus impedit quas distinctio consequatur, quidem fuga porro, atque laudantium molestiae dolor ullam doloremque, aliquam magni qui veritatis! Quas quidem incidunt recusandae voluptas officiis soluta?
                    </p>
                </div>
            </section>

            <section className="analytics-section" style={{ backgroundImage: `url('${lineBackground}')` }}>
                <div className="analytics-content">
                    <h2 className="title-secondary">Analytics that <br />measures your growth</h2>
                    <p className="para-primary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam facilis officiis dicta, esse dolorem veritatis libero voluptas officia facere magni laborum dolorum quam eaque sunt maiores sit eveniet nesciunt. Odit ullam tenetur fuga et, in qui tempora doloremque dolore eius explicabo ipsam quasi sunt sit magnam dolorem ab voluptatibus! Modi porro vel maiores. Eligendi, deleniti ullam. Ea dolorem nihil veniam?
                    </p>
                </div>
                <div className="analytics-image-wrapper">
                    <img src={fifthSectionImage} className="analytics-image" alt="" />
                </div>
                <img src={orangeWave} alt="" className="analytics-wave" />
            </section>

            <section className="video-section container-padding">
                <div className="video-wrapper">
                    <video width="100%" height="auto" className='video-player'>
                        <source src={demoVideo} />
                    </video>
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
                </div>
                <div className="video-content-wrapper">
                    <h2 className="title-secondary">What the Top <br />HR Leaders has to say?</h2>
                    <p className="para-primary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At soluta ipsa, minima sit deserunt harum sed, eveniet ducimus eligendi sequi exercitationem in, rem non aperiam reiciendis aut quam nesciunt sint!
                    </p>
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
                <div className="team-content" ref={teamSectionRef}>
                    <p className="team-para">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error illum vel. Architecto assumenda aut error non libero aliquid repudiandae maxime vel beatae facere, blanditiis a nostrum ex eligendi atque!
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
                        <img src={slide1} alt="" width="100px" className="team-slide" />
                        <img src={slide2} alt="" width="100px" className="team-slide" />
                        <img src={slide3} alt="" width="100px" className="team-slide" />
                        <img src={slide4} alt="" width="100px" className="team-slide" />
                        <img src={slide5} alt="" width="100px" className="team-slide" />
                    </div>
                </div>
            </section>

            <section className="resume-section container-padding">
                <h2 className="title-secondary">Pick a resume template. <br /> Make it more you.</h2>
                <p className="para-primary">
                    Here's a million design combinations. Do what you want. Whether you're a nurse or engineer, your resume will always stand out.
                </p>
                <ResumeSlider />
            </section>

            <section className="footer-home container-padding">
                    <div className="footer-image-wrapper">
                        <img src={fifthSectionImage} alt="" className="footer-image" />
                    </div>
                    <div className="footer-content">
                        <h2 className="title-secondary">Let you resume do <br />the work</h2>
                        <p className="para-primary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui laborum, autem eos expedita molestias nemo asperiores omnis libero? Porro, consectetur.
                        </p>
                        <Link to="/" className='btn-primary' >Get Started</Link>
                    </div>
            </section>
        </main>
    )
}
