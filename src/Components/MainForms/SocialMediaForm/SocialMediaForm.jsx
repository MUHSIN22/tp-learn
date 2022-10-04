import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { selectAuthToken, selectUser_id } from '../../../redux/Features/AuthenticationSlice';
import { addSocialLinks, selectSocilaLinks, setReloadDecider } from '../../../redux/Features/ResumeSlice';
import FormController from '../../../Util Components/FormController/FormController';
import PlainInput from '../../../Util Components/Inputs/PlainInput/PlainInput';
import SelfDeclaration from '../../CV/SelfDeclaration';
import './SocialMediaForm.css'

let titles = {
    link_facebook: "Facebook",
    link_instagram: "Instagram",
    link_twitter: "Twitter",
    link_linkedin: "Linkedin"
}

export default function SocialMediaForm() {
    const [form, setForm] = useState({ link_facebook: "", link_instagram: "", link_twitter: "", link_linkedin: "", preferred_mode: "Office" })
    const [isChecked, setChecked] = useState(false)
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const navigate = useNavigate()
    const socialLinks = useSelector(selectSocilaLinks);

    const handleInputChange = (event) => {
        console.log(event);
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    const handleSubmit = async () => {
        let body = form;
        body.self_declaration = isChecked ? 1 : 0;
        body.user_id = user_id;

        if(!isChecked){
            toast.error("Please tick the self declaration!")
            return false;
        }
        
        dispatch(setReloadDecider(true));
        await dispatch(addSocialLinks({auth:token,body}))
        navigate('/dashboard/cv');
        
    }

    useEffect(() => {
        console.log(socialLinks,'this is social links');
        if(socialLinks){
            setForm({
                link_facebook: socialLinks.facebook,
                link_instagram: socialLinks.instagram,
                link_linkedin: socialLinks.linkedin,
                link_twitter: socialLinks.twitter
            });
            setChecked(socialLinks.self_declaration === 1 ? true: false)
        }
    },[socialLinks]) 

    // const isValidLink = async () => {
    //     var url;
    //     let status = [];
    //     for (let i = 0; i < 4; i++) {
    //         console.log(status);
    //         try {
    //             url = new URL(Object.values(form)[i]);
    //             console.log(url);
    //             status[i] = url.protocol === "http:" || url.protocol === "https:";
    //             console.log(status);
    //         } catch (_) {
    //             status[i] = false;
    //         }
    //     }
    //     return status;
    // }
    return (
        <div className="main-form-wrapper">
            <h2 className="form-title">Add your social media links</h2>
            <PlainInput type="text" value={form.link_linkedin} name='link_linkedin' isIconLabel labelIcon={<BsFacebook />} handleChange={handleInputChange} label={"Linkedin"} placeholder='Link to your linkedin account' />
            <PlainInput type="text" value={form.link_twitter} name='link_twitter' isIconLabel labelIcon={<BsFacebook />} handleChange={handleInputChange} label={"Twitter"} placeholder='Link to your twitter account' />
            <PlainInput type="text" value={form.link_instagram} name='link_instagram' isIconLabel labelIcon={<BsFacebook />} handleChange={handleInputChange} label={"Instagram"} placeholder='Link to your instagram account' />
            <PlainInput type="text" value={form.link_facebook} name='link_facebook' isIconLabel labelIcon={<BsFacebook />} handleChange={handleInputChange} label={"Facebook"} placeholder='Link to your facebook account' />
            <PlainInput type="text" value={form.link_other} name='link_other' isIconLabel labelIcon={<BsFacebook />} handleChange={handleInputChange} label={"Any other"} placeholder='Comma separated links' />
            <div className="declaration-wrapper">
                <h4>Preffered Work mode</h4>
                <div className="work-modes-wrapper">
                    <label htmlFor="office">
                        <input type="radio" checked={form.preferred_mode === "Office"} name='work_mode' id='office' onChange={e=> setForm({...form,preferred_mode: e.target.value})}  value="Office" />
                        <span>Office</span>
                    </label>
                    <label htmlFor="remote">
                        <input type="radio" checked={form.preferred_mode === "Remote"} name='work_mode' id='remote' onChange={e=> setForm({...form,preferred_mode: e.target.value})} value="Remote" />
                        <span>Remote</span>
                    </label>
                    <label htmlFor="hybrid">
                        <input type="radio" checked={form.preferred_mode === "Hybrid"} name='work_mode' id='hybrid' onChange={e=> setForm({...form,preferred_mode: e.target.value})} value="Hybrid" />
                        <span>Hybrid</span>
                    </label>
                </div>
            </div>
            <div className="declaration-wrapper">
                <h4>Self Declaration</h4>
                <label className="control control-checkbox">
                I hereby declare that the above particulars of facts and information stated are true, correct and complete to the best of my belief and knowledge.
                    <input type="checkbox" value={isChecked} checked={isChecked} onChange={event => setChecked(event.target.checked)} />
                    <div className="control_indicator"></div>
                </label>
            </div>
            <FormController handleSubmit={handleSubmit} isSkip={isChecked? 1 : -1} isFormEnd />
        </div>
    )
}
