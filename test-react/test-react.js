 var App = require('../react-client/src/components/Signup.jsx')
 var chai = require('chai')
var expect = chai.expect;
var assert = require('chai').assert
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import Signup from '../react-client/src/components/Signup.jsx';
import Login from '../react-client/src/components/Login.jsx';
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

  it('should have props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<Login/>);
    expect(wrapper.props().handlechangeUserName).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  
  });

})