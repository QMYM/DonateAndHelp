import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, View, TextInput, FlatList, ActivityIndicator, Alert,Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Item, Input, Icon, Text, Content} from 'native-base'
import { Button } from 'react-native-elements'

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
    if(amount.length !== 0){
    axios.post('http://192.168.2.18:3000/editAmount', {amount: amount, user: this.state.user })
      .then((res) => {
        alert('Thanks For Donation')
        this.componentDidMount()
      })
      .catch((err) => {
        alert('the amount is so high')
      })
      }else{
      alert("Enter the amount")
    }
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
        <Content>

      <View style={styles.container}>

       

           <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text style={{marginTop:40}}>Payment</Text>

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


              <Button title='Donate'
                onPress={() => { this.submitDonate(this.state.amount), this.setModalVisible(!this.state.modalVisible) }}
              /> 
              
            </View>
          </Modal>

<Image source={{uri: 'http://troubletown.com/uploaded_images/flip2.gif'}}
             style={styles.img2} />
          {this.state.camp.filter(searching(this.state.term)).map(item =>
            <View style={styles.campview} key={item._id}>
          
              <View style={{height : '30%', backgroundColor: '#f5f5f5',width:'100%',marginBottom: 10}}>
              <Text style={{fontWeight: 'bold', textAlign: 'center',marginTop:30,fontSize:30}}>{item.campaignName}</Text>
              </View>
              <Image source={{uri: 'http://nrm.co.nz/wp-content/uploads/2017/08/facebook-avatar.jpg'||item.campaignImage}}
              style={styles.img}/>
              <Text>{item.campaignDescription}</Text>
              <Text>{item.campaignAmount}</Text>
              <Text>{item.category}</Text>
              <Button title='💰Donate'
              onPress={() => { this.setModalVisible(true), this.user(item._id) }} />
                
             


             </View>
        )}
      </View>
       
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
    justifyContent: 'center',
    marginTop:20,
  },
  campview: {
    marginTop: 20,
    marginBottom: 10,
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da',
     alignItems: 'center',
    justifyContent: 'center',
  },
   img:{
    width : 60,
    height:60,
    justifyContent: 'center',
  },
  search:{
    marginBottom:20,
    backgroundColor :'white',
    width:'100%',
    height:50,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da',
  },
  img2:{
    width : 200,
    height:120,
    justifyContent: 'center',
    marginBottom:40
  },

})

module.exports = Donor
