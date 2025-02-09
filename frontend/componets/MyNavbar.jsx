import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/Navbar.css";

const MyNavbar = ({ toggleTheme, darkMode }) => {
  return (
    <Navbar expand="sm" className={`headroom ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={`brand-name ${darkMode ? "text-white" : "text-dark"}`}>
          <img
            src="/vite.svg"
            alt="Sai Siddeswar"
            width="35px"
            height="35px"
            className="uil"
          />
          &nbsp;&nbsp;&nbsp;Sai Siddeswar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link 
              href="https://drive.google.com/file/d/1-NqyWuWravQDuefgbKh9St89azVFfvUu/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          <Nav className="ml-lg-auto">
            <button className="color-mode-toggle" onClick={toggleTheme}>
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />} &nbsp; Color Mode
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
