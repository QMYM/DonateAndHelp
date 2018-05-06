import React from 'react'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import $ from 'jquery'

import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'

const AppRoute = (props) => (
  <BrowserRouter history={hashHistory}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />

    </Switch>
  </BrowserRouter>
)

export default AppRoute
