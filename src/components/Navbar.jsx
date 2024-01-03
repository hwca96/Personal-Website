import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  return (
    <Navbar expand="lg" sticky="top" id="nav-bar">
      <Container fluid className="justify-content-center">
        <Navbar.Brand>
          <Link to="/#root" className="nav-link">
            <h2 className="navbar-name">Harvey Wu</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="flex-grow-0">
          <Nav>
            <Nav.Link>
              <Link to="/#experiences" className="nav-link">
                <h4 className="title">Experiences</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#education" className="nav-link">
                <h4 className="title">Education</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#projects" className="nav-link">
                <h4 className="title">Projects</h4>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/#skills" className="nav-link">
                <h4 className="title">Skills</h4>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
