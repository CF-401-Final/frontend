import React from 'react';
import GraphData from './GraphData.js';
import BarGraph from './BarGraph.js';


export default class Instructor extends React.Component {
  constructor(props) {
    super(props)

    this.handle = (e) => {
      e.preventDefault();
      console.log('click', e.target.topic.value);
      this.props.sendData({
        action: "sendMessage",
        data: {
          isInstructor: true,
          topic: e.target.topic.value
        }
      })
    }

  }
  render() {
    return (
      <div>
        <h1>Instructor View</h1>
        <h2>{this.props.data.topic}</h2>

        <BarGraph data={this.props.data}></BarGraph>
        <GraphData data={this.props.data}></GraphData>

        <form type="submit" onSubmit={this.handle} name="topic" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 300 }}>
          <label>Topic:
        <input type="text" name="topic"></input>
          </label>
          <button type="submit" >Post</button>
        </form>

      </div>
    )
  }
}