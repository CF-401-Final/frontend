import React from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
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
      <Container>
        
        <Row>
          <Col>
        <h1>Saved Questions</h1>
        <Button variant="danger" onClick={this.clearHistory}>Clear All</Button>
        {this.state.pastResults === []? <p>There Are No Results Saved</p> : 
          this.state.pastResults.map((topic,idx)=>{
            let time = new Date(topic.time).toDateString() + ' ' + new Date(topic.time).toLocaleTimeString();
            return (
              <div key={idx}>
                <hr/>
                <h2>{topic.topic}</h2>
                <p>{time}</p>
                <BarGraph data={topic}></BarGraph>
                <Button variant="danger" size="sm" onClick={this.deleteOneResult} value={idx}>Delete</Button>
                
              </div>
            )
          })
      }
      </Col>
      </Row>
        
      </Container>
    )
  }
}