import React, { useEffect, useState } from "react";
import "../CVBuilder/CVBuilder.css";
import FormContainer from "../Form/FormContainer";
import "./CVReview.css";
import Sidebar from "../Sidebar/Sidebar";
import Cerification from "../CV/CerificationReview";
import Docs from "../CV/Docs";
import EducationReview from "../CV/EducationReview.jsx";
import Hobby from "../CV/Hobby";
import Languages from "../CV/Languages";
import Portfolio from "../CV/Portfolio";
import Recommendation from "../CV/Recommendation";
import Section1 from "../CV/Section1";
import Section2 from "../CV/Section2";
import Section3 from "../CV/Section3";
import SelfDeclaration from "../CV/SelfDeclaration";
import SocialContribution from "../CV/SocialContribution";
import SocialMedia from "../CV/SocialMedia";
import Videos from "../CV/Videos";
import { FaEdit, FaShareAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import EditFormContainer from "../EditForms/EditFromContainer";
import { useDispatch, useSelector } from 'react-redux';
import { selectToEdit, changeToEdit, selectEditPageDetails, changeEditPageDetails,changePageOn,getPageOn } from '../../redux/Features/ResumeSlice';
export default function CVBuilder() {
  const page = useSelector(getPageOn)
  const [isShow, setIsshow] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()
  let toEdit = useSelector(selectToEdit);
  let editPageDetails = useSelector(selectEditPageDetails);
  const handleEdit = (e) => { 
    dispatch(changeToEdit(!toEdit)).unwrap()
    dispatch(changeEditPageDetails({}))
    setIsshow(true);
    console.log(isShow);
  };

  // useEffect(() => {


  //   return (()=>{

  //   })
  // },[])

  const pull_data = (data) => {
    console.log(data,"data")
    dispatch(changePageOn(data));
    
  }

  const floatingButton = (
    <div>
      <div
        className="floating-btn orange"
        style={{ "boxShadow": "5px 10px 20px 0 #ec957c" }}
      >
        <div className="" onClick={handleEdit}>
          <FaEdit />
        </div>
        <div className="">
          <FiDownload />
        </div>
        <div className="">
          <FaShareAlt />
        </div>
      </div>
    </div>
  );
  return (
    // <div className="cvEditor">
    <div className="flex-row-center cvEditContainer">
      <div className="col-fit">
        <Sidebar currentPage={pull_data}/>
      </div>
      <div className="col-100">
        <div className="CVReview">
        <div className="flex-row-center justify-end px-1 mt-4">
          {floatingButton }
        </div>
          <div className="flex-row-center justify-end m-0 px-1">
          {editPageDetails && editPageDetails.progress && <EditFormContainer data={editPageDetails} />}
          </div>
          {page === "/personal-information" && <Section1 />}
          {page === "/Experience" && <Section3 />}
          {page === "/Education" && <EducationReview />}
          {page === "/Docs" && <Docs />}
          {page === "/languages" && <Languages />}
          {page === "/hobbies" && <Hobby />}
          {page === "/Videos" && <Videos />}
          {page === "/Timeline" && <Section2 />}
          {page === "/SocialMedia" && <SocialMedia />}
          {page === "/Videos" && <Videos />}
          {page === "/Certification" && <Cerification />}
          {page==="/SocialContribution" && <SocialContribution />}
        </div>
      </div>
    </div>
  );
}
