import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import BarGraph from './BarGraph.js';
import VolumeSlider from './Slider.js';
import Image from 'react-bootstrap/Image'
export default class Student extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      voteValue: 0,
      tempValue: 2.5
    }

    this.sendQuestion = (e) => {

      e.preventDefault();

      this.props.sendData({
        action: "sendMessage",
        data: {
          voteValue: this.state.voteValue,
          tempValue: this.state.tempValue
        }
      });
    }

    this.updateValue = (e) => {


      let value = e.target.value;
      this.setState({ voteValue: value })
    }

    this.updateTemp = (e) => {

      let newState = this.state;
      newState.tempValue = e.target.value;
      this.setState(newState);
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
                <input type="radio" onClick={this.updateValue} name="vote" value="0" />0
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

        <VolumeSlider></VolumeSlider>
        <h2>Temperature</h2>

        <p>Current Avg Temp {this.props.data.temperatureAvg}</p>

        <Form onSubmit={this.sendQuestion} style={{ margin: 'auto', position: 'relative', minWidth: 100, maxWidth: 300 }}>
          <Form.Row>
            <Form.Group as={Col}>
              <label>
                <input type="radio"
                  onClick={this.updateTemp} name="vote" value="0"
                  onChange={this.updateTemp}
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />0
              <span style={{ fontSize: "3em", color: "Red" }}><i className="fas fa-tired"></i></span>
              </label>

              <label>
                <input type="radio" onClick={this.updateTemp} name="vote" value="1"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />1
              <span style={{ fontSize: "3em", color: "Tomato" }}><i class="fas fa-flushed"></i></span>
              </label>
              <label>
                <input type="radio" onClick={this.updateTemp} name="vote" value="2"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />2<span style={{ fontSize: "3em", color: "DarkOrange" }}><i class="fas fa-meh"></i></span>
              </label>
              <label>
                <input type="radio" onClick={this.updateTemp} name="vote" value="3"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />3<span style={{ fontSize: "3em", color: "YellowGreen" }}><i class="fas fa-meh"></i></span>
              </label>
              <label>
                <input type="radio" onClick={this.updateTemp} name="vote" value="4"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />4<span style={{ fontSize: "3em", color: "GreenYellow" }}><i class="fas fa-smile"></i></span>
              </label>
              <label>
                <input type="radio" onClick={this.updateTemp} name="vote" value="5"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />5<span style={{ fontSize: "3em", color: "LimeGreen" }}><i class="fas fa-grin-beam"></i></span>
              </label>
              <input type="submit" value="Submit" />
            </Form.Group>
          </Form.Row>
        </Form>

      </Container>
    )
  }
}