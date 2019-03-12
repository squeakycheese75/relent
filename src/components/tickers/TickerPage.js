import React from 'react';
import SortTable from './SortTable';

class TickerPage extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <div> 
                <SortTable data={data}/>
            </div>
            );
    }
}

export default TickerPage;