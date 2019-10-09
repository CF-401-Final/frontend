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
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1>About Us</h1>
            <p>We are a group of students at Codefellows, a coding academy based in Seattle, WA. This is the final project for our <a href="https://www.codefellows.org/courses/code-401/advanced-software-development-in-java-with-springmvc-and-android/">Java 401 class.</a></p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
            <Card>
              <img src="/images/travis.jpeg" alt="Travis" className="profile-pic rounded-circle" />
              <Card.Body>
                <Card.Title>Travis Cox</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SDE Apprentice</Card.Subtitle>
                {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text> */}
                <p><Card.Link href="https://www.linkedin.com/in/twardcox/"><i className="fab fa-linkedin-in"></i> LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/twardcox"><i className="fab fa-github"></i> Github</Card.Link></p>
              </Card.Body>
            </Card>

          </Col>

          <Col md={4} className="col-md-4">
            <Card>
              <img src="/images/trevor.png" alt="Trevor" className="profile-pic rounded-circle" />
              <Card.Body>
                <Card.Title>Trevor Dobson</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SDE Apprentice</Card.Subtitle>
                <p><Card.Link href="https://www.linkedin.com/in/trevorjdobson/"><i className="fab fa-linkedin-in"></i> LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/trevorjdobson"><i className="fab fa-github"></i> Github</Card.Link></p>

              </Card.Body>
            </Card>

          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
            <Card>
              <img src="/images/steve.jpeg" alt="Steve" className="profile-pic rounded-circle" />
              <Card.Body>
                <Card.Title>Steve Grant</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">SDE Apprentice</Card.Subtitle>
                <p><Card.Link href="https://www.linkedin.com/in/steven-grant-2a7332b1/"><i className="fab fa-linkedin-in"></i> LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/Stevengrant"><i className="fab fa-github"></i> Github</Card.Link></p>

              </Card.Body>
            </Card>

          </Col>

          <Col md={4} className="col-md-4">
            <Card>
              <img src="/images/jane.png" alt="Jane" className="profile-pic rounded-circle" />
              <Card.Body>
                <Card.Title>Jane Hur</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SDE Apprentice</Card.Subtitle>
                <p><Card.Link href="https://www.linkedin.com/in/jane-lee-hur/"><i className="fab fa-linkedin-in"></i> LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/janiekyu"><i className="fab fa-github"></i> Github</Card.Link></p>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={4} className="mb-sm-4 mb-md-0 col-md-4">
            <Card>
              <img src="/images/renee.jpeg" alt="Renee" className="profile-pic rounded-circle" />
              <Card.Body>
                <Card.Title>Renee Messick</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">SDE Apprentice</Card.Subtitle>


                <p><Card.Link href="https://www.linkedin.com/in/renee-messick-16068259/"><i className="fab fa-linkedin-in"></i> LinkedIn</Card.Link>
                  <Card.Link href="https://github.com/rnmessick"><i className="fab fa-github"></i> Github</Card.Link></p>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

    )
  }
}