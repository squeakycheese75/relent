import React, {Component}  from 'react';
import SubscribeList from './SubscribeList';
import {Form, Button, FormControl, FormGroup, ControlLabel, DropdownButton, MenuItem}  from 'react-bootstrap';
 
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
        console.log('onTargetSelect: ', target);
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
                        onSelect = {(event => this.onTargetSelect(event))}
                         >
                        <MenuItem eventKey="NASDAQ">NASDAQ</MenuItem>
                        <MenuItem eventKey="FTSE">FTSE</MenuItem>
                        {/* <MenuItem divider />
                        <MenuItem eventKey="CRYPTO">CRYPTO</MenuItem> */}
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
        console.log("In ManagePage.addNewTicker with ", newTicker);
        this.props.onSubmit(newTicker)
    }


    removeTicker = (newTicker) => {
        console.log("In ManagePage.removeTicker with ", newTicker);
        //this.props.onSubmit(newTicker)
    }

    render(){
        return(
            <div className="container-fluid">

            <SubscribeList data={this.props.data} onSubmit={this.removeTicker}/>
            <SearchForm onSubmit={this.addNewTicker}/>
            <PreferencesForm/>
          </div>
        );
    };
}

export default ManagePage;