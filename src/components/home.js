import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Container className="home" >
      <Row className="justify-content-md-center">
      <Col s={12} md={7}>
        <h1>Hands of Five</h1>
        <p><i className="fas fa-hand-paper handsFive"></i></p>
        
        <p>Hands of Five is an app that allows classroom instructors to gauge the understanding of their students in real time.</p>
          
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={5}>
        {/* <Link to="/instructor"><Button variant="info" size="lg" block>Instructor</Button></Link><br /> */}
              <Link to="/student"><Button variant="info" size="lg" block>Students</Button></Link>
          <br/>
          <Link to="/about"><Button variant="info" size="lg" block>About Us</Button></Link>
        </Col>
      </Row>
    </Container>
    )
  }
}