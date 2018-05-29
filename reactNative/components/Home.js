import React from 'react'
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator, Alert,Image,ImageBackground } from 'react-native'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'
import { TabNavigator } from 'react-navigation' // Version can be specified in package.json
import { Container, Header, Content, Button, Text, Icon ,  Title, Footer, FooterTab, Left, Right, Body } from 'native-base'
import { Drawer } from 'native-base'

import Main from './Main'
class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: 200,
      closedDrawerOffset: 0,
      panOpenMask: 0.1,
      panCloseMask: 0.9,
      relativeDrag: false,
      panThreshold: 0.25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false
    }
  }

  render () {

    closeDrawer = () => {
      this.drawer._root.close()
    }
    openDrawer = () => {
      this.drawer._root.open()
    }
    return (   
      <Drawer
        type={this.state.drawerType}
        animation={this.state.animation}
        openDrawerOffset={this.state.openDrawerOffset}
        closedDrawerOffset={this.state.closedDrawerOffset}
        panOpenMask={this.state.panOpenMask}
        panCloseMask={this.state.panCloseMask}
        relativeDrag={this.state.relativeDrag}
        panThreshold={this.state.panThreshold}
        disabled={this.state.disabled}
        tweenDuration={this.state.tweenDuration}
        tweenEasing={this.state.tweenEasing}
        acceptDoubleTap={this.state.acceptDoubleTap}
        acceptTap={this.state.acceptTap}
        acceptPan={this.state.acceptPan}
        tapToClose={this.state.tapToClose}
        negotiatePan={this.state.negotiatePan}
        changeVal={this.state.changeVal}
        side={this.state.side}
        ref={(ref) => { this.drawer = ref }}
        content={<Main navigator={this.navigator} />}
        styles={drawerStyles}
        onClose={() => { closeDrawer() }} >

        <Container>
          <Header >
            <Content>
   
              <Button onPress={() => { openDrawer() }}>
                <Icon ios='ios-menu' android='md-menu' style={{fontSize: 20, color: 'black'}} />
              </Button>

            </Content>

          </Header>
       
      <ImageBackground  style={ styles.imgBackground } 
      resizeMode='cover' 
      source={{uri: 'https://venturebeat.com/wp-content/uploads/2012/10/seed-money.jpg?resize=655%2C488&strip=all?strip=all'}}>
      <View style={styles.txt}>
      <View>
       <Text>Donate and Help</Text>
         </View>
          </View>
         </ImageBackground>

       </Container>
      
  
      </Drawer>
      
    
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3}
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
},
  cen:{
    alignItems: 'center',
    
  },
  txt:{
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da',
    width:150,
    flexDirection : 'column'
  },
})

module.exports = Home