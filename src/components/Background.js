import React, { Component } from 'react';

class Background extends Component {
    constructor(){
        super();

        this.state =  {
            tData: []
        }
    };
    
    componentDidMount() {
        const url = "https://api.iextrading.com/1.0/stock/aapl/price";

        fetch(url)
            .then(result => result.json())
            .then(json => {
                this.setState(
                    { tData: json });
              });
    }

    render() {
        return (
          <div>
            <h1>Blah Blah{ this.state.tData }</h1>
          </div>
        );
      }
}

export default Background;