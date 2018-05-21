import React from 'react';
import { StyleSheet, Text, View , TextInput   , FlatList, ActivityIndicator,  Alert , Picker , KeyboardAvoidingView } from 'react-native';
import axios from 'axios'
import promise from 'promise'
import { Actions } from 'react-native-router-flux'; 
import { Button } from 'react-native-elements';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     userName: '',
     password:'' , 
     user:''  
   }
 }


  submitLoginDonater () { // send post request to the server
    axios.post('http://192.168.1.65:3000/loginDonater', {
      userName: this.state.userName,
      password: this.state.password
    })
    .then(response => {
      Actions.Donor_Tab()
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
    }; 
    submitLoginCompany () {
      axios.post('http://192.168.1.65:3000/loginCompany', {
        userName: this.state.userName,
        password: this.state.password
      })
      .then(response => {
        Actions.Beneficiaries_Tab()
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
    }


    render() {
      return (
        <View style={styles.container}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View>
        <Text style = {styles.text}> Choose Your Career !</Text>

        <Picker selectedValue = {this.state.user} onValueChange = {(itemValue) => this.setState({user:itemValue})}>
        <Picker.Item label = "Company" value=''/>
        <Picker.Item label = "Donor" value='false' />
        
        </Picker>
        
        
        </View>
        <Text>User Name : </Text>
        <TextInput
        style = {styles.input}
        placeholder="Enter your username!"
        onChangeText={(userName) => this.setState({userName})}
        />
        
        <Text>Password : </Text>

        <TextInput 
        style = {styles.input}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(password) => this.setState({password})}
        />

        { this.state.user === 'false' ? (
          <View>
          
          <Button
          onPress={() => this.submitLoginDonater()}
          title="Login Donor"
          />                    
          </View>
          )
        : 
        <View>
        
        <Button
        onPress={() => this.submitLoginCompany()}
        title="Login Company"
        />                    

        </View>
      }
      </KeyboardAvoidingView>
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
    input: {
      width:200 , 
      margin: 5,
      height: 40,
      borderColor: '#7a42f4',
    },
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
    }
  });


  module.exports = Login;