import React from 'react';
import { Link } from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap';
 
/*class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>Jamie's Admin Page</h1>
                <p>
                    React, Redux demo in es6
                </p>
                <Link to="about" className="btn btn-primary btn-lg">Leearn more</Link>
            </div>
        );
    };
}*/

const HomePage =(props) => {
    return (
        <div  className="container-fluid">
        <Jumbotron>
            <h1>Welcome to Relent</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p>
             <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </p>
      </Jumbotron>
      </div>
    );
};



export default HomePage;