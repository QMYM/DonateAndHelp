import React from 'react'
import { BrowserRouter, Route, Link, IndexRoute, hashHistory, browserHistory, Switch } from 'react-router-dom'
import $ from 'jquery'

import Home from './Home.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Beneficiaries from './Beneficiaries.jsx'
import BeneficiariesProfile from './Beneficiaries_Profile.jsx'
import BeneficiariesCampaign from './Beneficiaries_Campaign.jsx'
import Donor from './Donor.jsx'
import DonorProfile from './Donor_Profile.jsx'
import DonorCampaign from './Donor_Campaign.jsx'
import Message from './Message.jsx'
import Search_Beneficiary from './Search_Beneficiary.jsx'
import TheApp from './TheApp.jsx'
import Search_Donor from './Search_Donor.jsx'


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
          <Route exact path='/beneficiaries' component={Beneficiaries} />
          <Route exact path='/Beneficiaries_Profile' component={BeneficiariesProfile} />
          <Route exact path='/Beneficiaries_Campaign' component={BeneficiariesCampaign} />
          <Route exact path='/search' component={Search_Beneficiary} />
          <Route exact path='/donor' component={Donor} />
          <Route exact path='/Donor_Profile' component={DonorProfile} />
          <Route exact path='/Donor_Campaign' component={DonorCampaign} />
          <Route exact path='/searchD' component={Search_Donor} />
          <Route exact path='/theapp' component={TheApp} />
          <Route exact path='/message' component={Message} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute
