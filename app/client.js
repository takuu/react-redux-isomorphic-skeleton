import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './Root';
if (process.env.BROWSER) require('./styles/global.css');


const App = () => (
  <MuiThemeProvider>
    <Root {...{ history }} />
  </MuiThemeProvider>
);

const history = {};
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
