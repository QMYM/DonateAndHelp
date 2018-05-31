import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert, Picker} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Jiro} from 'react-native-textinput-effects'
import { Container, Header, Content, Left, Body, Right  , Title } from 'native-base';

class Beneficiaries_Campaign extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: '',
      messageForDom: '',
      category: ''

    }
  }

  submitCampaign (campaignName, campaignDescription, campaignAmount, campaignImage) {
    axios.post('https://donatandhelp.herokuapp.com/companycampaign', {

      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount,
      campaignImage: this.state.campaignImage,
      category: this.state.category
    })
      .then(response => {
        console.log('Fundraising has been posted!')
      }).catch(error => {
        alert('wrong in posting a Fundraising!')
      })
  }

  render () {
    return (
      <View >
       <Header>
            <Left />
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>
        <Jiro
          label={'Type here your Fundraising Name!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignName) => this.setState({campaignName})}
        />

        <Jiro
          label={'Type here your Fundraising Description!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignDescription) => this.setState({campaignDescription})}
        />

        <Jiro
          label={'Type here your Fundraising Amount!'}
          // this is used as active and passive border color
          borderColor={'#9b537a'}
          inputStyle={{ color: 'white' }}
          onChangeText={(campaignAmount) => this.setState({campaignAmount})}
        />

        <Picker selectedValue={this.state.category} onValueChange={(itemValue) => this.setState({category: itemValue})}>
        <Picker.Item label='School & Education' value='School & Education' />
        <Picker.Item label='Medical & Health' value='Medical & Health' />
        <Picker.Item label='Non Profit & Charity' value='Non Profit & Charity' />
        </Picker>

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

module.exports = Beneficiaries_Campaign
