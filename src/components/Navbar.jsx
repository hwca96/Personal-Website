import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" id="nav-bar">
        <Container fluid className="justify-content-center">
      <Navbar.Brand href="#root"><h2 className="title">Harvey Wu</h2></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="flex-grow-0">
        <Nav >
          <Nav.Link href="#experiences"><h4 className="title">Experiences</h4></Nav.Link>
          <Nav.Link href="#education"><h4 className="title">Education</h4></Nav.Link>
          <Nav.Link href="#skills"><h4 className="title">Skills</h4></Nav.Link>
          {/* <Nav.Link href="#projects"><h4 className="title">Projects</h4></Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;
