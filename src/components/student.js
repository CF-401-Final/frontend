import React from 'react';

export default class Student extends React.Component {

constructor(props){
  super(props)
  this.state = {
    voteValue : 0
  }

  this.sendQuestion = (e) =>{
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
    this.setState({voteValue: value})
  }
}

  render() {
    return (
      <div>
        <h1>Student</h1>
        <h1>total Connect {this.props.data.totalConnections}</h1>
        <h1>zeroCount {this.props.data.zeroCount}</h1>
        <h1>oneCount {this.props.data.oneCount}</h1>
        <h1>twoCount {this.props.data.twoCount}</h1>
        <h1>threeCount {this.props.data.threeCount}</h1>
        <h1>fourCount {this.props.data.fourCount}</h1>
        <h1>fiveCount {this.props.data.fiveCount}</h1>

        <form onSubmit={this.sendQuestion} >
          <label>
            <input type="radio"
              onClick={this.updateValue} name="vote" value="0" />0
          </label>

          <label>
            <input type="radio"  onClick={this.updateValue} name="vote" value="1" />1
          </label>
          <label>
            <input type="radio"  onClick={this.updateValue} name="vote" value="2" />2
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