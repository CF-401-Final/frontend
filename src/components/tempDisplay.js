import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {

  let evenNumber = (Math.floor(props.data.temperatureAvg * 10))/10;

    return (
      
      <div
        className='chart-container'
        style={{ margin: 'auto', position: 'relative', minWidth: 200, maxWidth: 500 }}
      >
        <h2>Room temp</h2>
        <h3>{evenNumber}</h3>
        <Doughnut
          type={'doughnut'}
          data={
            {
              labels: ['Unsure', 'Confident'],

              datasets: [
                {
                  backgroundColor: ['rgb(168, 50, 50)', 'rgb(50, 168, 82)'],
                  data: [
                    (5 - parseFloat(props.data.temperatureAvg)) , parseFloat(props.data.temperatureAvg) ]
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

  export default DoughnutChart;