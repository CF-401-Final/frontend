import React from 'react';
import GraphData from './GraphData.js';
import BarGraph from './BarGraph.js';
import Button from 'react-bootstrap/Button';


export default class Instructor extends React.Component {
  constructor(props) {
    super(props)
   
    this.handle = (e)=>{
      e.preventDefault();
      
      this.props.sendData({
        action: "sendMessage",
        data: {
          isInstructor: true,
          topic: e.target.topic.value
      }
    })
  }

  this.saveToLocalStorage = () => {
    // get the array from local storage if one does not exist creat an empty array
    let questions = JSON.parse(localStorage.getItem("questions") || "[]");
    
    // build the object
    let questionData = this.props.data;
    questionData.time = Date.now();
    
    // // push obj into arr
    questions.push(questionData);
    
    localStorage.setItem("questions", JSON.stringify(questions))
  }

  }
  render() {
    return (
      <div>
        <header>Hands of Five</header>
        <h1>Instructor View</h1>
        <h2>{this.props.data.topic}</h2>
        <BarGraph data={this.props.data}></BarGraph>
        <GraphData data={this.props.data}></GraphData>
        <form type="submit" onSubmit={this.handle} name="topic">
          <label>Topic:
        <input type="text" name="topic"></input>
          </label>
          <button type="submit" >Post</button>
        </form>
        
        <h3>Current Question: Lorem Epsum</h3>
        <Button onClick={this.saveToLocalStorage}>Save Question Data</Button>

      </div>
    )
  }
}