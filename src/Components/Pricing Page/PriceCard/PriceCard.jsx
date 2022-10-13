import React from 'react'
import { TiTick } from 'react-icons/ti'
import './PriceCard.css'

export default function PriceCard({ data }) {
    return (
        <div className="price-card">
            <h3 className="price-card--title">{data.planName}</h3>
            <strong className="price-card--price">{data.planPrice}</strong>
            <p className="price-card-desc">{data.planDescription}</p>
            {
                data.planPlus &&
                <div className="span features-title">{data.planPlus}, plus:</div>
            }
            <ul className="price-card-features">
                {
                    data.planIncludes.map((include, index) => (
                        <li key={index}>
                            <span className="icon">
                                <TiTick className='tick' />
                            </span>
                            {include}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
