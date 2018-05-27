import React from 'react'
import {  StyleSheet, Text, View, Image} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Madoka ,Jiro} from 'react-native-textinput-effects';
import { Container } from 'native-base';
import { Button } from 'react-native-elements';

class Contactus extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
     

    }
  }

  render () {
    return (
      <View >
      
  <Jiro
    label={'Name'}
    // this is used as active and passive border color
    borderColor={'green'}
    inputStyle={{ color: 'white' }}
  />
    <Jiro
    label={'Email'}
    // this is used as active and passive border color
    borderColor={'orange'}
    inputStyle={{ color: 'white' }}
  />

  <Jiro
    label={'Comment'}
    // this is used as active and passive border color
    borderColor={'blue'}
    inputStyle={{ color: 'white' }}
  />




  <View style={styles.cen}>
  <Button
  title='Contact us'
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 150,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginTop:20,
    marginBottom:20,
    
  }}
/>
    
     <Image source={{uri: 'http://www.dsscotland.org.uk/wordpress/wp-content/uploads/2015/05/contact-us.jpg'}} 
      style={styles.img} />
      <Text>{"\n"}📍Amman , Jordan</Text>
        
     <Text> 📱Phone: +00 787888888</Text>
      <Text>✉️Email: mail@mail.com</Text>
      
      </View> 
      
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
 
  
  img:{
    
    width: 300, 
    height: 150,
  },
  cen:{
      alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  })

module.exports = Contactus