import React from 'react';
import { StyleSheet , TextInput , FlatList, ActivityIndicator,  Alert, Image} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Content, SwipeRow, View, Text, Icon } from 'native-base';
import { Button } from 'react-native-elements'

class Donor_Profile extends React.Component {
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

  getInfoForProfilePageforDonor(){
    var x = this
    axios.get("https://donatandhelp.herokuapp.com/getInfoForProfilePageforDonor")
    .then(function(res){
      var alo = res.data[0]
      x.setState({
        newDescription:alo.description,
        newPhone:alo.contactNum,
        newAdress: alo.address,
        newName:alo.name
      })
    }).catch(function(err){
      console.log(err)
    })
  }

  submit (name, contactNum, description, address) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/Profile_Donor', {
      name: this.state.name,
      contactNum: this.state.contactNum,
      description: this.state.description,
      address: this.state.address
    })
    .then(response => {
        // should go to the home page from here
        var alo = response.data
        console.log('profile has been updated',response.data)
        // should go to the home page from here
        x.setState({
          newDescription:alo.description,
          newPhone:alo.contactNum,
          newAdress: alo.address,
          newName:alo.name
        })

      }).catch(error => {
        alert('wrong in profile update')
      })
    }

  uploadPhoto (photo) { // post the photo and get the photo in the same time
    var x = this
    var file = photo.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
      axios.post('https://donatandhelp.herokuapp.com/photoDonor', {image: e.target.result})
      .then(res => {
        console.log('hello Donor image', res)
          window.location.reload() // here i'm getting the photo from database
        })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
  uploadPhoto2 (photo) { // post the photo and get the photo in the same time
    var x = this
    var file = photo.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (e) {
      axios.post('https://donatandhelp.herokuapp.com/photoDonor2', {image2: e.target.result})
      .then(res => {
          window.location.reload() // here i'm getting the photo from database
        })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  getLargeImage () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/getImageDonor2')
    .then(function (res) {
      var post = res.data
      x.setState({image2: post.image2})
    }).catch(function (err) {
      console.log(err)
    })
  }
  componentDidMount () { // this is the initial
    this.getInfoForProfilePageforDonor()
    this.fetchDonorData()
    axios.get('https://donatandhelp.herokuapp.com/getImageDonor')
    .then(response => {
      this.fetchDonorData()
      const posts = response['data']
        this.setState({ // changing the state to the new image that i fetch it from database
          image: posts.image
          // image2:posts.image
        })
      })
    .catch(function (error) {
      console.log(error)
    })
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/donorCam')
    .then(res => {
      var posts = []
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].username === this.state.user) {
          posts.push(res.data[i])
          x.setState({post: posts})
        }
      }
    })
    this.getLargeImage()
  }

  fetchDonorData () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/fetchDonorData').then(function (res) {
      var user = res.data.username
      var email = res.data.email
      x.setState({
        user: user,
        email: email
      })
    }).catch(function (err) {
      console.log('error', err)
    })
  }

  deleteCampaign (delCampaignID) {
    axios.post('https://donatandhelp.herokuapp.com/delCampaignDonor', {
      CampID: delCampaignID
    })
    .then(response => {
      alert('campaign has been deleted!')
      window.location.reload()
    }).catch(error => {
      alert('error in campaign deletion!', error)
    })
  }



  updateCampaign (campaignID, campaignName, campaignDescription, campaignAmount, name) {
    axios.put('https://donatandhelp.herokuapp.com/editCampaignDonor', {
      campaignID: campaignID,
      campaignName: campaignName,
      campaignDescription: campaignDescription,
      campaignAmount: campaignAmount,
      username: name
    })
    .then(response => {
      alert('campaign has been edited!')
      window.location.reload()
    }).catch(error => {
      alert('error in campaign edit!')
    })
  }

  theId (id) {
    this.setState({id: id})
  }

  logout () {
    axios.get('https://donatandhelp.herokuapp.com/logout')
    .then(function (res) {
      console.log('ea eshe ')
      window.location.href = '/'
    }).catch(function (err) {
      console.log('logout err ', err)
    })
  }

    // keyboardType={"numeric"}

    render(){
      return (
       <Container>
       <Header />
       <Content>

       <Image
       style={styles.stretch2}

       source={{uri : this.state.image2 || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}

       />
       <Image
       style={styles.stretch}
       source={{uri : this.state.image || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}
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
       {this.state.post.map(po => 
         <View key={po._id}>
         <Content>
         <Card>
         <CardItem>
         <Left>
         <Body>
         <Text>{po.campaignName}</Text>
         <Text note>{po.campaignDescription}</Text>
         </Body>
         </Left>
         </CardItem>
         <CardItem cardBody>
         <Image
         </Content>
         </Container>
         )
       }
     }

     const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 22
      },
      stretch2: {
        width: 400,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
      },
      stretch: {
        marginLeft:10,
        width: 150,
        height: 150,
        borderRadius: 150/2,
        marginTop:-60,
        borderWidth: 1,

      },
      center:{
        alignItems: 'center',        
      },
      btn:{
        marginTop:10,
        width: 150,

      },

    })

    module.exports = Donor_Profile;