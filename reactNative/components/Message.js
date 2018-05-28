import React from 'react';
import { Modal ,TouchableHighlight ,  StyleSheet , View , TextInput , FlatList, ActivityIndicator , Alert , Image} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Container, Header, Content, Thumbnail, Text  , Button} from 'native-base';
class Message extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      text: '',
      messages: [],
      sessionUser: '',
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
    var x = this
    x.user()
    x.getPhotoForMessages();
    axios.get('http://192.168.1.128:3000/recieveMessage')
    .then(function (response) {
      var mes = []
      var mess = []
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].reciver === x.state.sessionUser) {
          mes.push(response.data[i])
          x.setState({messages: mes})
        }

        if (response.data[i].sender === x.state.sessionUser) {
          mess.push(response.data[i])
          x.setState({senderMess: mess})

        }
      }
    })

  }

  user () {
    var x = this
    axios.get('http://192.168.1.128:3000/sessionName')
    .then(function (res) {
      x.setState({sessionUser: res.data})
    }).catch(function (err) {
      console.log('error', err)
    })
  }
  getPhotoForMessages () {
    var x = this
    var arr = []
    var rec = []
    var test = [];
    axios.get('http://192.168.1.128:3000/getPhotoForMessages')
    .then(function (res) {
      for (var i = 0; i < res.data.length; i++) {
        if (res.data[i].userInfo.length !== 0) {
          if (!arr.includes(res.data[i].userInfo[0].username) && res.data[i].userInfo[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
            test.push(res.data[i].userInfo);
            arr.push(res.data[i].userInfo[0].username)            
          }
        }
        if (res.data[i].userRole.length !== 0) {
          if (!arr.includes(res.data[i].userRole[0].username) && res.data[i].userRole[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
            test.push(res.data[i].userRole);
            arr.push(res.data[i].userRole[0].username)
          }
        }
      }
      var merged = [].concat.apply([], test)
      x.setState({reciver: merged})
    }).catch(function (err) {
      console.log('error', err)
    })
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  sendMessage (to, text) {
    var x = this
    axios.post('http://192.168.1.128:3000/sendMessage', {user: to, text: text})
    .then(function (res) {
      console.log(res , "ress")
      x.setState({
        messageForDOM:" Your Message has been sent"
      })
    }).catch(function (err) {
      x.setState({
        messageForDOM:" User Not Found!"
      })
    })
  }

  openMail (personName) {
    var arr = []
    var arr2 = []
    for (var i = 0; i < this.state.messages.length; i++) {
      if (this.state.messages[i].sender === personName) {
        arr.push(this.state.messages[i])
      }
    }
    for (var i = 0; i < this.state.senderMess.length; i++) {
      if (this.state.senderMess[i].reciver === personName) {
        arr2.push(this.state.senderMess[i])
      }
    }
    this.setState({rightMes: arr})
    this.setState({rightMes2: arr2})
  }

  render() {
   
    return (
      <Container>
        <Header />
        <Content>
      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={{marginTop: 22}}>
      <Text>Send Message</Text>

      <Text>To</Text>
      <TextInput
      style = {styles.input}
      placeholder="Enter your user!"
      onChangeText={(user) => this.setState({user})}
      />
      <Text>Subject</Text>
      <TextInput
      style = {styles.input}
      placeholder="Enter your text!"
      onChangeText={(text) => this.setState({text})}
      />
      <Button
      onPress={() => this.sendMessage(this.state.user, this.state.text)}
      > <Text>Send</Text>
        </Button>
      <Button onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
      }}><Text>Close</Text></Button>
      </View>
      </Modal>

      <Text>
      welcome Message
      </Text>
      
      <Button onPress={() => {
        this.setModalVisible(true);
      }}>
      <Text>Show Modal</Text>
      </Button>
      
      <View>
      {this.state.reciver.map(item => 
        <View key={ item._id }>
        <Text
      onPress={() => Actions.Message_Reciver({text : item.username , message : this.state.messages , sender : this.state.senderMess})}
        >
     <Thumbnail large 
       source={{uri: item.image}} 
       />
        {item.username}</Text>

        </View>
        )
    }
    </View>
     </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

module.exports = Message;
