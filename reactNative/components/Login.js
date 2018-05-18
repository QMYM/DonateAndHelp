import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import promise from 'promise'
import { Actions } from 'react-native-router-flux'; 

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username: '',
     email:'' 
     
   }
 }


  submitLoginDonater () { // send post request to the server
    axios.post('http://192.168.1.81:3000/loginDonater', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
        Actions.Donor()
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome To our App</Text>
      <Text>User Name : </Text>
      <TextInput
      placeholder="Type here your username!"
      onChangeText={(username) => this.setState({username})}
      />
    
      <Text>Password : </Text>

      <TextInput secureTextEntry={true}
      placeholder="Type here your password"
      onChangeText={(password) => this.setState({password})}
      />
   
  
        <Button
      onPress={() => this.submitLoginDonater()}
      title="Login"
      />
      </View>
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

module.exports = Login;