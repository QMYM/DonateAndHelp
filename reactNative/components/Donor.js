import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, View, TextInput, FlatList, ActivityIndicator, Alert,Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Item, Input, Icon, Button, Text, Content} from 'native-base'

function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Donor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      camp: [],
      amount: '',
      term: '',
      modalVisible: false

    }
  }

  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }

  componentDidMount () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/companyCam')
      .then(function (res) {
        x.setState({camp: res.data})
      }).catch(function (err) {
        console.log(err)
      })
  }

  submitDonate (amount) {
    axios.post('https://donatandhelp.herokuapp.com/editAmount', {amount: amount, user: this.state.user })
      .then((res) => {
        alert('Thanks For Donation')
        this.componentDidMount()
      })
      .catch((err) => {
        alert('the amount is so high')
      })
  }
  user (name) {
    this.setState({user: name})
  }
  render () {
    return (

      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' onChangeText={(term) => this.setState({term})} />
            <Icon name='ios-people' />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content style={{textAlign: 'center'}}>

          <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Payment</Text>

              <Text>Amount</Text>
              <TextInput
                style={styles.input}
                placeholder='Enter your user!'
                onChangeText={(amount) => this.setState({amount})}
              />
              <Text>Card Number</Text>
              <TextInput
                style={styles.input}
                placeholder='Enter your text!'
              />
              <Button
                onPress={() => { this.submitDonate(this.state.amount), this.setModalVisible(!this.state.modalVisible) }}
              > <Text>Donate</Text>
              </Button>
            </View>
          </Modal>


          {this.state.camp.filter(searching(this.state.term)).map(item =>
            <View key={item._id}>
          <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3'||'{item.campaignImage}'}}
              style={styles.img}/>
              <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{item.campaignName}</Text>
              <Text>{item.campaignDescription}</Text>
              <Text>{item.campaignAmount}</Text><Text>JD</Text>
              <Button onPress={() => { this.setModalVisible(true), this.user(item._id) }} >
                <Text>Donate1 </Text>
              </Button>


            </View>
          )}
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
  },
  campview: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da'
  },
  img:{
    width : 20,
    height:20,
  }
})

module.exports = Donor
