import React, { useEffect, useState } from "react";
import "../CVBuilder/CVBuilder.css";
import FormContainer from "../Form/FormContainer";
import "./CVReview.css";
import Sidebar from "../Sidebar/Sidebar";
import Cerification from "../CV/Cerification";
import Docs from "../CV/Docs";
import Education from "../CV/Education";
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
import { selectToEdit, changeToEdit } from '../../redux/Features/ResumeSlice';
import { selectEditPageNo, changeEditPageNo } from '../../redux/Features/ResumeSlice';
export default function CVBuilder({ page }) {
  page = page || "/Experience";
  const [isShow, setIsshow] = useState(false);
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch()
  let toEdit = useSelector(selectToEdit);
  let editPageNo = useSelector(selectEditPageNo);
  const handleEdit = (e) => { 
    dispatch(changeToEdit(!toEdit)).unwrap()
    setIsshow(true);
    console.log(isShow);
  };

  const floatingButton = (
    <div>
      <div
        className="floating-btn orange"
        style={{ "box-shadow": "5px 10px 20px 0 #ec957c" }}
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
        <Sidebar />
      </div>
      <div className="col-100">
        <div className="CVReview">
        <div className="flex-row-center justify-end m-0 px-1">
          {floatingButton }
        </div>
          <div className="flex-row-center justify-end m-0 px-1">
          {editPageNo && <EditFormContainer data={{progress:editPageNo}} />}
          </div>
          {page === "/personal-information" && <Section1 />}
          {page === "/Experience" && <Section3 />}
          {page === "/Education" && <Education />}
          {page === "/Docs" && <Docs />}
          {page === "/hobbies" && <Languages />}
          {page === "/hobbies" && <Hobby />}
          {page === "/Videos" && <Videos />}
          {page === "/Timeline" && <Section2 />}
          {page === "/SocialMedia" && <SocialMedia />}
          {page === "/Videos" && <Videos />}
          {page === "/Cerification" && <Cerification />}
        </div>
      </div>
    </div>
  );
}
