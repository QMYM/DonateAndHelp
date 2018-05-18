import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 

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
      messageForDOM:""
    }
  }

 render() {
    return (
      <View style={styles.container}>
      <Text>
      welcome Message
      </Text>
      <View>
      </View>
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
});

module.exports = Message;
