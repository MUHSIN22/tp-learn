import React from 'react'
import './OverviewCard.css'

import Guage from './Guage'
import ProgressBar from './ProgressBar'
import MultiDonut from '../Graphs/MultiDonut'
import { useSelector } from 'react-redux'
import { selectResumeLoading } from '../../redux/Features/ResumeSlice'
import OverviewCardLoader from '../Loaders/OverviewCard'
import { selectOverview,selectKeySkills } from '../../redux/Features/GraphSlice'

export default function OverviewCard() {
 const loading = useSelector(selectResumeLoading)
 const overview = useSelector(selectOverview)
 const skills = useSelector(selectKeySkills)
 console.log(formatData(overview))
  return (
    <>
    {!loading?<div className="overview responsive-grid">
        <div className="col-100 multiDonut">
          <h3>Industry overview</h3>
          <MultiDonut width={'150%'} data={formatData(overview)}/>
        </div>
        <div className="col-100 guage-container">
          <h3>Cognitive skillset </h3>
          <div className="grid">
            <Guage label='Teamwork' value={4.3} color={'_1'}/>
            <Guage label='Creative Thinking' value={8.3} color={'_2'}/>
            <Guage label='Analytical' value={5.3} color={'_3'}/>
            <Guage label='Social Sesirability' value={7.3} color={'_4'}/>
            <Guage label='Communication' value={5.3} color={'_1'}/>
          </div>
            
        </div>
        <div className="col-100 progress">
            <h3>Top 5 Skills</h3>
            {
             skills&& skills.map((skill,i)=><ProgressBar key={i} label={skill.name} value={skill.value} color={`_${i+1}`}/>)
            }
            

        </div>
        
    </div>: <OverviewCardLoader/>}
    </>
  )
}
function  formatData(arr=[]) {
  let i=0 ;
  let obj ={}
  while (i<arr.length) {
    obj[arr[i].name] = arr[i].value
    i++;
  }
 return obj
}  