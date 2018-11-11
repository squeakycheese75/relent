import React, {Component} from 'react';
//import { Table } from 'react-bootstrap';

const GridHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Symbol</th>
                <th>LatestPrice</th>
                <th>CompanyName</th>
                <th>Sector</th>
                <th>MarketCap</th>
            </tr>
        </thead>
    );
}


const GridBody = props => { 
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.symbol}</td>
                <td>{row.latestPrice}</td>              
                <td>{row.companyName}</td> 
                <td>{row.sector}</td>                 
                <td>{row.marketCap}</td>                             
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Grid extends Component {
    render() {
        const { data } = this.props;

        return (
            <table className="table table-striped">
                <GridHeader />
                <GridBody 
                    data={data} 
                />
            </table>
        );
    }
}

export default Grid;
