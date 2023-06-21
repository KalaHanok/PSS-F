import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink className={"links"}>
          <Navbar.Brand>PSS</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">]</Nav>
          <Nav>
            <NavLink className={"links"}>About</NavLink>
            <NavLink className={"links"}>Grocery</NavLink>
            <NavLink className={"links"}>
              <a
                href="http://psstrust.org/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Main Page
              </a>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
