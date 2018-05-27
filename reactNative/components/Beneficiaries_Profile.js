import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

class Beneficiaries_Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false

    }
  }

  render () {
    return (
      <View style={styles.container}>

        <Text>
      welcome Beneficiaries_Profile
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = Beneficiaries_Profile
