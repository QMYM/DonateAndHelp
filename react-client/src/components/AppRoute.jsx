import React from 'react'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import $ from 'jquery'

import Home from './Home.jsx'
import Login from './Login.jsx'
import Donor from './Donor.jsx'
import Signup from './Signup.jsx'
import Beneficiaries from './Beneficiaries.jsx'
import Profile from './Profile.jsx'
import Message from './Message.jsx'
import Campaign from './Campaign.jsx'
import Profile_Donor from './Profile_Donor.jsx'
import TheApp from './TheApp.jsx'


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
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/donor' component={Donor} />
          <Route exact path='/beneficiaries' component={Beneficiaries} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/Profile_Donor' component={Profile_Donor} />
          <Route exact path='/theapp' component={TheApp} />
          <Route exact path='/message' component={Message} />
          <Route exact path='/campaign' component={Campaign} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute
