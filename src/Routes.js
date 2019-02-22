import React from 'react';
import {Route, Link} from 'react-router';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import App from './App';
import LoginPage from './components/login/LoginPage';
import ManagePage from './components/manage/ManagePage';

export default ({ childProps }) =>(
        <Route path="/" component={App} props={childProps}>
        <IndexRoute component={HomePage} props={childProps} />
        <Route path="about" exact component={AboutPage} props={childProps}/>
        <Route path="login" exact component={LoginPage} props={childProps}/>
        <Route path="manage" exact component={ManagePage} props={childProps}/>
        <Route component={NotFound} />
    </Route>
);
