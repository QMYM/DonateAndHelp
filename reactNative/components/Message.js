import React from 'react'
import { TouchableHighlight, StyleSheet, View, FlatList, ActivityIndicator, Alert, Image , TouchableOpacity} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Thumbnail, Text, Input, Button, Item, Form, Label, Left, Body, Right, Icon, Title} from 'native-base'
import Modal from 'react-native-modal'; // 2.4.0

class Message extends React.Component {
  constructor (props) {
    super(props)
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
      messageForDOM: '',
      modalVisible: false,
      check: true , 
      Mount:'',
      visibleModal: null,
    }
  }
  componentDidMount () {
    var x = this
    x.user()
    x.getPhotoForMessages()
    axios.get('https://donatandhelp.herokuapp.com/recieveMessage')
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
    axios.get('https://donatandhelp.herokuapp.com/sessionName')
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
    var test = []
    axios.get('https://donatandhelp.herokuapp.com/getPhotoForMessages')
      .then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].userInfo.length !== 0) {
            if (!arr.includes(res.data[i].userInfo[0].username) && res.data[i].userInfo[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
              test.push(res.data[i].userInfo)
              arr.push(res.data[i].userInfo[0].username)
            }
          }
          if (res.data[i].userRole.length !== 0) {
            if (!arr.includes(res.data[i].userRole[0].username) && res.data[i].userRole[0].username !== x.state.sessionUser && res.data[i].reciver === x.state.sessionUser) {
              test.push(res.data[i].userRole)
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
  setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }
  sendMessage (to, text) {
    var x = this

    axios.post('https://donatandhelp.herokuapp.com/sendMessage', {user: to, text: text})
      .then(function (res) {
        x.componentDidMount()
        x.setState({
          messageForDOM: ' Your Message has been sent'
        })
      }).catch(function (err) {
        x.setState({
          messageForDOM: ' User Not Found!'
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
    _renderButton = (text, onPress) => (
       <Button  transparent onPress={onPress}>
 <Icon active name='mail' />
              </Button>
  );

 _renderModalContent = () => (
    <View style={styles.modalContent}>
              <Text>Send Message</Text>
              <Item floatingLabel last>
                <Label>To</Label>
                <Input
                  style={styles.input}
                  onChangeText={(user) => this.setState({user})}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Subject</Label>
                <Input
                  style={styles.input}
                  onChangeText={(text) => this.setState({text})}
                />
              </Item>
              <Button full danger
                onPress={() => this.sendMessage(this.state.user, this.state.text)}
              > <Text>Send</Text>
              </Button>
               <Button full dark transparent onPress={ () => this.setState({ visibleModal: null })}>
                <Text>Close</Text>
              </Button>
    </View>
  );


  render () {
    return (
      <Container>
        <Content>
          <Modal isVisible={this.state.visibleModal === 5} style={styles.bottomModal}>
          {this._renderModalContent()}
        </Modal>

          <Header>
            <Left>
        {this._renderButton('Bottom half modal', () => this.setState({ visibleModal: 5 }))}
            </Left>
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>

          <View>
            {this.state.reciver.map(item =>
              <View key={item._id}>
                <Text
                  onPress={() => Actions.Message_Reciver({text: item.username,
                   message: this.state.messages, sender: this.state.senderMess , Mount: this.componentDidMount})}
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
   bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  }, 
   button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
})

module.exports = Message
