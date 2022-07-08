import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assests/logo.svg";
import bannerMain from "../../../Assests/Svgs/FinalSVGFile.svg";

const Navbar = () => {
  return (
    <>
      <div>
        <div className="container">
          <nav className="navbar d-flex justify-between">
            <a className="navbar-brand mb-3" href="#">
              <img className="logo_img" src={Logo} />
            </a>

            <div
              className="collapse navbar-collapse navbtn"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-flex justify-between ">
                <li className="nav-item ">
                  <Link to="/login" className="button_slide nav-link slide_right login_nav_btn">
                    Login{" "}
                  </Link>
                  <br /> <br />
                  <br />
                </li>
                <li className="nav-item ">
                  <Link to='/signup' className="button_slide nav-link slide_right create_new_btn">
                    Create a new Account
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <section className="banner ">
        <div className="container ">
          <div className="row banner_txt d-flex justify-between">
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
