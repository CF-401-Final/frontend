import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import BarGraph from './BarGraph.js';
import DoughnutChart from './tempDisplay.js'
import LineChart from './LineChart.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Instructor extends React.Component {
  constructor(props) {
    super(props)

    this.handle = (e) => {
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
      questions.unshift(questionData);
      localStorage.setItem("questions", JSON.stringify(questions))
    }
  }
  render() {
    
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col >
            <h1>Instructor View</h1>
            

            <Form inline className="justify-content-center" type="submit" onSubmit={this.handle} name="topic">
              <Form.Label>Topic: </Form.Label>
              <Form.Control name="topic" type="text" placeholder="e.g. How was lab today?" className="mr-sm-2" />
              <Button type="submit" >Post</Button>
            </Form>

          {/* 
          <Form type="submit" onSubmit={this.handle} name="topic" style={{ margin: 'auto', position: 'relative', minWidth: 100, maxWidth: 300 }} >
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Topic: </Form.Label>
              <Form.Control name="topic" type="text" placeholder="e.g. How was lab today?" />
            </Form.Group>
            <Button type="submit" >Post</Button>
          </Form.Row>
        </Form> */}

            <h2>{this.props.data.topic}</h2>

            <BarGraph data={this.props.data}></BarGraph>
            <p><br /><Button onClick={this.saveToLocalStorage} size="sm" >Save Topic</Button><Link to="/history"> <Button variant="info" size="sm" >View Saved Topics</Button></Link></p>

            <hr />

            <DoughnutChart data={this.props.data}></DoughnutChart>

            <hr />
            
          </Col>
        </Row>
        {/* https://react-bootstrap.github.io/components/forms/ */}
          <LineChart lineData={this.props.lineData}/>
      </Container >
    )
  }
}