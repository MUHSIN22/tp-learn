import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import { addCertificateForEdit, addContributionForEdit } from '../../redux/Features/EditSlice';
import { deleteAdditionalSkill, deleteCertificate, selectCertificate, selectEducation, selectSocialContribution, setReloadDecider, toggleNewAdditionalSkills, toggleNewCertificate } from '../../redux/Features/ResumeSlice';
import EditFormAddButton from '../../Util Components/EditFormAddButton/EditFormAddButton';
import EditFormController from '../../Util Components/EditFormController/EditFormController';
import EditSwappableComponent from '../../Util Components/EditSwappableComponent/EditSwappableComponent';

export default function VoluntarySummaryPreview() {
    const contributions = useSelector(selectSocialContribution);
    const [list,setList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector(selectAuthToken)
    const user_id = useSelector(selectUser_id)

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

    const editVoluntaryInfo = (item) => {
        dispatch(addContributionForEdit(item.additional_skill_record_id))
        navigate('/dashboard/contribution-editor')
    }

    const deleteVoluntaryInfo = (item) => {
        let confirm = window.confirm("Are you sure to delete the education?")
        if(confirm){
            dispatch(setReloadDecider(true));
            dispatch(deleteAdditionalSkill({auth: token , body: {user_id,additional_skill_record_id: item.additional_skill_record_id}}))
        }
    }

    const addNewRole = () => {
        dispatch(toggleNewAdditionalSkills(true))
        navigate('/dashboard/contribution-editor')
    }

    useEffect(() => {
        dispatch(toggleNewAdditionalSkills(false))
        setList(contributions)
    },[contributions])
      
    return (
        <div className="edit-summary-preview-wrapper">
            <DragDropContext onDragEnd={onDragEnd}>
                <h2 className="form-title">Voluntary Roles History</h2>
                <Droppable droppableId='droppable'>
                    {(provided, snapshot) => (
                        <div className='draggable-container' ref={provided.innerRef} {...provided.droppableProps} >
                            {
                                list.map((item,index) => (
                                    <EditSwappableComponent 
                                        id={index + 1} 
                                        key={index} 
                                        item={item} 
                                        data={{title: item.role,location: item.organization_name ,fromDate: item.from_duration, toDate: item.to_duration !== "" ? item.to_duration : "Current"}}
                                        editItem={editVoluntaryInfo}
                                        deleteItem={deleteVoluntaryInfo}
                                    />
                                ))
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <EditFormAddButton title="Add another Voluntary Role" addingHandler={addNewRole} />
            <EditFormController handlePreviousNavigation={() => navigate('/dashboard/edit')}/>
        </div>
    )
}
