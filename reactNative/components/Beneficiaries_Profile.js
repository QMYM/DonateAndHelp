import React from 'react'
import { Modal, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert, Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'

class Beneficiaries_Profile extends React.Component {
  constructor (props) {
    super(props)
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
      modalVisible: false,
      edit: false,
      email: '',
      post: [],
      id: '',
      newName: ''
    }
  }
  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }
  setEdit (visible) {
    this.setState({edit: visible})
  }

  getInfoForProfilePage () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/getInfoForProfilePage').then(function (res) {
      var alo = res.data[0]
      x.setState({
        newDescription: alo.description,
        newPhone: alo.contactNum,
        newAdress: alo.address,
        newName: alo.name
      })
    }).catch(function (err) {
      console.log(err)
    })
  }

  logout () {
    axios.get('https://donatandhelp.herokuapp.com/logout')
      .then(function (res) {
        console.log('logged out')
        Actions.Home()
      }).catch(function (err) {
        console.log('logout err', err)
      })
  }

  fetchCompanyData () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/fetchCompanyData').then(function (res) {
      var user = res.data.username
      var email = res.data.email
      x.setState({
        user: user,
        email: email
      })
    }).catch(function (err) {
      console.log('error', err)
    })
    axios.get('https://donatandhelp.herokuapp.com/companyCam')
      .then(res => {
        var posts = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].username === this.state.user) {
            posts.push(res.data[i])
            x.setState({post: posts})
          }
        }
      })
  }

  getLargeImage () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/getImage2')
      .then(function (res) {
        var post = res.data
        x.setState({image2: post.image2})
      }).catch(function (err) {
        console.log(err)
      })
  }

  componentDidMount () { // this is the initial
    this.getInfoForProfilePage()
    axios.get('https://donatandhelp.herokuapp.com/getImage')
      .then(response => {
        const posts = response['data']
        this.setState({ // changing the state to the new image that i fetch it from database
          image: posts.image
          // image2:posts.image
        })
        this.fetchCompanyData()
      })
      .catch(function (error) {
        console.log(error)
      })
    this.getLargeImage()
  }

  deleteCampaign (delCampaignID) {
    axios.post('https://donatandhelp.herokuapp.com/delCampaignComp', {
      CampID: delCampaignID
    })
      .then(response => {
        alert('Fundraising has been deleted!')
      }).catch(error => {
        alert('error in Fundraising deletion!', error)
      })
  }

  updateCampaign (campaignID, campaignName, campaignDescription, campaignAmount, name) {
    axios.put('https://donatandhelp.herokuapp.com/editCampaignComp', {
      campaignID: campaignID,
      campaignName: campaignName,
      campaignDescription: campaignDescription,
      campaignAmount: campaignAmount,
      username: name
    })
      .then(response => {
        alert('Fundraising has been edited!')
        window.location.reload()
      }).catch(error => {
        alert('error in Fundraising edit!')
      })
  }

  theId (id) {
    this.setState({id: id})
  }

  editInfo (contactNum, description, address) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/profile_company',
      {
        contactNum: this.state.contactNum,
        description: this.state.description,
        address: this.state.address
      })
      .then(response => {
        console.log('success in updating profile!', response)
        var info = response.data
        x.setState({
          newContactNum: info.contactNum,
          newDescription: info.description,
          newAddress: info.address
        })
      }).catch(error => {
        console.log('wrong in updating profile!', error)
      })
  };

  render () {
    return (
      <Container>
        <Header />
        <Content>

          <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Information</Text>
              <Text>Phone Number: </Text>
              <TextInput
                placeholder='Type here your phone number!'
                keyboardType='numeric'
                onChangeText={(contactNum) => this.setState({contactNum})}
              />
              <Text>Description: </Text>
              <TextInput
                placeholder='Type here a description!'
                onChangeText={(description) => this.setState({description})}
              />
              <Text>Address: </Text>
              <TextInput
                placeholder='Type here your address!'
                onChangeText={(address) => this.setState({address})}
              />
              <Button
                onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}

              ><Text>Done</Text></Button>
              <Button onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>

          <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.edit}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Edit</Text>
              <Text>Fundraising Name: </Text>
              <TextInput
                placeholder='Type here your campaignName!'
                onChangeText={(campaignName) => this.setState({campaignName})}
              />

              <Text>Fundraising Description: </Text>
              <TextInput
                placeholder='Type here your campaignDescription!'
                onChangeText={(campaignDescription) => this.setState({campaignDescription})}
              />

              <Text>Fundraising Amount: </Text>
              <TextInput
                placeholder='Type here your campaignAmount!'
                onChangeText={(campaignAmount) => this.setState({campaignAmount})}
              />

              <Button
                onPress={() => this.updateCampaign(this.state.id, this.state.campaignName,
                  this.state.campaignDescription, this.state.campaignAmount, this.state.user)}
              ><Text>Update</Text></Button>

              <Button onPress={() => {
                this.setEdit(!this.state.edit)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>

          <Image
            style={styles.stretch2}

            source={{uri: this.state.image2 || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}

          />
          <Image
            style={styles.stretch}
            source={{uri: this.state.image || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'}}
          />

          <Text>About Me</Text>
          <Text>Some Description</Text>

          {this.state.post.map(po =>
            <View>
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

                      style={{height: 200, width: null, flex: 1}}
                      source={{uri: po.campaignImage || 'http://bootdey.com/img/Content/avatar/avatar1.png'}}
                    />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent onPress={() => { this.theId(po._id), this.setEdit(true) }}>
                        <Icon active name='edit' />
                        <Text>Edit</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent onPress={() => this.deleteCampaign(po._id)}>
                        <Icon active name='delete' />
                        <Text>Delete</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                </Card>
              </Content>
            </View>
          )}

          <Button onPress={() => {
            this.setModalVisible(true)
          }}>
            <Text>Edit Information</Text>
          </Button>
          <Button
            onPress={() => this.logout()}
          ><Text>Logout</Text></Button>
          <Text>Information</Text>
          <Text>{this.state.newName}</Text>
          <Text>{this.state.email}</Text>
          <Text>{this.state.newContactNum}</Text>
          <Text>{this.state.newDescription}</Text>
          <Text>{this.state.newAddress}</Text>
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
    marginLeft: 10,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: -60,
    borderWidth: 1

  },
  center: {
    alignItems: 'center'
  },
  btn: {
    marginTop: 10,
    width: 150
  }
})

module.exports = Beneficiaries_Profile
