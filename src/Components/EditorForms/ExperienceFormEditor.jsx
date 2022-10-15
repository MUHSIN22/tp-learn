import React from 'react'
import EditSummaryPreview from '../ExperienceSummaryPreview/ExperienceSummaryPreview'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import experience from '../../Assets/edit icons/experience.png'
import CompanyBasicForm from '../MainForms/CompanyBasicForm/CompanyBasicForm'
import CompanyBasicFormEditor from './CompanyBasicFormEditor'
import { useSelector } from 'react-redux'
import { selectFormProgress } from '../../redux/Features/EditSlice'
import DesignationEditForm from './DesignationEditForm'
import RolesEditForm from './RolesEditForm'
import ProjectEditForm from './ProjectEditForm'

export default function ExperienceFormEditor() {
  const formProgress = useSelector(selectFormProgress);
  return (
    <EditFormTemplate title="Experience" icon={experience}>
      <div className="main-form-wrapper formContainer" style={{padding: 0,textAlign: "center",overflow:"inherit"}}>
        {
          formProgress == 0 ?
            <CompanyBasicFormEditor />
          :(formProgress == 1)?
            <DesignationEditForm />
          :(formProgress == 2) ?
            <RolesEditForm />
          :(formProgress == 3) ?
            <ProjectEditForm />
          : null
        }
      </div>
    </EditFormTemplate>
    
  )
}
