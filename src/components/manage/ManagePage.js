import React, {Component}  from 'react';
import SubscribeList from './SubscribeList';
import {Form, Button, FormControl, FormGroup, ControlLabel, DropdownButton, MenuItem}  from 'react-bootstrap';
 
class SearchForm2 extends Component{
    state = {
        selectedValue: "Select:",
    }

    onTargetSelect = (target) => {
        //event.preventDefault();
        //Check here that it's in the api
        //this.props.onSubmit(this.state.ticker)
        console.log('onTargetSelect: ', target);
        this.setState({ selectedValue : target })
    };


    render(){
        
        //const search = this.state.search;
        const exchanges = this.props.exchanges || [];
        return(
            <div className="container-fluid">           
            <h2>Add new tickers:</h2>
                <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                <ControlLabel>Ticker Search:</ControlLabel>{' '}
                <DropdownButton 
                    bsStyle="success"
                    value={this.state.selectedValue}
                    title={this.state.selectedValue}
                    onSelect = {(event => this.onTargetSelect(event))}
                    >
                    {exchanges.map((exc) =>
                        <MenuItem eventKey={exc} key={exc}>{exc}</MenuItem>
                    )}
                    </DropdownButton>
                </FormGroup>
                <Button type="submit" >Add</Button>
                </Form>
            </div>

        );
    }
}


class SearchForm extends Component{
    state = {
                ticker: "",
                title: "FTSE"
            }
    
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        //Check here that it's in the api
        this.props.onSubmit(this.state.ticker)
    };
    onTargetSelect(target) {
        //console.log('onTargetSelect: ', target);
        this.setState({ title: target })
    };
    
    render(){
        return(
            <div className="container-fluid">           
            <h2>Add new tickers:</h2>
                <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                <ControlLabel>Ticker Search:</ControlLabel>{' '}
                    <DropdownButton
                        bsStyle="success"
                        title={this.state.title}
                        id="dropdown-basic-1"
                        onSelect = {(event => this.onTargetSelect(event))}>
                        <MenuItem eventKey="NASDAQ">NASDAQ</MenuItem>
                        <MenuItem eventKey="FTSE">FTSE</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="SOON">*Coming soon*</MenuItem>
                        <MenuItem eventKey="CRYPTO">CRYPTO</MenuItem>
                        <MenuItem eventKey="FUNDS">FUNDS</MenuItem>
                        <MenuItem eventKey="FX">FX</MenuItem>
                        <MenuItem eventKey="DERIVED">DERIVED</MenuItem>
                    </DropdownButton>
                </FormGroup>
                <FormGroup controlId="formInlineName" >
                    <ControlLabel>Ticker Search:</ControlLabel>{' '}
                    <FormControl  
                        type="text" 
                        placeholder="Search for new tickers."
                        onChange = {(event => this.setState({ticker: event.target.value}))} 
                        value = {this.state.ticker}
                        />
                </FormGroup>{' '}
                <Button type="submit" >Add</Button>
                </Form>
            </div>

        );
    }
};


const PreferencesForm  = props => {
        return(
            <div className="container-fluid">
                <h2>Preferences</h2>
                   
                <p>Set Refresh Time:  30</p>
               
        </div>    
        );
}


class ManagePage extends React.Component{

    addNewTicker = (newTicker) => {
        //console.log("In ManagePage.addNewTicker with ", newTicker);
        this.props.onSubmit(newTicker)
    }


    removeTicker = (event) => {
        //console.log("In ManagePage.removeTicker with ", event);
        this.props.removeTicker(event)
    }

    render(){
        const exchanges = this.props.exchanges;
        //console.log('ManagePage with ', exchanges)
        return(
            <div className="container-fluid">

            <SubscribeList data={this.props.data} onSubmit={this.removeTicker}/>
            <SearchForm onSubmit={this.addNewTicker}/>
            <SearchForm2 onSubmit={this.addNewTicker} exchanges={exchanges}/>
            <PreferencesForm/>
          </div>
        );
    };
}

export default ManagePage;