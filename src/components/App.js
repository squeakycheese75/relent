import React, {Component} from 'react';

import Grid from './Grid';
import Form from './Form';
import Header from './common/Header';


class App extends Component {
    constructor(){
        console.log('In constructor');
        super();
        this.state = {
                isLoading: true,
                tickerData: [ {                
                    'ticker': 'aapl'
                }],
                data: [],
                user: {
                    sessionId: 'ede7d095-428c-478d-9754-4cebbb08a855',
                    username: 'SqueakyCheese',                    
                    settings: {
                        refresh: '30'
                    }                    
                },
                predata: [],

        }
    }

    componentWillMount(){
        console.log('In componentWillMount');
        //this.fetchData();
    }

    componentDidMount(){
        console.log('In componentDidMount');   
        //var refreshRate = this.state.user.settings.refresh * 1000;          
        //console.log('refreshRate is ' + refreshRate);   
        setInterval(() => this.loadData(), 60000);
        this.loadData(); // also load one immediately 
    }  

    loadData() {
        this.setState({data: []}); 

        for (var j = 0; j < this.state.tickerData.length; j++){
            console.log(this.state.tickerData[j].ticker);
            this.fetchDataWithTicker(this.state.tickerData[j].ticker);
          }         
    }

    async fetchDataWithTicker(ticker){    
        console.log('In fetchDataWithTicker');    
        var url = "https://api.iextrading.com/1.0/stock/" + ticker + "/quote";
        console.log(url);
        fetch(url)       
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoading: false,
              data: this.state.data.concat(result)
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }


    render() {       
        console.log('Render');
        return (
            <div className="container">  
                 <Header/>                                
                 <Grid
                 data={this.state.data} 
                 ></Grid>
                
                 <Form handleSubmit={this.handleSubmit}/>   
            </div>                 
        );
    }

    
    removeTicker = index => {
        const { tickerData } = this.state;
    
        this.setState({
            tickerData: tickerData.filter((tickerData, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = tickerData => {
        this.setState({
            tickerData: [...this.state.tickerData, tickerData]});        
            this.fetchDataWithTicker(tickerData.ticker);
        };
        
        

}

export default App;