import React from 'react';
import { StyleSheet, Text, View , TextInput   , FlatList, ActivityIndicator,  Alert} from 'react-native';
import axios from 'axios'
import { Actions } from 'react-native-router-flux'; 
import { Button, Input  } from 'react-native-elements';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json




export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
     
   }
 }
 render() {
    return (
        <View>
        

<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>


           <Button
      onPress={() => Actions.Login()}
      title= "Login"
      /> 
        <Button
      onPress={() => Actions.Signup()}
      title=" Signup"
      /> 
        </View>

      );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     margin:10 , 
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



// module.exports = Home;