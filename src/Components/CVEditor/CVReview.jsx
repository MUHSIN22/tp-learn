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
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {Spinner} from "./Spinner";
import PDF from "../../Assests/PDF.png"
import {
  selectToEdit,
  changeToEdit,
  selectEditPageDetails,
  changeEditPageDetails,
  changePageOn,
  getPageOn,
  getLoaderstate,
  selectBio,
  selectResumeDetails,
  uploadResume,
} from "../../redux/Features/ResumeSlice";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import fb_icon from "../../Assests/icons/facebook.svg";
import wp_icon from "../../Assests/icons/whatsapp.png";
import insta_icon from "../../Assests/icons/instagram.png";
import { useCallback } from "react";
import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import PdfGenerator from "../Resume2/PdfGenerator";
import { selectAuthToken, selectUser_id } from "../../redux/Features/AuthenticationSlice";
import MobileHeader from "../MobileHeader/MobileHeader";

export default function CVBuilder() {
  const page = useSelector(getPageOn);
  const [isShow, setIsshow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [shareOpts, setShareOpts] = useState({ isShare: 0, app: "" });
  const dispatch = useDispatch();
  let toEdit = useSelector(selectToEdit);
  let editPageDetails = useSelector(selectEditPageDetails);
  const location = useLocation();
  const bio = useSelector(selectBio);
  const resumeDetails = useSelector(selectResumeDetails);
  const user_id = useSelector(selectUser_id)
  const token = useSelector(selectAuthToken)
  const [instance,setInstance] = usePDF({document: <PdfGenerator bio={bio} resumeDetails={resumeDetails} />})

  console.log(resumeDetails,'resume details');
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

  if(location?.state?.page === "/personal-information"){
    dispatch(changePageOn("/personal-information"));
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


  const shareResume = (media) => {
    let formData = new FormData();
    formData.append('user_id',user_id);
    formData.append("resume_pdf",instance.blob,"resume.pdf");
    try{
      dispatch(uploadResume({body:formData,auth: token})).unwrap().then(response => {
        let shareLink;
        const resume_link = response.resumePdfUrl;
        if(media === "whatsapp"){
          shareLink = `https://api.whatsapp.com/send?text=${resume_link}`
        } else if(media === "facebook"){
          shareLink = `https://www.facebook.com/sharer/sharer.php?u=${resume_link}`
        } else if(media === "instagram"){
          shareLink = `https://www.instagram.com/direct?url=${resume_link}`    
        }
        window.open(shareLink, '_blank', 'noopener,noreferrer')
      })
    }catch(err){
      console.log(err);
    }
  }


  const floatingButton = (
    <div className="headerButtons">
      <div
        className="floating-btn orange"
        style={{ boxShadow: "5px 10px 20px 0 #ec957c" }}
      >
        <div className="" onClick={handleEdit}>
          <FiEdit style={{"width":"1.5rem","height":"1.5rem","fontWeight":"100"}}/>
        </div>
        <Tippy 
          placement="bottom-end"
          interactive={true}
          theme="light"
          content={
            <div className="d-flex justify-between">
              <PDFDownloadLink document={<PdfGenerator bio={bio} resumeDetails={resumeDetails}/>} fileName={`Resume_${resumeDetails.fname}_${resumeDetails.lname}.pdf`}>
                {({blob,url,loading,error}) => (
                  loading? "loading" : <img src={PDF} alt="" />
                )}

              </PDFDownloadLink>
            </div>
          }
        >
          <div className="">
          <BsDownload style={{"width":"1.5rem","height":"1.5rem","fontWeight":"100"}}/>
        </div>
        </Tippy>
        <Tippy 
          placement="bottom-end"
          interactive={true}
          theme="light"
          content={
            <div className="d-flex justify-between" style={{ width: "10rem"}}>
              <div
                onClick={() => shareResume("facebook")}
              >
                <img
                  src={fb_icon}
                  alt=""
                  style={{ width: "2rem", height: "2rem" }}
                />
              </div>
              <div onClick={() => shareResume("whatsapp")}>
                <img src={wp_icon} alt="" />
              </div>
              <div onClick={() => shareResume("instagram")}>
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
      <MobileHeader />
      <div className="col-fit sidebar-wrapper">
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
          <div className="flex-row-center justify-end m-0 px-1 form-edit-wrapper">
            {(editPageDetails && editPageDetails.hasOwnProperty('progress')) && (
              <EditFormContainer data={editPageDetails} />
            )}
          </div>
          {((page === "/dashboard" || page === "/personal-information") && loader!=1) && (
            <Section1 />
          )}
           {((page === "/career-timeline" || page === "/personal-information") && loader!=1) && (
            <Section2Review />
          )}
          {((page === "/Experience" || page === "/personal-information") && loader!=1 ) && <Section3 />}
          {((page === "/Certification" || page === "/personal-information") && loader!=1) && (
            <Cerification />
          )}
          {((page === "/Education" || page === "/personal-information") && loader!=1 ) && (
            <EducationReview />
          )}
          {/* {((page === "/Recommendation" || page === "/personal-information") && loader!=1) && (
            <Recommendation />
          )} */}
          {((page === "/languages" || page === "/personal-information" || page === "/hobbies") && loader!=1) && <div className="flex-row-between g-2 mt-2"><Hobby /></div>}
          {/* {((page === "/hobbies" || page === "/personal-information") && loader!=1) && <Hobby />} */}
          {((page === "/SocialContribution" || page === "/personal-information") && loader!=1) && (
            <SocialContribution />
          )}
          {((page === "/Docs" || page === "/personal-information") && loader!=1) && <DocsReview />}
          {((page === "/Videos" || page === "/personal-information") && loader!=1) && <VideosReview />}
          {((page === "/SocialMedia" || page === "/personal-information") && loader!=1) && (
            <SocialMedia />
          )}
          {((page === "/self-declaration" || page === "/personal-information") && loader!=1) && (
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
            {/* <ResumeDownload newRef={newRef} shareOpts={shareOpts} changeLoaderval={()=>changeLoader() } /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
