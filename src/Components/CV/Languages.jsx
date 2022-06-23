import React from 'react'
import ProgressBar from '../OverviewCard/ProgressBar'

export default function Languages() {
  return (
    <div className="section_2 col-50 align-center">
        <div className="col-90">
            <h3>Language</h3>
            <span className="divider"></span>

            <div className="col-100 g-1">
                <LanguageCard language={'Hindi'} color='red' value={50}/>
                <LanguageCard language={'English'} color='blue' value={80}/>
                <LanguageCard language={'German'} color='green' value={40}/>
            </div>
            

        </div>
    </div>
  )
}
function LanguageCard({language,value,color}){
    return(
        <div className="col-100 align-start g-0-5 mx-1">
        <div className="col-20">
            <h5 className='text-left'>{language}</h5>
        </div>
       
        
        <div className="col-70">
            <ProgressBar value={value} color={color} hide_percent/>
        </div>
       
    </div>
    )
}