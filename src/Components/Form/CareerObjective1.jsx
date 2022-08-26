import React, { useEffect, useState } from 'react'
import DragDropInput from '../DragDropInput/DragDropInput'
import IconInput from '../IconInput/IconInput'
import { ReactComponent as AddCircle } from '../../Assests/icons/add-circle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { nextForm, reload, SelectDocuments, selectNewPhotoMedia, selectResumeError, selectResumeLoading, selectResumeMessage, toggleNewPhotoMedia, uploadPhotomedia } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
import Control from './Control';
export default function CareerObjective1() {
    const [file, setFile] = useState(null)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        title: '',
        description: '',
        file_url: '',
        user_resume_photo_media_id: ''

    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const photoMedia = useSelector(SelectDocuments)
    const newPhotomedia = useSelector(selectNewPhotoMedia)
    const [reloadFlag, setReloadFlag] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        if (file) body.file_path = file

        let form_Data = JsonToFormData(body)
        try {
            dispatch(toggleNewPhotoMedia(true))
            let uploaded = dispatch(uploadPhotomedia({ auth: token, body: form_Data })).unwrap()
            console.log(form, uploaded, "jkasdjf;ajdsfk jl;asdjfl")
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    useEffect(() => {
        console.log(photoMedia, newPhotomedia)
        if (!newPhotomedia && photoMedia && photoMedia.length > 0 && form.user_resume_photo_media_id === "") {
            let lastMedia = photoMedia[photoMedia.length - 1]
            console.log(lastMedia)
            setForm({
                ...form,
                title: lastMedia.title,
                description: lastMedia.description,
                file_url: lastMedia.file_url || '  ',

                user_resume_photo_media_id: lastMedia.user_resume_photo_media_id,

            })
        } else {
            setForm({
                title: '',
                description: '',
                file_url: '',

                user_resume_photo_media_id: ''

            })
        }

        return () => {

        }
    }, [newPhotomedia, photoMedia, loading])
    useEffect(() => {

        if (reloadFlag && !loading) {
            setReloadFlag(false)
            dispatch(reload())
        }
    }, [reloadFlag, loading])
    console.log(message, 'messageeeeeeeeee');
    return (
        <>
            <h1 className='text-left'>
                The world has to know how talented you are. Upload docs, PDFs, Image files, video links, etc. to showcase your portfolio.
            </h1>
            {showAlert && !loading && <Alert error={error} message={error && message ? Object.values(message) : message} />}
            <div className="form-row">
                <IconInput value={form.title} name='title' handleChange={handleChange} label='Title' placeholder='eg Resume' width={100} />
            </div>
            {
                form.file_url.length < 2 &&
                <div className="form-col align-start g-0-5">
                    <label htmlFor="">Upload file</label>
                    <DragDropInput file={file} setFile={setFile} />
                </div>
            }
            {
                !file &&
                <div className="form-row">
                    <IconInput value={form.file_url} name='file_url' handleChange={handleChange} label='Or upload  from a URL' placeholder='Add your video url' width={100} />
                </div>
            }
            <div className="form-row">
                <IconInput value={form.description} name='description' handleChange={handleChange} label='Description' placeholder='' width={100} />
            </div>
            <div className="flex-row-end">
                <button onClick={handleSubmit} className="btn-fit transparent g-0-5"><AddCircle width={30} />Add more</button>
            </div>
            <Control handleSubmit={(e) => {

                handleSubmit(e)
                setReloadFlag(true)
                dispatch(toggleNewPhotoMedia(false))
            }} handleSkip={() => dispatch(nextForm())} />
        </>
    )
}
const JsonToFormData = (json = {}) => {
    var form_data = new FormData();
    for (var key in json) {
        form_data.append(key, json[key]);
    }

    return form_data
}