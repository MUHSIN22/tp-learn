import React, { useEffect } from 'react'
import { selectJObSalaryTimeline, selectSalaryGraph } from '../../redux/Features/GraphSlice'
import JobTimeline from '../Graphs/JobTimeline/JobTimeline'
import LineGraph from '../Graphs/LineGraph'
import { useSelector } from 'react-redux'
import { selectResumeInfo } from '../../redux/Features/ResumeSlice'
import TimelineChart from '../Graphs/TimelineChart'
export default function Section2() {
  const salaryGraph = useSelector(selectSalaryGraph)
  const timelineGraph = useSelector(selectJObSalaryTimeline)
  const resumeInfo = useSelector(selectResumeInfo)
  console.log(salaryGraph,'salary graph is this');
  const createYears = () => {
    let currentYear = new Date().getFullYear();
    let years = []
    for(let i=8;i>=0;i--){
      years.unshift(currentYear);
      currentYear -= 5;
    }
    return years;
  }
  return (
    <>
      {
        ((timelineGraph && timelineGraph.company_info ) || salaryGraph ) &&
        <div className="col-100 align-center CareerTimeline">
          <div className="col-90 align-start py-2 px-2">
            <h1>Career Timeline</h1>
            <span className="divider"></span>
            {((timelineGraph && timelineGraph.company_info) || timelineGraph.skill_info) && <JobTimeline jobs={timelineGraph.company_info} skills={timelineGraph.skill_info} />}
          </div>
          <div className="col-90 g-1 my-2">
            <h3 style={{textAlign: 'left'}}>Skills</h3>
            {timelineGraph.skill_info && <TimelineChart skills={timelineGraph.skill_info} />}
          </div>


          <div className="col-90 g-1 my-2">

            <div className="flex-row-between salary-management-header">
              <h3>Salary & management Graph</h3>
              <div className='flex-row-fit g-0-5 align-center'>
                <div className='flex-row-fit g-0-5 align-center'>
                  <div className='dot _1'></div>
                  salary
                </div>
                <div className='flex-row-fit g-0-5 align-center'>
                  <div className='dot _4'></div>
                  management
                </div>

              </div>


            </div>
            {salaryGraph && <LineGraph salary={salaryGraph.salary} category={salaryGraph.duration} label={createYears()} management={salaryGraph.managementLevelValue} />}

          </div>
        </div>
      }
    </>
  )
}
