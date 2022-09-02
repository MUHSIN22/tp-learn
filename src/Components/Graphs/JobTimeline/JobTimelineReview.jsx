import React, { useEffect } from 'react'
import './JobTimeline.css'
const colors = ['#EF6239', '#219FFF', '#FFA114']
export default function JobTimelineReview({ start_year, jobs = [], skills=[]}) {

    let current_year = new Date().getFullYear()
  let year_list = []
  let rows = jobs.length+skills.length + 1;
  while (start_year <= current_year) {
    year_list.push(parseInt(start_year))
    start_year++
  }
  let cols = year_list.length * 12
  useEffect(() => {
    let timeline = document.getElementById('jobTimeline')
    timeline.style.gridTemplateColumns = `repeat(${cols},${100 / cols}%)`
    timeline.style.gridTemplateRows = `repeat(${rows},3rem)`

    return () => {

    }
  }, [])

  return (
    <div id='jobTimeline' className="jobTimeline">
      {/* {jobs.map((job, i) => <Company key={i} {...job} i={i} year_list={year_list} />)} */}
      {jobs.map((job, i) =>{ 
      return job.timeline.map((time, j)=> <Company key={j} company_name={job.company_name} i={i} j={j} job_start_date={time.job_start_date} job_end_date={time.job_end_date} year_list={year_list} rows={rows  } />)
      })}
      {year_list.map((year, i) => <YearsLabel key={i} no_jobs={jobs.length} year={year} rows={rows} i={i} year_list={year_list} />)}
      {skills.map((skill, i) =>{ 
      return skill.timeline.map((time, j)=> <Skill key={j} skill_name={skill.skill_name} i={i} j={j} skill_start_date={time.start_date} skill_end_date={time.end_date} year_list={year_list} rows={rows  } />)
     
      
      })}
    </div>
  )
}
function Company({ company_name, job_start_date, job_end_date, designation, i, year_list }) {
  let position_x = findPositionX(job_start_date, year_list)

  let start_year = parseInt(job_start_date.split('-')[2])
  let start_month = parseInt(job_start_date.split('-')[1])
  let end_year = parseInt(job_end_date.split('-')[2])
  let end_month = parseInt(job_end_date.split('-')[1])
  let width = (12 * (end_year - start_year)) + (end_month - start_month)

  useEffect(() => {
    document.getElementById(`company${i}`).style.gridArea = `${i + 1}/${position_x}/${i + 1}/ ${(position_x)+ width}`
    return () => {

    }
  }, [])
  return <div id={`company${i}`} className="company" style={{ backgroundColor: colors[i],width:"100%"}}>
    <h5>{company_name}</h5>
    {/* <span>{designation}</span> */}
  </div>
}
function YearsLabel({ no_jobs, i, year , year_list }) {
  let position_y = no_jobs + 1
  useEffect(() => {
    document.getElementById(`year${i}`).style.gridArea = `${position_y} / ${12 * i + 1} / ${(position_y) + 1} / ${12 * i + 2}`
    return () => {

    }
  }, [])

  return (year_list.length > i ?  <div id={`year${i}`} className="yearsReview" >{year}</div> : <div id={`year${i}`} className="lastYear" >{year}</div>)
}
function Skill({ skill_name,rows, skill_start_date, skill_end_date, i,j, year_list }) {
  let position_x = findPositionX(skill_start_date, year_list)
 
  let start_year = parseInt(skill_start_date.split('-')[2])
  let start_month = parseInt(skill_start_date.split('-')[1])
  let end_year = parseInt(skill_end_date.split('-')[2])
  let end_month = parseInt(skill_end_date.split('-')[1])
  let width = 12 * (end_year - start_year) + (end_month - start_month)
  let pos_y =rows-i
  useEffect(() => {
    document.getElementById(`skill${i}${j}`).style.gridArea = `${pos_y}/${position_x}/${pos_y + 1}/ ${(position_x) + width}`
    return () => {

    }
  }, [])
  return <div id={`skill${i}${j}`} className="company" style={{ backgroundColor: colors[i] }}>
    <h5>{skill_name}</h5>
  </div>
}
function findPositionX(date, arr = []) {
  let year = parseInt((date.split('-')[2]))
  let month = parseInt(date.split('-')[1])
  return arr.indexOf(year)*12 + 1 + ((month / 12).toFixed() *10)

}