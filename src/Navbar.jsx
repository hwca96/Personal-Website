import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid className="justify-content-center">
      <Navbar.Brand href="#home">Harvey Wu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="flex-grow-0">
        <Nav >
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Resume</Nav.Link>
          <Nav.Link href="#">Skills</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
