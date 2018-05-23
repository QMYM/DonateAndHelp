import React from 'react';
import { StyleSheet, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import { Container, Header, Content, Button, Text } from 'native-base';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }
 render() {
    return (
     <Container>
      <Content >
     <Text>
     welcome Home
     </Text>
          <Button onPress={() => Actions.Signup()}>
            <Text>Signup </Text>
          </Button>
            <Button onPress={() => Actions.Login()}>
            <Text>Login </Text>
          </Button>
           </Content>
     </Container>
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