import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactAI from 'react-appinsights';
ReactAI.init({instrumentationKey:'83697374-7da7-47ed-95b4-ad9e75c4fe3e'});

ReactDOM.render(<App />, document.getElementById('root'));