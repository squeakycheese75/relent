import React, {Component}  from 'react';
import {Form, FormGroup, DropdownButton, Dropdown}  from 'react-bootstrap';

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
        const sectors = this.props.sectors || [];
        return(
            <div className="container-fluid">      
                <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                {/* <ControlLabel>Ticker Search:</ControlLabel>{' '} */}
                <DropdownButton 
                  
                    value={this.state.selectedValue}
                    title={this.state.selectedValue}
                    onSelect = {(event => this.onTargetSelect(event))}
                    id={this.state.selectedValue}
                    >
                    {sectors.map((sector) =><Dropdown.Item eventKey={sector} key={sector}>{sector}</Dropdown.Item>)}
                    </DropdownButton>
                </FormGroup>
                </Form>
            </div>

        );
    }
}

export default TickerSearch;