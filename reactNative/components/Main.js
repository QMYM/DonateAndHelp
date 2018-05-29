import React from 'react'
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator, Alert} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { TabNavigator } from 'react-navigation' // Version can be specified in package.json
import { Container, Header, Content, Button, Text } from 'native-base'
import { Drawer } from 'native-base'

import Signup from './Signup'
import Aboutus from './Aboutus'
import Contactus from './Contactus'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (

      <Container style={styles.container}>
        <Content style={styles.yussur}>

          <Button style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            borderRadius: 100,
            marginTop: 10,
            marginLeft: 10
          }}
            onPress={() => { Actions.Signup() }}>
            <Text> Signup</Text>
          </Button>

          <Button style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderRadius: 100,
            marginTop: 10,
            marginLeft: 10
          }}
          onPress={() => { Actions.Login() }}>
            <Text>Login</Text>
          </Button>

          <Button style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'green',
            borderRadius: 100,
            marginTop: 10,
            marginLeft: 10
          }}
          onPress={() => { Actions.Aboutus() }}>
            <Text>AboutUs</Text>
          </Button>

         <Button style={{
            borderWidth: 1,
            borderColor: 'rgba(0,0,0,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            backgroundColor: 'orange',
            borderRadius: 100,
            marginTop: 10,
            marginLeft: 10
          }}
            onPress={() => { Actions.Contactus() }}>
            <Text>Team</Text>
          </Button>


        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3'
  },
  yussur: {
    marginTop: 30

  }

})

module.exports = Main
