import React from 'react';
//import {Link } from "react-router-dom";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import styles from './Header.css';

const Header =() => {
    return (
        <div className={styles}>
        <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
            <LinkContainer to="tickers"><Navbar.Brand>Relent</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav mr-auto">
                    <LinkContainer to="tickers"><Button>Prices</Button></LinkContainer>
                    <LinkContainer to="manage"><Button>Manage</Button></LinkContainer>
                    <LinkContainer to="about"><Button>About</Button></LinkContainer>
                </Nav>
                <Nav pullright="true">
                    <Nav.Item >
                        <Nav.Link>v0.1 beta</Nav.Link>
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
                    </Nav.Item>
                    <LinkContainer to="login"><Button>Login</Button></LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
      </div>
    );
}

export default Header;