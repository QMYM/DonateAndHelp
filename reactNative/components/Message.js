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
    var x = this
    x.user()
    x.getPhotoForMessages();
    axios.get('http://172.20.10.2:3000/recieveMessage')
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
    axios.get('http://172.20.10.2:3000/sessionName')
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
    axios.get('http://172.20.10.2:3000/getPhotoForMessages')
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


  render() {
   
    return (
      <View style={styles.container}>
           <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      <Text>
      welcome Message
      </Text>
   
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
        
      <View>
      {this.state.reciver.map(item => 
        <View key={ item._id }>
        <Avatar
        rounded
        size="xlarge"
        source={{uri: item.image}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />
        <Text>{item.username}</Text>
        </View>
        )
    }
    {this.state.messages.map( item => 
      <View key={ item._id }>
        <Text>{item.sender}</Text>
        <Text>{item.message}</Text>
      </View>

      )}
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
