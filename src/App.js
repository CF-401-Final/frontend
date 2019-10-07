import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instructor from './components/instructor.js';
import Student from './components/student.js';


// import './App.css';
import Sockette from 'sockette';

let socket = null;

function App() {

  const [data, setData] = useState({
    zeroCount:0,
    oneCount:0,
    twoCount:0,
    threeCount:0,
    fourCount: 0,
    fiveCount:0,
    totalConnections:0
  });
useEffect(
  () => {
    if(socket===null){
      socket = new Sockette('wss://ux9oyskfdg.execute-api.us-east-1.amazonaws.com/dev',{
        timeout: 5e3,
        maxAttempts: 10,
        onopen: e => console.log('Connected!', e),
        onmessage: e => getData(e),
        onreconnect: e => console.log('Reconnecting...', e),
        onmaximum: e => console.log('Stop Attempting!', e),
        onclose: e => console.log('Closed!', e),
        onerror: e => console.log('Error:', e)
      });
    }
    
  },
  [data]
);
function getData(e){
  console.log(JSON.parse(e.data))
  setData(JSON.parse(e.data));
  console.log(data)
}

function sendData(vote){
  socket.json(vote)
}


  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/instructor">Instructor View</Link>
            </li>
            <li>
              <Link to="/student">Student View</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/student">
            <Student data={data} sendData={sendData}/>
          </Route>
          <Route path="/instructor">
            <Instructor data={data} sendData={sendData}/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
