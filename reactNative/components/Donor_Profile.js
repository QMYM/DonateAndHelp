import React from 'react'
import { Modal,
  StyleSheet,
  Animated,
  FlatList,
  Image,
  Alert} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { View,
  Text,
  Icon,
  Button,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Item,
  Input } from 'native-base'
import * as Expo from 'expo'

class Donor_Profile extends React.Component {
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
      newName: '',
      scrollY: new Animated.Value(0)
    }
  }
  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }
  setEdit (visible) {
    this.setState({edit: visible})
  }

  getInfoForProfilePageforDonor () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/getInfoForProfilePageforDonor').then(function (res) {
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
    this.getLargeImage()

    axios.get('https://donatandhelp.herokuapp.com/getImageDonor')
      .then(response => {
        const posts = response['data']
        this.setState({ // changing the state to the new image that i fetch it from database
          image: posts.image
          // image2:posts.image
        })
        this.fetchDonorData()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  deleteCampaign (delCampaignID) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/delCampaignDonor', {
      CampID: delCampaignID
    })
      .then(response => {
        Alert.alert('Donation has been deleted!')
        x.componentDidMount()
      }).catch(error => {
        Alert.alert('error in Donation deletion!', error)
      })
  }

  updateCampaign (campaignID, campaignName, campaignDescription, campaignAmount, name) {
    var x = this
    axios.put('https://donatandhelp.herokuapp.com/editCampaignDonor', {
      campaignID: campaignID,
      campaignName: campaignName,
      campaignDescription: campaignDescription,
      campaignAmount: campaignAmount,
      username: name
    })
      .then(response => {
        Alert.alert('Donation has been edited!')
        x.componentDidMount()
      }).catch(error => {
        console.log(error)
        Alert.alert('error in Donation edit!')
      })
  }

  theId (id) {
    this.setState({id: id})
  }

  editInfo (contactNum, description, address) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/Profile_Donor',
      {
        contactNum: this.state.contactNum,
        description: this.state.description,
        address: this.state.address
      })
      .then(response => {
        var info = response.data
        x.setState({
          newContactNum: info.contactNum,
          newDescription: info.description,
          newAddress: info.address
        })
        x.componentDidMount()
      }).catch(error => {
        console.log('wrong in updating profile!', error)
      })
  };

  _goBack () {
    console.log('Back button pressed')
    this.props.navigation.goBack()
  }

  render () {
    var coverMov = this.state.scrollY.interpolate({
      inputRange: [0, 94, 95],
      outputRange: [0, -94, -94]
    })
    var avatarMov = this.state.scrollY.interpolate({
      inputRange: [0, 150, 151],
      outputRange: [0, -150, -150]
    })
    var avatarOp = this.state.scrollY.interpolate({
      inputRange: [0, 94, 95],
      outputRange: [1, 0, 0]
    })
    var headerOp = this.state.scrollY.interpolate({
      inputRange: [95, 180, 181],
      outputRange: [0, 0.75, 0.75]
    })
    var headerContentOp = this.state.scrollY.interpolate({
      inputRange: [0, 180, 210],
      outputRange: [0, 0, 1]
    })

    return (
      <View style={{ flex: 1 }} >

        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}>
          <View style={{marginTop: 22}}>
            <Text>Information</Text>
            <Item floatingLabel>
              <Input
                placeholder='Phone Number'
                keyboardType='numeric'
                onChangeText={(contactNum) => this.setState({contactNum})}
              />
            </Item>
            <Item floatingLabel>
              <Input placeholder='Description'
                onChangeText={(description) => this.setState({description})}
              />
            </Item>
            <Item floatingLabel>
              <Input
                placeholder='Address'
                onChangeText={(address) => this.setState({address})}
              />
            </Item>
            <Button full danger
              onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}
            ><Text>Done</Text></Button>
            <Button full dark transparent onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}><Text>Close</Text></Button>
          </View>
        </Modal>

        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.edit}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}>
          <View style={{marginTop: 22}}>
            <Text>Edit</Text>
            <Item floatingLabel>
              <Input
                placeholder='Donation Name'
                onChangeText={(campaignName) => this.setState({campaignName})}
              />
            </Item>

            <Item floatingLabel>
              <Input
                placeholder='Donation Description'
                onChangeText={(campaignDescription) => this.setState({campaignDescription})}
              />
            </Item>
            <Item floatingLabel>
              <Input
                placeholder='Donation Amount'
                onChangeText={(campaignAmount) => this.setState({campaignAmount})}
              />
            </Item>
            <Button full danger
              onPress={() => this.updateCampaign(this.state.id, this.state.campaignName,
                this.state.campaignDescription, this.state.campaignAmount, this.state.user)}
            ><Text>Update</Text></Button>

            <Button full dark transparent onPress={() => {
              this.setEdit(!this.state.edit)
            }}><Text>Close</Text></Button>
          </View>
        </Modal>

        <Animated.Image
          source={{uri: this.state.image2 || 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'}}
          style={{
            marginTop: Expo.Constants.statusBarHeight,
            width: '100%',
            height: 150,
            zIndex: 2,
            position: 'absolute',
            transform: [{ translateY: coverMov }]
          }}
        />
        <Animated.View
          style={{
            width: '100%',
            position: 'absolute',
            backgroundColor: '#121212',
            height: 56 + Expo.Constants.statusBarHeight,
            zIndex: 13,
            opacity: headerOp,
            paddingTop: Expo.Constants.statusBarHeight,
            alignItems: 'center'
          }}
        >
          <Animated.View
            style={{
              opacity: headerContentOp,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            zIndex: 4,
            position: 'absolute',
            top: 135,
            opacity: avatarOp,
            transform: [{ translateY: avatarMov }]
          }}
        >
          <Thumbnail
            large
            source={{
              uri: 'https://data.humdata.org/crisis-tiles/12/2485/1645.png'
            }}
            style={styles.avatarbg}
          />
          <Thumbnail
            large
            source={{uri: this.state.image || 'https://orig00.deviantart.net/1471/f/2013/110/f/a/facebook_default_pic__2____copy_by_neuronboy42-d62cgrr.jpg'}}
            style={styles.avatar}
          />
        </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
              }
            ],
            {
              useNativeDriver: true
            }
          )}
        >
          <View
            style={StyleSheet.flatten([
              styles.header,
              { marginTop: 150 + Expo.Constants.statusBarHeight }
            ])}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Button
                onPress={() => { this.setModalVisible(true) }}
                rounded bordered style={styles.headerButton}>
                <Icon
                  name='create'
                  style={{ color: '#4286f4', paddingLeft: 3 }}
                />
              </Button>
              <Button
                onPress={() => this.logout()}
                bordered
                rounded
                primary
                style={StyleSheet.flatten([
                  styles.headerButton,
                  { paddingLeft: 10, paddingRight: 10 }
                ])}
              > <Icon active name='log-out' />
              </Button>
            </View>
          </View>
          <View style={styles.header}>
            <Text style={styles.nameText}>{this.state.user}</Text>
            <Text style={styles.usernameText}>{'@' + this.state.email}</Text>
            <Text style={styles.bioText}>{this.state.newContactNum}</Text>
            <Text style={styles.locationText}>
              <Icon small name='ios-pin-outline' style={{ fontSize: 16 }} />
              {this.state.newAddress}
            </Text>
          </View>

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
                      style={{height: 200, width: null, flex: 1}}
                      source={{uri: po.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg'}}
                    />
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent onPress={() => { this.theId(po._id), this.setEdit(true) }}>
                        <Icon active name='create' />
                        <Text>Edit</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent onPress={() => this.deleteCampaign(po._id)}>
                        <Icon active name='trash' />
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

        </Animated.ScrollView>
      </View>
    )
  }
}

