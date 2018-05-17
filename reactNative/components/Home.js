import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

class Home extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Replace screen</Text>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

module.exports = Home;