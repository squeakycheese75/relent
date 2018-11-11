import React, {Component} from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Stock</th>
                <th>Ticker</th>
                <th>Country</th>
                <th>Price</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.tickerData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.stock}</td>
                <td>{row.ticker}</td>
                <td>{row.country}</td>
                <td>{row.price}</td>
                <td><button onClick={() => props.removeTicker(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { tickerData, removeTicker } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody 
                    tickerData={tickerData} 
                    removeTicker={removeTicker}
                />
            </table>
        );
    }
}

export default Table;