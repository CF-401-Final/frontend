import React from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
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
            labels: this.props.lineData.labels,
            datasets: [
              {
                label: 'Student Polling Results',
                fill: false,
                backgroundColor: '',
                borderColor: 'red',
                borderWidth: 1.5,

                data: this.props.lineData.avgs
              }
            ]
          }}
        />
    )
  }
}