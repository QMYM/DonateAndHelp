import React from 'react';
import { Modal , TouchableHighlight ,  StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 


function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Beneficiaries extends React.Component {
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
    axios.get('http://192.168.1.83:3000/donorCam')
      .then(function (res) {
        console.log(res.data)
        x.setState({camp: res.data})
      // const camp=res.data.results.map(obj=>{})
      }).catch(function (err) {
        console.log(err)
      })
  }



  render() {
    return (
      <View style={styles.container}>
<TextInput  placeholder='Search' onChangeText={(term) => this.setState({term})}  />
        {this.state.camp.filter(searching(this.state.term)).map(item => 
        
       <View style={styles.campview}>
        <Text style={{fontWeight: 'bold',textAlign :'center'}}>{item.campaignName}</Text>
        <Text>{item.campaignDescription}</Text>
      </View>
      )}
      </View>
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

module.exports = Beneficiaries;