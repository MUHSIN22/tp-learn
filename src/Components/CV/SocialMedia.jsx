import React from 'react'
import { ReactComponent as Facebook } from '../../Assests/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../../Assests/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../../Assests/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../Assests/icons/twitter.svg';
import { selectSocilaLinks } from '../../redux/Features/ResumeSlice';
import { useSelector } from 'react-redux';
export default function SocialMedia() {
    const socialLink = useSelector(selectSocilaLinks)
  return (
    <div className="socialMedia section_2 col-100 align-center">
            <div className="col-90">
                <h3 className='text-left'>Social Media</h3>
                <span className="divider"></span>
                <div className="flex-wrap g-2">
                    <a href={socialLink.facebook} style={{color:'#219FFF'}} className="flex-row-start g-1 align-center">
                        <Facebook/> Facebook
                    </a>
                    <a href={socialLink.linkedin} style={{color:'#0274B3'}} className="flex-row-start g-1 align-center">
                        <Linkedin/> Linkedin
                    </a>
                    <a href={socialLink.instagram} style={{color:'#219FFF'}} className="flex-row-start g-1 align-center">
                        <Instagram/> Instagram
                    </a>
                    <a href={socialLink.twitter} style={{color:'#219FFF'}} className="flex-row-start g-1 align-center">
                        <Twitter/> Twitter
                    </a>
                </div>

             </div>
    </div>            
  )
}
