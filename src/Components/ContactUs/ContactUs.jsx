import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div className="contact-us-page">
        <div className="contact-us-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">Contact us for a query, help, or to join the team</p>
            <div className="contact-links">
                <div className="contact-link">
                    <MdEmail className="contact-icon" />
                    <h6 className="contact-link-title">Email</h6>
                    <a href="mailto:contact@talentplace.ai">contact@talentplace.ai</a>
                </div>
                <div className="contact-link">
                    <BsFillTelephoneFill className='contact-icon' />
                    <h6 className="contact-link-title">Email</h6>
                    <a href="tel:+918380090444">+91 838 00 90 444</a>
                </div>
            </div>
            <form className="contact-form">
                <input type="text" placeholder='Name' className="contact-input" />
                <input type="email" placeholder='Email' className="contact-input" />
                <textarea name="message" placeholder='Message...' className='contact-input' id="" cols="30" rows="10"></textarea>
                <button className="btn-submit">Submit</button>
            </form>
        </div>
    </div>
  )
}
