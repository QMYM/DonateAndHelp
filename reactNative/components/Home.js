import React from 'react'
import { StyleSheet,
  View,
  ImageBackground } from 'react-native'
import { Container,
  Header,
  Button,
  Text,
  Icon,
  Title,
  Left,
  Right,
  Body,
  Drawer} from 'native-base'
import * as Expo from 'expo'

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
              <Title />
            </Body>
            <Right />
          </Header>

          <ImageBackground style={styles.imgBackground}
            resizeMode='cover'
            source={{uri: 'https://d1tcrpfk632upo.cloudfront.net/wp-content/uploads/2016/09/27084305/RepeatDonors.jpg'}}>
            <View style={styles.container}>
              <View style={styles.markWrap}>
                <Text style={styles.mark}>Donate and Help</Text>
              </View>
            </View>
          </ImageBackground>
        </Container>
      </Drawer>

    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3},
  main: {paddingLeft: 3}
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  cen: {
    alignItems: 'center'
  },
  txt: {
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#d6d7da',
    width: 150,
    flexDirection: 'column'
  },
  markWrap: {
    flex: 1,
    paddingVertical: 30
  },
  mark: {
    width: null,
    height: null,
    flex: 1
  }
})

module.exports = Home
