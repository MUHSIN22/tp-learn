import React from "react";
import "../Css/style.css";
import Resume1 from "../../../Assests/new_imgs/resume_1.jpeg";

export const Slideshow = () => {
  return (
    <>
      <div className="container-fluid py-2 ">
        <div className="cards d-flex ">
          <div className="card card-body">
            <img className="this_resume" src={Resume1} />
          </div>
          <div className="card card-body">
            <img className="img_slider" src={Resume1} />
          </div>
          <div className="card card-body">
            <img className="img_slider" src={Resume1} />
          </div>
          <div className="card card-body">
            <img className="img_slider" src={Resume1} />
          </div>
          <div className="card card-body">
            <img className="img_slider" src={Resume1} />
          </div>
        </div>
      </div>
    </>
  );
};
