import React, { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { addDesignationForEdit, changeExperienceForm, selectCompanyForEdit } from '../../redux/Features/EditSlice'
import { deleteJobRole, SelectCompanyDetails, setReloadDecider, toggleNewDesignation, toggleNewProject, toggleNewRoles } from '../../redux/Features/ResumeSlice'
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton'
import './DesignationSummary.css'

export default function DesignationSummaryPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const company = useSelector(SelectCompanyDetails)
    const companyID = useSelector(selectCompanyForEdit)
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)
    const [companyDetails, setCompanyDetails] = useState(company.filter((company) => company.company_record_id === companyID)[0] ? company.filter((company) => company.company_record_id === companyID)[0] : {})

    const handleEdit = (designationID) => {
        dispatch(addDesignationForEdit(designationID));
        dispatch(changeExperienceForm(1))
        navigate('/dashboard/experience-editor')
    }

    const deleteJobRoleInfo = (jobID) => {
        let confirm = window.confirm('Are you sure to delete the designation?')
        if (confirm) {
            dispatch(setReloadDecider(true))
            dispatch(deleteJobRole({ auth: token, body: { user_id, company_job_record_id: jobID } }))
        }


    }

    const addNewJobRoleInfo = () => {
        dispatch(toggleNewDesignation(true))
        dispatch(toggleNewRoles(true))
        dispatch(toggleNewProject(true))
        dispatch(changeExperienceForm(1));
        navigate('/dashboard/experience-editor')
    }

    useEffect(() => {
        dispatch(toggleNewDesignation(false))
        dispatch(toggleNewRoles(false))
        dispatch(toggleNewProject(false))
    }, [])

    useEffect(() => {
        setCompanyDetails(company.filter((company) => company.company_record_id === companyID)[0] ? company.filter((company) => company.company_record_id === companyID)[0] : {})
    }, [company])

    useEffect(() => {
        if (!(companyDetails.job_role && companyDetails?.job_role[0])) {
            dispatch(changeExperienceForm(1));
            navigate('/dashboard/experience-editor')
        }
    }, [])
    return (
        <div className="designation-summary-page">
            <h2 className="form-title">Designation History</h2>
            <div className="summary-table-container">
                <table className="designation-summary-table" cellPadding={0} cellSpacing={0}>
                    <thead>
                        <th>SI No.</th>
                        <th>Designation</th>
                        <th>Time Period</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {
                            (companyDetails.job_role && companyDetails?.job_role[0]) &&
                            companyDetails?.job_role.map((role, index) => (
                                <tr key={index}>
                                    {console.log(role, 'this is role')}
                                    <td>{index + 1}</td>
                                    <td>{role.designation_name}</td>
                                    <td>{new Date(role.job_start_date).getFullYear()}-{role.job_end_date ? new Date(role.job_end_date).getFullYear() : "Current"}</td>
                                    <td>
                                        <MdEdit className='des-summary-icons' onClick={() => handleEdit(role.company_job_record_id)} />
                                        <MdDelete className='des-summary-icons' onClick={() => deleteJobRoleInfo(role.company_job_record_id)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <EditFormAddButton title="Add another designation" addingHandler={addNewJobRoleInfo} />
        </div>
    )
}
