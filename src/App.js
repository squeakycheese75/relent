import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/common/Header";
import AboutPage from "./components/about/AboutPage";
import ManagePage from "./components/manage/ManagePage";
import PricingPage from "./components/tickers/PricingPage";
import Auth from "./components/auth/Auth";
//import NotFound from "./components/common/NotFound";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import ProfilePage from "./components/profile/ProfilePage";

//require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
  }
  state = {
    hasError: false,
    subscribedTickers: ["AAPL", "ADM.L"],
    data: [],
    user: {
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
    if (this.auth.isAuthenticated()) {
      this.authenticatedLoad();
    } else {
      this.loadData();
    }
  }

  componentDidMount() {
    //console.log("Called componentDidMount");
    if (this.auth.isAuthenticated()) {
      this.authenticatedLoad();
    } else {
      //console.log("componentDidMount User not authenticated");
      this.loadData();
    }
    var refreshRate = this.state.user.settings.refresh * 1000;
    setInterval(() => this.loadData(), refreshRate);
    //this.loadData(); // also load one immediately
  }

  authenticatedLoad() {
    fetch("/api/private/profile", {
      headers: { Authorization: `Bearer ${this.auth.getAccessToken()}` }
    })
      .then(response => {
        if (response.ok) return response;
        throw new Error("Network response was not ok.");
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          subscribedTickers: response.message
        });
      })
      .then(response => this.loadData())
      .catch(error => {
        this.setState({
          message: error.message
        });
      });
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  loadData() {
    //console.log("In loading data!");
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

    if (this.auth.isAuthenticated()) {
      authorisedTickerCall("POST", index);
      //   var data = { ticker: input };
      //   fetch("api/private/tickers", {
      //     method: "POST", // or 'PUT'
      //     body: JSON.stringify(data), // data can be `string` or {object}!
      //     headers: {
      //       Authorization: `Bearer ${this.auth.getAccessToken()}`,
      //       "Content-Type": "application/json"
      //     }
      //   })
      //     .then(response => {
      //       if (response.ok) return response;
      //       throw new Error("Network response was not ok.");
      //     })
      //     .then(res => res.json())
      //     .then(response => console.log("Success:", JSON.stringify(response)))
      //     .catch(error => console.error("Error:", error));
    }
  };

  authorisedTickerCall(method, ticker) {
    var data = { ticker: ticker };
    fetch("api/private/tickers", {
      method: method,
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        Authorization: `Bearer ${this.auth.getAccessToken()}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) return response;
        throw new Error("Network response was not ok.");
      })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
  }

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

    if (this.auth.isAuthenticated()) {
      authorisedTickerCall("DELETE", index);
      //   var data = { ticker: index };
      //   fetch("api/private/tickers", {
      //     method: "DELETE", // or 'PUT'
      //     body: JSON.stringify(data), // data can be `string` or {object}!
      //     headers: {
      //       Authorization: `Bearer ${this.auth.getAccessToken()}`,
      //       "Content-Type": "application/json"
      //     }
      //   })
      //     .then(response => {
      //       if (response.ok) return response;
      //       throw new Error("Network response was not ok.");
      //     })
      //     .then(res => res.json())
      //     .then(response => console.log("Success:", JSON.stringify(response)))
      //     .catch(error => console.error("Error:", error));
    }
  };

  render() {
    if (this.state.hasError) {
      return <h1>Oops, there's an error.</h1>;
    }

    return (
      <>
        <div>
          <Nav auth={this.auth} />

          <Route
            exact
            path={["/", "/pricing"]}
            render={() => (
              <PricingPage
                data={this.state.data}
                removeTicker={this.removeTicker}
              />
            )}
          />
          <Switch>
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
            <Route
              path="/callback"
              render={props => (
                <Callback
                  auth={this.auth}
                  {...props}
                  //loadProfileData={this.loadProfileData}
                />
              )}
            />
            <Route
              path="/profile"
              render={props =>
                this.auth.isAuthenticated() ? (
                  <ProfilePage auth={this.auth} {...props} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="/public" component={Public} />
            <Route
              path="/private"
              render={props => <Private auth={this.auth} {...props} />}
            />
            {/* Finally, catch all unmatched routes */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
