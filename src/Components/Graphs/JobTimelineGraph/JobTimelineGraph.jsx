import moment from 'moment'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function JobTimelineGraph({jobs}) {
    const [state,setState] = useState({ 
        series: [],
        options: {
          chart: {
            height: 350,
            type: 'rangeBar'
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '50%',
              rangeBarGroupRows: true
            }
          },
          colors: [
            "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0",
            "#3F51B5", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
            "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
          ],
          fill: {
            type: 'solid'
          },
          xaxis: {
            type: 'datetime'
          },
          legend: {
            position: 'right'
          },
          tooltip: {
            x: {
                show: true
            },
            custom: function(opts) {
                console.log(opts,"this is opts");
              const fromYear = new Date(opts.y1).getFullYear()
              const toYear = new Date(opts.y2).getFullYear()
              const values = opts.ctx.rangeBar.getTooltipValues(opts)
            console.log(fromYear,toYear,values);
              return (
                `<div className="job-role-tooltip">
                    ${values.seriesName} ${fromYear}-${toYear}
                </div>`
              )
            }
          }
        },
      })

      useEffect(() => {
        console.log(jobs);
        jobTimelineSeriesCreator()
      },[])

      const jobTimelineSeriesCreator = () => {
        let series = [];

        for(let i=0;i<jobs.length;i++){
            let isInSeries = false;
            for(let j = 0; j< series.length ; j++){
                if(series[j].name === jobs[i].timeline.job_level_name){
                    console.log('here',series[j].name, jobs[i].timeline.job_level_name);
                    series[j].data.push({
                        x: jobs[i].company_name,
                        y: [
                            new Date(moment(jobs[i].timeline.job_start_date,'dd-mm-yyyy')).getTime(),
                            new Date(moment(jobs[i].timeline.job_end_date,'dd-mm-yyyy')).getTime()
                        ]
                    })
                    isInSeries = true;
                }
            }
            if(!isInSeries){
                let data = {
                    name: jobs[i].timeline.job_level_name,
                    data: [
                        {
                            x: jobs[i].company_name,
                            y: [
                                new Date(moment(jobs[i].timeline.job_start_date,'dd-mm-yyyy')).getTime(),
                                new Date(moment(jobs[i].timeline.job_end_date,'dd-mm-yyyy')).getTime()
                            ]
                        }
                    ]
                }
                series.push(data)
            }
        }
        setState({...state,series})
        console.log(series,"this is series");
      }

  return (
    <div className="job-timeline-graph">
        <ReactApexChart options={state.options} series={state.series} type="rangeBar" height={350} />
    </div>
  )
}
