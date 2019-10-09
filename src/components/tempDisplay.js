import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div
        className='chart-container'
        style={{ margin: 'auto', position: 'relative', minWidth: 200, maxWidth: 500 }}
      >
        <h2>Room temp</h2>
        <h3><span>{this.props.data.temperatureAvg}</span>/5</h3>
        <Doughnut
          type={'doughnut'}
          data={
            {
              labels: ['Emotional Cowardace', 'Confidence'],

              datasets: [
                {
                  backgroundColor: ['rgb(168, 50, 50)', 'rgb(50, 168, 82)'],
                  data: [
                    this.props.data.temperatureAvg,
                    (5 - this.props.data.temperatureAvg)]
                }
              ]
            }
          }
        >
        </Doughnut>
        <hr></hr>
      </div>
    )
  }
}