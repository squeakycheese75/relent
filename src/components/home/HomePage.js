import React from 'react';
import { Link } from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';

const HomePage =(props) => {
    return (
        <div  className="container-fluid">
        <Jumbotron>
            <h1>Welcome to Relent</h1>
            <p>
            A simple mobile-first site for keeping track of your favourite prices.
            </p>
            <p>
             <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
             <Link to="tickers" className="btn btn-primary btn-lg">Take me to the Prices</Link>
            </p>
      </Jumbotron>
      </div>
    );
};


export default HomePage;