const sty = StyleSheet.create({
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

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const styles = StyleSheet.create({
  header: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  avatarbg: {
    // marginTop: -95,
    marginLeft: 20,
    padding: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 12
    // borderRadius: 180
  },
  avatar: {
    marginLeft: 26,
    marginTop: -95,
    width: 89,
    height: 89,
    borderRadius: 44,
    zIndex: 12
  },
  headerButton: {
    // alignSelf: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    paddingTop: 3,
    marginRight: 10
  },
  nameText: {
    fontSize: 26,
    fontWeight: '500',
    marginLeft: 14
  },
  usernameText: {
    color: '#777',
    fontSize: 16,
    marginLeft: 14
  },
  bioText: {
    fontSize: 16,
    marginLeft: 14,
    marginTop: 10,
    maxHeight: 41
  },
  locationText: {
    fontSize: 16,
    marginLeft: 14,
    marginTop: 10,
    color: '#555'
  },
  content: {
    padding: 10,
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 32,
    fontWeight: '400',
    marginBottom: 30
  }
})

module.exports = Donor_Profile

// <Button
//     onPress={this._pickImage}
//   ><Text>Pick an image from camera roll</Text></Button>
//   <Button
//     onPress={this.largeImage}
//   ><Text>Pick an image from camera roll</Text></Button>
