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

class GridBodyClass extends Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    removeTicker = (index) => {
        //event.preventDefault();
        console.log("In GridBodyClass  removeTicker with ", index);
        this.props.onSubmit(index)
    };
    render(){
        const rows = this.props.data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row}</td>
                    <td><Button onClick={() => this.removeTicker(index)}>Delete</Button></td> 
                </tr>
            );
        });
        return <tbody>{rows}</tbody>
    };
}


class SubscribeList extends Component {
    state = {ticker: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        //Check here that it's in the api
        this.props.onSubmit(this.state.ticker)
    };
    removeItem = (index) => {
        //console.log('In remove item  with ', event);
        this.props.onSubmit(index)
    };
    render() {
        const { data } = this.props;

        return (
            <div className="container-fluid"> 
             <h2>Subscribed tickers:</h2>
            <Table responsive striped bordered condensed hover>
                <GridHeader />
                <GridBodyClass
                    data={data} onSubmit={this.removeItem}
                />
            </Table>
            </div>
        );
    }
}


export default SubscribeList;