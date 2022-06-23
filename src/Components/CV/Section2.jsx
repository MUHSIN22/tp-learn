import React from 'react'
import { selectSalaryGraph } from '../../redux/Features/GraphSlice'
import JobTimeline from '../Graphs/JobTimeline/JobTimeline'
import LineGraph from '../Graphs/LineGraph'
import ProgressBar from '../OverviewCard/ProgressBar'
import { useSelector } from 'react-redux'
export default function Section2() {
  const salaryGraph = useSelector(selectSalaryGraph)
  console.log(salaryGraph)
  return (
    <div className="section_2 col-100 align-center">
      <div className="col-90 align-start">
        <h3>Career Timeline</h3>
        <span className="divider"></span>
        <JobTimeline start_year={'2019'} jobs={[{
          company_name: 'Microsoft',
          designation: 'SDE1',
          job_start_date: '15-01-2019',
          job_end_date: '20-03-2020'
        },
        {
          company_name: 'Wipro',
          designation: 'Designer',
          job_start_date: '20-2-2021',
          job_end_date: '20-01-2022'
        }
        ]
        }

          skills={[{
            skill_name: 'HTMl',
            timeline: [
              {
                start: '12-01-2019',
                end: '13-05-2019'
              },
              {
                start: '01-11-2019',
                end: '13-12-2020'
              }
            ]
          },
          {
            skill_name: 'CSS',
            timeline: [
              {
                start: '12-12-2019',
                end: '13-05-2020'

              },
              {
                start: '24-12-2020',
                end: '13-05-2022'
              }
            ]
          }]} />
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
              salary
            </div>

          </div>


        </div>
        {false&&<LineGraph salary={salaryGraph.salary } management={salaryGraph.managementLevelValue} />}

      </div>
    </div>
  )
}
