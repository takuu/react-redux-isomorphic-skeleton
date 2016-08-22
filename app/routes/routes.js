import React from 'react';
import { Route } from 'react-router';
import App from './../containers/App';
import NotFound from '../components/NotFound';
import AboutPage from '../containers/AboutPage';
import HomePage from '../containers/HomePage';
const routes = (
  <Route component={App}>


    <Route path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />

    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;