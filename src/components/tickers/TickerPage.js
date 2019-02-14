import React from 'react';
import AppGrid from '../AppGrid';

class TickerPage extends React.Component {
    render() {
        //const { data } = this.props;

        return (
            <div className="container-fluid">   
            <AppGrid data={this.props.data}/>
             </div>
            );
    }
}

export default TickerPage;