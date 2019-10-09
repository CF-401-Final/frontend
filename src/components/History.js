import React from 'react';
import { Bar } from 'react-chartjs-2';
import Button from 'react-bootstrap/Button'
import BarGraph from './BarGraph.js';

export default class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pastResults: []
    }
    this.clearHistory = this.clearHistory.bind(this);
    this.deleteOneResult = this.deleteOneResult.bind(this);
  }
  componentDidMount(){
    let pastResults = JSON.parse(localStorage.getItem("questions") || "[]");
    this.setState({pastResults: pastResults});
    
  }
  clearHistory(){
    localStorage.setItem("questions", JSON.stringify([]))
    this.setState({pastResults: []})
  }
  deleteOneResult(e){
    console.log(e.target.value)
    let pastResults = JSON.parse(localStorage.getItem("questions") || "[]");
    pastResults.splice(e.target.value, 1);
    localStorage.setItem("questions", JSON.stringify(pastResults));
    this.setState({pastResults: pastResults});
  }

  render() {
    return (
      <div>
        <Button onClick={this.clearHistory}>Clear All</Button>
        {this.state.pastResults === []? <p>There Are No Results Saved</p> : 
          this.state.pastResults.map((topic,idx)=>{
            let time = new Date(topic.time).toDateString() + ' ' + new Date(topic.time).toLocaleTimeString();
            return (
              <div key={idx}>
                <Button onClick={this.deleteOneResult} value={idx}>Delete Result</Button>
                <h2>{topic.topic}</h2>
                <p>{time}</p>
                <BarGraph data={topic}></BarGraph>
              </div>
            )
          })
      }
        
      </div>
    )
  }
}