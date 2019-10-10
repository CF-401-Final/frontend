import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    
    return (
      <Line
          redraw
          options={{
            legend: {
              labels: {
                boxWidth: 0,
                fontColor: 'black',
                fontSize: 15,
              },

            },
            animation: {
              duration: 0 // general animation time
          },
          hover: {
              animationDuration: 0 // duration of animations when hovering an item
          },
          responsiveAnimationDuration: 0,
            scales: {
              xAxes: [
                {
                  ticks: {
                    boxWidth: 0,
                    fontColor: 'black',
                    fontSize: 15,
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    min: 0,
                    max: 5,
                    stepSize: 1,
                    fontColor: 'black',
                    fontSize: 15,
                  }
                }
              ]
            }
          }}

          data={{
            labels: props.lineData.labels,
            datasets: [
              {
                label: 'Historical Room Temp',
                fill: false,
                backgroundColor: '',
                borderColor: 'red',
                borderWidth: 1.5,

                data: props.lineData.avgs
              }
            ]
          }}
        />
    )
  }

  export default LineChart;