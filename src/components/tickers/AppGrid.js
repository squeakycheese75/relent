import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

const GridHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Symbol</th>
                <th>CompanyName</th>
                <th>LatestPrice</th>
                <th>Sector</th>
                <th>Change</th>
            </tr>
        </thead>
    );
}


const GridBody = props => { 
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.symbol}</td>
                <td>{row.companyName}</td> 
                <td>{row.latestPrice}</td>              
                <td>{row.sector}</td>   
                <td><div
                    style={{
                        color: row.change < 0 
                        ? '#ff2e00'
                        : '#4C9900',                
                    }}>{row.change}</div>
                </td>                              
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

class AppGrid extends Component {
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
            </div>
        );
    }
}

export default AppGrid;
