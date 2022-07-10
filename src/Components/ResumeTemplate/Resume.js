import React,{useEffect, useRef} from "react";
import { FaFileContract } from "react-icons/fa";
import { BiMessageMinus } from "react-icons/bi";
import { BsGenderMale,BsFacebook,BsTwitter ,BsLinkedin} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiComputerLine,RiInstagramFill } from "react-icons/ri";
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
  selectSocialContribution
} from "../../redux/Features/ResumeSlice";
import { selectKeySkills } from '../../redux/Features/GraphSlice'
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from  "jspdf";
const  Resume =({newRef})=>{
  const companyInfo = useSelector(SelectCompanyDetails);
  const profile = useSelector(selectProfilePic);
  const bio = useSelector(selectBio);
  const resumeDetails = useSelector(selectResumeDetails);
  let lastCompany = useSelector(selectLastCompany);
  console.log("=======",lastCompany)
  let lastJob = lastCompany ? lastCompany.job_role[lastCompany.job_role.length -1].designation_name : ""
  let keySkills = useSelector(selectKeySkills);
  const educations = useSelector(selectEducation) || [];
  const certificates = useSelector(selectCertificate) || [];
  const hobbies = useSelector(selectHobbies);
  const socialLink = useSelector(selectSocilaLinks)
  const socialContribution = useSelector(selectSocialContribution);

React.useEffect(() => {
  //  template = document.getElementById('tpcv');
  if(newRef)
 newRef.current = exec
}, [])

// React.useEffect(() => {
//   exec()
// }, [])
 
const exec = () => {
  const template = document.getElementById('tpcv');
  html2canvas(template,{
    useCORS: true, 
    logging: true,
    letterRendering: 1,
    allowTaint: false})
  .then((canvas) => {
    const componentWidth = template.offsetWidth
    const componentHeight = template.offsetHeight
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF(
      "p", "mm", "a4"
    );
    pdf.internal.pageSize.width = componentWidth
    pdf.internal.pageSize.height = componentHeight
    pdf.addImage(imgData, 'JPEG', 0, 0,componentWidth, componentHeight);
    // pdf.output('dataurlnewwindow');
    pdf.save("download.pdf");
    // window.close()
  })
  // window.close()

}



  return (
    <div className="mt-5" id="tpcv" >
      <div className="d-flex">
        <div className="col-30">
          <img className="Profile_resume_img" src={profile} crossOrigin="true" rossOrigin="anonymous"/>
        </div>
        <div className="col-70 Profile_resume_name_sec">
          <h2 className="profileName text-left">{resumeDetails.name}</h2>
          <h2 className="currentDegi text-left">{lastJob}</h2>
        </div>
      </div>

      <div className="d-flex justify-content-between text-light">
        <div className="col-30 bg-dark mx-1">
        <div className="skills-head text-left">
              <h3 className=" ml-3">PERSONAL DETAILS</h3>
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
            <div className="col-70 ml-4" style={{"textAlign":"left"}}>
              <h4 className="mt-2 mb-0">Contractual</h4>

              <h4 className="mt-2 mb-0">{resumeDetails.email}</h4>

              <h4 className="mt-2 mb-0">{resumeDetails.country_code? resumeDetails.country_code + " " + resumeDetails.contact : "+91 "+resumeDetails.contact}</h4>

              <h4 className="mt-2 mb-0">{resumeDetails.city ? resumeDetails.city + "," + resumeDetails.country : resumeDetails.address}</h4>

              <span className="mt-2 mb-0">{resumeDetails.gender_name}</span>
            </div>
          </div>

          <div className="col-100 skills mt-5 ">
            <div className="skills-head text-left">
              <h3 className=" ml-3">SKILLS</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column pl-3 mt-0-5" style={{"textAlign":"left"}}>
              {
                keySkills?.map((skill,i)=>{
                  return <h4 className="my-2 " key={i}>{skill.name}</h4>
                })
              }
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">EDUCATION</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column pl-3" style={{"textAlign":"left"}}>
            {
                educations?.map((edu,i)=>{
                  return <h4 className="my-2" key={i}>{moment(edu.course_end_date,"dd-mm-yyyy").format("YYYY")} {edu.degree_name} {edu.university_name} / {edu.collage_name}</h4>
                })
              }
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">CERTIFICATION</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column pl-3" style={{"textAlign":"left"}}>
            {
                certificates?.map((certi,i)=>{
                  return <h4 className="my-2" key={i}>{moment(certi.certificate_end_date,"dd-mm-yyyy").format("YYYY")} {certi.project_name} {certi.institute_name}</h4>
                })
              }
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">HOBBIES</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left pl-3" style={{"textAlign":"left"}}>
              <div className="my-2">
                <h3>Entertainment</h3>
                <div className="box_1">{hobbies.entertainment.split(",").join("|")}</div>
              </div>
              <div className="my-2">
                <h3>Music</h3>
                <div className="box_1">{hobbies.music.split(",").join("|")}</div>
              </div>
              <div className="my-2">
                <h3span>Sports</h3span>
                <div className="box_1">{hobbies.sports.split(",").join("|")}</div>
              </div>
              <div className="my-2">
                <h3>Leisure</h3>
                <div className="box_1">{hobbies.leisure.split(",").join("|")}</div>
              </div>
              <div className="my-2">
                <h3>Adventure</h3>
                <div className="box_1">{hobbies.adventure.split(",").join("|")}</div>
              </div>
              {hobbies.travel!=="" && <div className="my-2">
                <h3>travel</h3>
                <div className="box_1">{hobbies.travel.split(",").join("|")}</div>
              </div>}
              
              {hobbies.books!=="" && <div className="my-2">
                <h3>books</h3>
                <div className="box_1">{hobbies.books.split(",").join("|")}</div>
              </div>}
              
              {hobbies.any_other!=='' && <div className="my-2">
                <h3>Any other</h3>
                <div className="box_1">{hobbies.any_other.split(",").join("|")}</div>
              </div>}
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">AWARDS</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added text-left pl-3">
              <p className="my-2">Adobe PhotoshopAdobe</p>
              <p className="my-2">IllustratorAdobe</p>
              <p className="my-2">In DesignMicroshop</p>
              <p className="my-2">office</p>
              <p className="my-2">ProgramCSS/HTMLSeo</p>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">SOCIAL MEDIA</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3 g-2" style={{"textAlign":"left","color":"white"}}>
            {socialLink.facebook!=="" && <a href={socialLink.facebook} style={{color:'white'}} className="flex-row-start g-2 align-center">
                        <Facebook/> {socialLink.facebook}
                    </a>}
                    {socialLink.linkedin!=="" && <a href={socialLink.linkedin} style={{color:'white'}} className="flex-row-start g-1 align-center">
                        <Linkedin/> {socialLink.linkedin}
                    </a>}      
                    {socialLink.instagram!=="" && <a href={socialLink.instagram} style={{color:'white'}} className="flex-row-start g-1 align-center">
                        <Instagram/> {socialLink.instagram}
                    </a>}
                    {socialLink.twitter!=="" && <a href={socialLink.twitter} style={{color:'white'}} className="flex-row-start g-1 align-center">
                        <Twitter/> {socialLink.twitter}
                    </a>}       
                    
            </div>
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
                {parser(bio)}
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
              {companyInfo && companyInfo.map((company)=>{
                return <div className="profile_bio text-left d-flex justify-around">
                <div className="grid_1 col-30">
                  <div className="grid_1_head">
                    <h4 className="companyDetails">{company.company_name}</h4>
                    <div>
                      <div className="flex-row-fit align-center g-1">
                      <Device /> <p>{company.industry_name}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <Chart /> <p>{company.scale_name}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <Location /> <p>{company.job_role && company.job_role.length>0 ? company.job_role[0].job_location : ''}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <Calendar /> <p>{StartEndDate(company.job_role)}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <Clock /> <p>{company.nature_of_job_name}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <BarGraph /> <p>{company.job_level_name}</p>
                      </div>
                      <div className="flex-row-fit align-center g-1">
                      <Human /> <p>{company.function_area_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {company && company.job_role.map((job)=>{
                   return <div className="grid_1 col-70 ">
                   <div className="grid_1_head d-flex justify-around">
                     <h3 className="companyDetails">{job.designation_name}</h3>
                     <h3 className="companyDetails text-center">{job.job_start_date} To {job.job_end_date}</h3>
                   </div>
                   <div className="d-flex justify-around">
                     <div className="col-50 roles_respResume"><p>{job.role_responsibilties}</p></div>
                     <div className="col-50 ">
                     <div className="skills d-flex justify-aroundx pl-1">
                        <div className="col-100">
                          <h4 className="skills">SKILLS USED</h4>
                        </div>
                        <div className="col-100 complexity">
                          <h4 >EXPERTISE</h4>
                        </div>
                     </div>
                     {job.skills.map((skill)=>{
                         return  <div className="skills d-flex justify-aroundx pl-1">
                         <div className="col-100">
                           <p className="skills">{skill.skill_name}</p>
                         </div>
                         <div className="col-100 complexity">
                           <p>{skill.skill_complexity + "/" + "100"}</p>
                         </div>
                      </div>
                         })}
                     </div>
                   </div>
                   <div className="mt-5">
                    {job.project && <h2>Projects</h2>}
                    {job.project && job.project.map((proj)=>{
                      return <>
                      <h3>{proj.project_name}</h3>
                     <div className=" ">
                       <div className="skills mx-1 d-flex">
                         <div className="main_head_skills">
                           <h4>ClientName - {proj.client_name}</h4>
                         </div>
                         {/* <div className="d-flex flex-column">
                           <span className="nameClient_skill">skills</span>
                           <span className="nameClient_skill mt-2">skills</span>
                           <textarea className="nameClient_skill mt-2"></textarea>
                         </div> */}
                       </div>
                       {/* <div className="skills mx-1 d-flex">
                         <div className="main_head_skills">
                           <span>NameClient</span>
                         </div>
                         <div className="d-flex flex-column">
                           <span className="nameClient_skill">skills</span>
                           <span className="nameClient_skill mt-2">skills</span>
                           <textarea className="nameClient_skill mt-2"></textarea>
                         </div>
                       </div> */}
                       <div className="skills mx-1 mt-5 g-2">
                         <div className="main_head_skills d-flex justify-between">
                           <div className="d-flex justify-between ">
                                SKILLS USED
                           </div>
                         </div>
                         <div className="d-flex justify-between">
                           <div>Skills</div>
                           <div>Complexity </div>
                           <div>Outcome</div>
                           </div>
                           {proj.project_skill && proj.project_skill.map((projSkill)=>{
                              return  <div className="d-flex justify-between">
                              <div className="col-45">{projSkill.skill_name}</div>
                              <div className="col-10">{projSkill.skill_complexity + "/" + 10} </div>
                              <div className="col-40">{projSkill.skill_desc}</div>
                              </div>
                           })}
                       </div>
                     </div>
                      </>
                    })}
                     
                   </div>
                 </div>
                })}

                {/* <div className="grid_2 d-flex justify-between">
                  <div className="mr-3 mt-1">
                    <h4>JOB ROLE DESIGNATION</h4>
                    <div>ROLES & RESPONSIBILITY01</div>
                    <div>PROJECTS</div>
                  </div>
                  <div>
                    <h4>Date to Date </h4>
                    <div className="">
                      <div className="d-flex justify-between mt-2">
                        <span>SKILLS USED</span>
                        <span>EXPERTISE</span>
                      </div>
                      <div className="d-flex justify-between mt-2">
                        <span>SKILLS USED</span>
                        <span>EXPERTISE</span>
                      </div>
                      <div className="d-flex justify-between mt-2">
                        <span>SKILLS USED</span>
                        <span>EXPERTISE</span>
                      </div>
                      <div className="d-flex justify-between mt-2">
                        <span>SKILLS USED</span>
                        <span>EXPERTISE</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="grid_3"></div>
              </div>
              })}
              
            </div>
          </div>

          <div className="col-90 control">
            <div className="profile">
              <div className=" text-left">
                <h2>SOCIAL WORK</h2>
                <hr />
              </div>
            
                <div className="text-left  ">
                <div className="d-flex justify-around">

                  <div className="to_present d-flex align-center justify-between">To Present</div>
                  <div className="d-flex flex-column">
                  {socialContribution && socialContribution.map((contri)=>{
                        return <div className="social_info">
                         <p>{moment(contri.to_duration,"dd-mm-yyyy").format("YYYY")} - {contri.role} - {contri.organization_name}</p>
                       </div>
                  })} 
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartEndDate(jobs = []) {
  let start = jobs[0] && jobs[0].job_start_date;
  let end = jobs[jobs.length - 1] && jobs[jobs.length - 1].job_end_date;

  return `${start || "unknown"}-${end || "unknown"}`;
}


export default Resume;
