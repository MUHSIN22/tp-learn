import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function TimelineChart({skills}) {
    console.log(skills,"this is skills info");
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
          colors: ["#3F51B5"],
          fill: {
            type: 'solid'
          },
          xaxis: {
            type: 'datetime'
          },
          legend: {
            show: false
          },
          tooltip: {
            custom: function(opts) {
              const fromYear = new Date(opts.y1).getFullYear()
              const toYear = new Date(opts.y2).getFullYear()
              const values = opts.ctx.rangeBar.getTooltipValues(opts)
          
              return (
                ''
              )
            }
          }
        },
      })

      useEffect(() => {
        setState({...state,series: makeSeries()})
      },[skills])

      const makeSeries = () => {
        let series = [];
        skills.forEach(skill => {
            skill.timeline.forEach(timeline => {
                console.log(timeline,skill,new Date(moment(timeline.start_date,'DD-MM-YYYY')),timeline.end_date,'skill and timeline');
                series.push({
                    name: 'Experience',
                    data: [
                      {
                        x: skill.skill_name,
                        y: [
                          new Date(moment(timeline.start_date,'DD-MM-YYYY')).getTime(),
                          new Date(moment(timeline.end_date,'DD-MM-YYYY')).getTime()
                        ]
                      },
                    ]
                  },)
            })
        })
        return series;
      }
    return (
        <div className="ArearChart">
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="rangeBar"
                height={350}
            />
        </div>
    );
}
