import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';


const GridHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}


const GridBody = props => { 
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row}</td>
                <td><Button>Delete</Button> </td>                       
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}


class SubscribeList extends Component {
    state = {ticker: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        //Check here that it's in the api
        this.props.onSubmit(this.state.ticker)
    };
    render() {
        const { data } = this.props;

        return (
            <div className="container-fluid"> 
             <h2>Subscribed tickers:</h2>
            <Table responsive striped bordered condensed hover>
                <GridHeader />
                <GridBody 
                    data={data}
                />
            </Table>
            </div>
        );
    }
}


export default SubscribeList;