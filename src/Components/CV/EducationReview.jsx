import React from "react";
import UdemyLogo from "../../Assets/Dashboard icons/education.png";
import { useSelector, useDispatch } from "react-redux";
import {
  selectEducation,
  selectResumeLoading,
  changeEditPageDetails,
  selectToEdit,
  deleteEducation,
  selectResumeDetails,
} from "../../redux/Features/ResumeSlice";
import EducationLoader from "../Loaders/EducationLoader";
import { FaPencilAlt } from "react-icons/fa";
import { selectUniversityList } from "../../redux/Features/MasterSlice";
import { saveAs } from "file-saver";
import { FiDownload } from "react-icons/fi";
import moment from "moment";
import { AiFillDelete } from "react-icons/ai";
import { selectAuthToken, selectUser_id } from "../../redux/Features/AuthenticationSlice";
export default function EducationReview() {
  const education = useSelector(selectEducation);
  const details = useSelector(selectResumeDetails)
  const loading = useSelector(selectResumeLoading);
  console.log(education,'this is eductaion',details);
  return (
    <>
      {
        education &&
        <div className="section_2 my-2 col-100 align-center">
          <div className="col-90">
            <h1 className="text-left">Education</h1>
            <span className="divider"></span>
            <div className="flex-row-between">
              <div className="col-100 g-1">
                {education && education.length > 0 ? (
                  education.map((edu, i) => (
                    <EducationCard
                      skills={["HTML", "CSS", "JAVA"]}
                      {...edu}
                      key={i}
                    />
                  ))
                ) : (
                  <EducationLoader />
                )}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
function EducationCard({
  education_record_id,
  degree_id,
  degree_name,
  university_id,
  university_name,
  collage_id,
  collage_name,
  location,
  course_start_date,
  course_end_date,
  course_cgpa,
  course_extra_activity,
  course_project_info,
  upload_degree,
  upload_degree_file_type,
  skills,
}) {
  console.log(course_start_date);
  const dispatch = useDispatch();
  const toEdit = useSelector(selectToEdit);
  const user_id = useSelector(selectUser_id)
  const token = useSelector(selectAuthToken);
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  const universityList = useSelector(selectUniversityList);
  const saveFile = (fileUrl) => {
    const fileName = fileUrl.split("/")[0];
    saveAs(fileUrl, fileName);
  };

  const handleDeleteEducation = (data) => {
    let confirm = window.confirm('Are you sure to delete?')
    if(confirm){
      dispatch(deleteEducation({auth: token, body: data, dispatch}))
    }
  }

  return (
    <div className="education-review-grid flex-row-start g-2">
      <img src={UdemyLogo} alt="" />
      <div className="col-100 align-start justify-start">
        <div>
          <h5 className="text-left">{degree_name}
            {toEdit && (
              <>
                <span
                  onClick={() =>
                    handleEditForms({
                      progress: 9,
                      education_record_id,
                      degree_id,
                      degree_name,
                      university_id,
                      university_name,
                      collage_id,
                      collage_name,
                      location,
                      course_start_date,
                      course_end_date,
                      course_cgpa,
                      course_extra_activity,
                      course_project_info,
                      upload_degree,
                      upload_degree_file_type,
                      skills,
                    })
                  }
                  style={{ paddingLeft: "1rem" }}
                >
                  <FaPencilAlt />
                </span>
                <span
                  onClick={() =>
                    handleDeleteEducation({
                      education_record_id,
                      user_id
                    })
                  }
                  style={{ paddingLeft: "1rem" }}
                >
                  <AiFillDelete />
                </span>
              </>
            )}
          </h5>
        </div>
        <div className="flex-row-start mt-0-5" >
          <p>{university_name}</p>

          <span className="gradientDivider-v"></span>
          <p>{moment(course_start_date, "DD-MM-YYYY").format("yyyy MMM")} to {moment(course_end_date, "DD-MM-YYYY").format("yyyy MMM")}</p>
        </div>
        {/* <div className="flex-row-start g-0-5">
          {skills.map((skill, i) => (
            <div key={i} className="skill">
              {skill}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
function TimeDiff(date1, date2) {
  let year = parseInt(date1.split("-")[2]) - parseInt(date2.split("-")[2]);
  let month = parseInt(date1.split("-")[1]) - parseInt(date2.split("-")[1]);
  let days = parseInt(date1.split("-")[0]) - parseInt(date2.split("-")[0]);

  if (year < 1) {
    if (month < 1) {
      return days + " days";
    } else {
      return month + " month";
    }
  } else {
    return year + " years";
  }
}
