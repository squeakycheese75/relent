import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

const Header =(props) => {
    return (  
            <Navbar default collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <div>
                    <a href="/">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20"/>
                    <span>Relent</span>
                    </a>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
          
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="/">
                    Home
                </NavItem>
                <NavItem eventKey={2} href="/tickers">
                    Tickers
                </NavItem>
                <NavItem eventKey={3} href="/manage">
                    Manage
                </NavItem>
                <NavItem eventKey={4} href="/about">
                    About
                </NavItem>
                </Nav>
                <Nav pullRight>
                <NavItem eventKey={5} href="/login">
                    Login
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;