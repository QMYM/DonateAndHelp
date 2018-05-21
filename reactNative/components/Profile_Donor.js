
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
      newAddress: '',
      image: '',
      image2: '',
      name: '',
      user: '',
      email: '',
      post: [],
      id: '',
      newName: ''
    }
  }

  // getInfoForProfilePageforDonor(){
  //   var x = this;
  //   axios.get('http://192.168.1.146:3000/getInfoForProfilePageforDonor').then(function(res){
  //     var alo = res.data[0]
  //     console.log("i'm here tho!",res.data[0])
  //     x.setState({
  //       newDescription:alo.description,
  //       newPhone:alo.contactNum,
  //       newAdress: alo.address,
  //       newName:alo.name
  //     })
  //   }).catch(function(err){
  //     console.lof(err)
  //   })
  // }


  //   logout () {
  //   axios.get('http://192.168.1.146:3000/logout')
  //     .then(function (res) {
  //       console.log('logged out')
  //        Actions.Home()
  //     }).catch(function (err) {
  //       console.log('logout err', err)
  //     })
  // }

  // fetchDonorData () {
  //   var x = this;
  //   axios.get('/fetchDonorData').then(function (res) {
  //     var user = res.data.username
  //     var email = res.data.email
  //     x.setState({
  //       user: user,
  //       email: email
  //     })
  //   }).catch(function (err) {
  //     console.log('error', err)
  //   })
  //   axios.get('/donorCam')
  //   .then(res => {
  //     var posts = []
  //     for (var i = 0; i < res.data.length; i++) {
  //       if (res.data[i].username === this.state.user) {
  //         posts.push(res.data[i])
  //         x.setState({post: posts})
  //       }
  //     }
  //   })
  // }


  // getLargeImage () {
  //   var x = this
  //   axios.get('http://192.168.1.146:3000/getImageDonor2')
  //   .then(function (res) {
  //     var post = res.data
  //     x.setState({image2: post.image2})
  //   }).catch(function (err) {
  //     console.log(err)
  //   })
  // }
  
  // componentDidMount () { // this is the initial
  //   this.getInfoForProfilePageforDonor()
  //   axios.get('http://192.168.1.146:3000/getImageDonor')
  //   .then(response => {
  //     const posts = response['data']
  //       this.setState({ // changing the state to the new image that i fetch it from database
  //         image: posts.image
  //         // image2:posts.image
  //       })
  //       this.fetchDonorData()
  //     })
  //   .catch(function (error) {
  //     console.log(error)
  //   })
  //   this.getLargeImage()
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
     console.log("success in updating profile!", response);
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

    // keyboardType={"numeric"}

    render(){
      return (
        <View>
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
        <Button
        onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}
        title="Done"
        />
        <Button
        onPress={() => this.logout()}
        title="Logout"
        />
        <Text>Information</Text>
        <Text>{this.state.newName}</Text>
        <Text>{this.state.email}</Text>
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



