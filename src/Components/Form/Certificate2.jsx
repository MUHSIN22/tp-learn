import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextForm, selectResumeDetails } from '../../redux/Features/ResumeSlice'
import Control from './Control'

export default function Certificate2({setProgress}) {
    const dispatch = useDispatch()
    const info = useSelector(selectResumeDetails)

    return (
        <>
            <h1 className='text-left my-0'><span>Pheww! </span></h1>
            <h1 className='text-left my-0'>Thank you so much {info.name} for your time & efforts. We really appreciate the fact that
                you are ready to invest so much in your
                growth & future.
            </h1>
            <p className='text-left'>Just a few minutes more & you will see how intelligent & beautiful your resume could look like. </p>
            <div className="divider"></div>
            <Control handleSubmit={()=>dispatch(setProgress(11))}/>
        </>
    )
}
