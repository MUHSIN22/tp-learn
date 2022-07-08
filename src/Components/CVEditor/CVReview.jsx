import React, { useEffect, useState } from "react";
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
import SocialMedia from "../CV/SocialMedia";
import VideosReview from "../CV/VideosReview";
import { FaEdit, FaShareAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import EditFormContainer from "../EditForms/EditFromContainer";
import { useDispatch, useSelector } from 'react-redux';
import jsPDF from  "jspdf";
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

  const generatePdf = () => {
    let doc = new jsPDF("p","pt","a4")
    doc.html(document.querySelector("#tpcv"),{
      callback: (pdf) => {
        pdf.save("talentplace.pdf");
      }
    });
  };

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
        <div className="" onClick={generatePdf}>
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
    <div className="flex-row-center cvEditContainer" id="cv-pdf-content">
      <div className="col-fit">
        <Sidebar currentPage={pull_data}/>
      </div>
      <div className="col-100">
        <div className="CVReview">
        <div className="flex-row-center justify-end px-1 mt-4" style={{"cursor":"pointer"}}>
          {floatingButton }
        </div>
          <div className="flex-row-center justify-end m-0 px-1">
          {editPageDetails && editPageDetails.progress && <EditFormContainer data={editPageDetails} />}
          </div>
          {page === "/personal-information" && <Section1 />}
          {page === "/Experience" && <Section3 />}
          {page === "/Education" && <EducationReview />}
          {page === "/languages" && <Languages />}
          {page === "/hobbies" && <Hobby />}
          {page === "/Videos" && <VideosReview />}
          {page === "/career-timeline" && <Section2Review />}
          {page === "/SocialMedia" && <SocialMedia />}
          {page === "/Certification" && <Cerification />}
          {page==="/SocialContribution" && <SocialContribution />}
          {page==="/Recommendation"  && <Recommendation />}
          {page==='/Docs' && <DocsReview />}
          {page==='/self-declaration' && <SelfDeclaration />}
        </div>
      </div>
    </div>
  );
}
