 import React from 'react';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

import Donor from './Donor'
import Donor_Campaign from './Donor_Campaign'
import Donor_Profile from './Donor_Profile'
import Message from './Message'

const DonorT =  TabNavigator({
  Donor: { screen: Donor },
  Campaign: { screen: Donor_Campaign },
  Message: { screen: Message },
  Profile: { screen: Donor_Profile },
});

class Donor_Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
   }
 }


  render() {
    return (
    <DonorT/>
      );
  }
}


module.exports = Donor_Tab;