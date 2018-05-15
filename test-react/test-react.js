 var App = require('../react-client/src/components/Signup.jsx')
 var chai = require('chai')
var expect = chai.expect;
var assert = require('chai').assert
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import Signup from '../react-client/src/components/Signup.jsx';
import Login from '../react-client/src/components/Login.jsx';
import AppRoute from '../react-client/src/components/AppRoute.jsx';
import Beneficiaries from '../react-client/src/components/Beneficiaries.jsx';
import Beneficiaries_Campaign from '../react-client/src/components/Beneficiaries_Campaign.jsx';
import Beneficiaries_Profile from '../react-client/src/components/Beneficiaries_Profile.jsx';
import Donor from '../react-client/src/components/Donor.jsx';
// import { shallow, mount } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import { configure } from 'enzyme';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

describe('Signup', function() {
// describe('sayHello()', function () {
// 	 it('app should return hello', function () {
//       let result = new Signup().sayHello();
//       assert.equal(result, 'hello');
//     });
// 	  });


 it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Signup)).to.be.true;
  });


it('renders without exploding', () => {
        const wrapper = shallow(<Signup />);
        expect(wrapper.find(Signup).length).to.equal(0);
    });

it('renders without exploding', () => {
const wrapper = shallow(<div><label for="pass" className="label">Email Address</label>
</div>);
expect(wrapper.text()).to.equal('Email Address');
  });


it('renders without exploding', () => {
const wrapper = shallow(<div><label for='user' className='label'>Username</label>
</div>);
expect(wrapper.text()).to.equal('Username');
  });


it('renders without exploding', () => {
const wrapper = shallow(<div><label for='tab-2' className='tab'>Sign Up</label></div>);
expect(wrapper.text()).to.equal('Sign Up');
  });

it('renders without exploding', () => {
const wrapper = shallow(<div><label for='pass' className='label'>Repeat Password</label>
</div>);
expect(wrapper.text()).to.equal('Repeat Password');
  });



it('renders without exploding', () => {
const wrapper = shallow(<Signup />);
expect(wrapper.type()).to.equal('div')
});



// it('should update the src state on clicking fetch', function () {
//     const wrapper = mount(<Signup/>);
//     wrapper.setState({ email: '' });
//     wrapper.find('button').simulate('click');
//     expect(wrapper.state('email')).to.equal('hello@ifelse.io');
//     expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);
//   });
it('renders without exploding', () => {
  const wrapper = shallow(<Signup />);
expect(wrapper.find('input')).to.have.length(7)
});



})




describe('Login', function() {
 
 it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Login)).to.be.true;
  });

it('renders without exploding', () => {
const wrapper = shallow(<div><label for='tab-1' className='tab'>Login In</label></div>);
expect(wrapper.text()).to.equal('Login In');
  });

it('renders without exploding', () => {
const wrapper = shallow(<div><label for='user' className='label'>Username</label></div>);
expect(wrapper.text()).to.equal('Username');
  });


it('renders without exploding', () => {
const wrapper = shallow(<div><label for='pass' className='label'>Password</label></div>);
expect(wrapper.text()).to.equal('Password');
  });

  it('renders without exploding', () => {
const wrapper = shallow(<Login />);
expect(wrapper.type()).to.equal('div')
});

  // it('should have props for handleEmailChange and fetchGravatar', function () {
  //   const wrapper = shallow(<Login/>);
  //   expect(wrapper.props().handlechangeUserName).to.be.defined;
  //   expect(wrapper.props().fetchGravatar).to.be.defined;
  
  // });

})


describe('AppRoute', function() {


 it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(AppRoute)).to.be.true;
  });



it('renders without exploding', () => {
  const wrapper = shallow(<AppRoute/>);
expect(wrapper.find('Route')).to.have.length(13)
});



})


describe('Beneficiaries', function() {

 it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Beneficiaries)).to.be.true;
  });

 it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries/>);
expect(wrapper.find('div')).to.have.length(9)
});

  it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries/>);
expect(wrapper.find('li')).to.have.length(7)
});



it('renders without exploding', () => {
const wrapper = shallow(<div><p>ENTER YOUR AMOUNT</p></div>);
expect(wrapper.text()).to.equal('ENTER YOUR AMOUNT');
  });

  it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries/>);
expect(wrapper.find('button')).to.have.length(5)
});


})


describe('Beneficiaries_Campaign', function() {

it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Beneficiaries_Campaign)).to.be.true;
  });

 it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Campaign/>);
expect(wrapper.find('div')).to.have.length(4)
});

  it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Campaign/>);
expect(wrapper.find('li')).to.have.length(7)
});

   it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Campaign/>);
expect(wrapper.find('input')).to.have.length(5)
});

   it('renders without exploding', () => {
const wrapper = shallow(<div><label for='usr'>Campain Description :</label></div>);
expect(wrapper.text()).to.equal('Campain Description :');
  });

})


describe('Beneficiaries_Profile', function() {

it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Beneficiaries_Profile)).to.be.true;
  });

 it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Profile/>);
  expect(wrapper.find('div')).to.have.length(51)
});

  it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Profile/>);
expect(wrapper.find('li')).to.have.length(14)
});

   it('renders without exploding', () => {
  const wrapper = shallow(<Beneficiaries_Profile/>);
expect(wrapper.find('input')).to.have.length(11)
});

   it('renders without exploding', () => {
const wrapper = shallow(<div><h4 className='modal-title'>Information</h4></div>);
expect(wrapper.text()).to.equal('Information');
  });

   
  })

describe('Donor', function() {

it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Donor)).to.be.true;
  });

 it('renders without exploding', () => {
  const wrapper = shallow(<Donor/>);
expect(wrapper.find('li')).to.have.length(6)
});

  it('renders without exploding', () => {
  const wrapper = shallow(<Donor/>);
expect(wrapper.find('button')).to.have.length(5)
});


   it('renders without exploding', () => {
const wrapper = shallow(<div><p>ENTER YOUR AMOUNT</p></div>);
expect(wrapper.text()).to.equal('ENTER YOUR AMOUNT');
  });
  

 })

