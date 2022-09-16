import React, { useEffect } from 'react'
import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice'
import { addCompanyForEdit, changeExperienceForm } from '../../redux/Features/EditSlice'
import { deleteCompany, SelectCompanyDetails, setReloadDecider, toggleNewDesignation, toggleNewJob, toggleNewProject, toggleNewRoles } from '../../redux/Features/ResumeSlice'
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton'
import EditFormController from '../../Util Components/EditFormController/EditFormController'
import EditSwappableComponent from '../../Util Components/EditSwappableComponent/EditSwappableComponent'
import './ExperienceSummaryPreview.css'


export default function ExperienceSummaryPreview() {
    const companies = useSelector(SelectCompanyDetails)
    const [list,setList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user_id = useSelector(selectUser_id)
    const token = useSelector(selectAuthToken)

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
        dispatch(changeExperienceForm(0));
        dispatch(toggleNewJob(true))
        dispatch(toggleNewDesignation(true))
        dispatch(toggleNewRoles(true))
        dispatch(toggleNewProject(true))
        navigate('/dashboard/experience-editor')
    }

    useEffect(() => {
        dispatch(toggleNewJob(false))
        dispatch(toggleNewDesignation(false))
        dispatch(toggleNewRoles(false))
        dispatch(toggleNewProject(false))
        setList(companies)
    },[])

    const deleteCompanyInfo = (item) => {
        let confirm = window.confirm("Are you sure to delete the company ?");
        console.log(confirm);
        if(confirm){
            dispatch(setReloadDecider(true))
            dispatch(deleteCompany({auth:token,body:{user_id,company_record_id: item.company_record_id}}))
        }    
    }
    
    const editCompanyInfo = (item) => {
        dispatch(addCompanyForEdit(item.company_record_id))
        navigate('/dashboard/experience-editor')
    }
      
    return (
        <div className="edit-summary-preview-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <h2 className="form-title">Work History</h2>
                <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                        <div className='draggable-container' ref={provided.innerRef} {...provided.droppableProps} >
                            {
                                list.map((item,index) => (
                                    <EditSwappableComponent 
                                        id={index + 1} 
                                        key={index} 
                                        item={item} 
                                        data={{title: item.company_name,location: item.job_role && item.job_role[0] && item.job_role[0].job_location,fromDate: item.job_role && item.job_role[0] && item?.job_role[0].job_start_date, toDate: item.job_role && item.job_role[0] && item?.job_role[0].job_end_date,description: item.job_role && item.job_role[0] && item.job_role[0].role_responsibilties}}
                                        deleteItem={deleteCompanyInfo}
                                        editItem={editCompanyInfo}
                                    />
                                ))
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <EditFormAddButton title="Add another position" addingHandler={addNewPosition} />
            <EditFormController handlePreviousNavigation={() => navigate('/dashboard/edit')}/>
        </div>
    )
}
