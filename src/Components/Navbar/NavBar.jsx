import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const customNavbarStyle = {
    background: "linear-gradient(30deg, #0891b2, #a21caf)",
  };

  const customColorLogo = {
    color: "#f1f5f9",
    fontSize: "30px",
    fontWeight: "bold",
  };
  const customColorLink = {
    color: "#f1f5f9",
    fontSize: "18px",
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" style={customNavbarStyle}>
        <Container>
          <Navbar.Brand href="/" style={customColorLogo}>
            QuadB TECH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={customColorLink}>
                Home
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="outline-light" style={customColorLink}>Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
