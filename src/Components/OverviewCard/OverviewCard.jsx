import React from 'react'
import './OverviewCard.css'

import Guage from './Guage'
import ProgressBar from './ProgressBar'
import MultiDonut from '../Graphs/MultiDonut'
import { useSelector,useDispatch } from 'react-redux'
import { selectResumeLoading,selectToEdit,changeEditPageDetails } from '../../redux/Features/ResumeSlice'
import OverviewCardLoader from '../Loaders/OverviewCard'
import { selectOverview,selectKeySkills, selectCognitive_info } from '../../redux/Features/GraphSlice'
import { FaPencilAlt } from "react-icons/fa";
export default function OverviewCard() {
 const loading = useSelector(selectResumeLoading)
 const overview = useSelector(selectOverview)
 const skills = useSelector(selectKeySkills)
 const cognitive_info = useSelector(selectCognitive_info) || [];
 let color = "_1"
 const dispatch = useDispatch();
const toEdit = useSelector(selectToEdit);
const handleEditForms = (data) => {
  dispatch(changeEditPageDetails(data)).unwrap();
};
console.log(overview,cognitive_info,'this is overview');
  return (
    <>

    {((overview&&overview.length>0) || (cognitive_info&&cognitive_info.length>0)) ? <div className="overview responsive-grid overview-grid">
        {
          (overview&&overview.length>0)&&
          <div className="col-100 multiDonut lineToright donut-graph">
            <h3>Industry overview</h3>
            <MultiDonut width={'150%'} data={formatData(overview)}/>
          </div>
        }
        {
          (cognitive_info&&cognitive_info.length>0)&&
          <div className="col-100 guage-container lineToright gapForReview">
          <h3>Cognitive skillset {toEdit && (
                     <span onClick={() => handleEditForms({ progress: 18,cognitive_info })}><FaPencilAlt /></span>
                    )} </h3>
          <div className="grid gapForReview">
            {cognitive_info && cognitive_info.map((cogInfo)=>{
                color = Math.floor(Math.random() * (4 - 1 + 1) + 1)
                return <Guage label={cogInfo.name} value={parseFloat(cogInfo.value)} color={"_"+ color}/>
             
            })}
            {/* <Guage label='Teamwork' value={4.3} color={'_1'}/>
            <Guage label='Creative Thinking' value={8.3} color={'_2'}/>
            <Guage label='Analytical' value={5.3} color={'_3'}/>
            <Guage label='Social Sesirability' value={7.3} color={'_4'}/>
            <Guage label='Communication' value={5.3} color={'_1'}/>
            <Guage label='Analytical' value={5.3} color={'_3'}/> */}
          </div>
            
        </div>
        }
        {
          (skills && skills.length>0) &&
          <div className="col-100 progress gapForReview">
            <h3>Top Skills</h3>
            {
             skills&& skills.map((skill,i)=><ProgressBar key={i} label={skill.name} value={skill.value} color={`_${ i>3 ? (i % 3) + 1 : i+1}`}/>)
            }
          </div>
        }
        
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