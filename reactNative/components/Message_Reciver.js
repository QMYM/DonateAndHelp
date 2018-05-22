import React from 'react';
import { Modal ,TouchableHighlight ,  StyleSheet , Text, View , TextInput , FlatList, ActivityIndicator , Alert , Image} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Button , Avatar} from 'react-native-elements';

class Message extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      text: '',
      messages: [],
      sessionUser: '',
      items: [],
      rightMes: [],
      rightMes2: [],
      reciver: [],
      senderMess: [],  
      allMessages: [],
      messageForDOM:"",
      modalVisible: false,
      check:true
    }
  }

  componentDidMount () {
this.openMail(this.props.text ,this.props.message  , this.props.sender)
}
  sendMessage (to, text) {
    var x = this
    axios.post('https://qaysdonate.herokuapp.com/sendMessage', {user: to, text: text})
    .then(function (res) {
      x.setState({
        messageForDOM:" Your Message has been sent"
      })
    }).catch(function (err) {
      x.setState({
        messageForDOM:" User Not Found!"
      })
    })
  }

  openMail (personName , messages , senderMess) {
    var arr = []
    var arr2 = []
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].sender === personName) {
        arr.push(messages[i])
      }
    }
    for (var i = 0; i < senderMess.length; i++) {
      if (senderMess[i].reciver === personName) {
        arr2.push(senderMess[i])
      }
    }
    this.setState({rightMes: arr})
    this.setState({rightMes2: arr2})
  }

  render() {
    return (
      <View style={styles.container}>
      
   
   {this.state.rightMes.map(item => 
<View>
  <Text>{item.message}</Text>
</View>
      )}
   {this.state.rightMes2.map(item =>
<View>
  <Text style={styles.sender}>{item.message}</Text>
</View>
    )}  
     <TextInput 
     placeholder="Aa"
      
      onChangeText={(text) => this.setState({text})}
      />
      <Button
      title="Send"
      onPress={()=> this.sendMessage(this.props.text , this.state.text)}/>
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
  sender:{
    color: '#49D6BC' ,
  },
});

module.exports = Message;
