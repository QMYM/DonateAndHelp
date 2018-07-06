import React from 'react'
import { TabNavigator,
  TabBarBottom } from 'react-navigation' // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons'
import Donor from './Donor'
import donorCampaign from './Donor_Campaign'
import donorProfile from './Donor_Profile'
import Message from './Message'

const DonorT = TabNavigator({
  Donor: { screen: Donor },
  Campaign: { screen: donorCampaign },
  Message: { screen: Message },
  Profile: { screen: donorProfile }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Donor') {
        iconName = `ios-cash${focused ? '' : '-outline'}`
      } else if (routeName === 'Campaign') {
        iconName = `ios-options${focused ? '' : '-outline'}`
      } else if (routeName === 'Message') {
        iconName = `ios-chatboxes${focused ? '' : '-outline'}`
      } else if (routeName === 'Profile') {
        iconName = `ios-contact${focused ? '' : '-outline'}`
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  },
  animationEnabled: false,
  swipeEnabled: false
})

class Donor_Tab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <DonorT />
    )
  }
}

module.exports = Donor_Tab
