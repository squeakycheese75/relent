import React, { Component } from 'react';

class Header extends Component {
    render() {      
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">               
                    <img src="./images/buffalo.jpg" width={50} alt="sdfsdf"/>                
                <ul className="nav navbar-nav">
                    <li>Home</li>
                    <li>Authors</li>
                    <li>Marketing</li>
                    <li>Carousel</li>
                    <li>About us</li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Header;