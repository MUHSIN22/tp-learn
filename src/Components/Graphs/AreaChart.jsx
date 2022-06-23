import Chart from "react-apexcharts";
import React, { useState } from "react";


export default function AreaChart() {
    const [state, setState] = useState({
        stroke: {
            curve: 'smooth',
            // OR provide an array
            curve: ['smooth']
        },
        options: {

            chart: {
                height: 350,
                type: 'area',
                toolbar :{
                    show: false
                }

            },
            
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 1,
                curve: 'smooth',
                colors:['#FF5E2F']
            },
            xaxis: {
                type: 'category',
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                lines: {
                    show: false,
                },
                labels:{
                    style: {
                        colors: [],
                        fontSize: '8px',
                        fontWeight: 400,
                        align: 'left',
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
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
                colors:['#FF5E2F'],
                type: "gradient",
                gradient: {
                    
                  shadeIntensity: 1,
                  opacityFrom: 0.4,
                  opacityTo: 0.7,
                  stops: [0, 90, 100]
                }
              },
        },
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
    })
    return (

            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="100%"
                height={120}
            />
    )
}
