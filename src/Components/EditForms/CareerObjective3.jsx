import React, { useState } from 'react'
import SocialInput from '../IconInput/SocialInput'
import { ReactComponent as Facebook } from '../../Assests/icons/facebook_gray.svg';
import { ReactComponent as Twitter } from '../../Assests/icons/twitter_gray.svg';
import { ReactComponent as Instagram } from '../../Assests/icons/instagram_gray.svg';
import { ReactComponent as Linkedin } from '../../Assests/icons/linkedin_gray.svg';
import { ReactComponent as Add } from '../../Assests/icons/add.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addSocialLinks, selectResumeError, selectResumeLoading, selectResumeMessage } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
export default function CareerObjective3({data}) {
    console.log("=============================================nnkjkff",data)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        link_facebook:data.facebook || '',
        link_twitter:data.twitter || '',
        link_instagram:data.instagram || '',
        link_linkedin:data.linkedin || '',
        link_other:'',
    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    function handleChange(evt) {
        const value = evt.target.value;
        console.log(value)
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let body = form
        body.user_id = user_id
        try {
            dispatch(addSocialLinks({ auth: token, body })).unwrap()
            console.log(form)
        } catch (error) {
            showAlert(true)
        } finally {
            setShowAlert(true)
        }
    }
    return (
        <>
            {showAlert && !loading && <Alert error={error} message={error ? 'Failed to update Social Links' : 'Social Links updated'} />}
            <div className="form-row">
                <SocialInput name='link_facebook'  handleChange={handleChange} label={form.link_facebook!=='' ? form.link_facebook : 'Facebook'} icon={<Facebook></Facebook>}/>
            </div>
            <div className="form-row">
                <SocialInput name='link_twitter'  handleChange={handleChange} label={form.link_twitter!=='' ? form.link_twitter : 'Twitter'} icon={<Twitter></Twitter>}/>
            </div>
            <div className="form-row">
                <SocialInput name='link_instagram' handleChange={handleChange} label={'Instagram'} icon={<Instagram></Instagram>}/>
            </div>
            <div className="form-row">
                <SocialInput name='link_linkedin' handleChange={handleChange} label={'Linkedin'} icon={<Linkedin></Linkedin>}/>
            </div>
            <div className="flex-row-end g-1">
            <div className="col-30">
                <button className='btn'>Review</button>
            </div>
            <div className="col-30">
                <button onClick={handleSubmit} className='btn primary'><Add/>Add more</button>
            </div>
            </div>
            
        </>
    )
}
