import React, {Component}  from 'react';
import {Form, FormGroup, ControlLabel, DropdownButton, MenuItem}  from 'react-bootstrap';

class TickerSearch extends Component{
    state = {
        selectedValue: "Select:",
    }

    onTargetSelect = (event) => {
        //event.preventDefault();
        this.setState({ selectedValue : event })
        this.props.filterExchanges(event);
    };


    render(){
        const exchanges = this.props.exchanges || [];
        return(
            <div className="container-fluid">           
            <h2>Select tickers:</h2>
                <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                <ControlLabel>Ticker Search:</ControlLabel>{' '}
                <DropdownButton 
                    bsStyle="success"
                    value={this.state.selectedValue}
                    title={this.state.selectedValue}
                    onSelect = {(event => this.onTargetSelect(event))}
                    id={this.state.selectedValue}
                    >
                    {exchanges.map((exc) =><MenuItem eventKey={exc} key={exc}>{exc}</MenuItem>)}
                    </DropdownButton>
                </FormGroup>
                </Form>
            </div>

        );
    }
}

export default TickerSearch;