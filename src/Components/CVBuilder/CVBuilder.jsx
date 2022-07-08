import React, { useEffect, useState } from 'react'
import Steps from './Steps'
import './CVBuilder.css'
import FormContainer from '../Form/FormContainer'
import CVcontainer from '../CV/CVcontainer'
import { useSelector } from 'react-redux';
import { selectFormId } from '../../redux/Features/ResumeSlice';
export default function CVBuilder() {
    const [progress, setProgress] = useState({
        'Contact Info' : 'complete',
        'Experience' : 'active',
        'Education':'inactive',
        'Certifications':'inactive',
        'Additional Skills':'inactive',
        'Career Objective':'inactive' 
    })
    const form_id = 18
    useEffect(() => {
      if(form_id<8){
        console.log('1st');
        setProgress({
            ...progress,
            Experience: 'active'
        })
      }else if(form_id<9){
        console.log('2nd',form_id);
        setProgress({
            ...progress,
            Experience:'complete',
            Education: 'active'
        })
      }else if(form_id <10 ){
        console.log('3rd');
        setProgress({
            ...progress,
            Experience:'complete',
            Education:'complete',
            Certifications: 'active'
        })
      }
      else if(form_id <=13){
        console.log('4th');
        setProgress({
            ...progress,
            Experience:'complete',
            Education:'complete',
            Certifications:'complete',
            "Additional Skills": 'active'
        })
      } else if(form_id <18){
        console.log('5th');
        setProgress({
            ...progress,
            Experience:'complete',
            Education:'complete',
            Certifications:'complete',
            "Additional Skills":'complete',
            'Career Objective': 'active'
        })
      }else if(form_id==18){
        console.log('6th');
        setProgress({
            ...progress,
            Experience:'complete',
            Education:'complete',
            Certifications:'complete',
            "Additional Skills":'complete',
            'Career Objective': 'active'
        })
      }
       
      return () => {
        
      }
    }, [form_id])
    

    
  return (
    <div className="cvbuilder">
        <div className="step-row">
            <span></span>
            {
                Object.keys(progress).map((step,index)=><Steps name={step} state={progress[step]} index={index+1}/>)
            }
        </div>
        <div className="builder-row">
        <FormContainer/>
        <CVcontainer/>
        </div>
       
    </div>
  )
}
