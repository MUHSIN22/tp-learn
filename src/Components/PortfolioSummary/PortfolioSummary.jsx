import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { addDesignationForEdit, addPortfolioForEdit, changeExperienceForm, selectCompanyForEdit } from '../../redux/Features/EditSlice';
import { deleteJobRole, deletePortfolio, SelectCompanyDetails, SelectDocuments, setReloadDecider, toggleNewDesignation, toggleNewPhotoMedia, toggleNewProject, toggleNewRoles } from '../../redux/Features/ResumeSlice';
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton';

export default function PortfolioSummary() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const portfolio = useSelector(SelectDocuments)

    
    const handleEdit = (item) => {
        dispatch(addPortfolioForEdit(item))
        navigate('/dashboard/portfolio-editor')
    }
    const deletePortfolioInfo = (portfolioID) => {
        let body = {user_id,photo_media_id: portfolioID}
        let confirm = window.confirm("Are you sure to delete!");
        if(confirm){
            dispatch(setReloadDecider(true))
            dispatch(deletePortfolio({auth: token, body}))
        }
    }
    const addNewPortfolio = () => {
        dispatch(toggleNewPhotoMedia(true))
        navigate('/dashboard/portfolio-editor')
    }

    useEffect(() => {
        dispatch(toggleNewPhotoMedia(false));
    },[])
    return (
        <div className="designation-summary-page">
            <h2 className="form-title">Portfolio History</h2>
            <div className="summary-table-container">
                <table className="designation-summary-table" cellPadding={0} cellSpacing={0}>
                    <thead>
                        <th>SI No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            (portfolio && portfolio[0]) &&
                            portfolio.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <MdEdit className='des-summary-icons' onClick={() => handleEdit(item)} />
                                        <MdDelete className='des-summary-icons' onClick={() => deletePortfolioInfo(item.user_resume_photo_media_id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <EditFormAddButton title="Add another portfolio" addingHandler={addNewPortfolio} />
        </div>
    )
}
