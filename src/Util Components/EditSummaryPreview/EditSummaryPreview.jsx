import React, { useEffect } from 'react'
import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import { SelectCompanyDetails } from '../../redux/Features/ResumeSlice'
import EditFormAddButton from '../EditFormAddButton/EditFormAddButton'
import EditFormController from '../EditFormController/EditFormController'
import EditSwappableComponent from '../EditSwappableComponent/EditSwappableComponent'
import './EditSummaryPreview.css'

let list = [
    {
        id: 1,
        value: "ABCD"
    },
    {
        id: 2,
        value: "ABCD"
    },
    {
        id: 3,
        value: "ABCD"
    },
    {
        id: 4,
        value: "ABCD"
    },
    {
        id: 5,
        value: "ABCD"
    }
]

export default function EditSummaryPreview() {
    const companies = useSelector(SelectCompanyDetails)
    const [list,setList] = useState([])
    
    const onDragEnd = (result) => {
        console.log(result,"this is result");
        console.log(list);
        let res = reorder(list,result.source.index,result.destination.index)
        console.log(res);
        setList(res);
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex - 1, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    useEffect(() => {
        console.log(companies,'companies');
        setList(companies)
    },[])
    
      
    return (
        <div className="edit-summary-preview-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <h2 className="form-title">Work History Summery</h2>
                <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                        <div className='draggable-container' ref={provided.innerRef} {...provided.droppableProps} >
                            {
                                list.map((item,index) => (
                                    <EditSwappableComponent id={index + 1} key={index} item={item} data={{title: item.company_name,location: item.job_role[0].job_location,fromDate: item?.job_role[0].job_start_date, toDate: item?.job_role[0].job_end_date,description: item.job_role[0].role_responsibilties}}/>
                                ))
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <EditFormAddButton title="Add another position" />
            <EditFormController />
        </div>
    )
}
