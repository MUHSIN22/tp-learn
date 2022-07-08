import React from "react";
import profile from "../../Assests/ResumeImages/Rectangle 53.jpg";
import { FaFileContract } from "react-icons/fa";
import { BiMessageMinus } from "react-icons/bi";
import { BsGenderMale,BsFacebook,BsTwitter ,BsLinkedin} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { RiComputerLine,RiInstagramFill }  from "react-icons/ri";
// RiComputerLine

function Resume() {
  return (
    <div className="mt-5">
      <div className="d-flex  px-5">
        <div className="col-30 ml-3">
          <img className="Profile_resume_img" src={profile} />
        </div>
        <div className="col-70 Profile_resume_name_sec text-left">
          <h1>PRATIKSHA DIXIT</h1>
          <span>Content Creator</span>
        </div>
      </div>

      <div className="d-flex justify-content-between text-light">
        <div className="col-30 bg-dark mx-1 ">
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
            <div className="col-30 text-left ml-4">
              <span className="mt-2">Contractual</span>

              <span className="mt-2 ">Pratksha@abc.com</span>

              <span className="mt-2">+91 986054345</span>

              <span className="mt-2 ">Bangalore, India</span>

              <span className="mt-2">Female</span>
            </div>
          </div>

          <div className="col-100 skills mt-5 ">
            <div className="skills-head text-left">
              <h3 className=" ml-3">Skills</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <span className="my-2">Adobe PhotoshopAdobe</span>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">EDUCATION</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <span className="my-2">Adobe PhotoshopAdobe</span>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">CERTIFICATION</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <span className="my-2">Adobe PhotoshopAdobe</span>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">HOBBIES</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <div className="my-2">
                <span>Adobe</span>
                <div className="box_1"></div>
              </div>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">AWARDS</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <span className="my-2">Adobe PhotoshopAdobe</span>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
          <div className="col-100 skills mt-5">
            <div className="skills-head text-left">
              <h3 className=" ml-3">SOCIAL MEDIA</h3>
              <hr className="horizone_line " />
            </div>
            <div className="skills_added d-flex flex-column text-left ml-3">
              <span className="my-2">Adobe PhotoshopAdobe</span>
              <span className="my-2">IllustratorAdobe</span>
              <span className="my-2">In DesignMicroshop</span>
              <span className="my-2">office</span>
              <span className="my-2">ProgramCSS/HTMLSeo</span>
            </div>
          </div>
        </div>
        <div className="col-70 text-dark">
          <div className="col-80 control">
            <div className="profile">
              <div className="profile_head text-left">
                <h2>PROFILE</h2>
                <hr />
              </div>
              <div className="profile_bio text-left">
                <p>
                  Touching 5 years of experience in digital marketing space in
                  versatile verticals across real estate food, healthcare &
                  textile industries, and Rajasthan Government Brief experience
                  as a solopreneur, extensive background in copywriting,
                  advertising pitches, social media campaigns.
                </p>
              </div>
            </div>
          </div>

          <div className="col-80 control">
            <div className="profile">
              <div className="profile_head text-left">
                <h2>WORK EXPERIENCE</h2>
                <hr />
              </div>
              <div className="profile_bio text-left d-flex justify-around">
                <div className="grid_1 col-30">
                  <div className="grid_1_head">
                    <h2>COMPANY NAME</h2>
                    <div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                      <div className="d-flex">
                        <RiComputerLine />
                        <span className="info">Information Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid_1 col-70 ">
                  <div className="grid_1_head d-flex justify-around">
                    <h2>JOB ROLE DESIGNATION</h2>
                    <h2>DATE To DATE</h2>
                  </div>
                  <div className="d-flex justify-around">
                    <span className="roles_resp">ROLES & RESPONSIBILITY01</span>
                    <div className="d-flex justify-around ">
                      <div className="skills mx-1 d-flex flex-column">
                        <span className="main_head_skills">SKILLS USED</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                      </div>
                      <div className="skills mx-1 d-flex flex-column">
                        <span className="main_head_skills">EXPERTISE</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                        <span className="minor_head_skills">skills</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <span>Project</span>
                    <div className=" ">
                      <div className="skills mx-1 d-flex">
                        <div className="main_head_skills">
                          <span>NameClient</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="nameClient_skill">skills</span>
                          <span className="nameClient_skill mt-2">skills</span>
                          <textarea className="nameClient_skill mt-2"></textarea>
                        </div>
                      </div>
                      <div className="skills mx-1 d-flex">
                        <div className="main_head_skills">
                          <span>NameClient</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="nameClient_skill">skills</span>
                          <span className="nameClient_skill mt-2">skills</span>
                          <textarea className="nameClient_skill mt-2"></textarea>
                        </div>
                      </div>
                      <div className="skills mx-1 mt-5">
                        <div className="main_head_skills d-flex justify-between">
                          <div>Skills</div>
                          <div>Complexity </div>
                          <div>Outcome</div>
                        </div>
                        <div className="d-flex justify-between ">
                          <div className="d-flex flex-column">
                            <span className="nameClient_skill">skills</span>
                            <span className="nameClient_skill mt-2">
                              skills
                            </span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameClient_skill">skills</span>
                            <span className="nameClient_skill mt-2">
                              skills
                            </span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameClient_skill">skills</span>
                            <span className="nameClient_skill mt-2">
                              skills
                            </span>
                          </div>

                          {/* <textarea className="nameClient_skill mt-2"></textarea> */}
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="skills mx-1 d-flex">
                          <div className="main_head_skills">
                            <span>NameClient</span>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="nameClient_skill">skills</span>
                            <span className="nameClient_skill mt-2">
                              skills
                            </span>
                            <textarea className="nameClient_skill mt-2"></textarea>
                          </div>
                        </div>
                        <div className="skills mx-1 mt-5">
                          <div className="main_head_skills d-flex justify-between">
                            <div>Skills</div>
                            <div>Complexity </div>
                            <div>Outcome</div>
                          </div>
                          <div className="d-flex justify-between ">
                            <div className="d-flex flex-column">
                              <span className="nameClient_skill">skills</span>
                              <span className="nameClient_skill mt-2">
                                skills
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="nameClient_skill">skills</span>
                              <span className="nameClient_skill mt-2">
                                skills
                              </span>
                            </div>
                            <div className="d-flex flex-column">
                              <span className="nameClient_skill">skills</span>
                              <span className="nameClient_skill mt-2">
                                skills
                              </span>
                            </div>

                            {/* <textarea className="nameClient_skill mt-2"></textarea> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                    <div className="social_info">
                      <p>2020 - PRESENT ROLE ORGANISATION NAME</p>
                      <div className="box"></div>
                    </div>
                    <div className="social_info">
                      <p>2020 - PRESENT ROLE ORGANISATION NAME</p>
                      <div className="box"></div>
                    </div>
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

export default Resume;
