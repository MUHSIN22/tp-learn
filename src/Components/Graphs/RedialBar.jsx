import React, { useState } from "react";
import Chart from "react-apexcharts";
export default function RedialBar({ data, width }) {

  const [state, setState] = useState({
    options : {
        series: [50],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%',
            margin:"50"
          }
        },
      },
      labels: [''],
      colors: ['#009933'],
      fill: {
        pattern: {
          strokeWidth: 2,
        },
      },
      }
  })
  return (
    <div className="donut justify-between ">
      <Chart
        options={state.options}
        series={state.options.series}
        type="radialBar"
        width="70%"
      />
      <div className="legend">
      </div>
    </div>
  )
}




