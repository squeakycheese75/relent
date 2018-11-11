import { Component } from 'react';


class App extends Component {
    constructor(){
        super();

        this.state = {
            tickerData: [
                {
                    'stock': 'Apple',
                    'ticker': 'aapl',
                    'country': 'US',
                    'price': '208.49'
                },
                {
                    'stock': 'Aptiv',
                    'ticker': 'aptv',
                    'country': 'US',
                    'price': '77.88'
                },
                {
                    'stock': 'Cigna',
                    'ticker': 'ci',
                    'country': 'US',
                    'price': '111.61'
                },
                {
                    'stock': 'Disney',
                    'ticker': 'dis',
                    'country': 'US',
                    'price': '116.00'
                },
                {
                    'stock': 'BP',
                    'ticker': 'bp',
                    'country': 'UK',
                    'price': '500.00'
                }
            ]        
         };
    }
   
}

export default App;