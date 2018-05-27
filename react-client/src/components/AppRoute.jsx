import React from 'react';
import { BrowserRouter, Route, hashHistory, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Beneficiaries from './Beneficiaries.jsx';
import beneficiariesProfile from './Beneficiaries_Profile.jsx';
import beneficiariesCampaign from './Beneficiaries_Campaign.jsx';
import beneficiariesMessage from './Beneficiaries_Message.jsx';
import searchBeneficiary from './Search_Beneficiary.jsx';
import Donor from './Donor.jsx';
import searchDonor from './Search_Donor.jsx';
import donorProfile from './Donor_Profile.jsx';
import donorCampaign from './Donor_Campaign.jsx';
import donorMessage from './Donor_Message.jsx';
import theApp from './TheApp.jsx';

class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <BrowserRouter history={hashHistory}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/beneficiaries' component={Beneficiaries} />
          <Route exact path='/Beneficiaries_Profile' component={beneficiariesProfile} />
          <Route exact path='/Beneficiaries_Campaign' component={beneficiariesCampaign} />
          <Route exact path='/search' component={searchBeneficiary} />
          <Route exact path='/donor' component={Donor} />
          <Route exact path='/Donor_Profile' component={donorProfile} />
          <Route exact path='/Donor_Campaign' component={donorCampaign} />
          <Route exact path='/searchD' component={searchDonor} />
          <Route exact path='/theapp' component={theApp} />
          <Route exact path='/Beneficiaries_Message' component={beneficiariesMessage} />
          <Route exact path='/Donor_Message' component={donorMessage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute;