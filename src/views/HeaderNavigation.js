import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HeaderNavigation() {
  let navigate = useNavigate();

  const logout = () => navigate("/login");
  const navHome = () => navigate("/welcome-home");
  const navExplore = () => navigate("/explore");
  const navMessage = () => navigate("/messages");
  const navNotification = () => navigate("/notification");

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">Mini Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={navHome}>Home</Nav.Link>
            <Nav.Link onClick={navExplore}>Explore</Nav.Link>
            <Nav.Link onClick={navMessage}>Messages</Nav.Link>
            <Nav.Link onClick={navNotification}>Notification</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
