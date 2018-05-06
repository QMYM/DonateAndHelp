<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
import $ from 'jquery';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
=======
import React from 'react'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import $ from 'jquery'
>>>>>>> d66c23d80bb7dfe344eb823a4fdbb1d25ee3eff6

import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const AppRoute = (props) => (
  <BrowserRouter history={hashHistory}>
<<<<<<< HEAD
  <Switch>
  <Route exact path="/" component={Login} />
  <Route exact path="/login" component={Login} />
  <Route exact path="/signup" component={Signup} />
=======
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
>>>>>>> d66c23d80bb7dfe344eb823a4fdbb1d25ee3eff6

    </Switch>
  </BrowserRouter>
)

export default AppRoute
