import React from 'react'
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator, Alert,Image} from 'react-native'
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
      <Header>
      <Left>
      <Button transparent onPress={() => { openDrawer() }}>
      <Icon name='menu' />
      </Button>
      </Left>
      <Body>
      <Title>Header</Title>
      </Body>
      <Right />
      </Header>
      <Content>
      <Text>hi yussur</Text>
      <Image source={{uri: 'http://www.dsscotland.org.uk/wordpress/wp-content/uploads/2015/05/contact-us.jpg'}} 
      />
      </Content>
      <Footer>
      <FooterTab>
      <Button full>
      <Text>Footer</Text>
      </Button>
      </FooterTab>
      </Footer>

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
    justifyContent: 'center'
  }
})

module.exports = Home