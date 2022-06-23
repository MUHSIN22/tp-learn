import React, { useState } from 'react'
import Chart from "react-apexcharts";
export default function ColumnChart() {
    const [state, setState] = useState({
        
        options: {
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    columnWidth: '20',
                }
            },
            chart: {
                height: 350,
                type: 'bar',
                toolbar :{
                    show: false
                }

            },
            
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1.5,
                curve: 'smooth',
                colors:['#21CE93']
            },
            xaxis: {
                labels: {
                    show: false
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                }
            },
            yaxis:{
                show: false
            },
            grid: {
                yaxis: {
                    lines: {
                        show: false,
                        offsetX: 0,
                        offsetY: 0
                    }
                }
            },
            tooltip: {
                enabled: false
            },
            fill: {
                colors:['#21CE93'],
                type: "solid",
              },
        },
        series: [{
            name: 'series1',
            data: [31, 40, 28,80,10, 51, 42, 109, 100]
        }],
    })
    return (

            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="100%"
              height={120}
            />
 
    )
}
