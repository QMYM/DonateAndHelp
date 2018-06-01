import React from 'react'
import { StyleSheet, TextInput, Alert } from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Avatar} from 'react-native-elements'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Item, Input } from 'native-base'
class Message extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      rightMes: [],
      rightMes2: [],
      text: '',
      message: '',
      sender: '',
      M: ''
    }
  }
  componentDidMount () {
    this.openMail(this.props.text, this.props.message, this.props.sender)
  }
  sendMessage (to, text) {
    var x = this
    axios.post('https://donatandhelp.herokuapp.com/sendMessage', {user: to, text: text})
      .then((res) => {
        console.log('aaa', res)
        Alert.alert('Your message has been send')
        // x.setState({M:res.data.message})
        x.componentDidMount()
        this.props.Mount()
        x.setState({
          messageForDOM: ' Your Message has been sent'
        })
      }).catch((err) => {
        x.setState({
          messageForDOM: ' User Not Found!'
        })
      })
  }

  openMail (personName, messages, senderMess) {
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

  remove (user, id) {
    axios.post('https://donatandhelp.herokuapp.com/removeMsg', {user: user, id: id})
      .then((res) => {

      }).catch((err) => {
        console.log('err', err)
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
  render () {
    return (
      <Container>
        <Content>
          <Text> {this.state.M}</Text>
          {this.state.rightMes.map(item =>
            <SwipeRow
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button success onPress={() => alert('Trash')} >
                  <Icon active name='add' />
                </Button>
              }
              body={
                <View>
                  <Text>{item.message}</Text>

                </View>
              }
              right={
                <Button danger onPress={() => this.remove(item.sender, item._id)}>
                  <Icon active name='trash' />
                </Button>
              }
            />
          )}
          {this.state.rightMes2.map(item =>

            <SwipeRow
              leftOpenValue={75}
              rightOpenValue={-75}
              left={
                <Button success onPress={() => alert('Trash')}>
                  <Icon active name='add' />
                </Button>
              }
              body={
                <View>
                  <Text style={styles.sender}>{item.message}</Text>
                </View>
              }
              right={
                <Button danger onPress={() => this.remove(item.sender, item._id)}>
                  <Icon active name='trash' />
                </Button>
              } />
          )}

        </Content>
        <Item>
          <Input placeholder='Aa'
            onChangeText={(text) => this.setState({text})}
          />
        </Item>
        <Button block dark
          onPress={() => this.sendMessage(this.props.text, this.state.text)}>
          <Text>Send</Text>
        </Button>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sender: {
    color: '#49D6BC'
  }
})

module.exports = Message
