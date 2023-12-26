import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" id="nav-bar">
        <Container fluid className="justify-content-center">
      <Navbar.Brand href="#root">Harvey Wu</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="flex-grow-0">
        <Nav >
          <Nav.Link href="#experiences">Experiences</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
