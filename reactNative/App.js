import React from 'react';
import { AppRegistry,StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

import {
  Scene,
  Router,
  Actions

} from 'react-native-router-flux';

import AppRoute from "./components/AppRoute"


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


