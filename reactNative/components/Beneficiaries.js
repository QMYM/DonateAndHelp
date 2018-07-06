import React from 'react'
import { Modal, TouchableHighlight, StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator, Alert, Image} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Button } from 'react-native-elements'
import { Container, Header, Item, Input, Icon, Content} from 'native-base'
import { Font } from 'expo'

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
      term: '',
      modalVisible: false
    }
  }

  componentDidMount () {
    var x = this
    axios.get('https://donatandhelp.herokuapp.com/donorCam')
      .then(function (res) {
        x.setState({camp: res.data})
      }).catch(function (err) {
        console.log(err)
      })
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

            {this.state.camp.filter(searching(this.state.term)).map(item =>
              <View style={styles.campview} key={item._id}>
                <View style={{height: '30%', backgroundColor: '#f5f5f5', width: '100%', marginBottom: 10}}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center', marginTop: 30, fontSize: 30}}>{item.campaignName}</Text>
                </View>
                <Image
                  source={{uri: item.campaignImage || 'https://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg'}}
                  style={styles.img} />
                <Text>{item.campaignDescription}</Text>
                <Text>{item.campaignAmount}</Text>
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
    marginTop: 20
  },
  campview: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 60,
    height: 60,
    justifyContent: 'center'
  }
})

module.exports = Beneficiaries
