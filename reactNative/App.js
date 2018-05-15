import React from 'react';
import { StyleSheet, Text, View , TextInput  , Button , Alert} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
   _onPressButton(text) {
    Alert.alert("Hi " , text)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To our App</Text>
        <Text>Enter Anything</Text>
         <TextInput
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text>So Cool Right !! </Text>
            <Button
            onPress={() =>this._onPressButton(this.state.text)}
            title="Press Me"
          />
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
