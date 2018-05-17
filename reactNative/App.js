import React from 'react';
import { AppRegistry,StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'


import {
  Scene,
  Router,
  Actions

} from 'react-native-router-flux';

import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Donor from "./components/Donor"


export default class App extends React.Component {
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
          initial
        />
        <Scene
          key="Login"
          component={Login}
          title="Gray"
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
