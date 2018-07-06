import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator, Alert} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Jiro} from 'react-native-textinput-effects'
import { Container, Header, Content, Left, Body, Right, Title, Button} from 'native-base'

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
        console.log('Donation has been posted!')
      }).catch(error => {
        alert('wrong in posting a Donation!')
      })
  }

  render () {
    return (
      <View >
        <Header>
          <Left />
          <Body>
            <Title>Campaign</Title>
          </Body>
          <Right />
        </Header>

        <Jiro
          label={'Donation Name!'}
          // this is used as active and passive border color
          borderColor={'tomato'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignName) => this.setState({campaignName})}
        />

        <Jiro
          label={'Donation Description!'}
          // this is used as active and passive border color
          borderColor={'tomato'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignDescription) => this.setState({campaignDescription})}
        />

        <Jiro
          label={'Donation Amount!'}
          // this is used as active and passive border color
          borderColor={'tomato'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignAmount) => this.setState({campaignAmount})}
        />

        <Button full dark transparent
          onPress={() => this.submitCampaign(this.state.campaignName, this.state.description,
            this.state.amount, this.state.beneficiaryName, this.state.campaignImage)}
        ><Text>Submit</Text></Button>
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
