import React from 'react'
import { StyleSheet, View, Image, Modal} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Madoka, Jiro} from 'react-native-textinput-effects'
import axios from 'axios'
import { Container, Header, Content, Thumbnail, Text, Input, Button, Item, Form, Label, Left, Body, Right, Icon, Title} from 'native-base'
class Contactus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      text1: '',
      text2:'',
      text3:"",
      text4:"",
modalVisible: false
    }
  }
 setModalVisible (visible) {
    this.setState({modalVisible: visible})
  }



  sendMessage(text3){
           axios.post("https://donatandhelp.herokuapp.com/serveiceSms", {text:text3}).then((res)=>{
            alert("your message has been send")
            
          }).catch((err)=>{
            console.log(err)
          })
      }

   sendMessageForYussur(text2){
           axios.post("https://donatandhelp.herokuapp.com/serveiceSmsYussur", {text:text2}).then((res)=>{
            alert("your message has been send")
            
          }).catch((err)=>{
            console.log(err)
          })
      }

       sendMessageForDuraidi(text1){
           axios.post("https://donatandhelp.herokuapp.com/serveiceSmsDuraidi", {text:text1}).then((res)=>{
            alert("your message has been send")
            
          }).catch((err)=>{
            console.log(err)
          })
      }


  render () {
    return (
      <Container>
        <Content>

          <View style={styles.cen}>
            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/32207749_10204687882073435_1576086593419083776_n.jpg?_nc_cat=0&oh=bdede7d612bfa26c151908dc6ff63aa1&oe=5B9A74BB'}}
              style={styles.img} />
             </View>
            <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Send Message</Text>
              <Item floatingLabel last>
               
              </Item>
              <Item floatingLabel last>
            
                <Label>Text</Label>
                <Input
                  style={styles.input}
                  onChangeText={(text1) => this.setState({text1})}
                />
              </Item>
              <Button
              onPress={()=>this.sendMessageForDuraidi(this.state.text1)}
              > <Text>Send</Text>
              </Button>
              <Button onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>
          <Header>
            <Left>
              <Button transparent onPress={() => {
                this.setModalVisible(true)
              }}>
                <Icon active name='mail' />
              </Button>
            </Left>
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>

           
          <View style={styles.cen}>
            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/23473196_915825728566887_4239089197692234922_n.jpg?_nc_cat=0&oh=c8d8c960fe956f1573fa8072743d69f2&oe=5B8FBDE3'}}
              style={styles.img} />
              </View>
           <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Send Message</Text>
              <Item floatingLabel last>
               
              </Item>
              <Item floatingLabel last>
            
                <Label>Text</Label>
                <Input
                  style={styles.input}
                  onChangeText={(text3) => this.setState({text3})}
                />
              </Item>
              <Button
              onPress={()=>this.sendMessage(this.state.text3)}
              > <Text>Send</Text>
              </Button>
              <Button onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>
          <Header>
            <Left>
              <Button transparent onPress={() => {
                this.setModalVisible(true)
              }}>
                <Icon active name='mail' />
              </Button>
            </Left>
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>
            <View style={styles.cen}>
            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/18527753_10154354095631852_7605981024395115852_n.jpg?_nc_cat=0&oh=99bda792ec1a737846eda8ad22c31edc&oe=5B8DF2C3'}}
              style={styles.img} />
              </View>
            <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Send Message</Text>
              <Item floatingLabel last>
               
              </Item>
              <Item floatingLabel last>
            
                <Label>Text</Label>
                <Input
                  style={styles.input}
                  onChangeText={(text4) => this.setState({text4})}
                />
              </Item>
              <Button
              onPress={()=>this.sendMessageForDuraidi(this.state.text4)}
              > <Text>Send</Text>
              </Button>
              <Button onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>
          <Header>
            <Left>
              <Button transparent onPress={() => {
                this.setModalVisible(true)
              }}>
                <Icon active name='mail' />
              </Button>
            </Left>
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>
            <View style={styles.cen}>
            <Image source={{uri: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/27067119_10155568249638369_452583962590222091_n.jpg?_nc_cat=0&oh=d77b2bbfb5860f16dcf448fb1cb3dd7e&oe=5B8023B5'}}
              style={styles.img} />
              </View>
            <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.')
            }}>
            <View style={{marginTop: 22}}>
              <Text>Send Message</Text>
              <Item floatingLabel last>
               
              </Item>
              <Item floatingLabel last>
            
                <Label>Text</Label>
                <Input
                  style={styles.input}
                  onChangeText={(text2) => this.setState({text2})}
                />
              </Item>
              <Button
              onPress={()=>this.sendMessageForYussur(this.state.text2)}
              > <Text>Send</Text>
              </Button>
              <Button onPress={() => {
                this.setModalVisible(!this.state.modalVisible)
              }}><Text>Close</Text></Button>
            </View>
          </Modal>
          <Header>
            <Left>
              <Button transparent onPress={() => {
                this.setModalVisible(true)
              }}>
                <Icon active name='mail' />
              </Button>
            </Left>
            <Body>
              <Title>Messages</Title>
            </Body>
            <Right />
          </Header>
            />
            <View style={styles.cen}>
            <Text>{'\n'}📍Amman , Jordan</Text>
            <Text> 📱Phone: +00 787888888</Text>
            <Text>✉️Email: mail@mail.com</Text>

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
    justifyContent: 'center'
  },

  img: {

    width: 150,
    height: 150
  },
  cen: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
})

module.exports = Contactus
