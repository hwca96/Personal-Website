import { Button, Card, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <div>
      <h1 className="title">Education</h1>
      <Row className="justify-content-center flex-grow-0">
        <Col className="mx-0 flex-grow-0 py-1">
          <Card style={{ width: "25rem" }} className="mx-1">
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/profile_images/1174018931532550144/jRmFjhVX_400x400.png"
            />
            <Card.Body>
              <Card.Title>Bachelor of Computer Science</Card.Title>
              <Card.Text>
                  The University of British Columbia
                  <br />
                  September 2021 - January 2024
                  <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-0 flex-grow-0 py-1">
          <Card style={{ width: "25rem" }} className="mx-1">
            <Card.Img
              variant="top"
              src="https://pbs.twimg.com/profile_images/1174018931532550144/jRmFjhVX_400x400.png"
            />
            <Card.Body>
              <Card.Title>Bachelor of Science (Chemistry)</Card.Title>
              <Card.Text>
                  The University of British Columbia
                  <br />
                  September 2015 - May 2020
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Education;
