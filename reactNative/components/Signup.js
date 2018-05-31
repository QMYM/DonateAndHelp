import React from 'react'
import { StyleSheet, ImageBackground, Text, Dimensions, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator, Alert, Picker, ScrollView, Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      user: 'true'

    }
  }

  submitDonater (username, email, password, confirmPassword) { // sending post reqeust to the server
    // if (confirmPassword === password) {
    //   if (password !== '' && confirmPassword !== '') {
    //     axios.post('https://donatandhelp.herokuapp.com/Donater',
    //       {
    //         username: username,
    //         email: email,
    //         password: password,
    //         user: ''
    //       })
    //       .then(function (res) {
    //         Actions.Donor_Tab()
    //       }).catch(function (err) {
    //         console.log('err', err)
    //       })
    //   } else {
    //     Alert.alert('enter your password')
    //   }
    // } else {
    //   Alert.alert("password doesn't match,rewrite it again")
    // }

     // Validate the email
     var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    if(!regex.test(email)){
      alert("Please enter a valid email!");
    }
    // Validate the password
    if(password === "") {
     alert("Please enter a valid passowrd");
      } else if(password.length < 5) {
         alert("Password length must be at least 5 characters. Please enter a valid password!")
         } else if(password.length > 8) {
            alert("Password length must be maximum 8 characters. Please enter a valid password!")
            } else if(!(/[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password)) ){
               alert("Password should have at least one number, one upper case, one small case and one speciall character. Please enter a valid one!");
               } else if (confirmPassword === password) {
                   axios.post('https://donatandhelp.herokuapp.com/Donater',
                  {
                   username: username,
                   email: email,
                   password: password,
                   user: ''
                  })
                 .then(function (res) {
                 Actions.Donor_Tab()
                 }).catch(function (err) {
                 console.log('err', err)
               })
                   } else {
                      console.log(confirmPassword);
                      alert("Password doesn't match. Please rewrite it again!!");
                      this.pass.value = '';
                      this.conPass.value = '';
                  }
  }

  submitCompany (username, email, password, confirmPassword) { // sending post reqeust to the server
    // if (confirmPassword === password) {
    //   if (password !== '' && confirmPassword !== '') {
    //     axios.post('https://donatandhelp.herokuapp.com/Company',
    //       {
    //         username: username,
    //         email: email,
    //         password: password,
    //         user: ''
    //       })
    //       .then(function (res) {
    //         Actions.Beneficiaries_Tab()
    //       }).catch(function (err) {
    //         console.log('err', err)
    //       })
    //   } else {
    //     Alert.alert('enter your password')
    //   }
    // } else {
    //   Alert.alert("password doesn't match,rewrite it again")
    // }

    // Validate the email
     var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    if(!regex.test(email)){
      alert("Please enter a valid email!");
    }
    // Validate the password
    if(password === "") {
     alert("Please enter a valid passowrd");
      } else if(password.length < 5) {
         alert("Password length must be at least 5 characters. Please enter a valid password!")
         } else if(password.length > 8) {
            alert("Password length must be maximum 8 characters. Please enter a valid password!")
            } else if(!(/[0-9]/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[!@#$%^&*]/.test(password)) ){
               alert("Password should have at least one number, one upper case, one small case and one speciall character. Please enter a valid one!");
               } else if (confirmPassword === password) {
                   axios.post('https://donatandhelp.herokuapp.com/Company',
                 {
                    username: username,
                    email: email,
                    password: password
                  })
                  .then(function (res) {
                   Actions.Beneficiaries_Tab()
                  }).catch(function (err) {
                   console.log('err', err)
                  })
                  } else {
                      console.log(confirmPassword);
                      alert("Password doesn't match. Please rewrite it again!!");
                      this.pass.value = '';
                      this.conPass.value = '';
                  }
  };

  render () {
    return (
      <Container>
        <Content>
          <View style={styles.container}>
            <ImageBackground
              source={require('./signup_bg.png')}
              style={[styles.container, styles.bg]}
              resizeMode='cover'
            >
              <View style={styles.headerContainer}>

                <View style={styles.headerIconView}>
                  <TouchableOpacity style={styles.headerBackButtonView}>
                    <Image
                      source={require('./back.png')}
                      style={styles.backButtonIcon}
                      resizeMode='contain'
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.headerTitleView}>
                  <Text style={styles.titleViewText}>Sign Up</Text>
                </View>

              </View>

              <View style={styles.inputsContainer}>

                <Text style={styles.text}>Choose</Text>
                <Picker selectedValue={this.state.user} onValueChange={(itemValue) => this.setState({user: itemValue})}>
                  <Picker.Item label='Company' value='true' />
                  <Picker.Item label='Donor' value='false' />
                </Picker>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./login1_person.png')}
                      style={styles.inputIcon}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    style={[styles.input, styles.whiteFont]}
                    placeholder='Name'
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='transparent'
                    onChangeText={(username) => this.setState({username})}

                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./signup_email.png')}
                      style={styles.inputIcon}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    style={[styles.input, styles.whiteFont]}
                    placeholder='Email'
                    placeholderTextColor='#FFF'
                    onChangeText={(email) => this.setState({email})}

                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./login1_lock.png')}
                      style={styles.inputIcon}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    secureTextEntry
                    style={[styles.input, styles.whiteFont]}
                    placeholder='Password'
                    placeholderTextColor='#FFF'
                    onChangeText={(password) => this.setState({password})}

                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Image
                      source={require('./login1_lock.png')}
                      style={styles.inputIcon}
                      resizeMode='contain'
                    />
                  </View>
                  <TextInput
                    secureTextEntry
                    style={[styles.input, styles.whiteFont]}
                    placeholder='ConfirmPassword'
                    placeholderTextColor='#FFF'
                    underlineColorAndroid='transparent'
                    onChangeText={(confirmPassword) => this.setState({confirmPassword})}

                  />
                </View>

              </View>

              <View style={styles.footerContainer}>

                { this.state.user === 'true' ? (

                  <View style={styles.signup}>
                    <Button transparent full
                      onPress={() => this.submitCompany(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)}>
                      <Text style={styles.whiteFont}>Sign up Company</Text>
                    </Button>
                  </View>
                )
                  : <View style={styles.signup}>
                    <Button transparent full
                      onPress={() => this.submitDonater(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)}>
                      <Text style={styles.whiteFont}>Sign up Donor</Text>
                    </Button>
                  </View>
                }

                <TouchableOpacity>
                  <View style={styles.signin}>
                    <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </Content>
      </Container>
    )
  }
}

let styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#D8D8D8'
  },
  container: {
    flex: 1
  },
  bg: {
    paddingTop: 30,
    width: null,
    height: null
  },
  headerContainer: {
    flex: 1
  },
  inputsContainer: {
    flex: 3,
    marginTop: 50
  },
  footerContainer: {
    flex: 1
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    width: 25,
    height: 25
  },
  backButtonIcon: {
    width: 25,
    height: 25
  },
  headerTitleView: {
    backgroundColor: 'transparent',
    marginTop: 25,
    marginLeft: 25
  },
  titleViewText: {
    fontSize: 40,
    color: '#fff'
  },
  inputs: {
    paddingVertical: 20
  },
  inputContainer: {
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent',
    flexDirection: 'row',
    height: 75
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputIcon: {
    width: 30,
    height: 30
  },
  input: {
    flex: 1,
    fontSize: 20
  },
  signup: {
    backgroundColor: '#f4511e',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    height: 20
  },
  signin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
module.exports = Signup
