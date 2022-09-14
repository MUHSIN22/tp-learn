import React from 'react'
import EditSummaryPreview from '../../Util Components/EditSummaryPreview/EditSummaryPreview'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import experience from '../../Assets/edit icons/experience.png'
import CompanyBasicForm from '../MainForms/CompanyBasicForm/CompanyBasicForm'
import CompanyBasicFormEditor from './CompanyBasicFormEditor'

export default function ExperienceFormEditor() {
  return (
    <EditFormTemplate title="Experience" icon={experience}>
      <div className="main-form-wrapper formContainer" style={{padding: 0,textAlign: "center",overflow:"inherit"}}>
        <CompanyBasicFormEditor />
      </div>
    </EditFormTemplate>
    
  )
}
