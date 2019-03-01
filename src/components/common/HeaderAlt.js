import React from 'react';
import {Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const AltHeader =(props) => {
    return (
    <div className="App">
        <Navbar default collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Relent</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>  
                <NavItem>
                <LinkContainer to="/tickers">
                      <NavItem>Tickers</NavItem>
                    </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer to="/manage">
                      <NavItem>Manage</NavItem>
                    </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer to="/about">
                      <NavItem>About</NavItem>
                    </LinkContainer>
                </NavItem>
                </Nav>

            <Nav pullRight>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );


}

export default AltHeader;