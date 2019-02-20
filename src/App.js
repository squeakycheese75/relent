import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {Switch} from "react-router-dom";
//import Header from './components/common/Header';
import HeaderAlt from './components/common/HeaderAlt';
import AboutPage from './components/about/AboutPage';
import HomePage  from './components/home/HomePage';
import ManagePage from './components/manage/ManagePage';
import LoginPage from './components/login/LoginPage';
import TickerPage from './components/tickers/TickerPage';

require('dotenv').config()

class App extends Component {
    constructor(){
        //console.log('In constructor');
        super();
        this.state = {
                isLoading: true,
                subscribedTickers: ['aapl'],
                data: [
                    {
                        'companyName': 'Apple',
                        'symbol': 'AAPL',
                        'sector': 'Tech',
                        'latestPrice': '208.49',
                        'change': '2.99'
                    },
                    {
                        'companyName': 'Aptiv',
                        'symbol': 'APTV',
                        'sector': 'Tech',
                        'latestPrice': '77.88',
                        'change': '-0.34'
                    },
                    {
                      'companyName': 'Microsoft Plc',
                      'symbol': 'MSFT',
                      'sector': 'Tech',
                      'latestPrice': '413.33',
                      'change': '0.08'
                  }
                ] ,
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
        //this.loadData();
    }

    componentDidMount(){
        console.log('In componentDidMount');   
        //var refreshRate = this.state.user.settings.refresh * 1000;          
        //console.log('refreshRate is ' + refreshRate);   
        setInterval(() => this.loadData(), 60000);
        this.loadData(); // also load one immediately 
    }  

    loadData() {
        //I commented this out to test.  Probably not needed as state should come from api
        //this.setState({data: []}); 
        console.log('In loadData',  this.state.subscribedTickers);   
       
        if (Array.isArray(this.state.subscribedTickers) || this.state.subscribedTickers.length) {
            // array does not exist, is not an array, or is empty
            console.log('Passed Check'); 
            /*for (var j = 0; j < this.state.subscribedTickers.length; j++){
                console.log(this.state.subscribedTickers[j].ticker);
                this.fetchDataWithTicker(this.state.tickerData[j].ticker);
              }*/
            //this.fetchDataWithTicker(this.state.tickerData[j].ticker);   
            this.fetchDataWithTicker(this.state.subscribedTickers); 
          }
    }

    async fetchDataWithTicker(ticker){    
        console.log('In fetchDataWithTicker');    
        //var url = "https://api.iextrading.com/1.0/stock/" + ticker + "/quote";
        var url = "http://localhost:3001/prices/" + ticker;
        //var url = process.env.REACT_APP_PRICES_API + ticker;
        //debugger;
        //var url = "http://localhost:3001/prices/" + ticker;
        fetch(url)       
        .then(res => res.json())
        .then(
          (result) => {
            //this.setState(prevState => ({
            //    data: result
            //})
            this.setState({data: this.state.data.concat(result)});
            //)
            //({data: this.state.data.concat(result)});
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


   

    addNewTicker = (input) => {
        if(input){
            //Check it's not already in the list
            var resval = this.state.subscribedTickers.some(item => input === item);
            if (!resval){
                this.setState(prevState => ({
                    subscribedTickers : prevState.subscribedTickers.concat(input)
                }));
            }
            //this.fetchDataWithTicker(tickerData.ticker);
            this.loadData();
        }
    }

    render() {       
        console.log('Render');
        return (
            <Router>
                <div>
                    <HeaderAlt />     
                
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/manage" render={() => (<ManagePage data={this.state.subscribedTickers} onSubmit={this.addNewTicker}/>)}  />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/tickers" render={() => (<TickerPage data={this.state.data}/>)} />   
                </div>
            </Router>             
        );
    }           

    /*
    removeTicker = index => {
        const { tickerData } = this.state;
    
        this.setState({
            tickerData: tickerData.filter((tickerData, i) => { 
                return i !== index;
            })
        });
    }
    */
}

export default App;