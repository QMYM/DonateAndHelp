import React from "react";
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory , Switch  } from "react-router-dom";
import $ from 'jquery';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx'

class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <BrowserRouter history={hashHistory}>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        </Switch>
     </BrowserRouter>
            )
  }
}


export default AppRoute;
