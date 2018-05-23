import React from 'react';
import { Modal , TouchableHighlight ,  StyleSheet, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Item, Input, Icon, Button, Text  , Content} from 'native-base';

function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Donor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
      camp: [],
      amount: '',
      term: ''
     
   }
 }



   componentDidMount () {
    var x = this
    axios.get('https://qaysdonate.herokuapp.com/companyCam')
      .then(function (res) {
        x.setState({camp: res.data})
      }).catch(function (err) {
        console.log(err)
      })
  }

  submitDonate (amount ) {
    axios.post('/editAmount' , {amount:amount , user : this.state.user })
    .then(function (res) {
    alert("Thanks For Donation"); 
      window.location.reload()
    })
    .catch(function (err) {
      alert("the amount is so high")
    })
  }
  user(name){
    this.setState({user:name})
  }
  render() {
    return (

        <Container>
      <Text>Search :</Text>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChangeText={(term) => this.setState({term})} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content style={{textAlign :'center'}}>
 
        {this.state.camp.filter(searching(this.state.term)).map(item => 
        
       <View style={styles.campview} key={item._id}>

        <Text style={{fontWeight: 'bold',textAlign :'center'}}>{item.campaignName}</Text>
        <Text>{item.campaignDescription}</Text>
        <Button 
        onPress ={()=>this.submitDonate(this.user(item._id))}>
        <Text>Donate </Text>
        </Button>

      </View>
      )}
        </Content>
      </Container>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campview:{
      marginTop :10,
      marginBottom :10,
       width: 300,
       height: 80,
      backgroundColor: 'white',
       borderRadius: 10,
       borderWidth: 3,
        borderColor: '#d6d7da',
  },
});

module.exports = Donor;