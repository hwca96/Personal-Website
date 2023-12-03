import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" id="nav-bar">
        <Container fluid className="justify-content-center">
      <Navbar.Brand href="#home">Harvey Wu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="flex-grow-0">
        <Nav >
          <Nav.Link href="#">Experiences</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Skills</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
