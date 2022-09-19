import React from 'react'
import EditFormTemplate from '../../Util Components/EditFormTemplate/EditFormTemplate'
import personal from '../../Assets/edit icons/personal.png'
import PersonalInfo from '../EditForms/PersonalInfo'

export default function PersonalInfoEditor() {
  return (
    <EditFormTemplate title="Personal Info" icon={personal}>
        <PersonalInfo />
    </EditFormTemplate>
  )
}
