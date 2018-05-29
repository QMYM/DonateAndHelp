import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation' // Version can be specified in package.json
import { Ionicons } from '@expo/vector-icons'

import Beneficiaries from './Beneficiaries'
import Beneficiaries_Campaign from './Beneficiaries_Campaign'
import Beneficiaries_Profile from './Beneficiaries_Profile'
import Message from './Message'

const BeneficiariesT = TabNavigator({
  Beneficiaries: { screen: Beneficiaries },
  Campaign: { screen: Beneficiaries_Campaign },
  Message: { screen: Message },
  Profile: { screen: Beneficiaries_Profile }
}, { navigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) => {
    const { routeName } = navigation.state
    let iconName
    if (routeName === 'Beneficiaries') {
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

class Beneficiaries_Tab extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <BeneficiariesT />
    )
  }
}

module.exports = Beneficiaries_Tab
