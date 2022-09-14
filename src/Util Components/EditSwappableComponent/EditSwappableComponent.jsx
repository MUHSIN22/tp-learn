import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { IoIosAddCircle } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md'
import parser from 'html-react-parser'
import './EditSwappableComponent.css'
import { useDispatch } from 'react-redux'
import { addCompanyForEdit } from '../../redux/Features/EditSlice'
import { useNavigate } from 'react-router-dom'
let colors = ["#215eb7","#00aa7a","#fe8e77","#9721b7","#6eb721","#b72921"]

export default function EditSwappableComponent({ id, data, item, fieldNames }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <Draggable draggableId={"draggable_"+id} index={id}>
            {(provided, snapshot) => (
                <div className="edit-swappable-component" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <div className="card-position" style={{background: colors[id < 6 ? id : id % 5]}}>
                        <span className="card-position-number">{id}</span>
                    </div>
                    <div className="edit-card-content-wrapper">
                        <h2 className="edit-card-title">{data.title} <span>| { data.location } | { data.fromDate } - { data.toDate }</span></h2>
                        <p className="edit-card-description" dangerouslySetInnerHTML={{__html: parser(data.description)}}></p>
                    </div>
                    <div className="edit-action-wrapper">
                        <MdEdit className='edit-card-icons' onClick={() => {
                            navigate('/dashboard/experience-editor')
                        }} />
                        <MdDelete className='edit-card-icons' />
                    </div>
                </div>
            )}
        </Draggable>

    )
}
