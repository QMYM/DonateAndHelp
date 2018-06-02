import React from 'react'
import { StyleSheet,
  ImageBackground,
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Image,
  Alart} from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { Container,
  Header,
  Content,
  Button,
  Spinner } from 'native-base'

const { width, height } = Dimensions.get('window')

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      user: '',
      loading: false
    }
  }

  submitLoginDonater () { // send post request to the server
    this.setState({loading: true})
    axios.post('https://donatandhelp.herokuapp.com/loginDonater', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
        Actions.Donor_Tab()
        // should go to the home page from here
      }).catch(error => {
        console.log(error)
        this.setState({loading: false})
        Alart.alert('password or username is wrong')
      })
  };
  submitLoginCompany () {
    this.setState({loading: true})
    axios.post('https://donatandhelp.herokuapp.com/loginCompany', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
        Actions.Beneficiaries_Tab()
        // should go to the home page from here
      }).catch(error => {
        console.log(error)
        this.setState({loading: false})
        Alart.alert('password or username is wrong')
      })
  }

  _goBack () {
    console.log('Back button pressed')
    this.props.navigation.goBack()
  }

  render () {
    if (this.state.loading === true) {
      return (
        <Container>
          <Header />
          <Content>
            <Spinner color='blue' />
          </Content>
        </Container>
      )
    } else {
      return (
        <Container>
          <Content>
            <View style={styles.container}>
              <ImageBackground source={require('./login1_bg.png')} style={styles.background} resizeMode='cover'>
                <View style={styles.headerContainer}>
                  <View style={styles.headerIconView}>
                    <Button transparent onPress={this._goBack.bind(this)} style={styles.headerBackButtonView}>
                      <Image
                        source={require('./back.png')}
                        style={styles.backButtonIcon}
                        resizeMode='contain'
                      />
                    </Button>
                  </View>
                </View>
                <View style={styles.markWrap}>
                  <Image source={require('./login1_mark.png')} style={styles.mark} resizeMode='contain' />
                </View>
                <Text style={styles.text}> Choose</Text>
                <Picker selectedValue={this.state.user} onValueChange={(itemValue) => this.setState({user: itemValue})}>
                  <Picker.Item label='Company' value='' />
                  <Picker.Item label='Donor' value='false' />
                </Picker>
                <View style={styles.wrapper}>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={require('./login1_person.png')} style={styles.icon} resizeMode='contain' />
                    </View>
                    <TextInput
                      placeholder='Username'
                      placeholderTextColor='#FFF'
                      style={styles.input}
                      onChangeText={(userName) => this.setState({userName})} />
                  </View>
                  <View style={styles.inputWrap}>
                    <View style={styles.iconWrap}>
                      <Image source={require('./login1_lock.png')} style={styles.icon} resizeMode='contain' />
                    </View>
                    <TextInput
                      placeholderTextColor='#FFF'
                      placeholder='Password'
                      style={styles.input}
                      secureTextEntry
                      onChangeText={(password) => this.setState({password})} />
                  </View>
                  <TouchableOpacity activeOpacity={0.5}>
                    <View>
                      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.5} />
                </View>

                { this.state.user === 'false' ? (
                  <View style={styles.button}>
                    <Button transparent full onPress={() => this.submitLoginDonater()}>
                      <Text style={styles.buttonText}>Login Donor</Text>
                    </Button>
                  </View>
                )
                  : <View style={styles.button}>
                    <Button transparent full onPress={() => this.submitLoginCompany()}>
                      <Text style={styles.buttonText}>Login Company</Text>
                    </Button>
                  </View>
                }
                <View style={styles.signupWrap}>
                  <Text style={styles.accountText}>Don't have an account?</Text>
                  <TouchableOpacity activeOpacity={0.5}>
                    <View>
                      <Text style={styles.signupLinkText}>Sign Up</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </Content>
        </Container>
      )
    }
  }
}
const styles = StyleSheet.create({
  markWrap: {
    flex: 1,
    paddingVertical: 30
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  },
  background: {
    width,
    height
  },
  wrapper: {
    paddingVertical: 30
  },
  inputWrap: {
    flexDirection: 'row',
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 20,
    width: 20
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    height: 20
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  },
  forgotPasswordText: {
    color: '#D8D8D8',
    backgroundColor: 'transparent',
    textAlign: 'right',
    paddingRight: 15
  },
  signupWrap: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountText: {
    color: '#D8D8D8'
  },
  signupLinkText: {
    color: '#FFF',
    marginLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    width: 200,
    margin: 5,
    height: 40,
    borderColor: '#7a42f4'
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#D8D8D8'
  },
  headerIconView: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  headerBackButtonView: {
    top: 30,
    width: 10,
    height: 10
  }
})

module.exports = Login
