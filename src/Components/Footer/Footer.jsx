import React from 'react'
import logo from '../../Assets/logo.png'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaFacebookF, FaInstagramSquare } from 'react-icons/fa'
import { ImLinkedin2 } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import './Footer.css'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="main-footer">
            <div className="footer-section">
                <div className="footer-logo">
                    <img src={logo} alt="" className="footer-log" />
                    <p className="logo-description">
                        A product by <br />
                        Taxolawgy online service pvt. ltd.
                    </p>
                </div>
                <ul className="footer-contact">
                    <li>
                        <span className="logo"><MdEmail /></span>
                        <a href="mailto:contact@talentplace.ai" className="footer-contact-link">contact@talentplace.ai</a>
                    </li>
                    <li>
                        <span className="logo"><BsTelephoneFill /></span>
                        <a href="mailto:contact@talentplace.ai" className="footer-contact-link">contact@talentplace.ai</a>
                    </li>
                </ul>
                <div className="footer-contact-social">
                    <a href="" target="_blank" className='footer-social-icon'><FaInstagramSquare /></a>
                    <a href="" target="_blank" className='footer-social-icon'><ImLinkedin2 /></a>
                    <a href="" target="_blank" className='footer-social-icon'><FaFacebookF /></a>
                    <a href="" target="_blank" className='footer-social-icon'><AiFillYoutube /></a>
                </div>
            </div>

            <div className="footer-section">
                <h3 className="footer-title">Product</h3>
                <ul className="footer-links-wrapper">
                    <li className="footer-link" onClick={() => navigate('/signup')}>CV Builder</li>
                    <li className="footer-link" onClick={() => window.open('https://www.taxolawgy.com/') }>Job Portal</li>
                    <li className="footer-link" onClick={() => window.open('https://www.app.taxolawgy.com/freelance-expert-onboarding') }>Find Job</li>
                    <li className="footer-link" onClick={() => window.open('https://www.app.taxolawgy.com/client-job-create') }>Post Job</li>
                    <li className="footer-link" onClick={() => window.open('https://www.talentplace.in/career-growth-masterclass') }>Career Success Masterclass</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3 className="footer-title">Resources</h3>
                <ul className="footer-links-wrapper">
                    <li className="footer-link">Pitch Deck</li>
                    <li className="footer-link">Company brochure</li>
                    <li className="footer-link">CV Template</li>
                    <li className="footer-link">How to get High paying job</li>
                    <li className="footer-link">How to create CV that get you shortlisted</li>
                    <li className="footer-link">Most demanding jobs world wide</li>
                </ul>
            </div>

            <div className="footer-section">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-links-wrapper">
                    <li className="footer-link">About Us</li>
                    <li className="footer-link">Privacy Policy</li>
                    <li className="footer-link">Terms and condition</li>
                    <li className="footer-link">Contact Us</li>
                    <li className="footer-link">Support</li>
                    <li className="footer-link">Media and press</li>
                </ul>
            </div>
            <div className="footer-copyright">
                copyright@2022talentplace.ai
            </div>
        </footer>
    )
}
