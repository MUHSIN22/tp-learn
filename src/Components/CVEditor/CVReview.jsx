import React, { useEffect, useState,useRef } from "react";
import "../CVBuilder/CVBuilder.css";
import FormContainer from "../Form/FormContainer";
import "./CVReview.css";
import Sidebar from "../Sidebar/Sidebar";
import Cerification from "../CV/CerificationReview";
import DocsReview from "../CV/DocsReview";
import EducationReview from "../CV/EducationReview.jsx";
import Hobby from "../CV/Hobby";
import Languages from "../CV/Languages";
import Portfolio from "../CV/Portfolio";
import Recommendation from "../CV/Recommendation";
import Section1 from "../CV/Section1";
import Section2Review from "../CV/Section2Review";
import Section3 from "../CV/Section3";
import SelfDeclaration from "../CV/SelfDeclaration";
import SocialContribution from "../CV/SocialContribution";
import ResumeDownload from "../ResumeTemplate/Resume";

import SocialMedia from "../CV/SocialMedia";
import VideosReview from "../CV/VideosReview";
import { FaEdit, FaShareAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import EditFormContainer from "../EditForms/EditFromContainer";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  selectToEdit,
  changeToEdit,
  selectEditPageDetails,
  changeEditPageDetails,
  changePageOn,
  getPageOn,
} from "../../redux/Features/ResumeSlice";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import fb_icon from "../../Assests/icons/facebook.svg";
import wp_icon from "../../Assests/icons/whatsapp.png";
import insta_icon from "../../Assests/icons/instagram.png";

export default function CVBuilder() {
  const page = useSelector(getPageOn);
  const [isShow, setIsshow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shareOpts, setShareOpts] = useState({ isShare: 0, app: "facebook" });
  const dispatch = useDispatch();
  let toEdit = useSelector(selectToEdit);
  let editPageDetails = useSelector(selectEditPageDetails);
  const handleEdit = (e) => {
    dispatch(changeToEdit(!toEdit)).unwrap();
    dispatch(changeEditPageDetails({}));
    setIsshow(true);
    console.log(isShow);
  };
  const newRef = React.useRef();

  const generatePdf = () => {
    // histor('/resume');
    // window.open('http://localhost:3000/resume', '_blank', 'toolbar=0,location=0,menubar=0');

    return newRef.current();
  };

  const pull_data = (data) => {
    console.log(data, "data");
    dispatch(changePageOn(data));
  };
  editPageDetails && editPageDetails.progress && window.scrollTo(0, 0);

  const floatingButton = (
    <div>
      <div
        className="floating-btn orange"
        style={{ boxShadow: "5px 10px 20px 0 #ec957c" }}
      >
        <div className="" onClick={handleEdit}>
          <FaEdit />
        </div>
        <div className="" onClick={() => newRef.current()()}>
          <FiDownload />
        </div>
        <Tippy
          placement="bottom-end"
          interactive={true}
          theme="light"
          content={
            <div className="d-flex justify-between" style={{ width: "10rem" }}>
              <div
                onClick={async () => {
                  cvShare("whatsapp");
                }}
              >
                <img
                  src={fb_icon}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <div onClick={() => newRef.current()()}>
                <img src={wp_icon} alt="" />
              </div>
              <div onClick={() => newRef.current()()}>
                <img src={insta_icon} alt="" />
              </div>
            </div>
          }
        >
          <div>
            <FaShareAlt />
          </div>
        </Tippy>
      </div>
    </div>
  );

  const cvShare = async (app) => {
    console.log(shareOpts, "hellopp");
    setTimeout(() => {
      newRef.current()();   
    }, 1000);
    setShareOpts({ isShare: 1, app: app });
    console.log(shareOpts, "hello");  
    
  };

  return (
    // <div className="cvEditor">
    <div className="flex-row-center cvEditContainer" id="cv-pdf-content">
      <div className="col-fit">
        <Sidebar currentPage={pull_data} />
      </div>
      <div className="col-100">
        <div className="CVReview">
          <div
            className="flex-row-center justify-end px-1 mt-4"
            style={{ cursor: "pointer" }}
          >
            {floatingButton}
          </div>
          <div className="flex-row-center justify-end m-0 px-1">
            {editPageDetails && editPageDetails.progress && (
              <EditFormContainer data={editPageDetails} />
            )}
          </div>
          {(page === "/personal-information" || page === "/dashboard") && (
            <Section1 />
          )}
          {(page === "/Experience" || page === "/dashboard") && <Section3 />}
          {(page === "/Education" || page === "/dashboard") && (
            <EducationReview />
          )}
          {(page === "/languages" || page === "/dashboard") && <Languages />}
          {(page === "/hobbies" || page === "/dashboard") && <Hobby />}
          {(page === "/Videos" || page === "/dashboard") && <VideosReview />}
          {(page === "/career-timeline" || page === "/dashboard") && (
            <Section2Review />
          )}
          {(page === "/SocialMedia" || page === "/dashboard") && (
            <SocialMedia />
          )}
          {(page === "/Certification" || page === "/dashboard") && (
            <Cerification />
          )}
          {(page === "/SocialContribution" || page === "/dashboard") && (
            <SocialContribution />
          )}
          {(page === "/Recommendation" || page === "/dashboard") && (
            <Recommendation />
          )}
          {(page === "/Docs" || page === "/dashboard") && <DocsReview />}
          {(page === "/self-declaration" || page === "/dashboard") && (
            <SelfDeclaration />
          )}
          <div
            id="hello"
            style={{
              position: "fixed",
              padding: 0,
              clip: "rect(0 0 0 0)",
              overflow: "hidden",
            }}
          >
            <ResumeDownload newRef={newRef} shareOpts={shareOpts} />
          </div>
        </div>
      </div>
    </div>
  );
}
