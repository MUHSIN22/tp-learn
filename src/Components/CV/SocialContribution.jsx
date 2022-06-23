import React from 'react'
import dummy from '../../Assests/dummySocialContribution.png'
import { useSelector } from 'react-redux';
import { selectSocialContribution } from '../../redux/Features/ResumeSlice';
import SocialContributionLoader from '../Loaders/SocialContributionLoader';
export default function SocialContribution() {
    const socialContribution = useSelector(selectSocialContribution)
    return (
        <div className="socialContribution section_2 col-100 align-center">
            <div className="col-90">
                <h3 className='text-left'>Social contribution </h3>
                <span className="divider"></span>
            </div>
            {socialContribution&&socialContribution.length>0?<div className="col-90 g-1">
            {
                socialContribution.map((x,i)=><SocialContributionCard image={dummy} {...x}  />)
            }
              
              
            </div>:<SocialContributionLoader/>}

        </div>
    )
}
function SocialContributionCard({ image, organization_name, description }) {
    return (
        <div className="card flex-row-start g-1">
            <div className="col-20">
                <img src={image} alt="" />
            </div>
            <div className="col-70 justify-start text-left g-0-5">
                <h4>{organization_name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}