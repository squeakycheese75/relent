import React from 'react';
import SortTable from './SortTable';

class PricingPage extends React.Component {
    removeTicker = (event) => {
        console.log("In TickerPage.removeTicker with ", event);
        this.props.removeTicker(event)
    }
    render() {
        const { data } = this.props;

        return (
            <div> 
                <SortTable data={data} onSubmit={this.removeTicker}/>
            </div>
            );
    }
}

export default PricingPage;