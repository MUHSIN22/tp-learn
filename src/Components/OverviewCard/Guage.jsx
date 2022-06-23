import React from 'react'

export default function Guage({ label,value, color }) {
    return (
        <div className="col-100 align-center g-0-5">
            <div className={`guage ${color}`}>
                <div className="inner">
                    <span>{value}</span>
                </div>
            </div>
            <p className='guage-label text-center'>{label}</p>
        </div>

    )
}
