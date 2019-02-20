import React from 'react';
import { Link } from "react-router-dom";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
//import { LinkContainer } from "react-router-bootstrap";

const AltHeader =(props) => {
    return (
        <Navbar default collapseOnSelect fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">
                <div>
                {/* <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20"/> */}
                <span>Relent</span>
                </div>
                </Link>

            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
                <Nav>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/tickers">Tickers</Link>
                </NavItem>
                <NavItem>
                    <Link to="/manage">Manage</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about">About</Link>
                </NavItem>
                </Nav>

                <Nav pullRight>
                <NavItem activeclass="active">
                    <Link to="/login">Login</Link>
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    );


}

export default AltHeader;