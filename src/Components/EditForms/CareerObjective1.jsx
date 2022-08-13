import React, { useEffect, useState } from "react";
import DragDropInput from "../DragDropInput/DragDropInput";
import IconInput from "../IconInput/IconInput";
import { ReactComponent as AddCircle } from "../../Assests/icons/add-circle.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  nextForm,
  reload,
  selectResumeError,
  selectResumeLoading,
  selectResumeMessage,
  uploadPhotomedia,
} from "../../redux/Features/ResumeSlice";
import {
  selectAuthToken,
  selectUser_id,
} from "../../redux/Features/AuthenticationSlice";
import Alert from "../Alert/Alert";
import Control from "./Control";
export default function CareerObjective1({ data }) {
  const {
    file_url,
    title,
    description,
    user_resume_photo_media_id,
    file_path,
  } = data;
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: title || "",
    description: description || "",
    file_url: file_url || "",
    file_path: null,
    user_resume_photo_media_id: user_resume_photo_media_id || "",
  });
  const error = useSelector(selectResumeError);
  const message = useSelector(selectResumeMessage);
  const loading = useSelector(selectResumeLoading);
  const [showAlert, setShowAlert] = useState(false);
  const token = useSelector(selectAuthToken);
  const user_id = useSelector(selectUser_id);
  const handleSubmit = (e) => {
    e.preventDefault();
    let body = form;
    body.user_id = user_id;
    body.file_path = file;
    if(body.file_path == null && body.file_url=='') {
        delete body.file_path;
        delete body.file_url;
      }
    else if (body.file_path == null) {
      delete body.file_path;
    }else if(body.file_url==''){
        delete body.file_url
    }
    let form_Data = JsonToFormData(body);
    try {
      dispatch(uploadPhotomedia({ auth: token, body: form_Data, dispatch})).unwrap();
      console.log(form);
    } catch (error) {
      showAlert(true);
    } finally {
      setShowAlert(true);
    }
  };
  function handleChange(evt) {
    const value = evt.target.value;
    console.log(value);
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  }

  return (
    <>
      <h1 className="text-left">
        The world has to know how talented you are. Upload docs, PDFs, Image
        files, video links, etc. to showcase your portfolio.
      </h1>
      {showAlert && !loading && (
        <Alert
          error={error}
          message={error ? "Failed to add Media" : "Media added"}
        />
      )}
      <div className="form-row">
        <IconInput
          name="title"
          handleChange={handleChange}
          label="Title"
          placeholder="eg Resume"
          width={100}
          defaultValue={form.title}
        />
      </div>
      <div className="form-col align-start g-0-5">
        <label htmlFor="">Upload file</label>
        <DragDropInput file={file} setFile={setFile} />
      </div>
      <div className="form-row">
        <IconInput
          name="file_url"
          handleChange={handleChange}
          label="Or upload  from a URL"
          placeholder="Add your video url"
          width={100}
          defaultValue={form.file_url}
        />
      </div>
      <div className="form-row">
        <IconInput
          name="description"
          handleChange={handleChange}
          label="Description"
          placeholder=""
          width={100}
          defaultValue={form.description}
        />
      </div>
      <div className="flex-row-end">
        <button onClick={handleSubmit} className="btn-fit transparent g-0-5">
              <AddCircle width={30} />
              Add more
        </button>
      </div>
      <Control handleSubmit={() => dispatch(reload())} />
    </>
  );
}
const JsonToFormData = (json = {}) => {
  var form_data = new FormData();
  for (var key in json) {
    form_data.append(key, json[key]);
  }

  return form_data;
};
