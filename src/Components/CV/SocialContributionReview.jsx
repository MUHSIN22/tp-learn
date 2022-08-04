import React from 'react'
import dummy from '../../Assets/Dashboard icons/social.png'
import { useSelector, useDispatch } from 'react-redux';
import { selectSocialContribution, selectToEdit, changeEditPageDetails, deleteAdditionalSkill } from '../../redux/Features/ResumeSlice';
import SocialContributionLoader from '../Loaders/SocialContributionLoader';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from 'react-icons/md'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';

export default function SocialContributionReview() {
    const socialContribution = useSelector(selectSocialContribution)
    console.log(socialContribution, "Social Contribution");
    return (
        <>
            {
                socialContribution[0] &&
                <div className="socialContribution section_2 col-100 align-center mt-2">
                    <div className="col-90">
                        <h3 className='text-left'>Social contribution </h3>
                        <span className="divider"></span>
                    </div>
                    {socialContribution && socialContribution.length > 0 ? <div className="col-90 g-1">
                        {
                            socialContribution.map((x, i) => <SocialContributionCard image={dummy} {...x} />)
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
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)
    const handleDeleteForm = (data) => {
        let confirm = window.confirm("Are you sure to delete?")
        if(confirm) dispatch(deleteAdditionalSkill({auth: token, body: data, dispatch}))
    }
    return (
        <div className="card flex-row-start g-1">
            <div className="col-20">
                <img src={image} alt="" />
            </div>
            <div className="col-70 justify-start text-left g-2">
                <h4 style={{display: 'flex'}}><span>{organization_name}</span> {toEdit && (
                    <div className="edit-and-delete ">
                        <span onClick={() => handleEditForms({ progress: 12, organization_name, description, additional_skill_record_id, role, from_duration, to_duration, currently_working })} className="px-1"><FaPencilAlt /></span>
                        <span onClick={() => handleDeleteForm({ user_id, additional_skill_record_id })} className="px-1"><MdDelete /></span>
                    </div>
                )}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}