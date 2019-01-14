import React, { Component  } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() {      
        return (
            <div>
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Relent</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="mailto:james_wooltorton@hotmail.com">
                eMail
              </NavItem>              
            </Nav>
        
            </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Header;