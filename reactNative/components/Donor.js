import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, TextInput, FlatList, ActivityIndicator, Alert,Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button , Card, CardItem, Thumbnail, Label , Left, Body, Right  , Title  ,Item, Input } from 'native-base';

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

                <Item floatingLabel last>
                <Input
                placeholder="Amount"
                     keyboardType="numeric"
                onChangeText={(amount) => this.setState({amount})}
                />
              </Item>
               <Item floatingLabel>
                   <Input 
                     placeholder="Credit Number"
                     keyboardType="numeric" 
                         />
                  </Item>
                   <Item floatingLabel>
                   <Input 
                     placeholder="Zip Code"
                     keyboardType="numeric" 
                         />
                  </Item>  
              <Button full danger
                onPress={() => this.submitDonate(this.state.amount)}
              > <Text>Donate</Text>
              </Button>
               <Button full dark transparent onPress={ () => this.setModalVisible(!this.state.modalVisible) }>
                <Text>Close</Text>
              </Button>
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
                <Button full dark onPress={() => { this.setModalVisible(true), this.user(item._id) }}>
                <Text>💰Donate</Text>
              </Button>
               />
                
             


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
