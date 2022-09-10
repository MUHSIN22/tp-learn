import React from 'react'
import { useSelector } from 'react-redux'
import { selectJObSalaryTimeline, selectSalaryGraph } from '../../../redux/Features/GraphSlice'
import JobTimeline from '../../Graphs/JobTimeline/JobTimeline'
import JobTimelineGraph from '../../Graphs/JobTimelineGraph/JobTimelineGraph'
import LineGraph from '../../Graphs/LineGraph'
import TimelineChart from '../../Graphs/TimelineChart'

export default function CareerTimeline() {
    const timelineGraph = useSelector(selectJObSalaryTimeline)
    const salaryGraph = useSelector(selectSalaryGraph)

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
        <div className="cv-career-timeline cv-profile-container-primary">
            <h2 className="cv-profile-title-primary">Career Timeline</h2>
            <div className="career-map-wrapper">
                {((timelineGraph && timelineGraph.company_info) && (timelineGraph && timelineGraph.skill_info)) && <JobTimeline jobs={timelineGraph.company_info} skills={timelineGraph.skill_info} />}
            </div>
            <div className="career-map-wrapper">
                <h3 className="cv-profile-title-secondary">Job Roles</h3>
                {((timelineGraph && timelineGraph.company_info) && (timelineGraph && timelineGraph.skill_info)) && <JobTimelineGraph jobs={timelineGraph.company_info} skills={timelineGraph.skill_info} />}
            </div>
            {
                timelineGraph && timelineGraph.skill_info &&
                <div className="career-skill-wrapper cv-profile-container-secondary">
                    <h3 className="cv-profile-title-secondary">Key Skills</h3>
                    {timelineGraph.skill_info && <TimelineChart skills={timelineGraph.skill_info} />}
                </div>
            }
            {
                <div className="cv-profile-container-secondary">
                    <h3 className="cv-profile-title-secondary">Salary & Management Graph</h3>
                    <div className="graph-notations-wrapper">
                        <div className="graph-notation">
                            <div className="notation" style={{background:'#24e3a7'}}></div>
                            <p className="notation-text" >Salary</p>
                        </div>
                        <div className="graph-notation" >
                            <div className="notation" style={{background: '#f8633e'}}></div>
                            <p className="notation-text">Management</p>
                        </div>
                    </div>
                    {salaryGraph && <LineGraph salary={salaryGraph.salary} category={salaryGraph.duration} label={createYears()} management={salaryGraph.managementLevelValue} />}
                </div>
            }
        </div>
    )
}
