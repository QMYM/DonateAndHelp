import React from 'react';
import { StyleSheet , TextInput , FlatList, ActivityIndicator,  Alert, Image,ImageEditor} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Content, SwipeRow, View, Text, Icon } from 'native-base';
import { Button } from 'react-native-elements'
import { ImagePicker } from 'expo';
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

  largeImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });
    
    // this gives you a rct-image-store URI or a base64 image tag that
    // you can use from ImageStore
    //console.log("hello world", "yusur jackel mohammed qays!! mais Alo alo!!!@!@")
   
    this.setState({
      image2:resizedUri
    })
    
 
}

 _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    
    if (result.cancelled) {
      console.log('got here');
      return;
    }

    let resizedUri = await new Promise((resolve, reject) => {
      ImageEditor.cropImage(result.uri,
        {
          offset: { x: 0, y: 0 },
          size: { width: result.width, height: result.height },
          displaySize: { width: 50, height: 50 },
          resizeMode: 'contain',
        },
        (uri) => resolve(uri),
        () => reject(),
      );
    });
        this.setState({
      image:resizedUri
    }) 

  
  }



  getInfoForProfilePageforDonor(){
    var x = this
    axios.get("http://192.168.1.128:3000/getInfoForProfilePageforDonor").then(function(res){
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
    axios.post('http://192.168.1.128:3000/Profile_Donor', {
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



  getLargeImage () {
    var x = this
    axios.get('http://192.168.1.128:3000/getImageDonor2')
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
    axios.get('http://192.168.1.128:3000/getImageDonor')
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
    axios.get('http://192.168.1.128:3000/donorCam')
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
    axios.get('http://192.168.1.128:3000/fetchDonorData').then(function (res) {
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
    axios.post('http://192.168.1.128:3000/delCampaignDonor', {
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
    axios.put('http://192.168.1.128:3000/editCampaignDonor', {
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
    axios.get('http://192.168.1.128:3000/logout')
      .then(function (res) {
    
        //window.location.href = '/'
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