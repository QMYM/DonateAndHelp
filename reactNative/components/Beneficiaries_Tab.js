import React from 'react'
import { TabNavigator } from 'react-navigation' // Version can be specified in package.json

import Beneficiaries from './Beneficiaries'
import Beneficiaries_Campaign from './Beneficiaries_Campaign'
import Beneficiaries_Profile from './Beneficiaries_Profile'
import Message from './Message'

const BeneficiariesT = TabNavigator({
  Beneficiaries: { screen: Beneficiaries },
  Campaign: { screen: Beneficiaries_Campaign },
  Message: { screen: Message },
  Profile: { screen: Beneficiaries_Profile }
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
