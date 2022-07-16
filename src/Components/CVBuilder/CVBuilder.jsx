import React, { useEffect, useState } from 'react'
import Steps from './Steps'
import './CVBuilder.css'
import FormContainer from '../Form/FormContainer'
import CVcontainer from '../CV/CVcontainer'
import { useSelector } from 'react-redux';
import { selectBio, selectCertificate, selectEducation, selectFirstJob, selectFormId, selectSocilaLinks } from '../../redux/Features/ResumeSlice';
export default function CVBuilder() {
  const first_job = useSelector(selectFirstJob)
  const Education = useSelector(selectEducation)
  const Certifications = useSelector(selectCertificate)
  const bio = useSelector(selectBio)
  const socialLinks = useSelector(selectSocilaLinks)
  const [progress, setProgress] = useState({
    'Contact Info': { id:1, state: 'complete' },
    'Experience': { id:1, state: 'active' },
    'Education': { id: 9, state: 'inactive' },
    'Certifications': { id: 10, state: 'inactive' },
    'Additional Skills': { id: 11, state: 'inactive' },
    'Career Objective': { id: 15, state: 'inactive' }
  })
  const form_id = useSelector(selectFormId)
  useEffect(() => {
    if (first_job[0]) {
      setProgress({
        ...progress,
        'Experience': { id:1, state: 'complete' },
      })
    }
    console.log()
    if (Education) {
      
      setProgress({
        ...progress,
        Experience: { id:1, state: 'complete' },
        Education: { id: 9, state: 'complete' },
      })
    }
    if (Certifications) {
 
      setProgress({
        ...progress,
        Experience: { id:1, state: 'complete' },
        Education: { id: 9, state: 'complete' },
        Certifications: { id: 10, state: 'complete' },
      })
    }
    if (bio.length>0) {
      setProgress({
        ...progress,
        Experience: { id:1, state: 'complete' },
        Education: { id: 9, state: 'complete' },
        Certifications: { id: 10, state: 'complete' },
        'Additional Skills': { id: 11, state: 'complete' },
      })
    }
    if (Object.values(socialLinks).join('').length>0) {
      setProgress({
        ...progress,
        Experience: { id:1, state: 'complete' },
        Education: { id: 9, state: 'complete' },
        Certifications: { id: 10, state: 'complete' },
        'Additional Skills': { id: 11, state: 'complete' },
        'Career Objective': { id: 15, state: 'complete' }
      })
    }

    return () => {

    }
  }, [ Education, Certifications, bio, socialLinks])
  useEffect(() => {
    let x = setTimeout(() => {
      if (form_id < 8) {
        setProgress({
          ...progress,
          Experience: { id:1, state: 'active' }
        })
      } else if (form_id < 9) {

        setProgress({
          ...progress,
          Education: { id: 9, state: 'active' }
        })
      } else if (form_id < 10) {

        setProgress({
          ...progress,
          Certifications: { id: 10, state: 'active' },
        })
      }
      else if (form_id <= 13) {

        setProgress({
          ...progress,
          'Additional Skills': { id: 11, state: 'active' },
        })
      } else if (form_id < 18) {
        setProgress({
          ...progress,
          'Career Objective': { id: 15, state: 'active' }
        })
      } else if (form_id == 18) {
        setProgress({
          ...progress,
          Experience: { id:1, state: 'complete' },
          Education: { id: 9  , state: 'complete' },
          Certifications: { id: 10, state: 'complete' },
          'Additional Skills': { id: 11, state: 'complete' },
          'Career Objective': { id: 15, state: 'complete' }
        })
      }
      
    }, 500);
    


    return () => {
      clearTimeout(x)
    }
  }, [form_id])




  return (
    <div className="cvbuilder">
      <div className="step-row">
        <span></span>
        {
          Object.keys(progress).map((step, index) => <Steps name={step} {...progress[step]} index={index + 1} />)
        }
      </div>
      <div className="builder-row">
        <FormContainer />
        <CVcontainer />
      </div>

    </div>
  )
}
