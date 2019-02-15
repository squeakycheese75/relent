import React from 'react';
//import { Link } from 'react-router-dom'
//import {Jumbotron} from 'react-bootstrap';
import SubscribeList from './SubscribeList';
 
class ManagePage extends React.Component{
    render(){
        return(
            <div  className="container-fluid">
            <h1>Subscribed tickers:</h1>
            <SubscribeList data={this.props.data}/>
          </div>
        );
    };
}

export default ManagePage;