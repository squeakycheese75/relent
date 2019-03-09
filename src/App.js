import React, {Component} from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HeaderAlt from './components/common/HeaderAlt';
import AboutPage from './components/about/AboutPage';
import HomePage  from './components/home/HomePage';
import ManagePage from './components/manage/ManagePage';
import LoginPage from './components/login/LoginPage';
import TickerPage from './components/tickers/TickerPage';
//import NotFound from './components/common/NotFound';

require('dotenv').config()

class App extends Component {
    constructor(){
        super();
        this.state = {
                isLoaded: false,
                isAuthenticated: true,
                subscribedTickers: ['AAPL', 'ADM.L'],
                data: [] ,
                user: {
                    sessionId: 'ede7d095-428c-478d-9754-4cebbb08a855',
                    username: 'SqueakyCheese',                    
                    settings: {
                        refresh: '30'
                    }                    
                }
        }
    }

    componentWillMount(){
        this.loadData();
    }

    componentDidMount(){
        var refreshRate = this.state.user.settings.refresh * 1000;          
        setInterval(() => this.loadData(), refreshRate);
        this.loadData(); // also load one immediately 
    }  

    loadData() {
        if (Array.isArray(this.state.subscribedTickers) || this.state.subscribedTickers.length) {
            // array does not exist, is not an array, or is empty
            this.fetchDataWithTicker(); 
          }
    }

    async fetchDataWithTicker(){   
        var url = "https://relentapi.azurewebsites.net/prices/" + this.state.subscribedTickers.join(",");
        //var url = "http://127.0.0.1:5000/prices/" + this.state.subscribedTickers.join(",");
        fetch(url)       
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                isLoaded: true,
                data: result
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

    addNewTicker = (input) => {
        if(input){
            //Check it's not already in the list
            var resval = this.state.subscribedTickers.some(item => input === item);
            if (!resval){
                this.setState(prevState => ({subscribedTickers : prevState.subscribedTickers.concat(input)}), () => 
                    {
                        //Reload data in callback.
                        this.loadData();
                    });                
            }
        }
    }

    removeTicker = (index) => {
        //Replace with filter as this is changing the state directly.  
        var array = this.state.subscribedTickers; // make a separate copy of the array
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({subscribedTickers: array}, () => {
            this.loadData();
          });
        }

        // var array = this.state.subscribedTickers.filter(value => value === index )
        // this.setState({subscribedTickers: array}, () => {
        //          this.loadData();
        //     });
    }

    render() {      
        return (
            <Switch>
                <div>
                    <HeaderAlt />     
                
                    <Route exact path="/" component={HomePage} />
                    <Route  path="/about" component={AboutPage} />
                    <Route  path="/manage" render={() => (<ManagePage data={this.state.subscribedTickers} onSubmit={this.addNewTicker} removeTicker={this.removeTicker} />)}  />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/tickers" render={() => (<TickerPage data={this.state.data}/>)} />   
                    { /* Finally, catch all unmatched routes */ }
                    {/* <Route exact component={NotFound} /> */}
                </div>
            </Switch>             
        );
    }           
}

export default App;