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
                <td> <Button variant="primary" type="submit">
                Remove
                        </Button>
                </td>                              
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}



class SubscribeList extends Component {
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