import React from 'react'

export default function Guage({ label,value, color }) {
    return (
        <div className="align-center g-0-5 guage-wrapper" style={{display: 'flex',flexDirection:"column",alignItems:"center"}}>
            <div className={`guage ${color}`}>
                <div className="inner">
                    <span>{value}</span>
                </div>
            </div>
            <p className='guage-label text-center'>{label}</p>
        </div>

    )
}
