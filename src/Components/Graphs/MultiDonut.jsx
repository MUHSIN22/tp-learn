import React, { useState } from "react";
import Chart from "react-apexcharts";
import './MultiDonut.css'

export default function MultiDonut({ data, width }) {
  const labels = Object.keys(data);
  const values = Object.values(data);
  const [state, setState] = useState({
    options: {
      labels: labels,
      legend: {
        show: false,
        floating: true,
        fontSize: "16px",
        position: "right",

        labels: {
          useSeriesColors: true
        },
        itemMargin: {
          horizontal: 0,
          vertical: 0
        },
        inverseOrder: true
      },
      stroke: {
        curve: "smooth",
        lineCap: "round",
        width: 2
      },
      chart: {
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 2000,
          animateGradually: {
            enabled: true,
            delay: 500
          },
          dynamicAnimation: {
            enabled: true,
            speed: 250
          }
        }
      },
      plotOptions: {
        radialBar: {
          size: 20,
          inverseOrder: false,
          startAngle: 0,
          endAngle: 360,
          offsetX: 0,
          offsetY: 0,
          hollow: {
            size: "45%",
            background: "transparent"
          },
          track: {
            show: true,
            background: "#E8EAEC",
            strokeWidth: "100%",
            opacity: 1,
            margin: 5
          },
          dataLabels: {
            show: false,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val + "%";
              }
            },
            total: {
              show: true,
              label: "Total",
              color: "#373d3f",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                  w.globals.series.length +
                  "%"
                );
              }
            }
          }
        }
      },
      fill: {
        pattern: {
          strokeWidth: 1,
        },
      },
      colors: ['#EF6239', '#21CE93', '#219FFF', '#FFA114']
    },

    series: values
  })
  return (
    <div className="donut justify-between ">
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        width={width}
      />
      <div className="legend">
        {labels.map((label, i) => <span key={i}><p>{label}</p><div style={{ backgroundColor: state.options.colors[i] }} className="dot"></div>{values[i]}</span>)}

      </div>
    </div>
  )
}




