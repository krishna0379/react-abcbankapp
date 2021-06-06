import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AppNavBar() {
  return (
    <Navbar bg="primary" expand="true" sticky="top" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Admin Moduel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/create-loan-type">
            Create Loan Type
          </Nav.Link>
          <Nav.Link as={Link} to="/list-loan-types">
            Loan Types
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            Customer Details
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
