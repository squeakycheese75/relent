import React, { Component } from "react";

class Public extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    var url = process.env["REACT_APP_PRICES_API"] + "api/public";
    console.log(url);
    fetch(url)
      .then(response => {
        if (response.ok) return response;
        throw new Error("Network response was not ok.");
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          message: response.message
        });
      })
      .catch(error => {
        this.setState({
          message: error.message
        });
      });
  }

  render() {
    return <p>{this.state.message}</p>;
  }
}

export default Public;
