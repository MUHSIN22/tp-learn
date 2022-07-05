import React from "react";
import Logo from "../../../Assests/logo.svg";
import bannerMain from "../../../Assests/Svgs/FinalSVGFile.svg";

const Navbar = () => {
  return (
    <>
    <div>
       <div className="container">
        {/* <nav className="navbar navbar-expand-lg d-flex justify-content-around">
          <a className="navbar-brand mb-3" href="#">
            <img className="logo_img" src={Logo} />
          </a>

          <div
            className="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto d-flex justify-content-between">
              <li className="nav-item  mr-5 mt-1">
                <button className="button_slide nav-link slide_right login_nav_btn">
                  Login{" "}
                </button>
                <br /> <br />
                <br />
              </li>
              <li className="nav-item ml-5 mt-1">
                <button className="button_slide nav-link slide_right create_new_btn">
                  Create a new Account
                </button>
              </li>
            </ul>
          </div>
        </nav> */}


        
{/* <!-- example 6 - center on mobile --> */}
<nav className="navbar navbar-expand-lg navbar-light ">
    <div className="d-flex flex-grow-1">
        
       
        <a className="navbar-brand d-none d-inline-block" href="#">
            <img className="logo_img" src={Logo} alt="logo"/>
        </a>
        <div className="w-100 text-right">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>
    <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
        <ul className="navbar-nav ml-auto flex-nowrap">
        <li className="nav-item  mr-5 mt-1">
                <button className="button_slide nav-link slide_right login_nav_btn">
                  Login{" "}
                </button>
                <br /> <br />
                <br />
              </li>
              <li className="nav-item ml-5 mt-1">
                <button className="button_slide nav-link slide_right create_new_btn">
                  Create a new Account
                </button>
              </li>
        </ul>
    </div>
</nav>



        
        
      </div>
    </div>
     
      <section className="banner ">
        <div className="container ">
          <div className="row banner_txt">
            <div className="col-md-12 col-6 banner_sec_1">
            
              <span className="banner_text ">Build a Data-Driven</span>
              <span className="banner_text intligent">Intelligent Resume,</span>
              <span className="banner_text ">in 11 Minutes </span>
              <button className="Build_resume">Build My Resume</button>
            </div>
            <div className="col-md-12 col-sm-12 col-6 banner_sec_2">
              <img className="banner_sec_2_img" src={bannerMain} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
