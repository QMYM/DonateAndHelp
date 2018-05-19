import React from 'react';
import { AppRegistry,StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

import {
  Scene,
  Router,
  Actions

} from 'react-native-router-flux';

<<<<<<< HEAD
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Donor from "./components/Donor"
import Donor_Campaign from "./components/Donor_Campaign"
import Message from "./components/Message"
import Profile_Donor from "./components/Profile_Donor"
=======
import AppRoute from "./components/AppRoute"
>>>>>>> b04db4869c0a16eea67e7e50748f124d38dbf2ed


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
   }
 }
  render() {
    return (
       
      <AppRoute/>

      );
  }
}


