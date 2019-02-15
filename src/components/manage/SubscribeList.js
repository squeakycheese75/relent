import React, {Component} from 'react';
import {Table, Button, FormControl, InputGroup} from 'react-bootstrap';


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
                <td>{row.ticker}</td>
                <td> <Button variant="primary" type="submit">
                Remove
            </Button>
                </td>                              
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}


const TickerSubmit  = props => {
        return(
            <div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary">Button</Button>
            </InputGroup>
        </div>    
        );
}


class SubscribeList extends Component {
    render() {
        const { data } = this.props;

        return (
            <div className="container-fluid"> 
            <Table responsive striped bordered condensed hover>
                <GridHeader />
                <GridBody 
                    data={data} 
                />
            </Table>
            <TickerSubmit/>
            </div>
        );
    }
}


export default SubscribeList;