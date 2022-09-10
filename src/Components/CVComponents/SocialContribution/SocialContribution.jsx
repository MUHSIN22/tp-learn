import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'
import contributionLabel from '../../../Assets/Dashboard icons/social.png'
import { selectSocialContribution } from '../../../redux/Features/ResumeSlice'
import './SocialContribution.css'

export default function SocialContribution() {
    const socialContribution = useSelector(selectSocialContribution)
    return (
        <div className="cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Social Contributions</h2>
            {
                socialContribution && socialContribution[0] &&
                socialContribution.map((contribution, index) => (
                    <div className="social-contribution-grid">
                        <img src={contributionLabel} alt="" className="contribution-img" />
                        <div className="contribution-details">
                            <h2 className="cv-profile-title-secondary">{contribution.organization_name}</h2>
                            <p className="other-details">{contribution.role}</p>
                            <p className="other-details">{moment(contribution.from_duration,"dd-mm-yyyy").format("MMM yyyy")} to {moment(contribution.to_duration,'dd-mm-yyyy').format("MMM yyyy") !== "Invalid date" ? moment(contribution.to_duration,'dd-mm-yyyy').format("MMM yyyy") : "Present"}</p>
                            <p className="contribution-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione fugit soluta error labore eaque aliquam rem modi aliquid ipsam. At hic repellat corrupti veritatis quia ad quam reprehenderit earum, quis neque molestias! Veniam corrupti, sit dicta ex tenetur fugit repellendus!</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
