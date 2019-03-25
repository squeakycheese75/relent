import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

const HeaderNew = () => {
  return (
    <div className={styles}>
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Brand href="#">Relent</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav mr-auto">
            <Link to="pricing">
              <Button className="btn outline">Prices</Button>
            </Link>
            <Link to="manage">
              <Button>Manage</Button>
            </Link>
            <Link to="about">
              <Button>About</Button>
            </Link>
          </Nav>
          <Nav pullright="true">
            {/* <Nav.Item >
                        <Nav.Link>v0.1.2 beta</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Navbar.Brand href="https://github.com/squeakycheese75/relent">
                        <img
                            src="./images/github.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="GitHub"
                        />
                        </Navbar.Brand>
                    </Nav.Item> */}
            <Link to="login">
              <Button>Login</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pricing">Prices</Link>
        </li>
        <li>
          <Link to="/manage">Manage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default HeaderNew;
