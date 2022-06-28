import React from 'react'
import { selectJObSalaryTimeline, selectSalaryGraph } from '../../redux/Features/GraphSlice'
import JobTimeline from '../Graphs/JobTimeline/JobTimeline'
import LineGraph from '../Graphs/LineGraph'
import { useSelector } from 'react-redux'
import {selectResumeInfo } from '../../redux/Features/ResumeSlice'
export default function Section2() {
  const salaryGraph = useSelector(selectSalaryGraph)
  const timelineGraph = useSelector(selectJObSalaryTimeline)
  const resumeInfo = useSelector(selectResumeInfo)
  return (
    <div className="section_2 col-100 align-center">
      <div className="col-90 align-start">
        <h3>Career Timeline</h3>
        <span className="divider"></span>
      {timelineGraph&&timelineGraph.company_info&&timelineGraph.skill_info&&<JobTimeline jobs={timelineGraph.company_info}  skills={timelineGraph.skill_info} />}
      </div>

      <div className="col-90 g-1 my-2">

        <div className="flex-row-between">
          <h3>Salary & management Graph</h3>
          <div className='flex-row-fit g-0-5 align-center'>
            <div className='flex-row-fit g-0-5 align-center'>
              <div className='dot _1'></div>
              salary
            </div>
            <div className='flex-row-fit g-0-5 align-center'>
              <div className='dot _4'></div>
              Management
            </div>

          </div>


        </div>
        {salaryGraph && <LineGraph salary={salaryGraph.salary} management={salaryGraph.managementLevelValue} />}

      </div>
    </div>
  )
}
