import React from 'react'
import { ReactComponent as Check } from '../../Assests/icons/check.svg';
export default function Steps({name, state,index}) {
  return (
    <div className={`step ${state}`}>
        <div className="circle">
            {state==='complete'?<Check/>:index}
        </div>
        {name}
    </div>
  )
}
