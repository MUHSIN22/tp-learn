import React from 'react'
import AreaChart from '../Graphs/AreaChart'
import ColumnChart from '../Graphs/ColumnChart'
import MultiDonut from '../Graphs/MultiDonut'

export default function OverviewCard2() {
  return (
    <div className="overview flex-row-between">
        <div className="col-40">
          <h3>Industry Overview</h3>
            <MultiDonut  data={{"Information technology":50, "Marketing":85,"E-commerce":70,"Recruiters":45}} width={'130%'}/>
        </div>
        <div className="col-60 ">
            <h3>MNC</h3>
            <AreaChart />
            <h3>Service Based</h3>
            <ColumnChart/>
        </div>
    </div>
  )
}
