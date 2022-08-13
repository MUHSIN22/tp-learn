import React, { useEffect } from "react";
import { useState } from "react";
import "./JobTimeline.css";
const colors = [
  "#EF6239",
  "#219FFF",
  "#FFA114",
  "#EF6239",
  "#219FFF",
  "#FFA114",
  "#EF6239",
  "#219FFF",
  "#FFA114",
];
export default function JobTimeline({ jobs = [], skills = [] }) {
  let current_year = new Date().getFullYear();
  const [jobList,setJobList] = useState(jobs)

  let start_year = jobs[0] && jobs[0].timeline[0].job_start_date.split("-")[2];
  let year_list = [start_year];
  while (start_year <= current_year) {
    year_list.push(parseInt(start_year));
    start_year++;
  }
  console.log(jobs,skills,"job and skills");
  let rows = jobs.length + skills.length + 1;
  let cols = year_list.length * 12 + 12;
  //console.log(year_list,jobs,skills)
  useEffect(() => {
    if (start_year) {
      let timeline = document.getElementById("jobTimeline");
      timeline.style.gridTemplateColumns = `repeat(${cols},${100 / cols}%)`;
      timeline.style.gridTemplateRows = `repeat(${rows},3rem)`;
    }
    return () => {};
  }, [start_year]);

  useEffect(() => {
    console.log(jobs,'this is jobs');
    jobList.forEach((job,index) => checkJobsGap(index))
  },[jobs])


  const checkJobsGap = (startIndex) => {
    let newJob = []
    console.log(jobs[startIndex],jobs[startIndex + 1],'startIndex and str1');
    if(jobs[startIndex+1]){
      let firstJobEnd = jobs[startIndex].timeline[0].job_end_date.split('-')[2]
      let secondJobStart = jobs[startIndex+1].timeline[0].job_start_date.split('-')[2]
      if((secondJobStart-firstJobEnd) > 0){
        
        let noExperience = {
          company_name:"No experience",
          timeline:[{
            job_start_date:"19-11-"+firstJobEnd,
            job_end_date:`19-11-${secondJobStart}`
          }]}
          let arr1 = jobs.slice(0,startIndex+1);
          let arr2 = jobs.slice(startIndex+1);
          let newJob = [...arr1,noExperience,...arr2];
          console.log(newJob,'Splitted arrays');
          // newJob.splice(startIndex+1,0,{...noExperience});
          
          console.log(jobs,'jobx');
          setJobList(newJob)
      }
    }else{
      let lastJobEnd = jobs[startIndex].timeline[0].job_end_date.split('-')[2]
      console.log(new Date().getFullYear() - parseInt(lastJobEnd),"last diff");
      if((new Date().getFullYear() - parseInt(lastJobEnd)) > 0){
        let noExperience = {
          company_name:"No experience",
          timeline:[{
            job_start_date:"19-11-"+lastJobEnd,
            job_end_date:`19-11-${new Date().getFullYear()}`
          }]}
          setJobList(prev => [...prev,noExperience])
      }
    }
  }

  return (
    <div id="jobTimeline" className="jobTimeline">
      <div className="job-timeline-wrapper">
        { jobList && jobList[0] && jobList.map((item, index) => (
          <div className="job" style={{ backgroundColor: (item.company_name === 'No experience' ? "rgba(99,99,99,5.4)" : colors[index]) }}>
            {item.type}
            <div className="time-bar">
              <span className="time-bar--bar"></span>
              <span className="year">{item.timeline[0].job_start_date.split("-")[2]}</span>
              <span className="time-bar--bar"></span>
              <span className="year">{item.timeline[0].job_end_date.split("-")[2]}</span>
              <span className="time-bar--bar"></span>
            </div>
            <div className="job-details">
              <h6>{item.company_name}</h6>
              <span>{item.timeline[0].job_level_name}</span>
            </div>
          </div>
        ))}
      </div>
      {/* {jobs.map((job, i) =>{ 
      
       return job.timeline.map((x,j)=><><span style={{gridArea:`${i+1}/${1}/${i+2}/${2}`, alignSelf:'center',fontWeight:'500', fontSize:'0.8rem' }}>{job.company_name}</span> <Company key={i} {...x} company_name={job.company_name} i={i} j={j} year_list={year_list} /></>)
      }
      )}
      {year_list.map((year, i) => <YearsLabel key={i} no_jobs={jobs.length} year={year} rows={rows} i={i} />)}
      {skills.map((skill, i) =>{ 
      return<><span style={{gridArea:`${rows-i}/${1}/${rows-i+1}/${2}`, alignSelf:'center',fontWeight:'500', fontSize:'0.8rem' }}>{skill.skill_name}</span>{skill.timeline.map((time, j)=> <Skill key={j} i={i} j={j} start_date={time.start_date} end_date={time.end_date} year_list={year_list} rows={rows  } />)}</>
      })} */}
    </div>
  );
}
