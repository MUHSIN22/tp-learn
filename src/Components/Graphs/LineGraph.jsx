import Chart from "react-apexcharts";
import React, { useEffect, useState } from "react";
import moment from "moment";

export default function LineGraph({label,category,x_series, salary,management}) {
    const [state, setState] = useState({
        options: {
            chart: {
                width: "100%",
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
               type: 'datetime',
               categories: category,
               title: {
                text: "Year"
               },
               label: 'this is x axis'
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
                borderColor: '#8c8c8c63',
                strokeDashArray: 20,
                position: 'back',
                yaxis: {
                    lines: {
                        show: true,
                        offsetX: 0,
                        offsetY: 0,
                        opacityFrom: 0.5,
                        opacityTo: 0.5
                    }
                },
                xaxis: {
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
                enabled: true,
                x:{
                    show: true,
                    format: 'yyyy'
                }
            },
            legend:{
                show: false
            }
        },
        series: [
        {
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
                // width="100%"
                height={250}
            />
        </div>
    )
}
