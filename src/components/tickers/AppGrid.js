import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

const GridHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Symbol</th>
                <th>CompanyName</th>
                <th>LatestPrice</th>
                <th>Change</th>
                {/* <th>Sector</th> */}
            </tr>
        </thead>
    );
}



const GridBody = props => { 
    function fetchDetails(index) {
        console.log(index);
    };
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index} onClick={() => fetchDetails(row.symbol)}>
                <td>{row.symbol}</td>
                <td>{row.companyName}</td> 
                <td>{row.latestPrice}</td>              
                <td><div
                    style={{
                        color: row.change < 0 
                        ? '#ff2e00'
                        : '#4C9900',                
                    }}>{row.change}</div>
                </td>    
                {/* <td>{row.sector}</td>                              */}
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class AppGrid extends Component {
    render() {
     
        const { data } = this.props;

        return (
            <Table responsive striped bordered hover>
                <GridHeader />
                <GridBody 
                    data={data} 
                />
            </Table>
        );
    }
}

export default AppGrid;
