import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TemperatureForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      voteValue: 0,
      tempValue: 2.5
    }
    // this.sendQuestion = (e) => {

    //   e.preventDefault();

    //   this.props.sendData({
    //     action: "sendMessage",
    //     data: {
    //       //         voteValue: this.state.voteValue,
    //       tempValue: this.state.tempValue
    //     }
    //   });
    // }

    //   this.updateValue = (e) => {


    //     let value = e.target.value;
    //     this.setState({ voteValue: value })
    //   }

    this.updateTemp = (e) => {

      let newState = this.state;
      newState.tempValue = e.target.value;
      this.setState(newState);
    }
  }
  render() {
    return (
      <div style={{ margin: 'auto', position: 'relative', minWidth: 200, maxWidth: 500 }}>
        <form className=""
          onSubmit={this.sendQuestion} >
          {/* https://stackoverflow.com/questions/17541614/use-images-instead-of-radio-buttons */}
          <label className="col-sm-2 control-label">
            <input type="radio"
              onClick={this.updateTemp} name="vote" value="0" style={{
                position: "absolute",
                opacity: "0"
              }} /><span style={{ fontSize: "3em", color: "Tomato" }}><i className="fas fa-tired"></i></span>
          </label>
          <label className="col-sm- control-label">
            <input type="radio" onClick={this.updateTemp} name="vote" value="1" style={{
              position: "absolute",
              opacity: "0"
            }} /><i className="fas fa-frown"></i>
          </label>
          <label>
            <input type="radio" onClick={this.updateTemp} name="vote" value="2" style={{
              position: "absolute",
              opacity: "0"
            }} /><i class="fas fa-flushed"></i>
          </label>
          <label>
            <input type="radio" onClick={this.updateTemp} name="vote" value="3" style={{
              position: "absolute",
              opacity: "0"
            }} /><i class="fas fa-meh"></i>
          </label>
          <label>
            <input type="radio" onClick={this.updateTemp} name="vote" value="4" style={{
              position: "absolute",
              opacity: "0"
            }} /><i class="fas fa-smile"></i>
          </label>
          <label>
            <input type="radio" onClick={this.updateTemp} name="vote" value="5" style={{
              position: "absolute",
              opacity: "0"
            }} /><i class="fas fa-grin-beam"></i>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}