import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class AppForm extends Component {
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
        //const { classes } = this.props;
        const { ticker } = this.state; 

        return (
            <div>
<               form>
                <InputLabel>Add Ticker</InputLabel>
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
           
            </div>
        );
    }
}

export default AppForm;