import React from 'react'
import {
  Scene,
  Router
} from 'react-native-router-flux'

import BeneficiariesTab from './Beneficiaries_Tab'
import Login from './Login'
import Home from './Home'
import Donor from './Donor'
import DonorCampaign from './Donor_Campaign'
import Signup from './Signup'
import DonorTab from './Donor_Tab'
import Message from './Message'
import MessageReciver from './Message_Reciver'
import Beneficiaries from './Beneficiaries'
import BeneficiariesCampaign from './Beneficiaries_Campaign'
import ImagePickerExample from './ImagePickerExample'
import Aboutus from './Aboutus'
import Contactus from './Contactus'

export default class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <Scene key='root'>
          <Scene
            key='Home'
            component={Home}
            title='Home'
            animation='fade'
            duration='2000'
            hideNavBar={1}
            type='replace'
            initial={true}  
            
          />

          <Scene
            key='Login'
            component={Login}
            title='Login'
            animation='fade'
            duration={0}
            hideNavBar
            navBar={Login}
            back

          />

          <Scene key='Signup'
            component={Signup}
            title='Signup'
            hideNavBar={1}

          />
          <Scene key='Donor'
            hideNavBar
            component={Donor}
            title='Donor'
          />
          <Scene key='Donor_Campaign'
            component={DonorCampaign}
            title='Donor_Campaign'

          />
          <Scene key='Donor_Tab'
            component={DonorTab}
            hideNavBar
            title='Donor_Tab'

          />
          <Scene key='Message'
            component={Message}
            title='Message'

          />
          <Scene key='Message_Reciver'
            component={MessageReciver}
            title='Message_Reciver'
          />
          <Scene
            key='Beneficiaries'
            component={Beneficiaries}
            title='Beneficiaries'

          />
          <Scene
            key='BeneficiariesCampaign'
            component={BeneficiariesCampaign}
            title='BeneficiariesCampaign'

          />

          <Scene
            key='Beneficiaries_Tab'
            hideNavBar
            component={BeneficiariesTab}
            title='Beneficiaries_Tab'
          />

          <Scene
            key='ImagePickerExample'
            component={ImagePickerExample}
            title='ImagePickerExample'
            
          />

          <Scene
            key='Aboutus'
            component={Aboutus}
            title='Aboutus'

          />

          <Scene
            key='Contactus'
            component={Contactus}
            title='Contactus'
          />
        </Scene>
      </Router>
    )
  }
}
