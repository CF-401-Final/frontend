import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      // make graph a reasonable size here https://www.chartjs.org/docs/latest/general/responsive.html
      <div style={{ width: 500, height: 300 }}>
        <Bar
          options={{
            legend: {
              labels: {
                boxWidth: 0,
                responsive: true,
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
                    max: 30,
                    stepSize: 5,
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


                data: [this.props.data.zeroCount, this.props.data.oneCount, this.props.data.twoCount, this.props.data.threeCount,
                this.props.data.fourCount, this.props.data.fiveCount]
              }
            ]

          }}

        />
      </div>
    )
  }

}