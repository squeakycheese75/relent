import React from 'react';
//import AppGrid from './AppGrid';
import SortTable from './SortTable';
//import PriceTable from './PriceTable';

class TickerPage extends React.Component {
    render() {
        //const { data } = this.props;

        return (
            <div> 
                {/* <AppGrid data={this.props.data}/>
                <br /> */}
                <SortTable data={this.props.data}/>
                {/* <br></br>
                <PriceTable data={this.props.data}/> */}
            </div>
            );
    }
}

export default TickerPage;