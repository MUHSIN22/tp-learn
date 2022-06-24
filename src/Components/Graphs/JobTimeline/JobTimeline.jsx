import React, { useEffect } from 'react'
import './JobTimeline.css'
const colors = ['#EF6239', '#219FFF', '#FFA114','#EF6239', '#219FFF', '#FFA114','#EF6239', '#219FFF', '#FFA114']
export default function JobTimeline({ start_year, jobs = [], skills=[]}) {


  let current_year = new Date().getFullYear()
  let year_list = []
  let rows = jobs.length+skills.length + 1;
  while (start_year <= current_year) {
    year_list.push(parseInt(start_year))
    start_year++
  }
  let cols = year_list.length * 12 + 12
  //console.log(year_list,jobs,skills)
  useEffect(() => {
    let timeline = document.getElementById('jobTimeline')
    timeline.style.gridTemplateColumns = `repeat(${cols},${100 / cols}%)`
    timeline.style.gridTemplateRows = `repeat(${rows},3rem)`

    return () => {

    }
  }, [])

  return (
    <div id='jobTimeline' className="jobTimeline">
      {jobs.map((job, i) =>{ 
      
       return job.timeline.map((x,j)=><><span style={{gridArea:`${i+1}/${1}/${i+2}/${2}`, alignSelf:'center',fontWeight:'500', fontSize:'0.8rem' }}>{job.company_name}</span> <Company key={i} {...x} company_name={job.company_name} i={i} j={j} year_list={year_list} /></>)
      }
      )}
      {year_list.map((year, i) => <YearsLabel key={i} no_jobs={jobs.length} year={year} rows={rows} i={i} />)}
      {skills.map((skill, i) =>{ 
      return<><span style={{gridArea:`${rows-i}/${1}/${rows-i+1}/${2}`, alignSelf:'center',fontWeight:'500', fontSize:'0.8rem' }}>{skill.skill_name}</span>{skill.timeline.map((time, j)=> <Skill key={j} i={i} j={j} skill_start_date={time.start} skill_end_date={time.end} year_list={year_list} rows={rows  } />)}</>
      })}
    </div>
  )
}
function Company({ company_name, job_start_date='', job_end_date='', job_level_name, i,j, year_list }) {
  let position_x = findPositionX(job_start_date, year_list)

  let start_year = parseInt(job_start_date&&job_start_date.split('-')[2])
  let start_month = parseInt(job_start_date&&job_start_date.split('-')[1])
  let end_year = parseInt(job_end_date&&job_end_date.split('-')[2])
  let end_month = parseInt(job_end_date&&job_end_date.split('-')[1])
  let width = (12 * (end_year - start_year)) + (end_month - start_month)

  useEffect(() => {
    document.getElementById(`company${i}`).style.gridArea = `${i + 1}/${position_x+12}/${i + 1}/ ${(position_x)+ width+24}`
    //console.log(`${position_y} / ${i+1} / ${(position_y)+1} / ${i+2}`)
    return () => {

    }
  }, [])
  return <div id={`company${i}`} className="company" style={{ backgroundColor: colors[i] }}>
    <h5>{company_name}</h5>
    <span>{job_level_name}</span>
  </div>
}
function YearsLabel({ no_jobs, i, year }) {
  let position_y = no_jobs + 1
  useEffect(() => {
    document.getElementById(`year${i}`).style.gridArea = `${position_y} / ${12 * i + 12} / ${(position_y) + 1} / ${12 * i +24}`
    return () => {

    }
  }, [])

  return <div id={`year${i}`} className="years" >{year}</div>
}
function Skill({ rows, skill_start_date='', skill_end_date='', i,j, year_list }) {
  let position_x = findPositionX(skill_start_date, year_list)
 
  let start_year = parseInt(skill_start_date.split('-')[2])
  let start_month = parseInt(skill_start_date.split('-')[1])
  let end_year = parseInt(skill_end_date.split('-')[2])
  let end_month = parseInt(skill_end_date.split('-')[1])
  let width = 12 * (end_year - start_year) + (end_month - start_month)
  let pos_y =rows-i
  useEffect(() => {
    document.getElementById(`skill${i}${j}`).style.gridArea = `${pos_y}/${position_x+12}/${pos_y + 1}/ ${(position_x) + width+24}`
    //console.log(`${position_y} / ${i+1} / ${(position_y)+1} / ${i+2}`)
    return () => {

    }
  }, [])
  return <div id={`skill${i}${j}`} className="company" style={{ backgroundColor: colors[i] }}>
  </div>
}
function findPositionX(date, arr = []) {
  let year = parseInt((date.split('-')[2]))
  let month = parseInt(date.split('-')[1])
  return arr.indexOf(year)*12 + 1 + ((month / 12).toFixed() *10)

}