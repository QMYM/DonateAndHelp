
import React, { Component } from 'react';
import Row, { AppRegistry, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert, Linking, SectionList } from 'react-native';
import axios from 'axios';


export default class Profile_Donor extends React.Component { 

  constructor (props) {
    super(props);
    this.state = {
      contactNum: '',
      description: '',
      address: '',
      newContactNum: '',
      newDescription: '',
      newAddress: ''
    }
  }

  // getDonorInfo(){
  //   var x = this;
  //   axios.get("/getInfoForProfilePageforDonor").then(function(res){
  //     var info = res.data;
  //     console.log("i'm here tho!",res.data)
  //       x.setState({
  //          newPhoneNum:info.phoneNum,
  //          newDescription:info.description,
  //          newAddress:info.address
  //         })
  //   }).catch(function(err){
  //     console.lof(err);
  //   })
  // }

  // componentDidMount(){
  //  this.getDonorInfo();
  // }

  editInfo(contactNum, description, address) { 
    var x = this;
    console.log("Edit Information in axios mais mais", contactNum, description, address);
    axios.post('http://192.168.1.146:3000/Profile_Donor',
    {
      contactNum: this.state.contactNum,
      description: this.state.description,
      address: this.state.address
    })
    .then(response => {
       //console.log("success in updating profile!", response);
       console.log(response, "mais mais");
       var info = response.data;

       x.setState({
       newContactNum: info.contactNum,
       newDescription: info.description,
       newAddress: info.address
          })
      }).catch(error => {
        console.log("wrong in updating profile!", error);
      })
    };

  render(){
    return (
      <View>
      <Text>About Me</Text>
      <Text>Some Description</Text>
      <Text>Phone Number: </Text>      
      <TextInput
      placeholder="Type here your phone number!"
      keyboardType={'numeric'}
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
      <Button
      onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}
      title="Done"
      />
      <Text>Information</Text>

      <Text>{this.state.newContactNum}</Text>
      <Text>{this.state.newDescription}</Text>
      <Text>{this.state.newAddress}</Text>

    
      </View>
      )
    }
  }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    })



