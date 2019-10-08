import React from 'react';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class Home extends React.Component {
  render() {
    return (
      <Container >
      <Row className="justify-content-md-center">
      <Col s={12} md={7}>
        <h1>Hands of Five</h1>
        <p><i className="fas fa-hand-paper handsFive"></i></p>
        
        <p>Hands of Five is an app that allows classroom instructors to gauge the understanding of their students in real time.</p>
          <Button variant="primary">Instructor</Button>
          <Button variant="success">Student</Button>
        </Col>
      </Row>
    </Container>
    )
  }
}