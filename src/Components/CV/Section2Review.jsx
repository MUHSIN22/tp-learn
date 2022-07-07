import React from 'react'
import { selectSalaryGraph,selectKeySkills,selectCompanyWise } from '../../redux/Features/GraphSlice'
import JobTimeline from '../Graphs/JobTimeline/JobTimeline'
import LineGraph from '../Graphs/LineGraph'
import ProgressBar from '../OverviewCard/ProgressBar'
import { useSelector } from 'react-redux'
export default function Section2Review() {
  const salaryGraph = useSelector(selectSalaryGraph)
  const keyskills = useSelector(selectKeySkills)
  const company_wise_data = useSelector(selectCompanyWise)
  const companyInfo = company_wise_data?.company_info || [];
  const skillsInfo = company_wise_data?.skill_info; 

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
      <div className="col-100 keySkill-card">
            <h5 className="text-left">Key Skills Used</h5>
            {keyskills?.map((skill, i) => (
              <div key={i} className="flex-row-between align-start">
                <p>{skill.name}</p>
                <div className="col-70 justify-center">
                  <ProgressBar
                    value={skill.value}
                    color={`_${i + 1}`}
                    hide_percent
                  />
                </div>
              </div>
            ))}
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
              management
            </div>

          </div>


        </div>
        {salaryGraph&&<LineGraph salary={salaryGraph.salary } management={salaryGraph.managementLevelValue} />}

      </div>
    </div>
  )
}
