import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'

class Aboutus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>ABOUT US{'\n'}</Text>

        <Text style={styles.txt}>We have created a fictional "personal" website/blog, and our fictional character is a
        hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa.{'\n'}</Text>
        <Image source={{uri: 'http://www.appreviewcentral.net/wp-content/uploads/2013/11/donate-599x300.jpg'}}
          style={styles.img} />
        <Text style={styles.txt}>{'\n'}Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>

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
  	marginLeft: 15,
  	marginRight: 15,
  	width: 300,
  	height: 150
  },
  txt: {
  	marginLeft: 15,
  	marginRight: 15,
  	textAlign: 'justify'

  }
})

module.exports = Aboutus
