import React, { useEffect, useState } from 'react'
import './changepassword.css'
import { ReactComponent as Password } from '../../Assests/icons/lock.svg';
import IconPasswordInput from '../IconInput/IconPasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken, selectAuthLoading, selectAuthMessage, setError, changePassword, selectAutheError, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import isStrongPassword from 'validator/lib/isStrongPassword'
import Alert from '../Alert/Alert';
import Sidebar from '../Sidebar/Sidebar';
import MobileHeader from '../MobileHeader/MobileHeader';
export default function ChangePassword() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        old_password: '',
        new_password: '',
        confirm_password: ''
    });
    const authToken = useSelector(selectAuthToken);
    const message = useSelector(selectAuthMessage);
    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAutheError);
    const user_id = useSelector(selectUser_id)
    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        let body = form;
        body.user_id = user_id;
        if (Validation(form, dispatch)) {
            let encoded = new URLSearchParams(Object.entries(body)).toString()
            try {
                dispatch(changePassword({ auth: authToken, body: encoded })).unwrap()
            } catch (error) {
            } finally {
                dispatch(setError({ noError: ["Password changed successfully"] }))
            }
        }
    }

    return (
        <div className='change-password-container'>
            <MobileHeader />
            <div className="flex-row-start">
                <div className="login col-100 align-center" style={{ backgroundColor: "rgb(228 228 228)" }}>
                    <div className="changePassworDiv container col-40">
                        {message && !loading && <Alert error={error} message={error ? (Object.values(message)[0][0] ? Object.values(message)[0] : Object.values(message)[1]) : message} />}

                        <form autocomplete="off">
                            <h1>Change Password</h1>
                            <div className="form-row">
                                <IconPasswordInput icon={<Password />} handleChange={handleChange} name="old_password" label="Old Password" placeholder="Enter your password" width={95} validation={message && message.old_password} />
                            </div>
                            <div className="form-row">
                                <IconPasswordInput icon={<Password />} handleChange={handleChange} name="new_password" label="Password" placeholder="Enter your password" width={95} validation={message && message.new_password} />
                            </div>
                            <div className="form-row">
                                <IconPasswordInput icon={<Password />} handleChange={handleChange} name="confirm_password" label="Confirm Password" placeholder="Re enter your password" width={95} validation={message && message.confirm_password} />
                            </div>
                            <div className="form-row">
                                <button onClick={handleSubmit} className='btn primary'>{'Save'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Validation(form, dispatch) {
    let flag = true;
    let errorList = {
        "new_password": [],
        "confirm_password": [],
        "old_password": []

    }
    if (form.old_password == '') {
        errorList.old_password[0] = "This field is required";
        flag = false;
    } else {
        if (isStrongPassword(form.new_password)) {
            errorList.new_password[0] = null
        } else {
            errorList.new_password[0] = 'Enter a strong password';
            flag = false;
        }
        if (form.new_password === form.confirm_password) {
            errorList.confirm_password[0] = null
        } else {
            errorList.confirm_password[0] = "Password doesn't match";
            flag = false;
        }
    }
    dispatch(setError(errorList))
    return flag

}