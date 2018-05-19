import React, { Component } from 'react';
import Row, { AppRegistry, StyleSheet, Text, View, TextInput, Button, FlatList, ActivityIndicator, Alert, Linking, SectionList } from 'react-native';
import axios from 'axios';


export default class Profile_Beneficiary extends React.Component { 

	constructor (props) {
		super(props)
		this.state = {
			phoneNum: '',
			description: ''.
			address: ''
		}
	}


	editInfo(phoneNum, description, address) { 
		console.log("Edit Information");
		axios.post('http://192.168.1.81:3000/profile_company',
		{
			phoneNum: this.state.phoneNum,
			description: this.state.description,
			address: this.state.address
		})
		.then(function (res) {
			console.log("Info has been updated successfully!"res);
		}).catch(function (err) {
			console.log("Error in updateing info!" , err)
		})
	}	

	render(){
		return (
			<View>
			<Text>About Me</Text>
			<Text>Some Description</Text>
			<Text>Phone Number: </Text>      
			<TextInput
			placeholder="Type here your phone number!"
			onChangeText={(phoneNum) => this.setState({phoneNum})}
			/>
			<Text>Description: </Text>
			<TextInput secureTextEntry={true}
			placeholder="Type here a description!"
			onChangeText={(description) => this.setState({description})}
			/>
			<Text>Address: </Text>
			<TextInput secureTextEntry={true}
			placeholder="Type here your address!"
			onChangeText={(address) => this.setState({address})}
			/>
			<Button
			onPress={() => this.editInfo(this.state.phoneNum, this.state.description, this.state.address)}
			title="Done"
			/>
			<Text>Information</Text>
			<SectionList
			<Text>this.state.email.replace('<br/>', '\n')}</Text>
			<Text>this.state.phoneNum.replace('<br/>', '\n')}</Text>
			<Text>this.state.description.replace('<br/>', '\n')}</Text>
			<Text>this.state.address.replace('<br/>', '\n')}</Text>
			/>
			<Text>Social</Text>
			<ScrollView>
			<Row><Text onPress={() => Linking.openURL(`https://twitter.com/`)}> Visit Twitter </Text></Row>
			<Row><Text onPress={() => Linking.openURL(`https://www.facebook.com/`)}>  Visit Facebook </Text></Row>
			<Row><Text onPress={() => Linking.openURL(`https://dribbble.com/`)}>  Visit Dribbble </Text></Row>
			<Row><Text onPress={() => Linking.openURL(`https://www.linkedin.com/`)}>  Visit linkedin </Text></Row>
			</ScrollView>
			</View>
			)
		}
	}


		const styles = StyleSheet.create({
			container: {
				flex: 1,
				paddingTop: 22
			},
			item: {
				padding: 10,
				fontSize: 18,
				height: 44,
			},
		})