import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { addDesignationForEdit, addProjectForEdit, changeExperienceForm, selectCompanyForEdit, selectDesignationForEdit } from '../../redux/Features/EditSlice';
import { deleteProject, SelectCompanyDetails, setReloadDecider, toggleNewProject } from '../../redux/Features/ResumeSlice';
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton';
import './ProjectSummaryPage.css'

export default function ProjectSummaryPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const designationID = useSelector(selectDesignationForEdit);
    const companyID = useSelector(selectCompanyForEdit);
    const companyDetails = useSelector(SelectCompanyDetails);
    const [data, setData] = useState({});
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)


    const handleEdit = (projectID) => {
        dispatch(changeExperienceForm(3))
        dispatch(addProjectForEdit(projectID))
        navigate('/dashboard/experience-editor')
    }

    const addNewProjectInfo = () => {
        dispatch(toggleNewProject(true))
        dispatch(changeExperienceForm(3))
        navigate('/dashboard/experience-editor')
    }

    const deleteProjectInfo = (projectID) => {
        let confirm = window.confirm('Are you sure to delete?')
        if(confirm){
            dispatch(setReloadDecider(true))
            dispatch(deleteProject({auth:token,body:{user_id,job_project_record_id:projectID}}))
        }
    }

    useEffect(() => {
        let company = companyDetails.filter(company => company.company_record_id === companyID)
        let jobRole = company[0].job_role.filter(role => role.company_job_record_id === designationID);
        setData(jobRole[0])
    },[companyDetails])
    
    return (
        <div className="designation-summary-page">
            <h2 className="form-title">Project History</h2>
            <table className="designation-summary-table" cellPadding={0} cellSpacing={0}>
                <thead>
                    <th>SI No.</th>
                    <th>Project</th>
                    <th>Client</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        data.project && data?.project[0] &&
                        data?.project.map((project, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{project.project_name}</td>
                                <td>{project.client_name}</td>
                                <td>
                                    <MdEdit className='des-summary-icons' onClick={() => handleEdit(project.job_project_record_id)} />
                                    <MdDelete className='des-summary-icons' onClick={() => deleteProjectInfo(project.job_project_record_id)} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <EditFormAddButton title="Add another project" addingHandler={addNewProjectInfo} />
            <button className="btn btn-skip" onClick={() => navigate('/dashboard/edit')}>Skip</button>
        </div>
    )
}
