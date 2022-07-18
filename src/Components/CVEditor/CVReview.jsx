import React, { useEffect, useState,useRef } from "react";
import "../CVBuilder/CVBuilder.css";
import FormContainer from "../Form/FormContainer";
import "./CVReview.css";
import Sidebar from "../Sidebar/Sidebar";
import Cerification from "../CV/CerificationReview";
import DocsReview from "../CV/DocsReview";
import EducationReview from "../CV/EducationReview.jsx";
import Hobby from "../CV/HobbyReview";
import Languages from "../CV/LanguagesReview";
import Portfolio from "../CV/Portfolio";
import Recommendation from "../CV/Recommendation";
import Section1 from "../CV/Section1";
import Section2Review from "../CV/Section2Review";
import Section3 from "../CV/Section3Review";
import SelfDeclaration from "../CV/SelfDeclaration";
import SocialContribution from "../CV/SocialContributionReview";
import ResumeDownload from "../ResumeTemplate/Resume";

import SocialMedia from "../CV/SocialMedia";
import VideosReview from "../CV/VideosReview";
import { FiEdit,FiShare2 } from "react-icons/fi";
import {BsDownload} from "react-icons/bs"
import EditFormContainer from "../EditForms/EditFromContainer";
import { useDispatch, useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {Spinner} from "./Spinner";
import {
  selectToEdit,
  changeToEdit,
  selectEditPageDetails,
  changeEditPageDetails,
  changePageOn,
  getPageOn,
  getLoaderstate,
} from "../../redux/Features/ResumeSlice";
import { useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import fb_icon from "../../Assests/icons/facebook.svg";
import wp_icon from "../../Assests/icons/whatsapp.png";
import insta_icon from "../../Assests/icons/instagram.png";
import { useCallback } from "react";

export default function CVBuilder() {
  const page = useSelector(getPageOn);
  const [isShow, setIsshow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shareOpts, setShareOpts] = useState({ isShare: 0, app: "" });
  const dispatch = useDispatch();
  let toEdit = useSelector(selectToEdit);
  let editPageDetails = useSelector(selectEditPageDetails);
  // let loaderState=useSelector(getLoaderstate)
  const handleEdit = (e) => {
    dispatch(changeToEdit(!toEdit)).unwrap();
    dispatch(changeEditPageDetails({}));
    setIsshow(true);
    console.log(isShow);
  };
  const [loader,setloader] = useState(0);

  const changeLoader = (value)=>{
    console.log("data",value, "data");
    setloader(value)
  }
  

  const newRef = React.useRef();

  const generatePdf = () => {
    // histor('/resume');
    // window.open('http://localhost:3000/resume', '_blank', 'toolbar=0,location=0,menubar=0');

    return newRef.current();
  };

  const pull_data = (data) => {
   
    dispatch(changePageOn(data));
  };
  editPageDetails && editPageDetails.progress && window.scrollTo(0, 0);

  const floatingButton = (
    <div className="headerButtons">
      <div
        className="floating-btn orange"
        style={{ boxShadow: "5px 10px 20px 0 #ec957c" }}
      >
        <div className="" onClick={handleEdit}>
          <FiEdit style={{"width":"1.5rem","height":"1.5rem","fontWeight":"100"}}/>
        </div>
        <div className="" onClick={() => newRef.current()()}>
          <BsDownload style={{"width":"1.5rem","height":"1.5rem","fontWeight":"100"}}/>
        </div>
        <Tippy 
          placement="bottom-end"
          interactive={true}
          theme="light"
          content={
            <div className="d-flex justify-between" style={{ width: "10rem"}}>
              <div
                onClick={async () => { await cvShare("facebook")}}
              >
                <img
                  src={fb_icon}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <div onClick={async () => {
                  await cvShare("whatsapp");
                }}>
                <img src={wp_icon} alt="" />
              </div>
              <div onClick={async () => {
                  await cvShare("instagram");
                }}>
                <img src={insta_icon} alt="" />
              </div>
            </div>
          }
        >
          <div>
            <FiShare2 style={{"width":"1.5rem","height":"1.5rem","fontWeight":"100"}}/>
          </div>
        </Tippy>
      </div>
    </div>
  );

  const cvShare = async (app) => {
    setloader(1)
    setTimeout(() => {
      newRef.current.share(shareOpts)(); 
      setloader(0)  
    }, 1000);
    shareOpts.app=app
    setShareOpts({shareOpts});
  };

  return (
    // <div className="cvEditor">
    <div className="flex-row-center cvEditContainer" id="cv-pdf-content">
      <div className="col-fit">
        <Sidebar currentPage={pull_data} />
      </div>
      <div className="col-100">
      <div
            className="flex-row-center justify-end px-3 mx-1"
            style={{ cursor: "pointer" }}
          >
            {floatingButton}
          </div>
        <div className="CVReview">
          {
              loader==1 && <Spinner />
            }
          <div className="flex-row-center justify-end m-0 px-1">
            {editPageDetails && editPageDetails.progress && (
              <EditFormContainer data={editPageDetails} />
            )}
          </div>
          {((page === "/personal-information" || page === "/dashboard") && loader!=1) && (
            <Section1 />
          )}
           {((page === "/career-timeline" || page === "/dashboard") && loader!=1) && (
            <Section2Review />
          )}
          {((page === "/Experience" || page === "/dashboard") && loader!=1 ) && <Section3 />}
          {((page === "/Certification" || page === "/dashboard") && loader!=1) && (
            <Cerification />
          )}
          {((page === "/Education" || page === "/dashboard") && loader!=1 ) && (
            <EducationReview />
          )}
          {((page === "/Recommendation" || page === "/dashboard") && loader!=1) && (
            <Recommendation />
          )}
          {((page === "/languages" || page === "/dashboard" || page === "/hobbies") && loader!=1) && <div className="flex-row-between g-2 mt-2"><Hobby /> <Languages /></div>}
          {/* {((page === "/hobbies" || page === "/dashboard") && loader!=1) && <Hobby />} */}
          {((page === "/SocialContribution" || page === "/dashboard") && loader!=1) && (
            <SocialContribution />
          )}
          {((page === "/Docs" || page === "/dashboard") && loader!=1) && <DocsReview />}
          {((page === "/Videos" || page === "/dashboard") && loader!=1) && <VideosReview />}
          {((page === "/SocialMedia" || page === "/dashboard") && loader!=1) && (
            <SocialMedia />
          )}
          {((page === "/self-declaration" || page === "/dashboard") && loader!=1) && (
            <SelfDeclaration />
          )}
          <div
            id="hello"
            // style={{
            //   position: "fixed",
            //   padding: 0,
            //   clip: "rect(0 0 0 0)",
            //   overflow: "hidden",
            // }}
          >
            <ResumeDownload newRef={newRef} shareOpts={shareOpts} changeLoaderval={()=>changeLoader() } />
          </div>
        </div>
      </div>
    </div>
  );
}
