import React from 'react';
import { StyleSheet, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Container, Header, Content, Button, Text } from 'native-base';
import { Drawer } from 'native-base';

import Signup from './Signup'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }

 render() {
    return (

      <Container style={styles.container}>
        <Content>
          <Text>  Signup</Text>

          <Button
           onPress={() => {Actions.Signup()}}>
          <Text> Signup</Text>
          </Button>

          <Text> Login</Text>
          <Button 
          onPress={() => {Actions.Login()}}>
          <Text> Login</Text>
          </Button>
        </Content>
      </Container>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
});



module.exports = Main;