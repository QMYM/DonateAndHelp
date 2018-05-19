import React from 'react';
import { AppRegistry,StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

import {
  Scene,
  Router,
  Actions

} from 'react-native-router-flux';
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Donor from "./Donor"
import Donor_Campaign from "./Donor_Campaign"
import Donor_Tab from "./Donor_Tab"
import Message from "./Message"
import Beneficiaries from "./Beneficiaries"

export default class AppRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
   }
 }

  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          component={Home}
          title="Home"
          initial = {true}
        />
        <Scene
          key="Login"
          component={Login}
          title="Login"
        />
      
          <Scene key="Signup"
          component={Signup}
          title="Signup"
          
        />
          <Scene key="Donor"
           hideNavBar={true}
          component={Donor}
          title="Donor"
          
        />
        <Scene key="Donor_Campaign"
          component={Donor_Campaign}
          title="Donor_Campaign"
          
        />
        <Scene key="Donor_Tab"
          component={Donor_Tab}
           hideNavBar={true}
          title="Donor_Tab"
          
        />
        <Scene key="Message"
          component={Message}
          title="Message"
          
        />
          <Scene
          key="Beneficiaries"
          component={Beneficiaries}
          title="Beneficiaries"

          
        />
      </Scene>
    </Router>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});