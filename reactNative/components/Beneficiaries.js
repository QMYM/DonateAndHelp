import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert,Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Content} from 'native-base'

function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Beneficiaries extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      camp: [],
      amount: '',
      term: ''

    }
  }

  componentDidMount () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/donorCam')
      .then(function (res) {
        console.log(res.data,"hi")
        x.setState({camp: res.data})
      }).catch(function (err) {
        console.log(err)
      })
  }

  render () {
    return (
       <Container>
        <Content>
      <View style={styles.container}>
        <TextInput placeholder='Search' onChangeText={(term) => this.setState({term})} />
        {this.state.camp.filter(searching(this.state.term)).map(item =>

          <View style={styles.campview} key={item._id}>
          <Image source={{uri: item.campaignImage || 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3'}}
              style={styles.img}/>
          
            <Text style={{fontWeight: 'bold', textAlign: 'center'}}>{item.campaignName}</Text>
            <Text>{item.campaignDescription}</Text>
            <Button
              title='take' />
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
    marginTop:50,
  },
  campview: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da'
  },
   img:{
    width : 40,
    height:40,
    justifyContent: 'center',
  }
})

module.exports = Beneficiaries
