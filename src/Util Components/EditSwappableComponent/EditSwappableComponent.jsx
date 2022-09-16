import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { MdDelete, MdEdit } from 'react-icons/md'
import parser from 'html-react-parser'
import './EditSwappableComponent.css'
let colors = ["#215eb7","#00aa7a","#fe8e77","#9721b7","#6eb721","#b72921"]

export default function EditSwappableComponent({ id, data, item, fieldNames, deleteItem, editItem }) {
    return (
        <Draggable draggableId={"draggable_"+id} index={id}>
            {(provided, snapshot) => (
                <div className="edit-swappable-component" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <div className="card-position" style={{background: colors[id < 6 ? id : id % 5]}}>
                        <span className="card-position-number">{id}</span>
                    </div>
                    <div className="edit-card-content-wrapper">
                        <h2 className="edit-card-title">{data.title} <span>| { data.location } | { data.fromDate } - { data.toDate }</span></h2>
                        <p className="edit-card-description" dangerouslySetInnerHTML={{__html: parser(data.description ? data.description : "")}}></p>
                    </div>
                    <div className="edit-action-wrapper">
                        <MdEdit className='edit-card-icons' onClick={() => editItem(item)} />
                        <MdDelete className='edit-card-icons' onClick={() => deleteItem(item)} />
                    </div>
                </div>
            )}
        </Draggable>

    )
}
