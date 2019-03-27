import React, { Component } from "react";

class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch("/api/private/profile", {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
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
    return (
      <>
        <p>Whatever</p>
      </>
    );
  }
}

export default Private;
