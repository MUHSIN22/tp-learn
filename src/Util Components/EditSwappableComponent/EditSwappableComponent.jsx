import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { MdDelete, MdEdit } from 'react-icons/md'
import parser from 'html-react-parser'
import './EditSwappableComponent.css'
import { AiFillCaretDown } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addCompanyForEdit, addDesignationForEdit, addProjectForEdit, changeExperienceForm } from '../../redux/Features/EditSlice'
import { useNavigate } from 'react-router-dom'

let colors = ["#215eb7", "#00aa7a", "#fe8e77", "#9721b7", "#6eb721", "#b72921"]

export default function EditSwappableComponent({ id, data, item, fieldNames, deleteItem, editItem }) {
    const [isDropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    return (
        <Draggable draggableId={"draggable_" + id} index={id}>
            {(provided, snapshot) => (
                <div className="edit-swappable-component" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <div className="card-position" style={{ background: colors[id < 6 ? id : id % 5] }}>
                        <span className="card-position-number">{id}</span>
                    </div>
                    <div className="edit-card-content-wrapper">
                        <h2 className="edit-card-title">{data.title} <span>| {data.location} | {data.fromDate} - {data.toDate}</span></h2>
                        {/* <p className="edit-card-description" dangerouslySetInnerHTML={{__html: parser(data.description ? data.description : "")}}></p> */}
                        {
                            (data.experienceDetails && data.experienceDetails[0] && isDropdown) &&
                            <div className="swap-card-expand">
                                <h4>Goto:</h4>
                                <ul>
                                    {
                                        data.experienceDetails.map((jobRole, index) => (
                                            <>
                                                <li key={index} onClick={() => {
                                                    dispatch(changeExperienceForm(1))
                                                    dispatch(addCompanyForEdit(item.company_record_id))
                                                    dispatch(addDesignationForEdit(jobRole.company_job_record_id))
                                                    navigate('/dashboard/experience-editor')
                                                }}>
                                                    {jobRole.designation_name}


                                                </li>
                                                {
                                                    (jobRole.project && jobRole.project[0]) &&
                                                    <ul>
                                                        {
                                                            jobRole.project.map((project, pi) => (
                                                                <li key={pi} onClick={() => {
                                                                    dispatch(changeExperienceForm(3))
                                                                    dispatch(addCompanyForEdit(item.company_record_id))
                                                                    dispatch(addDesignationForEdit(jobRole.company_job_record_id))
                                                                    dispatch(addProjectForEdit(project.job_project_record_id))
                                                                    navigate('/dashboard/experience-editor')
                                                                }}>{project.project_name}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                }
                                            </>
                                        ))
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="edit-action-wrapper">
                        <MdEdit className='edit-card-icons' onClick={() => editItem(item)} />
                        <MdDelete className='edit-card-icons' onClick={() => deleteItem(item)} />
                        {
                            (data.experienceDetails && data.experienceDetails[0]) &&
                            <AiFillCaretDown className={'edit-card-icons ' + (isDropdown ? "dropdown--active" : "")} onClick={() => setDropdown(!isDropdown)} />
                        }
                    </div>
                </div>
            )}
        </Draggable>

    )
}
