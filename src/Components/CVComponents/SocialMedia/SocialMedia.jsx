import React from 'react'
import './SocialMedia.css'
import { ReactComponent as Facebook } from '../../../Assests/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../../../Assests/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../../../Assests/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../../Assests/icons/twitter.svg';
import { useSelector } from 'react-redux';
import { selectSocilaLinks } from '../../../redux/Features/ResumeSlice';

export default function SocialMedia() {
    const { facebook, twitter, instagram, linkedin } = useSelector(selectSocilaLinks);
    const urlChecker = (url) => {
        let link
        try{
          link = new URL(url);
        }catch(err){
          return false
        }
        return link.protocol === "http:" || link.protocol === "https:" ? url : "https://"+url
      }
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Social Media</h2>
            <div className="social-media-wrapper">
                {
                    facebook !== "" &&
                    <a href={urlChecker(facebook)} target="_blank" className="social-media">
                        <Facebook />
                        <span>Facebook</span>
                    </a>
                }
                {
                    instagram !== "" &&
                    <a href={urlChecker(instagram)} target="_blank" className="social-media">
                        <Instagram />
                        <span>Instagram</span>
                    </a>
                }
                {
                    twitter !== "" &&
                    <a href={urlChecker(twitter)} target="_blank" className="social-media">
                        <Twitter />
                        <span>Twitter</span>
                    </a>
                }
                {
                    linkedin !== "" &&
                    <a href={urlChecker(linkedin)} target="_blank" className="social-media">
                        <Linkedin />
                        <span>Linkedin</span>
                    </a>
                }
            </div>
        </div>
    )
}
