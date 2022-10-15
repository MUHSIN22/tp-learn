import React from 'react'
import dummy from '../../Assests/dummySocialContribution.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectSocialContribution, selectToEdit, changeEditPageDetails } from '../../redux/Features/ResumeSlice';
import SocialContributionLoader from '../Loaders/SocialContributionLoader';
import { FaPencilAlt } from "react-icons/fa";

export default function SocialContribution() {
    const socialContribution = useSelector(selectSocialContribution)
    return (
        <>
            {
                socialContribution[0] &&
                <div className="socialContribution section_2 col-100 align-center">
                    <div className="col-90">
                        <h1 className='text-left'>Social contribution </h1>
                        <span className="divider"></span>
                    </div>
                    {socialContribution && socialContribution.length > 0 ? <div className="col-90 g-1">
                        {
                            socialContribution.map((x, i) => <SocialContributionCard key={i} image={dummy} {...x} />)
                        }


                    </div> : <SocialContributionLoader />}

                </div>
            }
        </>
    )
}
function SocialContributionCard({ image, organization_name, description, additional_skill_record_id, role, from_duration, to_duration, currently_working }) {
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
    const handleEditForms = (data) => {
        dispatch(changeEditPageDetails(data)).unwrap();
    };
    return (
        <div className="card flex-row-start g-1">
            <div className="col-20">
                <img src={image} alt="" />
            </div>
            <div className="col-70 justify-start text-left g-2">
                <h4>{organization_name} {toEdit && (
                    <span onClick={() => handleEditForms({ progress: 12, organization_name, description, additional_skill_record_id, role, from_duration, to_duration, currently_working })} className="px-1"><FaPencilAlt /></span>
                )}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}