import React from 'react';
import { Link } from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';

const  LoginPage = () => {
    return(
        <div  className="container-fluid">
            <Jumbotron>
                <h1>Login Page</h1>
                <p>Coming soon</p>
                <p>
                 <Link to="tickers" className="btn btn-primary btn-sm">Back to it</Link>
                </p>
          </Jumbotron>
          </div>
    );
}

export default LoginPage;