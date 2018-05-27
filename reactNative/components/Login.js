import React from 'react'
import { StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator, Alert, Picker, KeyboardAvoidingView, ScrollView, Button} from 'react-native'
import axios from 'axios'
import promise from 'promise'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      user: ''
    }
  }

  submitLoginDonater () { // send post request to the server
    axios.post('https://donatandhelp.herokuapp.com/loginDonater', {
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
    axios.post('https://donatandhelp.herokuapp.com/loginCompany', {
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

  render () {
    return (
      <Container>
        <Content>
          <Text style={styles.text}> Choose Your Career !</Text>
          <Picker selectedValue={this.state.user} onValueChange={(itemValue) => this.setState({user: itemValue})}>
            <Picker.Item label='Company' value='' />
            <Picker.Item label='Donor' value='false' />
          </Picker>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                style={styles.input}
                onChangeText={(userName) => this.setState({userName})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                style={styles.input}
                secureTextEntry
                onChangeText={(password) => this.setState({password})} />
            </Item>
          </Form>

          { this.state.user === 'false' ? (
            <View>

              <Button
                onPress={() => this.submitLoginDonater()}
                title='Login Donor'
              />
            </View>
          )
            : <View>

              <Button
                onPress={() => this.submitLoginCompany()}
                title='Login Company'
              />

            </View>
          }

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 200,
    margin: 5,
    height: 40,
    borderColor: '#7a42f4'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red'
  }
})

module.exports = Login
