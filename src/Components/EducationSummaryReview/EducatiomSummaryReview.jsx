import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SelectCompanyDetails, selectEducation } from '../../redux/Features/ResumeSlice';
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton';
import EditFormController from '../../Util Components/EditFormController/EditFormController';
import EditSwappableComponent from '../../Util Components/EditSwappableComponent/EditSwappableComponent';

export default function EducatiomSummaryReview() {
    const companies = useSelector(SelectCompanyDetails)
    const education = useSelector(selectEducation)
    const [list,setList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();

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

    const addNewPosition = () => {
        // dispatch(changeExperienceForm(0));
        // dispatch(toggleNewJob(true))
        // dispatch(toggleNewDesignation(true))
        // dispatch(toggleNewRoles(true))
        // dispatch(toggleNewProject(true))
        // navigate('/dashboard/experience-editor')
    }

    useEffect(() => {
        // dispatch(toggleNewJob(false))
        // dispatch(toggleNewDesignation(false))
        // dispatch(toggleNewRoles(false))
        // dispatch(toggleNewProject(false))
        setList(education)
    },[education])
    
    console.log(education );
      
    return (
        <div className="edit-summary-preview-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <h2 className="form-title">Education History</h2>
                <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                        <div className='draggable-container' ref={provided.innerRef} {...provided.droppableProps} >
                            {
                                list.map((item,index) => (
                                    <EditSwappableComponent 
                                        id={index + 1} 
                                        key={index} 
                                        item={item} 
                                        data={{title: item.collage_name,location: item.location ,fromDate: item.course_start_date, toDate: item.course_end_date}}

                                    />
                                ))
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <EditFormAddButton title="Add another education" addingHandler={addNewPosition} />
            <EditFormController handlePreviousNavigation={() => navigate('/dashboard/edit')}/>
        </div>
    )
}
