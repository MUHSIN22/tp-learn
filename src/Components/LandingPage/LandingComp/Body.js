import React from "react";
import img_sec from "../../../Assests/new_imgs/images.jpeg";
import "react-html5video/dist/styles.css";
import { DefaultPlayer as Video } from "react-html5video";
import footerimg from "../../../Assests/new_imgs/Screenshot from 2022-06-28 02-57-01.png";
import point from "../../../Assests/Svgs/point.svg";
import img_sec3_1 from "../../../Assests/new_imgs/section_3_img_1.svg";
import img_sec4 from "../../../Assests/Svgs/section_4.svg";
import { Slideshow } from "./Slideshow";
import bannerMain from "../../../Assests/Svgs/FinalSVGFile.svg";

const Body = () => {
  return (
    <>
      <div className="col-12">
        <div className="row py-5 m-0 sec_1">
          <div className="col-md-6 mt-5 ">
            <div className="">
              <img className="section_1_img" src={img_sec} />
            </div>
          </div>
          <div className="col-sm-6 col-md-12 common_in_section Section_1_left">
            <h2>Wow recruiters and get more interview calls</h2>
            <div className="">
              <span>
                Just fill in your current designation and our AI-engine will
                fetch a convincing description and roles & responsibilities
                fitting your profile, along with useful insights for your
                career.
              </span>
            </div>

            <div>
              <div class="">
                <ul class="custom-2">
                  <li>
                    Visually appealing resume with graphical representation of
                    your career progression
                  </li>
                  <li>
                    ATS-friendly resume builder to get past the tracking systems
                    of top companies
                  </li>
                  <li>
                    Suggested resume templates designed by a team of HR experts
                  </li>
                  <li>
                    Get data-driven insights on how to advance on your career
                    ladder.
                  </li>
                  <li>
                    Easily downloadable and shareable resume format you can use
                    to apply for jobs and feature on LinkedIn.
                  </li>
                </ul>
              </div>
            </div>
            <button class="Build_resume">Build My Resume</button>
          </div>
        </div>
        <div className="row section_2">
          <div className="col-sm-6 col-md-12 common_in_section section_2_left">
            <h1>
              Skill And Industry <br />
              Focused Resume
            </h1>
            <span className="">
              Instead of using vague and non-measurable terms like <br />{" "}
              proficient, highly-skilled, result-driven, etc, we feature <br />
              your best skills and your level of expertise in each of <br />
              those. This will help you match with best suited job roles <br />
              and increase your chances of getting an interview.
            </span>
          </div>
          <div className="col-sm-6">
            {/* <div className="Section_2_left circle">
              <img className="section_img_2" src={img_sec} />
            </div> */}
            {/* <div id="circle_container">
              <div id="circle">
              <img className="section_img_2" src={img_sec} />
              </div>
            </div> */}
          </div>
        </div>

        <div className="row py-5 section_3">
          <div className="col-sm-6">
            <div className="section_3_imgsec">
              <img className="section_img_3" src={img_sec3_1} />
            </div>
          </div>
          <div className="col-sm-6 col-md-12 section_3_right common_in_section">
            <h1>
              Increase Credibility <br />
              Through Assessment
              <br className="line_after_increase" />
              Badges
            </h1>
            <span className="Section_3_right_part2">
              Proven skills serve as a point of differentiation. Stand <br />
              out from competition and let hiring managers verify your <br />
              skills through skill badges. Take free assessment tests
              <br /> and show off your score on your dynamic resume
              <br /> to increase your chances of getting hired.
            </span>
          </div>
        </div>
        <div className="row my-5 section_4">
          <div className="col-sm-6 col-md-12 section_4_left common_in_section">
            <h1>
              Analytics That <br />
              Measure Your Growth
            </h1>
            <span>
              Visually present your growth trajectory in the same <br /> company
              (promotions & appraisals). Back up your <br /> achievements with
              numbers. Your important metrics like <br />
              sales numbers, customer satisfaction ratings, or tickets <br />
              completed will be highlighted in your dynamic resume to
              <br /> let employers know you mean business.
            </span>
          </div>

          <div className="col-sm-6 ">
            <div className="img_sec_4">
              <img className="img_sction_4" src={img_sec4} />
            </div>
          </div>
        </div>

        <div className="row py-5 section_5">
          <div className="col-6 col-sm-6 col-md-12 section_5_video">
            <div className="secction_5_right">
              <Video
                autoPlay
                loop
                muted
                controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
                poster="http://sourceposter.jpg"
                onCanPlayThrough={() => {
                  // Do stuff
                }}
              >
                <source
                  src="https://www.youtube.com/watch?v=kfTG-nnlZKQ&ab_channel=NeelkamalSinghOfficial"
                  type="video/webm"
                />
                <track
                  label="English"
                  kind="subtitles"
                  srcLang="en"
                  src=""
                  default
                />
              </Video>
            </div>
          </div>

          <div className="col-sm-6 col-md-12 col-6 Section_5_left">
            <h1>What Top HR LeadersHave To Say</h1>
            <span className="mb-4">
              Let's hear it from the experts who know it the best. Top hiring
              experts share their views on the best resumes they have seen, tips
              to craft a hireable resume, what makes them tick a candidate,
              along with meaningful career advice on getting hired by top
              companies.
            </span>
            <hr className="line_break" />

            <div className="row d-flex flex-column">
              <div className="col-12 d-flex justify-content-between">
                <div className="dot_text">
                  <span className="dot"></span>
                  <span>Amazon</span>
                </div>
                <div className="dot_text">
                  <span className="dot"></span>
                  <span>Cisco</span>
                </div>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <div className="dot_text">
                  <span className="dot"></span>
                  <span>United Health Group</span>
                </div>
                <div className="dot_text">
                  <span className="dot"></span>
                  <span>Accenture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-5 section_6">
          <div className="col-sm-6 col-md-12 col-6 section_6_right">
            <span className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              iusto sunt quam consequatur iure adipisci quis earum tempore
              itaque dignissimos, quo aperiam corporis ducimus quasi quas. Ipsa
              ab quae eos!
            </span>
            <div className="d-flex flex-column align-items-center mt-3">
              <h4 className="text-bold sec_6_info_name">Rohit</h4>
              <p className="sec_6_info">Software Engineer</p>
              <p className="sec_6_info">Tech jain </p>
            </div>
            <div></div>
          </div>

          <div className="col-sm-6 col-md-12 col-6">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={bannerMain} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={bannerMain} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={bannerMain} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row py-5 section_7">
          <div className="col-12 section_7_main">
            <div className="section_7_Head">
              <h1>
                Pick a Resume template <br /> make it more you
              </h1>
              <div className="resume_text">
                <span>
                  Here's a million design combinations. Do what you want.
                  Whether you're a nurse or engineer, your resume will always
                  stand out.
                </span>
              </div>
            </div>
            <div className="sec_7_Head">
              <Slideshow />
            </div>
          </div>
        </div>

        <div className="row py-5 section_3">
          <div className="col-sm-6 col-md-12 col-6">
            <div className="section_3_imgsec">
              <img className="section_img_3" src={bannerMain} />
            </div>
          </div>
          <div className="col-sm-6 col-md-12 col-6 d-flex flex-column section_3_right common_in_section section_8_right">
            <h1>Let your resume do the work.</h1>
            <span className="Section_3_right_part2">
              Join 1,300,000 job seekers worldwide and get hired faster with
              your best resume yet.
            </span>
            <button class="Build_resume">Build My Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
