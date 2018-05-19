import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert , Picker} from 'react-native';
import axios from 'axios'
import promise from 'promise'
import { Actions } from 'react-native-router-flux'; 
<<<<<<< HEAD
=======
 
>>>>>>> b04db4869c0a16eea67e7e50748f124d38dbf2ed

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username: '',
     email:'' ,
     password:'',
      confirmPassword: '',
      user: 'true'
   }

 }

<<<<<<< HEAD
  send (username,email,password , confirmPassword) { // sending post reqeust to the server
    console.log("Hi Sign up!!");
  if (confirmPassword === password) {
   if (password !== '' && confirmPassword !== '') {
    axios.post('http://192.168.1.146:3000/Donater',
     {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
=======
  submitDonater (username,email,password , confirmPassword) { // sending post reqeust to the server
  if (confirmPassword === password) {
   if (password !== '' && confirmPassword !== '') {
    axios.post('http://192.168.1.128:3000/Donater',
     {
      username: username,
      email:email,
      password:password,
      user: ''
>>>>>>> b04db4869c0a16eea67e7e50748f124d38dbf2ed
    })
    .then(function (res) {
      //console.log(res, "Hi res axios")
        Actions.Profile_Donor()

    }).catch(function (err) {
      console.log("error in axios" , err)
    })
  }else {
        Alert.alert('enter your password')
      }
    } else {
      
      Alert.alert("password doesn't match,rewrite it again")
    }
}
submitCompany (username, email, password, confirmPassword) { // sending post reqeust to the server
     if (confirmPassword === password) {
   if (password !== '' && confirmPassword !== '') {
    axios.post('http://192.168.1.128:3000/Company',
     {
      username: username,
      email:email,
      password:password,
      user: ''
    })
    .then(function (res) {
        Actions.Donor()

    }).catch(function (err) {
      console.log("err" , err)
    })
  }else {
        Alert.alert('enter your password')
      }
    } else {
      
      Alert.alert("password doesn't match,rewrite it again")
    }
  };

  render() {
   
    return (  
        <View style={styles.container}>
        <View>
         <Text style = {styles.text}> Choose Your Career !</Text>

    <Picker selectedValue = {this.state.user} onValueChange = {(itemValue) => this.setState({user:itemValue})}>
               <Picker.Item label = "Company" value='true'/>
               <Picker.Item label = "Donor" value='false' />
               
            </Picker>
          
         
      </View>
      
       
      <Text>User Name : </Text>
      <TextInput 
      style = {styles.input}
      placeholder="Type here your username!"
      onChangeText={(username) => this.setState({username})}
      />
      <Text>Email : </Text>
      <TextInput style = {styles.input}
      placeholder="Type here your email!"
      onChangeText={(email) => this.setState({email})}
      />
      <Text>Password : </Text>
      <TextInput
      style = {styles.input}
       secureTextEntry={true}
      placeholder="Type here your password"
      onChangeText={(password) => this.setState({password})}
      />
      <Text> Confirm Password : </Text>
       <TextInput 
       style = {styles.input}
       secureTextEntry={true}
      placeholder="Type here your password"
      onChangeText={(confirmPassword) => this.setState({confirmPassword})}
      />   

      { this.state.user === 'true' ? (
                    <View>
                      
                        <Button
      onPress={() => this.submitCompany(this.state.username,this.state.email , this.state.password,this.state.confirmPassword)}
      title="Sign up Company"
      />
                    </View>
                  )
                    : <View>
                      
                        <Button
      onPress={() => this.submitDonater(this.state.username,this.state.email , this.state.password,this.state.confirmPassword)}
      title="Sign up Donor"
      />
                    </View>}
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

module.exports = Signup;
