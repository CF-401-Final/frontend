import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default class About extends React.Component {
  render() {
    return (
      <Container>
        <h1>About Us</h1>
	      <Row className="justify-content-md-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <image src=""></image>
            <Card.Body>
              <Card.Title>Travis Cox</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/twardcox"><i class="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Trevor Dobson</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/trevorjdobson"><i class="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>
	      </Row>

        <Row className="justify-content-md-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Steve Grant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/Stevengrant"><i class="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Jane Hur</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/janiekyu"><i class="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>
	      </Row>

        <Row className="justify-content-md-center">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Renee Messick</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Card.Link href="https://github.com/rnmessick"><i class="fab fa-github"></i> Github</Card.Link>
            </Card.Body>
          </Card>

		    </Col>

        
	      </Row>
      </Container>

    )
  }
}