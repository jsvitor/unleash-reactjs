import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/css/global.css';

import Home from './pages/home';
import Dashboard from './pages/dashboard';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
