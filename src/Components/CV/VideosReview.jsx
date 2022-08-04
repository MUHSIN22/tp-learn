import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import VideoIcon from "../../Assests/play-circle.png";
import {
  selectVideo,
  selectToEdit,
  changeToEdit,
  changeEditPageDetails,
} from "../../redux/Features/ResumeSlice";
import FileLoaderHorizontal from "../Loaders/FileLoaderHorizontal";
import { FaPencilAlt } from "react-icons/fa";
export default function VideosReview() {
  const video = useSelector(selectVideo);
  return (
    <>
      {
        video &&
        <div className="docs section_2 col-100 align-center">
          <div className="col-90 py-1">
            <h3>Video files </h3>
            <span className="divider"></span>
            <div className="flex-row-start g-5 docFilesDiv">
              {video && video.length > 0 ? (
                <div className="g-1  ">
                  <FileCard
                    url={video}
                    filename={"Talent Place - CV Builder.Mp4"}
                    icon={VideoIcon}
                  />
                </div>
              ) : (
                <FileLoaderHorizontal />
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
}
function FileCard({ url, filename, icon }) {
    const dispatch = useDispatch();
    const toEdit = useSelector(selectToEdit);
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  let download = false;
  if(!toEdit){
        download=true
  }
  return (
    <a href={url} className="card flex-row-start g-1" download={download}>
      <img src={icon} alt={filename} />

      <div className="col-fit g-1">
        <h4>{filename} {toEdit && (
            <span
              onClick={() => handleEditForms({ progress: 16,url})}
              style={{ marginLeft: "0.5rem" }}
            >
              <FaPencilAlt />
            </span>
          )}</h4>
        <p>Integrate with Talent Place</p>
      </div>
    </a>
  );
}
