import Chart from "react-apexcharts";
import React, { useState } from "react";

export default function LineGraph({label,category,x_series, salary,management}) {
    const [state, setState] = useState({
        options: {

            chart: {
                type: 'area',
                toolbar :{
                    show: false
                },
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 6,
                    left: 0,
                    blur: 12,
                    color: undefined,
                    opacity: 0.2
                }

            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 4,
                curve: 'smooth',
                colors:['#EF6239','#21CE93','#219FFF','#FFA114']
            },
            xaxis: {
                type: 'category',
                categories: category,
                lines: {
                    show: true,
                },
                labels:{
                    show:label
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: true,
                }
            },
            yaxis:[
                {
                  title: {
                    text: "Salary"
                  },
                },
                {
                  opposite: true,
                  title: {
                    text: "Management"
                  }
                }
              ],
            grid: {
                show: true,
                borderColor: '#F3F4F6',
                strokeDashArray: 0,
                position: 'back',
                yaxis: {
                    lines: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        opacityFrom: 0.5,
                        opacityTo: 0.5
                    }
                }
            },
            tooltip: {
                enabled: true
            },
            legend:{
                show: false
            }
        },
        series: [{
            name: 'Salary',
            data: salary
        },
        {
            name: 'Management',
            data: management
        }
    ],
    })
    return (
        <div className="ArearChart">
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="100%"
                height={250}
            />
        </div>
    )
}
