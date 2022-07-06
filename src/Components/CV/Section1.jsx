import React from 'react'
import avatar from '../../Assests/avatar.jpg'
import { ReactComponent as More } from '../../Assests/icons/more.svg';
import { ReactComponent as Calling } from '../../Assests/icons/call-calling.svg';
import { ReactComponent as Location } from '../../Assests/icons/location-o.svg';
import { ReactComponent as Man } from '../../Assests/icons/man.svg';
import { ReactComponent as Note } from '../../Assests/icons/note.svg';
import { ReactComponent as Sms } from '../../Assests/icons/sms.svg';
import OverviewCard from '../OverviewCard/OverviewCard';
import { useSelector,useDispatch } from 'react-redux';
import { selectBio, selectProfilePic, selectResumeDetails, selectResumeLoading, selectToEdit, changeToEdit, changeEditPageDetails } from '../../redux/Features/ResumeSlice';
import BioLoader from '../Loaders/BioLoader';
import parser from 'html-react-parser';
import { FaPencilAlt } from "react-icons/fa";
export default function Section1() {
    const loading = useSelector(selectResumeLoading)
    const contactInfo = useSelector(selectResumeDetails)
    const profilePic = useSelector(selectProfilePic)
    const bio = useSelector(selectBio)
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
    return (
        <div className="section_1">
            <div className="personal_info">
                <div className="profile">
                    <img src={profilePic|| avatar} alt="profile" />
                </div>
                <div className="row">
                    <p>Personal Information </p>
                    <More />

                </div>
                <span className='divider'></span>
                <p>
                    “Pushing pixels and experiences in digital products for Sebostudio"
                </p>
                <span className='divider'></span>
                <div className="col-100">
                    <div className="row">
                        <Note /> <p>Contractual</p>
                    </div>
                    <div className="row">
                        <Sms /> <p>{contactInfo.email}</p>
                    </div>
                    <div className="row">
                        <Calling /> <p>{contactInfo.contact}</p>
                    </div>
                    <div className="row">
                        <Location /> <p>{contactInfo.address}</p>
                    </div>
                    <div className="row">
                        <Man /> <p>{contactInfo.gender===1 ? 'Male': 'Female' }</p>
                    </div>
                    <div className="background"></div>
                </div>
            </div>
            <div className="col-inherit">
                <h1>{contactInfo.name} {toEdit && (
                     <span onClick={() => handleEditForms({ progress: 14,bio:bio ? bio: '' })}><FaPencilAlt /></span>
                    )}</h1>
                
                <p>Content Creator</p>
                <span className="divider"></span>
                {!loading&&bio?<p>{parser(bio)}</p>:<BioLoader/>}
                <OverviewCard/>
            </div>

        </div>
    )
}
