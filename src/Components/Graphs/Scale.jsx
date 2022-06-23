import React from 'react'
import './Scale.css'
export default function Scale({first,second}) {
  return (
    <div className="scale">
        <div style={{left:`${first}%`}} className="dot"></div>
        <div style={{left:`${second}%`}} className="dot"></div>
    </div>
  )
}
