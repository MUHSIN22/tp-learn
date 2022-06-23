import React from 'react'
import avatar from '../../Assests/avatar.png'
import RecommendationLoader from '../Loaders/RecommendationLoader'
export default function Recommendation() {
  return (
    <div className="recommendation section_2 col-100 align-center">
      <div className="col-90">
        <h3>Recommendation</h3>
        <span className="divider"></span>
       {false?<div className="col-100 g-2">
        <RecommendationCard />
        <RecommendationCard />
        <RecommendationCard />
        </div>:<RecommendationLoader/>}
        
      </div>
    </div>
  )
}
function RecommendationCard() {
  return (
    <div className="card flex-row-start">
      <div className="col-20 justify-center">
        <img src={avatar} alt="" />
      </div>
      <div className="col-70 g-0-5">
        <h5>Farroq Haque </h5>
        <p>Founder-Talentplace</p>
        <p>Farooq is direct manager to Pratiksha</p>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </p>
      </div>
    </div>
  )
}