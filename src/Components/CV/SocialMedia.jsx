import React from 'react'
import { ReactComponent as Facebook } from '../../Assests/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../../Assests/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../../Assests/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../Assests/icons/twitter.svg';
import { selectSocilaLinks, selectToEdit,
    changeEditPageDetails, } from '../../redux/Features/ResumeSlice';
import { useSelector,useDispatch } from 'react-redux';
import { FaPencilAlt } from "react-icons/fa";

export default function SocialMedia() {
    const socialLink = useSelector(selectSocilaLinks)
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  return (
    <div className="socialMedia section_2 col-100 align-center">
            <div className="col-90 py-1">
                <h3 className='text-left'>Social Media {toEdit && (
            <span
              onClick={() => handleEditForms({ progress: 17,facebook:socialLink.facebook,linkedin:socialLink.linkedin,instagram:socialLink.instagram,twitter:socialLink.twitter})}
              style={{ marginLeft: "0.5rem" }}
            >
              <FaPencilAlt />
            </span>
          )}</h3>
                <span className="divider"></span>
                <div className="flex-wrap g-2">
                    <a href={socialLink.facebook} target="_blank" style={{color:'#219FFF'}} className="flex-row-start g-1 align-center">
                        <Facebook/> Facebook
                    </a>
                    <a href={socialLink.linkedin} style={{color:'#0274B3'}} className="flex-row-start g-1 align-center">
                        <Linkedin/> Linkedin
                    </a>
                    <a href={socialLink.instagram} style={{color:'rgb(251 84 80)'}} className="flex-row-start g-1 align-center">
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
