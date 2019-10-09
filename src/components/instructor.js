import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import GraphData from './GraphData.js';
import BarGraph from './BarGraph.js';
import Button from 'react-bootstrap/Button';


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
    questions.push(questionData);
    
    localStorage.setItem("questions", JSON.stringify(questions))
  }

  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col >
            <h1>Instructor View</h1>
            <h2>{this.props.data.topic}</h2>

            <BarGraph data={this.props.data}></BarGraph>
          </Col>
        </Row>
        {/* https://react-bootstrap.github.io/components/forms/ */}
        <Form type="submit" onSubmit={this.handle} name="topic" style={{ margin: 'auto', position: 'relative', minWidth: 100, maxWidth: 300 }} >
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Topic: </Form.Label>
              <Form.Control name="topic" type="text" placeholder="e.g. How was lab today?" />
            </Form.Group>
            <Button type="submit" >Post</Button>
          </Form.Row>
        </Form>
        <GraphData data={this.props.data}></GraphData>

        <form type="submit" onSubmit={this.handle} name="topic">
          <label>Topic:
        <input type="text" name="topic"></input>
          </label>
          <button type="submit" >Post</button>
        </form>
        
        <h3>Current Question: Lorem Epsum</h3>
        <Button onClick={this.saveToLocalStorage}>Save Question Data</Button>


      </Container >


    )
  }
}