import React from "react";
import UdemyLogo from "../../Assests/udemy.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  selectEducation,
  selectResumeLoading,
  changeEditPageDetails,
  selectToEdit,
} from "../../redux/Features/ResumeSlice";
import EducationLoader from "../Loaders/EducationLoader";
import { FaPencilAlt } from "react-icons/fa";
import { selectUniversityList} from '../../redux/Features/MasterSlice';
import { saveAs } from "file-saver";
import { FiDownload } from "react-icons/fi";
export default function EducationReview() {
  const education = useSelector(selectEducation);
  const loading = useSelector(selectResumeLoading);
  return (
    <div className="section_2 my-2 col-100 align-center">
      <div className="col-90">
        <h3 className="text-left">Education</h3>
        <span className="divider"></span>
        <div className="flex-row-between">
          <div className="col-100 g-1">
            {education && education.length > 0 ? (
              education.map((edu, i) => (
                <EducationCard skills={["HTML", "CSS", "JAVA"]} {...edu} key={i}/>
              ))
            ) : (
              <EducationLoader />
            )}
          </div>
        </div>
      </div>
    </div>
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
  skills
}) {
  console.log(course_start_date);
  const dispatch = useDispatch();
  const toEdit = useSelector(selectToEdit);
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  const universityList = useSelector(selectUniversityList);
  const saveFile = (fileUrl) => {
    const fileName = fileUrl.split('/')[0]
    saveAs(
      fileUrl,
      fileName
    );
  };

  return (
    <div className="education-gri flex-row-start g-2">
      <div className="col-40">
      <img src={upload_degree} alt="" className="eduImage"/>
      </div>
      <div className="col-40 align-start justify-between">
        <div >
          <h5 className="text-left">
            {degree_name}{" "}
            {toEdit && (
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
                    skills
                  })
                }
                style={{ "paddingLeft": "1rem" }}
              >
                <FaPencilAlt />
              </span>
            )}
          </h5>
          <div className="flex-row-start mt-0-5">
            <p>{university_name}</p>

            <span className="gradientDivider-v"></span>
            <p>{TimeDiff(course_end_date, course_start_date)}</p>
          </div>
        </div>

        <div className="flex-row-start g-0-5 mb-0">
          {skills.map((skill, i) => (
            <div key={i} className="edu-skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="col-20 align-center justify-center" style={{"position":"relative"}}>
        <div className="downloadBoxes">
        <FiDownload onClick={()=>{saveFile(upload_degree)}}/>
        </div>
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
