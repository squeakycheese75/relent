import React, { Component } from "react";

class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    var url = process.env["REACT_APP_PRICES_API"] + "/api/private/profile";
    //console.log(url);
    // var url =
    //   "https://cors-anywhere.herokuapp.com/http://localhost:5000/api/private/info";
    fetch(url, {
      headers: {
        Authorization: `Bearer ${this.props.auth.getAccessToken()}`
        // mode: "no-cors"
      }
    })
      .then(response => {
        if (response.ok) return response;
        throw new Error("Network response was not ok.");
      })
      // .then(response => {
      //   console.log(response);
      // })
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
    return (
      <>
        <p>{this.state.message}</p>
      </>
    );
  }
}

export default Private;
