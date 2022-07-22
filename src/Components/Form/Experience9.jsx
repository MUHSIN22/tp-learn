import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectResumeDetails } from '../../redux/Features/ResumeSlice'
import Control from './Control'

export default function Experience9({setProgress}) {
  const dispatch = useDispatch()
  const info = useSelector(selectResumeDetails)
  return (
    <>
    <div className='col-100 align-start'>
        <h1>Wow, {info.name}! We had no idea you were this talented. </h1>
        <p className='text-left'>Gone are the days when there was an age to learn and then the age to earn. Now is the time for continuous learning. </p>
        <span className="crumbs-red">
             Earn as you learn 
        </span>
        <p className='text-left'>Talentplace has some amazing internship & freelancing opportunities for students.</p>
        <span className="crumbs-green">
            Learn as you earn 
        </span>
        <p className='text-left'>We also have huge number of skill learning modules to keep you up to date with industry demands.</p>
    </div>
    <Control handleSubmit={()=>dispatch(setProgress(8))} />
    </>
  )
}
