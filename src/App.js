import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Instructor from './components/instructor.js';
import Student from './components/student.js';
import About from './components/about.js';
import Home from './components/home.js';
import History from './components/History.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import './App.css';
import Sockette from 'sockette';

let socket = null;

function App() {

  const [data, setData] = useState({
    zeroCount: 0,
    oneCount: 0,
    twoCount: 0,
    threeCount: 0,
    fourCount: 0,
    fiveCount: 0,
    totalConnections: 0,
    topic: 'Whats Your Understanding',
    temperatureAvg: 2.5
  });
  useEffect(
    () => {
      if (socket === null) {
        socket = new Sockette('wss://ux9oyskfdg.execute-api.us-east-1.amazonaws.com/dev', {
          timeout: 5e3,
          maxAttempts: 10,
          onopen: e => didConnect(e),
          onmessage: e => getData(e),
          onreconnect: e => console.log('Reconnecting...', e),
          onmaximum: e => console.log('Stop Attempting!', e),
          onclose: e => console.log('Closed!', e),
          onerror: e => console.log('Error:', e)
        });
      }

    },
    []
  );

  function didConnect(e) {
    socket.json({ "action": "sendMessage", "data": { "voteValue": "-1", "tempValue": "2.5" } });
  }

  function getData(e) {
    console.log(JSON.parse(e.data))
    setData(JSON.parse(e.data));
    console.log(data)
  }

  function sendData(vote) {
    socket.json(vote)
  }

  return (
    <React.Fragment>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Hands of Five</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/instructor">Instructor View</Link>
              <Link className="nav-link" to="/student">Student View</Link>
              <Link className="nav-link" to="/about">About Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/student">
            <Student data={data} sendData={sendData} />
          </Route>
          <Route path="/instructor">
            <Instructor data={data} sendData={sendData} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/history">
            <History />
          </Route>

        </Switch>
      </Router>

    </React.Fragment>
  );
}

export default App;
