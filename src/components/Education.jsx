import { Button, Card, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <>
      <h2>Education</h2>
      <Row className="justify-content-md-center">
        <Col className="mx-0 flex-grow-0">
          <Card style={{ width: "20rem" }} className="mx-1">
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1174018931532550144/jRmFjhVX_400x400.png" />
            <Card.Body>
              <Card.Title>Bachelor of Computer Science</Card.Title>
              <Card.Text>
                <p className="uni-name">The University of British Columbia</p>
                <p>
                  September 2021 - Current
                  <br />
                  (Expected Graduation: December 2023)
                </p>
              </Card.Text>
              <Button variant="primary">Notable Courses</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mx-0 flex-grow-0">
          <Card style={{ width: "20rem" }} className="mx-1">
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1174018931532550144/jRmFjhVX_400x400.png" />
            <Card.Body>
              <Card.Title>Bachelor of Science (Chemistry)</Card.Title>
              <Card.Text>
                <p className="uni-name">The University of British Columbia</p>
                <p>
                  September 2015 - May 2020 <br /> Graduated with Co-op Designation
                </p>
              </Card.Text>
              <Button variant="primary">Notable Courses</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Education;
