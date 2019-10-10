import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import BarGraph from './BarGraph.js';
import VolumeSlider from './Slider.js';
import { async } from 'q';
// import TemperatureForm from './TemperatureForm.js';
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

    this.updateTemp = async (e) => {
      e.preventDefault();
      let newState = this.state;
      newState.tempValue = e.target.value;

      let state = await this.setState(newState);
      this.sendQuestion(e);
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

        {/* Student's Current Temperature/Understanding of Lecture */}
        {/* See readme for all the lovely 'bootsrap for react' resources used */}

        <h2>Temperature</h2>
        <p>Current Avg Temp {this.props.data.temperatureAvg}</p>

        <Row className="justify-content-md-center" style={{ margin: 'auto', position: 'relative', minWidth: 380, maxWidth: 400 }}>

          <Col  >
            <Form className="text-center">
              <label>
                <input onClick={this.updateTemp} type="submit"
                  name="vote" value="0"

                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-tired"
                  style={{ fontSize: "2em", color: "Red" }}>
                  <br />
                  <span style={{ color: "Black" }} >0</span></i>
              </label>
            </Form>
          </Col>

          <Col>
            <Form className="text-center">
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="1"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-flushed"
                  style={{ fontSize: "2em", color: "Tomato" }}>
                  <br /><span style={{ color: "Black" }}>1 </span></i>
              </label>

            </Form >
          </Col>
          <Col >
            <Form className="text-center">
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="2"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-meh"
                  style={{ fontSize: "2em", color: "DarkOrange" }}>
                  <br /><span style={{ color: "Black" }}>2</span></i>
              </label>
            </Form>
          </Col>

          <Col >
            <Form className="text-center">
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="3"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-meh" style={{ fontSize: "2em", color: "YellowGreen" }}>
                  <br /><span style={{ color: "Black" }}>3</span></i>
              </label>
            </Form>
          </Col>

          <Col >
            <Form className="text-center" >
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="4"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-smile" style={{ fontSize: "2em", color: "GreenYellow" }}>
                  <br /><span style={{ color: "Black" }}>4</span></i>
              </label>
            </Form>
          </Col>

          <Col >
            <Form className="text-center">
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="5"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />
                <i className="fas fa-grin-beam" style={{ fontSize: "2em", color: "LimeGreen" }}>
                  <br /><span style={{ color: "Black" }}>5</span>
                </i>
              </label>
            </Form >
          </Col>

        </Row >
      </Container >
    )
  }
}