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


export default function EditFormContainer({data}) {
  console.log("[[[[[[[[[[[[[[",data)
  const progress = data.progress;
  return (
    <div className="formContainer col-100 px-0 py-0" style={{"width":"100%"}}>
      {progress === 1 && <Experience1  />}
      {progress === 2 && <Experience2  />}
      {progress === 3 && <Experience3  />}
      {progress === 4 && <Experience5  />}
      {progress === 5 && <Experience6  />}
      {progress === 6 && <Experience7/>}
      {progress === 7 && <Experience8 />}
      {progress === 8 && <Experience9/>}
      {progress === 9 && <Education />}
      {progress === 10 && <Certificate1  />}
      {progress === 11 && <Certificate2 />}
      {progress === 12 && <AdditionalSkills1  />}
      {progress === 13 && <AdditionalSkills2  />}
      {progress === 14 && <AdditionalSkills3  />}
      {progress === 15 && <CareerObjective1  />}
      {progress === 16 && <CareerObjective2  />}
      {progress === 17 && <CareerObjective3  />}




      { /*
      (progress!==6&&progress!==7&&progress!==17)&& <>
          <span className='divider'></span>
          <div className="form-row">
            <div className="col-30">
              <button className='btn tertiary' onClick={handleBack}><ChevronLeft /> Back</button>
            </div>

            <div className="col-30">
              <button className='btn primary' onClick={handleNext}>Next <ChevronRight /></button>
            </div>

          </div>
        </>*/
      }
    </div>
  )
}
