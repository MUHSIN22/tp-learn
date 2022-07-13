import React from 'react'
import Experience1 from './Experience1'
import Experience2 from './Experience2'
import './FormContainer.css'
import Experience3 from './Experience3';
import Experience5 from './Experience5';
import Experience6 from './Experience6';
import Experience7 from './Experience7';
import Experience8 from './Experience8';
import Experience9 from './Experience9';
import Education from './Education';
import Certificate1 from './Certificate1';
import Certificate2 from './Certificate2';
import AdditionalSkills1 from './AdditionalSkills1';
import AdditionalSkills2 from './AdditionalSkills2';
import AdditionalSkills3 from './AdditionalSkills3';
import CareerObjective1 from './CareerObjective1';
import CareerObjective3 from './CareerObjective3';
import CareerObjective2 from './CareerObjective2';
import { useSelector,useDispatch } from 'react-redux';
import { changeFormId, selectFormId } from '../../redux/Features/ResumeSlice';
import { selectAuthToken, selectUser_id } from '../../redux/Features/AuthenticationSlice';
import CognitiveSkills from './CognitiveSkills';



export default function FormContainer() {
const dispatch = useDispatch()
const token = useSelector(selectAuthToken)
const user_id = useSelector(selectUser_id)
const progress = parseInt(useSelector(selectFormId)) + 1 || 1
const setProgress = (id)=>{
  let body = {
    form_id: id,
    user_id: user_id
  }
  try {
      dispatch(changeFormId({auth:token,body})).unwrap()
  } catch (error) {
    
  }
}
  return (
    <div className="formContainer">
      {progress === 1 && <Experience1  />}
      {progress === 2 && <Experience2  />}
      {progress === 3 && <Experience3  />}
      {progress === 4 && <Experience5  />}
      {progress === 5 && <Experience6  />}
      {progress === 6 && <Experience7 setProgress={setProgress} />}
      {progress === 7 && <Experience8 setProgress={setProgress}  />}
      {progress === 8 && <Experience9 setProgress={setProgress} />}
      {progress === 9 && <Education  />}
      {progress === 10 && <Certificate1  />}
      {progress === 11 && <Certificate2 setProgress={setProgress} />}
      {progress === 12 && <AdditionalSkills1  />}
      {progress === 13 && <AdditionalSkills2  />}
      {progress === 14 && <AdditionalSkills3  />}
      {progress === 15 && <CareerObjective1  />}
      {progress === 16 && <CareerObjective2  />}
      {progress === 17 && <CareerObjective3  />}
      {progress === 18 && <CognitiveSkills />}
    </div>
  )
}
