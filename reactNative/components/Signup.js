import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert , Picker , KeyboardAvoidingView , ScrollView} from 'react-native';
import axios from 'axios'
//import promise from 'promise'
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


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

  submitDonater (username,email,password , confirmPassword) { // sending post reqeust to the server
    if (confirmPassword === password) {
     if (password !== '' && confirmPassword !== '') {
      axios.post('https://qaysdonate.herokuapp.com/Donater',
      {
        username: username,
        email:email,
        password:password,
        user: ''
      })
      .then(function (res) {
        Actions.Donor_Tab()

      }).catch(function (err) {
        console.log("err" , err)
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
    axios.post('https://qaysdonate.herokuapp.com/Company',
    {
      username: username,
      email:email,
      password:password,
      user: ''
    })
    .then(function (res) {
      Actions.Beneficiaries_Tab()

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
   <Container>
   <Content>
   <Text style = {styles.text}> Choose Your Career !</Text>

   <Picker selectedValue = {this.state.user} onValueChange = {(itemValue) => this.setState({user:itemValue})}>
   <Picker.Item label = "Company" value='true'/>
   <Picker.Item label = "Donor" value='false' />

   </Picker>

   <Item floatingLabel last>
   <Label>User Name</Label>
   <Input 
   style = {styles.input}
   onChangeText={(username) => this.setState({username})}
   />
   </Item>

   <Item floatingLabel last>
   <Label>Email</Label>
   <Input 
   onChangeText={(email) => this.setState({email})}
   />
   </Item>


   <Item floatingLabel last>
   <Label>Password</Label>
   <Input 
   secureTextEntry={true}
   onChangeText={(password) => this.setState({password})}
   />
   </Item>

   <Item floatingLabel last>
   <Label>Confirm Password</Label>
   <Input 
   secureTextEntry={true}
   onChangeText={(confirmPassword) => this.setState({confirmPassword})}
   />
   </Item>

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
    </View>
  }
  </Content>
  </Container>
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
