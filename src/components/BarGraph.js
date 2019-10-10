import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph =(props) => {
    return (
      // make graph a reasonable size here https://www.chartjs.org/docs/latest/general/responsive.html
      <div className='chart-container' style={{ margin: 'auto', position: 'relative', minWidth: 200, maxWidth: 500 }}>
        <Bar
          options={{
            legend: {
              labels: {
                boxWidth: 0,
                fontColor: 'black',
                fontSize: 15,
              },

            },

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
                    max:  props.totalConnections,
                    stepSize: 1,
                    fontColor: 'black',
                    fontSize: 15,
                  }
                }
              ]
            }
          }}

          data={{
            labels: ['zero', 'one', 'two', 'three', 'four', 'five'],
            datasets: [
              {
                label: 'Student Polling Results',
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: .5,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',

                data: [props.data.zeroCount, props.data.oneCount, props.data.twoCount, props.data.threeCount,
                props.data.fourCount, props.data.fiveCount]
              }
            ]
          }}
        />
      </div>
    )
  }

  export default BarGraph;