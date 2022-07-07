import React, { useEffect, useState } from 'react'
import SocialInput from '../IconInput/SocialInput'
import { ReactComponent as Facebook } from '../../Assests/icons/facebook_gray.svg';
import { ReactComponent as Twitter } from '../../Assests/icons/twitter_gray.svg';
import { ReactComponent as Instagram } from '../../Assests/icons/instagram_gray.svg';
import { ReactComponent as Linkedin } from '../../Assests/icons/linkedin_gray.svg';
import { ReactComponent as Add } from '../../Assests/icons/add.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addSocialLinks, selectResumeError, selectResumeLoading, selectResumeMessage, selectSocilaLinks } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import Alert from '../Alert/Alert';
export default function CareerObjective3() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        link_facebook: '',
        link_twitter: '',
        link_instagram: '',
        link_linkedin: '',
        link_other: '',
    })
    const error = useSelector(selectResumeError);
    const message = useSelector(selectResumeMessage);
    const loading = useSelector(selectResumeLoading);
    const [showAlert, setShowAlert] = useState(false);
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const socialLinks = useSelector(selectSocilaLinks)
    function handleChange(evt) {
        const value = evt.target.value;

        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        console.log('submit called')
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
    useEffect(() => {
        console.log('prev data')
        if (socialLinks) {
            setForm({
                ...form,
                link_facebook: socialLinks.facebook,
                link_twitter: socialLinks.twitter,
                link_instagram: socialLinks.instagram,
                link_linkedin: socialLinks.linkedin,
                link_other: socialLinks.link_other,
            })

        }

        return () => {

        }
    }, [socialLinks])

    return (
        <>
            <h1 className='text-left'>
                <span>Voila!</span> Take a moment to clap for yourself a little since you made it this far. Here, share your social media links and move on to the last step.
            </h1>
            {showAlert && !loading && <Alert error={error} message={error ? Object.values(message) : message} />}
            <div className="form-row">
                <SocialInput state={form} name='link_facebook' handleChange={handleChange} label={'Facebook'} icon={<Facebook></Facebook>} handleSubmit={handleSubmit} />
            </div>
            <div className="form-row">
                <SocialInput state={form} name='link_twitter' handleChange={handleChange} label={'Twitter'} icon={<Twitter></Twitter>} handleSubmit={handleSubmit} />
            </div>
            <div className="form-row">
                <SocialInput state={form} name='link_instagram' handleChange={handleChange} label={'Instagram'} icon={<Instagram></Instagram>} handleSubmit={handleSubmit} />
            </div>
            <div className="form-row">
                <SocialInput state={form} name='link_linkedin' handleChange={handleChange} label={'Linkedin'} icon={<Linkedin></Linkedin>} handleSubmit={handleSubmit} />
            </div>
            <div className="flex-row-end g-1">
                <div className="col-30">
                    <button className='btn'>Review</button>
                </div>
                <div className="col-30">
                    <button onClick={handleSubmit} className='btn primary'><Add />Add more</button>
                </div>
            </div>

        </>
    )
}
