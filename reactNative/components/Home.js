import React from 'react';
import { StyleSheet, Text, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Button } from 'react-native-elements';

import Login from './Login'
import Signup from './Signup'

const Yussur =  TabNavigator({
  Home: { screen: Login },
  Settings: { screen: Signup },
});
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }
 render() {
    return (
        <Yussur/>

      );
  }
}


const styles = StyleSheet.create({
  container: {
    margin:10 , 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



module.exports = Home;