import React from 'react';
import { Modal , TouchableHighlight ,  StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 

class Beneficiaries_Campaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     campaignName: '',
      campaignDescription: '',
      campaignAmount: '',
      campaignImage: '',
      messageForDom:''
     
   }
 }

 submitCampaign (campaignName, campaignDescription, campaignAmount, campaignImage) {

    axios.post('https://qaysdonate.herokuapp.com/companycampaign', {
      campaignName: this.state.campaignName,
      campaignDescription: this.state.campaignDescription,
      campaignAmount: this.state.campaignAmount,
      campaignImage: this.state.campaignImage
    })
      .then(response => {
        console.log('campaign has been posted!')  
      }).catch(error => {
        alert('wrong in posting a campaign!')
      })
  }

  render() {
    return (
        <View style={styles.container}>
      <Text>Campaign Name : </Text>
      <TextInput 
     placeholder="Type here your Campaign Name!"
      
      onChangeText={(campaignName) => this.setState({campaignName})}
      />
      <Text>Campaign Description : </Text>
      <TextInput 
     placeholder="Type here your Campaign Name!"
      onChangeText={(campaignDescription) => this.setState({campaignDescription})}
      />
      <Text>Amount : </Text>
      <TextInput
      placeholder="Type here your Campaign Name!"
      onChangeText={(campaignAmount) => this.setState({campaignAmount})}
      />

     <Button  onPress={() => this.submitCampaign(this.state.campaignName, this.state.description, this.state.amount, this.state.beneficiaryName, this.state.campaignImage)}
      title="bbbbbbb"/> 
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
});

module.exports = Beneficiaries_Campaign;