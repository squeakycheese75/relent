import React from 'react';
import { Link } from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';
 
class LoginPage extends React.Component{
    render(){
        return(
            <div  className="container-fluid">
            <Jumbotron>
                <h1>Login Page.....</h1>
                <p>
                Simple holding page for the login component.
                </p>
                <p>
                 <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
                </p>
          </Jumbotron>
          </div>
        );
    };
}

export default LoginPage;