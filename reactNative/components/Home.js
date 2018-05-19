import React from 'react';
import { StyleSheet, Text, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Button } from 'react-native-elements';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }
 render() {
    return (
      <View style={styles.container}>
      <Text>
      welcome Home
      </Text>
      <Button onPress={() => Actions.Signup()}
            title="Signup" />
            
            <Button onPress={() => Actions.Login()}
            title="Login" />

      </View>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    margin:10 , 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = Home;