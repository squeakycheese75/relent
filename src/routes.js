import React from 'react';
import {Route, Link} from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import App from './App';
import LoginPage from './components/login/LoginPage';
import ManagePage from './components/manage/ManagePage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="login" component={LoginPage} />
        <Route path="manage" component={ManagePage} />
    </Route>
);
 