import React, {Component} from 'react';
//import color from '@material-ui/core/colors/amber';
//import ReactTable from "react-table";
//import "react-table/react-table.css;

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
                        color: row.change < 0 ? '#ff2e00'
                        : '#ffffff',                
                    }}>{row.change}</div>
                </td>                              
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
