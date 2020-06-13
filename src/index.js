import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './assets/css/global.css';

import Home from './pages/home';
import Profile from './pages/profile';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
