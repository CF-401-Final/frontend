import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instructor from './components/instructor.js';
import Student from './components/student.js';

// import './App.css';
import Sockette from 'sockette';

const socket = new Sockette('wss://ux9oyskfdg.execute-api.us-east-1.amazonaws.com/dev', {
  timeout: 5e3,
  maxAttempts: 10,
  onopen: e => console.log('Connected!', e),
  onmessage: e => console.log('Recieved', e),
  onreconnect: e => console.log('Reconnecting...', e),
  onmaximum: e => console.log('Stop Attempting!', e),
  onclose: e => console.log('Closed!', e),
  onerror: e => console.log('Error:', e)
});

function App() {
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
            <Student />
          </Route>
          <Route path="/instructor">
            <Instructor />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
