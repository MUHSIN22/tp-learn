import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PDFIcon from "../../Assests/PDF.png";
import {
  SelectDocuments,
  selectToEdit,
  changeToEdit,
  changeEditPageDetails,
} from "../../redux/Features/ResumeSlice";
import FileLoaderHorizontal from "../Loaders/FileLoaderHorizontal";
import { FaPencilAlt } from "react-icons/fa";
export default function DocsReview() {
  const documents = useSelector(SelectDocuments);
  return (
    <>
      {
        documents[0] &&
        <div className="docs section_2 col-100 align-center">
          <div className="col-90 py-1">
            <h3>Docs files </h3>
            <span className="divider"></span>
            <div className="flex-row-start g-5 docFilesDiv">
              {documents && documents.length > 0 ? (
                <div className="g-1">
                  {documents.map((doc, i) => (
                    <FileCard {...doc} icon={PDFIcon} />
                  ))}
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
function FileCard({ file_url, title, icon, description, user_resume_photo_media_id, file_path }) {
  const dispatch = useDispatch();
  const toEdit = useSelector(selectToEdit);
  const handleEditForms = (data) => {
    dispatch(changeEditPageDetails(data)).unwrap();
  };
  return (
    <a href={file_url || file_path} className="card flex-row-start g-1" download>
      <img src={file_path} alt={title} />

      <div className="col-fit g-1">
        <h4>
          {title}{" "}
          {toEdit && (
            <span
              onClick={() => handleEditForms({ progress: 15, file_url, title, description, user_resume_photo_media_id, file_path })}
              style={{ marginLeft: "0.5rem" }}
            >
              <FaPencilAlt />
            </span>
          )}
        </h4>
        <p>{description}</p>
      </div>
    </a>
  );
}
