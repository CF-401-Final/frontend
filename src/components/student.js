import React from 'react';

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
      <div>

        <h1>Student</h1>
        <BarGraph data={this.props.data}></BarGraph>

        <form onSubmit={this.sendQuestion} >
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
        </form>

        {/* TODO: ongoing classroom understanding form */}

      </div>
    )

  }

}