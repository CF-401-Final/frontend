import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import BarGraph from './BarGraph.js';

export default class Student extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      voteValue: 0
    }

    this.sendQuestion = (e) => {
      console.log("something", e);
      e.preventDefault();

      this.props.sendData({
        action: "sendMessage",
        data: this.state.voteValue
      });
    }

    this.updateValue = (e) => {
      console.log('e target value: ', e.target.value);

      let value = e.target.value;
      this.setState({ voteValue: value })
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <h1>Student</h1>
            <h2>{this.props.data.topic}</h2>
            <BarGraph data={this.props.data}></BarGraph>
          </Col>
        </Row>
        <Form onSubmit={this.sendQuestion}
          style={{ margin: 'auto', position: 'relative', minWidth: 100, maxWidth: 300 }}>
          <Form.Row>
            <Form.Group as={Col}>
              <label>
                <input type="radio"
                  onClick={this.updateValue} name="vote" value="0" />0
          </label>

              <label>
                <input type="radio" onClick={this.updateValue} name="vote" value="1" />1
          </label>
              <label>
                <input type="radio" onClick={this.updateValue} name="vote" value="2" />2
          </label>
              <label>
                <input type="radio" onClick={this.updateValue} name="vote" value="3" />3
          </label>
              <label>
                <input type="radio" onClick={this.updateValue} name="vote" value="4" />4
          </label>
              <label>
                <input type="radio" onClick={this.updateValue} name="vote" value="5" />5
          </label>
              <input type="submit" value="Submit" />

            </Form.Group>
          </Form.Row>
        </Form>

        {/* TODO: ongoing classroom understanding form */}


      </Container>
    )

  }

}