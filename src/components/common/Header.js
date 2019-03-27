import React, { Component } from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
//import styles from "./Header.css";

class Header extends Component {
  render() {
    const { isAuthenticated, login, logout } = this.props.auth;

    return (
      <div className={styles}>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
          <Navbar.Brand>R E L E N T</Navbar.Brand>
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
              {/* <Link to="public">
                <Button>Public</Button>
              </Link> */}
              {/* {isAuthenticated() && (
                <Link to="private">
                  <Button>Private</Button>
                </Link>  )}*/}
            </Nav>
            <Nav pullright="true">
              {isAuthenticated() && (
                <Link to="profile">
                  <Button>Profile</Button>
                </Link>
              )}
              <Link to="login">
                <Button
                  className={styles}
                  variant="outline-light"
                  onClick={isAuthenticated() ? logout : login}
                >
                  {isAuthenticated() ? "Log Out" : "Log In"}
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
