import React from "react";
import Logo from "../../../Assests/logo.svg";
import bannerMain from "../../../Assests/Svgs/FinalSVGFile.svg";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="nav">
          <input type="checkbox" id="nav-check" />
          <div className="nav-header">
            <div className="nav-title">
              <img src={Logo}/>
            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div className="nav-links">
            <a href="//github.io/jo_geek" target="_blank">
              LOGIN
            </a>
            <a href="http://stackoverflow.com/users/4084003/" target="_blank">
              SigNUP
            </a>
          </div>
        </div>
      </div>

      <section className="banner ">
        <div className="">
          <div className="row banner_txt d-flex justify-around px-5">
            <div className="banner_sec_1">
              <span className="banner_text ">Build a Data-Driven</span>
              <span className="banner_text intligent">Intelligent Resume,</span>
              <span className="banner_text ">in 11 Minutes </span>
              <button className="Build_resume">Build My Resume</button>
            </div>
            <div className="banner_sec_2">
              <img className="banner_sec_2_img" src={bannerMain} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
