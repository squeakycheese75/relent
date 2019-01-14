import React, {Component} from 'react';
import Input from '@material-ui/core/Input';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            ticker: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { ticker } = this.state; 

        return (
            <form>
                <label>Add Ticker</label>
                <Input 
                    type="text" 
                    name="ticker" 
                    value={ticker} 
                    onChange={this.handleChange}/>
                <Input 
                    type="button" 
                    value="Submit" 
                    onClick={this.submitForm} />
            </form>
        );
    }
}

export default Form;