import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <NavLink to={"/"} className={"links"}>
          <Navbar.Brand>PSS</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink to={"/about"} className={"links"}>
              About
            </NavLink>
            <NavLink to={"/grocery"} className={"links"}>
              Grocery
            </NavLink>
            <Nav.Link className={"links"} href="https://psstrust.org/">
              Main Page
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
