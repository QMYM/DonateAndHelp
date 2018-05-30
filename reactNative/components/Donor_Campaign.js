import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button , Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base';
import { Jiro} from 'react-native-textinput-effects';


class Donor_Campaign extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: '',
      messageForDom: ''

    }
  }

  submitCampaign (campaignName, campaignDescription, campaignAmount, campaignImage) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/Donorcampaign', {
      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount,
      campaignImage: this.state.campaignImage
    })
      .then((response) => {
        console.log('campaign has been posted!')
      }).catch(error => {
        alert('wrong in posting a campaign!')
      })
  }

  render () {
    return (
      <View >

        <Jiro
          label={'Type here your Campaign Name!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignName) => this.setState({campaignName})}
        />

        <Jiro
          label={'Type here your Campaign Description!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignDescription) => this.setState({campaignDescription})}
        />

        <Jiro
          label={'Type here your Campaign Amount!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignAmount) => this.setState({campaignAmount})}
        />

        <Button onPress={() => this.submitCampaign(this.state.campaignName, this.state.description, this.state.amount, this.state.beneficiaryName, this.state.campaignImage)}
          title='Submit' />
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

module.exports = Donor_Campaign
