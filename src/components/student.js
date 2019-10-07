import React from 'react';
import Sockette from 'sockette';


const socket = new Sockette('wss://ux9oyskfdg.execute-api.us-east-1.amazonaws.com/dev', {
  timeout: 5e3,
  maxAttempts: 10,
  onopen: e => console.log('Connected!', e),
  onmessage: e => console.log('Received', e),
  onreconnect: e => console.log('Reconnecting...', e),
  onmaximum: e => console.log('Stop Attempting!', e),
  onclose: e => console.log('Closed!', e),
  onerror: e => console.log('Error:', e)
});
export default class Student extends React.Component {

  render() {
    function sendQuestion(e) {
      console.log("something", e);
      e.preventDefault();

      socket.json({
        action: "sendMessage",
        data: e.target.question.value
      });
    }
    return (
      <div>
        <h1>Student</h1>
        <form >
          <label>
            <input type="radio"
              onChange={this.sendQuestion} name="vote" value="0" />0
          </label>

          <label>
            <input type="radio" name="vote" value="1" />1
          </label>
          <label>
            <input type="radio" name="vote" value="2" />2
          </label>
          <label>
            <input type="radio" name="vote" value="3" />3
          </label>
          <label>
            <input type="radio" name="vote" value="4" />4
          </label>
          <label>
            <input type="radio" name="vote" value="5" />5
          </label>
          <input type="button" value="Submit" />
        </form>

        {/* TODO: ongoing classroom understanding form */}

      </div>
    )

  }
}