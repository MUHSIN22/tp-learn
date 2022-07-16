import React from 'react'
import ProgressBar from '../OverviewCard/ProgressBar'

export default function LanguagesReview() {
  return (
    <div className="LanguagesReview col-50">
        <div className="col-90">
            <h3 style={{"marginLeft":"1rem"}}>Language</h3>
            <span className="divider"></span>

            <div className="col-100 g-1">
                <LanguageCard language={'Hindi'} color='_1' value={50}/>
                <LanguageCard language={'English'} color='_4' value={80}/>
                <LanguageCard language={'German'} color='_3' value={40}/>
            </div>
            

        </div>
    </div>
  )
}
function LanguageCard({language,value,color}){
    return(
        <div className="flex-row-between align-start g-0-5 mx-1">
        <div className="col-20">
            <h5 className='text-left'>{language}</h5>
        </div>   
        <div className="col-70">
            <ProgressBar value={value} color={color} hide_percent/>
        </div>
       
    </div>
    )
}