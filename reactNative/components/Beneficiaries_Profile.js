
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

  render(){
      return (
         <Container>
        <Header />
        <Content>
        
          <Button
          title="Pick an image from camera roll"
          onPress={this.largeImage}
        />
         <Image
        style={styles.stretch2}

         source={{uri : this.state.image2 || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}

       />

       <Image
        style={styles.stretch}
         source={{uri : this.state.image || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}
       />
       <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Container style={styles.center}>
        <Text>About Me</Text>
        <Text>Some Description</Text>
        <Text>Phone Number: </Text>      
        <TextInput
        placeholder="Type here your phone number!"
        keyboardType="numeric" 
        onChangeText={(contactNum) => this.setState({contactNum})}
        />
        <Text>Description: </Text>
        <TextInput
        placeholder="Type here a description!"
        onChangeText={(description) => this.setState({description})}
        />
        <Text>Address: </Text>
        <TextInput
        placeholder="Type here your address!"
        onChangeText={(address) => this.setState({address})}
        />
       
        <Button  icon={{name: 'done'}} style={styles.btn}
        onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}
         title="done_outline"
        />
       
        <Button
        onPress={() => this.logout()}
         title="logout" />
       
        <Text>Information</Text>
        <Text>{this.state.newName}</Text>
        <Text>{this.state.email}</Text>
        <Text>{this.state.newContactNum}</Text>
        <Text>{this.state.newDescription}</Text>
        <Text>{this.state.newAddress}</Text>
        </Container>


        <Content style={{textAlign :'center'}}>
        {this.state.post.map(po =>
          <View key={po._id}>
          <Text>Campaign Name : {po.campaignName}</Text>
          <Text>{po.campaignDescription}</Text>
          </View>
          )}
         </Content>

         
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
  }
})

module.exports = Beneficiaries_Profile
