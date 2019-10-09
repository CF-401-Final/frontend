import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import jane from '../images/jane.png'

console.log(jane);


export default class About extends React.Component {
  render() {
    return (
      <Container>
        <h1>About Us</h1>
	      <Row className="justify-content-md-center">
        <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
          <Card>
            <img src="/images/travis.jpeg" alt="Travis" className="profile-pic rounded-circle" />
            <Card.Body>
              <Card.Title>Travis Cox</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/twardcox"><i className="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        <Col md={4} className="col-md-4">
          <Card>
          <img src="/images/trevor.png" alt="Trevor" className="profile-pic rounded-circle" />
            <Card.Body>
              <Card.Title>Trevor Dobson</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/trevorjdobson"><i className="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>
	      </Row>

        <Row className="justify-content-md-center">
        <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
          <Card>
          <img src="/images/steve.jpeg" alt="Steve" className="profile-pic rounded-circle" />
            <Card.Body>
              <Card.Title>Steve Grant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/Stevengrant"><i className="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        <Col md={4} className="col-md-4">
          <Card>
            <img src="/images/jane.png" alt="Jane" className="profile-pic rounded-circle" />
            <Card.Body>
              <Card.Title>Jane Hur</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/janiekyu"><i className="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>
	      </Row>

        <Row className="justify-content-md-center">
        <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
          <Card>
          <img src="/images/renee.jpeg" alt="Renee" className="profile-pic rounded-circle" />
            <Card.Body>
              <Card.Title>Renee Messick</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/rnmessick"><i className="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        
	      </Row>
      </Container>

    )
  }
}