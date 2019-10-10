import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { directive } from '@babel/types';

export default class TemperatureForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      voteValue: 0,
      tempValue: 2.5
    }

    this.updateTemp = (e) => {
      e.preventDefault();
      let newState = this.state;
      newState.tempValue = e.target.value;
      console.log("newState", newState);
      this.setState(newState);
    }
  }
  render() {
    return (
      <div>
        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <button type="submit"
                  onClick={this.updateTemp} name="vote" value="0"

                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />0
          <span style={{ fontSize: "3em", color: "Red" }}><i className="fas fa-tired"></i></span>
              </label>
            </Form.Group>
          </Form.Row>
        </Form>

        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="1"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />1
          <span style={{ fontSize: "3em", color: "Tomato" }}><i class="fas fa-flushed"></i></span>
              </label>
            </Form.Group>
          </Form.Row>
        </Form >
        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="2"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />2<span style={{ fontSize: "3em", color: "DarkOrange" }}><i class="fas fa-meh"></i></span>
              </label>
            </Form.Group>
          </Form.Row>
        </Form>
        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <button type="submit" onClick={this.updateTemp} name="vote" value="3"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />3<span style={{ fontSize: "3em", color: "YellowGreen" }}><i class="fas fa-meh"></i></span>
              </label>
            </Form.Group>
          </Form.Row>
        </Form>
        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="4"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />4<span style={{ fontSize: "3em", color: "GreenYellow" }}><i class="fas fa-smile"></i></span>
              </label>
            </Form.Group>
          </Form.Row>
        </Form>
        <Form style={{ margin: 'auto', position: 'relative', minWidth: 25, maxWidth: 50 }}>
          <Form.Row>
            <Form.Group>
              <label>
                <input type="submit" onClick={this.updateTemp} name="vote" value="5"
                  style={{
                    position: "absolute",
                    opacity: "0"
                  }} />5<span style={{ fontSize: "3em", color: "LimeGreen" }}><i class="fas fa-grin-beam"></i></span>
              </label>

            </Form.Group>
          </Form.Row >
        </Form >
      </div>
    )
  }
}