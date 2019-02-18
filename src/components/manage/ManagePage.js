import React, {Component}  from 'react';
import SubscribeList from './SubscribeList';
import {Form, Button, FormControl, ControlLabel, FormGroup, Checkbox} from 'react-bootstrap';

 
class SearchForm extends Component{
    state = {ticker: ''}
    handleSubmit = (event) => {
        event.preventDefault();
        //Check here that it's in the api
        this.props.onSubmit(this.state.ticker)
    };
    render(){
        return(
            <div className="container-fluid">           
            <h2>Add new tickers:</h2>
                <Form inline onSubmit={this.handleSubmit}>
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
            <div className="container-fluid"s>
                <Form>
                <h2>Preferences</h2>
                   
                <p>Set Refresh Time:  30</p>
                <FormGroup>
                <Checkbox checked readOnly>
                            Checkbox
                            </Checkbox>
                            </FormGroup>
                </Form>
               
        </div>    
        );
}


class ManagePage extends React.Component{

    addNewTicker = (newTicker) => {
        //console.log("In ManagePage: ", newTicker);
        this.props.onSubmit(newTicker)
    }

    render(){
        return(
            <div className="container-fluid">

            <SubscribeList data={this.props.data} />
            <SearchForm onSubmit={this.addNewTicker}/>
            <PreferencesForm/>
          </div>
        );
    };
}

export default ManagePage;