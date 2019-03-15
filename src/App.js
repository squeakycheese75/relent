import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import ManagePage from "./components/manage/ManagePage";
import LoginPage from "./components/login/LoginPage";
import PricingPage from "./components/tickers/PricingPage";

require("dotenv").config();

class App extends Component {
  state = {
    hasError: false,
    isLoaded: false,
    isAuthenticated: true,
    subscribedTickers: ["AAPL", "ADM.L"],
    data: [],
    user: {
      sessionId: "ede7d095-428c-478d-9754-4cebbb08a855",
      username: "SqueakyCheese",
      settings: {
        refresh: "30"
      }
    },
    tickers: [],
    exchanges: [],
    sectors: [],
    filteredTickers: []
  };

  //Load component data
  fetchTickers = () => {
    var url = process.env["REACT_APP_PRICES_API"] + "tickers/";
    fetch(url)
      .then(res => res.json())
      .then(allTickers => {
        this.setState({
          tickers: allTickers
        });
        //Might not setstate here
      }) //.then(console.log('done'))
      .then(res => this.determineUniqueSectors());
  };

  determineUniqueSectors = () => {
    //console.log(this.state.tickers);
    const sectors = this.state.tickers
      ? Array.from(new Set(this.state.tickers.map(t => t.sector)))
      : [];
    sectors.unshift(null);
    this.setState({ sectors: sectors });
  };

  filteredTickers = input => {
    const filteredTickers = this.state.tickers.filter(h => h.sector === input);
    const filterSUbscribedTickers = filteredTickers.filter(
      id => !this.state.subscribedTickers.includes(id.ticker)
    );
    this.setState({ filteredTickers: filterSUbscribedTickers });
    this.setState({ selectedSector: input });
  };

  componentWillMount() {
    this.fetchTickers();
    this.loadData();
  }

  componentDidMount() {
    var refreshRate = this.state.user.settings.refresh * 1000;
    setInterval(() => this.loadData(), refreshRate);
    this.loadData(); // also load one immediately
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  loadData() {
    if (
      Array.isArray(this.state.subscribedTickers) ||
      this.state.subscribedTickers.length
    ) {
      // array does not exist, is not an array, or is empty
      this.fetchDataWithTicker();
    }
  }

  async fetchDataWithTicker() {
    var url =
      process.env["REACT_APP_PRICES_API"] +
      "pricing/" +
      this.state.subscribedTickers.join(",");
    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  addNewTicker = input => {
    console.log("App.addNewTicker", input);
    if (input) {
      //Check it's not already in the list
      var resval = this.state.subscribedTickers.some(item => input === item);
      if (!resval) {
        this.setState(
          prevState => ({
            subscribedTickers: prevState.subscribedTickers.concat(input)
          }),
          () => {
            //Reload data in callback.
            this.loadData();
            console.log(
              "calling this.filteredTickers with ",
              this.state.selectedSector
            );
            this.filteredTickers(this.state.selectedSector);
          }
        );
      }
    }
  };

  removeTicker = index => {
    this.setState(
      prevState => ({
        subscribedTickers: prevState.subscribedTickers.filter(
          ticker => ticker !== index
        )
      }),
      () => {
        this.loadData();
      }
    );
  };

  render() {
    if (this.state.hasError) {
      return <h1>Oops, there's an error.</h1>;
    }

    return (
      <Switch>
        <div>
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/manage"
            render={() => (
              <ManagePage
                data={this.state.subscribedTickers}
                addNewTicker={this.addNewTicker}
                sectors={this.state.sectors}
                filteredTickers={this.filteredTickers}
                filteredTickersData={this.state.filteredTickers}
              />
            )}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path="/pricing"
            render={() => (
              <PricingPage
                data={this.state.data}
                removeTicker={this.removeTicker}
              />
            )}
          />
          {/* Finally, catch all unmatched routes */}
          {/* <Route exact component={NotFound} /> */}
        </div>
      </Switch>
    );
  }
}

export default App;
