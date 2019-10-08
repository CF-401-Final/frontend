import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarGraph extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div>
        <Bar
          options={{
            legend: {
              labels: {
                boxWidth: 0,
                fontColor: 'aqua',
                fontSize: 30,

              },

            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    fontColor: 'aqua',
                    fontSize: 15,
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    fontColor: 'aqua',
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
                // backgroundColor: this.state.cityData.categories.map(el => el.score_out_of_10 > 7 ? 'green' : el.score_out_of_10 > 4 && el.score_out_of_10 <= 7 ? 'yellow' : 'red'),
                borderWidth: 1,
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