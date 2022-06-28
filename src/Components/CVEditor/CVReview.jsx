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

export default function CVBuilder({ page }) {
  page =page || "/personal-information";
  return (
    // <div className="cvEditor">
    <div className="flex-row-center cvEditContainer">
      <div className="col-fit">
        <Sidebar />
      </div>
      <div className="col-100">
        <div className="CVReview">
        {page === '/personal-information' && <Section1 />}
          {page === '/Experience' && <Section3 />}
          {page === '/Education' && <Education />}
          {page === '/Docs' && <Docs />}
          {page === '/hobbies' && <Languages />}
          {page === '/hobbies' && <Hobby />}
          {page === '/Videos' && <Videos />}
          {page === '/Timeline' && <Section2 />}
          {page === '/SocialMedia' && <SocialMedia />}
          {page === '/Videos' && <Videos />}
        </div>
      </div>
    </div>
    // <div className="builder-row">
    // <FormContainer/>
    // </div>
    // </div>
  );
}
