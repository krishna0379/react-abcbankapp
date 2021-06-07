import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="primary" expand="lg" variant="light">
      <Navbar.Brand as={Link} to="/">
        Admin Module
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/create-loan">
            Create Loan Program
          </Nav.Link>
          <Nav.Link as={Link} to="/list-loan" className="bg-primary">
            Loan Program List
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
