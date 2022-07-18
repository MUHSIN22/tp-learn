import React, { useEffect, useRef, useState } from "react";
import { FaFileContract } from "react-icons/fa";
import { BiMessageMinus } from "react-icons/bi";
import { BsGenderMale, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiComputerLine, RiInstagramFill } from "react-icons/ri";
import parser from "html-react-parser";
import moment from "moment";
import { ReactComponent as Facebook } from '../../Assests/icons/facebook.svg';
import { ReactComponent as Linkedin } from '../../Assests/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../../Assests/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../Assests/icons/twitter.svg';
// RiComputerLine
import { ReactComponent as Device } from "../../Assests/icons/monitor-mobile.svg";
import { ReactComponent as Chart } from "../../Assests/icons/chart.svg";
import { ReactComponent as Headphone } from "../../Assests/icons/headphone.svg";
import { ReactComponent as Location } from "../../Assests/icons/location.svg";
import { ReactComponent as Calendar } from "../../Assests/icons/calendar.svg";
import { ReactComponent as Clock } from "../../Assests/icons/clock.svg";
import { ReactComponent as BarGraph } from "../../Assests/icons/barGraph.svg";
import { ReactComponent as BarGraphO } from "../../Assests/icons/chart_o.svg";
import { ReactComponent as Human } from "../../Assests/icons/human.svg";
import { ReactComponent as HumanG } from "../../Assests/icons/human_g.svg";
import { ReactComponent as Webcam } from "../../Assests/icons/webcam.svg";
import { ReactComponent as Right } from "../../Assests/icons/arrow-circle-right.svg";
import { ReactComponent as Left } from "../../Assests/icons/arrow-circle-left.svg";
import {
    SelectCompanyDetails,
    selectResumeLoading,
    selectBio,
    selectProfilePic,
    selectResumeDetails,
    selectLastCompany,
    selectEducation,
    selectCertificate,
    selectHobbies,
    selectSocilaLinks,
    selectSocialContribution,
    uploadResume,
    getDownLoadDetails,
    reload
} from "../../redux/Features/ResumeSlice";
import { selectKeySkills } from '../../redux/Features/GraphSlice'
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Resume2() {
    let keySkills = [
        {
            name: 'web',
        },
        {
            name: 'web',
        },
        {
            name: 'web',
        },
        {
            name: 'web',
        }
    ]
    return (
        <div className="mt-5" id="tpcv" >
            <div className="d-flex">
                <div className="col-30">
                    {/* <img className="Profile_resume_img" src={profile} crossOrigin="true" rossOrigin="anonymous" /> */}
                </div>
                <div className="col-70 Profile_resume_name_sec">
                    <h2 className="profileName text-left">Rajan Raju</h2>
                    <h2 className="currentDegi text-left">Software Developer</h2>
                </div>
            </div>

            <div className="d-flex justify-content-between text-light">
                <div className="col-30 bg-dark mx-1 py-2">
                    <div className="skills-head text-left">
                        <h3 className="pl-3">PERSONAL DETAILS</h3>
                        <hr className="horizone_line " />
                    </div>
                    <div className="personal_detail_sec text-light d-flex ">
                        <div className="icons col-30">
                            <span className="mt-2">
                                <FaFileContract />
                            </span>
                            <span className="mt-2">
                                <BiMessageMinus />
                            </span>
                            <span className="mt-2">
                                <FiPhoneCall />
                            </span>
                            <span className="mt-2">
                                <GoLocation />
                            </span>
                            <span className="mt-2">
                                <BsGenderMale />
                            </span>
                        </div>
                        <div className="col-70 ml-4" style={{ "textAlign": "left" }}>
                            <h4 className="mt-2 mb-0">Contractual</h4>

                            <h4 className="mt-2 mb-0">muhsin@gmail.com</h4>

                            <h4 className="mt-2 mb-0">+918606113002</h4>

                            <h4 className="mt-2 mb-0">Malappuram,Kerala, India</h4>

                            <span className="mt-2 mb-0">Male</span>
                        </div>
                    </div>
                    <div className="col-100 skills mt-2 ">
                        <div className="skills-head text-left">
                            <h3 className="pl-3">SKILLS</h3>
                            <hr className="horizone_line " />
                        </div>
                        <div className="skills_added d-flex flex-column pl-3 mt-0-5" style={{ "textAlign": "left" }}>
                            {
                                keySkills?.map((skill, i) => {
                                    return <h4 className="my-2 " key={i}>{skill.name}</h4>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-100 skills mt-5">
                        <div className="skills-head text-left">
                            <h3 className="pl-3">EDUCATION</h3>
                            <hr className="horizone_line " />
                        </div>
                        {/* <div className="skills_added d-flex flex-column pl-3" style={{ "textAlign": "left" }}>
              {
                educations?.map((edu, i) => {
                  return <h4 className="my-2" key={i}>{moment(edu.course_end_date, "dd-mm-yyyy").format("YYYY")} {edu.degree_name} {edu.university_name} / {edu.collage_name}</h4>
                })
              }*/}
                    </div>
                </div>
                <div className="col-100 skills mt-5">
                    <div className="skills-head text-left">
                        <h3 className="pl-3">CERTIFICATION</h3>
                        <hr className="horizone_line " />
                    </div>
                    {/* <div className="skills_added d-flex flex-column pl-3" style={{ "textAlign": "left" }}>
                            {
                                certificates?.map((certi, i) => {
                                    return <h4 className="my-2" key={i}>{moment(certi.certificate_end_date, "dd-mm-yyyy").format("YYYY")} {certi.project_name} {certi.institute_name}</h4>
                                })
                            }
                        </div> */}
                </div>
                <div className="col-100 skills mt-5">
                    <div className="skills-head text-left">
                        <h3 className="pl-3">HOBBIES</h3>
                        <hr className="horizone_line " />
                    </div>
                    {/* <div className="skills_added d-flex flex-column text-left pl-3" style={{ "textAlign": "left" }}>
              <div className="my-2">
                <h3>Entertainment</h3>
                <div className="box_1">{hobbies.entertainment.split(",").join(" | ")}</div>
              </div>
              <div className="my-2">
                <h3>Music</h3>
                <div className="box_1">{hobbies.music.split(",").join(" | ")}</div>
              </div>
              <div className="my-2">
                <h3span>Sports</h3span>
                <div className="box_1">{hobbies.sports.split(",").join(" | ")}</div>
              </div>
              <div className="my-2">
                <h3>Leisure</h3>
                <div className="box_1">{hobbies.leisure.split(",").join(" | ")}</div>
              </div>
              <div className="my-2">
                <h3>Adventure</h3>
                <div className="box_1">{hobbies.adventure.split(",").join(" | ")}</div>
              </div>
              {hobbies.travel !== "" && <div className="my-2">
                <h3>travel</h3>
                <div className="box_1">{hobbies.travel.split(",").join(" | ")}</div>
              </div>}

              {hobbies.books !== "" && <div className="my-2">
                <h3>books</h3>
                <div className="box_1">{hobbies.books.split(",").join(" | ")}</div>
              </div>}

              {hobbies.any_other !== '' && <div className="my-2">
                <h3>Any other</h3>
                <div className="box_1">{hobbies.any_other.split(",").join(" | ")}</div>
              </div>}
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className="pl-3">AWARDS</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added text-left pl-3">
              <h4 className="my-2">Adobe PhotoshopAdobe</h4>
              <h4 className="my-2">IllustratorAdobe</h4>
              <h4 className="my-2">In DesignMicroshop</h4>
              <h4 className="my-2">office</h4>
              <h4 className="my-2">ProgramCSS/HTMLSeo</h4>
            </div>
          </div> */}
                    <div className="col-100 skills mt-5">
                        <div className="skills-head text-left">
                            <h3 className="pl-3">SOCIAL MEDIA</h3>
                            <hr className="horizone_line " />
                        </div>
                        {/* <div className="skills_added d-flex flex-column text-left ml-3 g-2" style={{ "textAlign": "left", "color": "white" }}>
                                {socialLink.facebook !== "" && <a href={socialLink.facebook} style={{ color: 'white' }} className="flex-row-start g-2 align-center">
                                    <Facebook /> {socialLink.facebook}
                                </a>}
                                {socialLink.linkedin !== "" && <a href={socialLink.linkedin} style={{ color: 'white' }} className="flex-row-start g-1 align-center">
                                    <Linkedin /> {socialLink.linkedin}
                                </a>}
                                {socialLink.instagram !== "" && <a href={socialLink.instagram} style={{ color: 'white' }} className="flex-row-start g-1 align-center">
                                    <Instagram /> {socialLink.instagram}
                                </a>}
                                {socialLink.twitter !== "" && <a href={socialLink.twitter} style={{ color: 'white' }} className="flex-row-start g-1 align-center">
                                    <Twitter /> {socialLink.twitter}
                                </a>}

                            </div> */}
                    </div>
                </div>
                <div className="col-70 text-dark">
                    <div className="col-80 control">
                        <div className="profile">
                            <div className="profile_head text-left">
                                <h4>PROFILE</h4>
                                <hr />
                            </div>
                            <div className="profile_bio text-left">
                                <h6>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus incidunt consectetur error numquam necessitatibus, officiis veritatis sapiente et eos omnis nam autem quia perferendis ratione, quam non beatae harum sunt laborum porro voluptatem nisi illum fugiat blanditiis! Perferendis quos voluptate nostrum. Quia repellat aliquid, et magnam distinctio voluptatum dignissimos id sed quo molestias quaerat. Necessitatibus et voluptatibus omnis? Consectetur, quisquam!
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-80 control">
                        <div className="profile">
                            <div className="profile_head text-left">
                                <h4>WORK EXPERIENCE</h4>
                                <hr />
                            </div>
                            

                        </div>
                    </div>

                    <div className="col-90 control">
                        <div className="profile">
                            <div className=" text-left">
                                <h2>SOCIAL WORK</h2>
                                <hr />
                            </div>

                            {/* <div className="text-left  ">
                                <div className="d-flex justify-around">

                                    <div className="to_present d-flex align-center justify-between">To Present</div>
                                    <div className="d-flex flex-column">
                                        {socialContribution && socialContribution.map((contri) => {
                                            return <div className="social_info">
                                                <p>{moment(contri.to_duration, "dd-mm-yyyy").format("YYYY")} - {contri.role} - {contri.organization_name}</p>
                                            </div>
                                        })}
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
