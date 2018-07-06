import React from 'react'
// import App from './App';
import { Text, View, TextInput, Button, Picker, ScrollView} from 'react-native'
import sinon from 'sinon'
import { expect } from 'chai'
import renderer from 'react-test-renderer'
import Signup from './Components/Signup'
// import Login from "./Components/Login"
// import Home from "./Components/Home"
// import Donor from "./Components/Donor"
// import Donor_Campaign from "./Components/Donor_Campaign"
// import Donor_Tab from "./Components/Donor_Tab"
// import Message from "./Components/Message"
// import Message_Reciver from "./Components/Message_Reciver"
// import Beneficiaries from "./Components/Beneficiaries"
// import Beneficiaries_Campaign from "./Components/Beneficiaries_Campaign"
// import Beneficiaries_Tab from "./Components/Beneficiaries_Tab"

import { configure } from 'enzyme'
import { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

describe('Signup', function () {
  it('renders without exploding', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find('Text')).to.have.length(5)
  })

  it('renders without exploding', () => {
    const wrapper = shallow(<Signup />)
    expect(wrapper.find('ScrollView')).to.have.length(1)
  })

  it('renders without exploding', () => {
    const wrapper = shallow(<Text>User Name : </Text>)
    expect(wrapper.text()).to.equal('User Name : ')
  })
})
