import React, {Component} from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from './components/common/Header';
import AboutPage from './components/about/AboutPage';
import HomePage  from './components/home/HomePage';
import ManagePage from './components/manage/ManagePage';
import LoginPage from './components/login/LoginPage';
import TickerPage from './components/tickers/TickerPage';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


require('dotenv').config()

class App extends Component {
    state = {
        hasError: false,
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
        },
        tickers: [],
        exchanges: [],
        filteredTickers: []
    }

    //Load component data
    fetchTickers = () => {
        var url = "https://relentapi.azurewebsites.net/tickers/";
        //console.log('url', url)
        //fetch('http://127.0.0.1:5000/tickers/')
        fetch(url)
        .then(res => res.json())
        .then(allTickers => {
            this.setState({
                tickers : allTickers
            })
            //Might not setstate here
        })//.then(console.log('done'))
        //.then(res => console.log(this.state.tickers))
        .then(res => this.determineUniqueExhanges())
    }

    determineUniqueExhanges = () => {
        //console.log(this.state.tickers);
        const exchanges = this.state.tickers 
        ? Array.from(new Set(this.state.tickers.map(t => t.exchange)))
        : [];
        exchanges.unshift(null);
        this.setState({exchanges: exchanges})
    }

    filteredTickers = (input) => {
        const filteredTickers = this.state.tickers.filter((h) => h.exchange === input);
        const filterSUbscribedTickers = filteredTickers.filter(id => !this.state.subscribedTickers.includes(id.symbol));
        this.setState({filteredTickers: filterSUbscribedTickers});
        this.setState({input});
    }

    componentWillMount(){
        this.fetchTickers();        
        this.loadData();
        //this.determineUniqueExhanges();
    }

    componentDidMount(){
        var refreshRate = this.state.user.settings.refresh * 1000;          
        setInterval(() => this.loadData(), refreshRate);
        this.loadData(); // also load one immediately 
    }  

    componentDidCatch(error, info){
        this.setState({hasError : true})
        console.log(error, info)
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
        console.log('In App.addNewTicker with ', input)
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
        this.setState(prevState => ({ subscribedTickers: prevState.subscribedTickers.filter(ticker => ticker !== index) }), ()=> {
            this.loadData();
        });
    }

    render() {
        if (this.state.hasError){
            return <h1>Oops, there's an error.</h1>;
        }

        return (
            <Switch>
                <div>
                    <Header />
                    
                    <Route exact path="/" component={HomePage} />
                    <Route  path="/about" component={AboutPage} />
                    <Route  path="/manage" render={() => 
                        (<ManagePage 
                            data={this.state.subscribedTickers} 
                            addNewTicker={this.addNewTicker} 
                            removeTicker={this.removeTicker} 
                            exchanges={this.state.exchanges} 
                            filteredTickers={this.filteredTickers}
                            filteredTickersData={this.state.filteredTickers}/>)}  />
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