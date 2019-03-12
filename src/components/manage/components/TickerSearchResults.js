import React, {Component} from 'react';
import {Table}  from 'react-bootstrap';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th></th>
            </tr>
        </thead>
    );
}

class TableBodyClass extends Component{
    addTicker = (index) => {
        //console.log("In GridBodyClass  removeTicker with ", index);
        this.props.onSubmit(index)
    };
    render(){
        const { data } = this.props;

        const rows = data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.symbol}</td>
                    <td>{row.name}</td>
                    <td><button onClick={() => this.addTicker(row.symbol)}>Add</button></td>
                </tr>
            );
        });
        return <tbody>{rows}</tbody>
    };
}


class TickerSearchResults extends Component {
    addItem = (index) => {
        this.props.onSubmit(index)
    };

    render() {
        const { data } = this.props;

        return (
            <div className="container-fluid"> 
            <Table responsive striped bordered hover size="sm">   
                <TableHeader />
                <TableBodyClass
                    data={data} onSubmit={this.addItem}
                />
            </Table>
            </div>
        );
    }
};

export default TickerSearchResults;