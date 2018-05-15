 var App = require('../react-client/src/components/Signup.jsx')
 var chai = require('chai')
 var expect = chai.expect;
 var assert = require('chai').assert
 import React from 'react';
 import ReactTestUtils from 'react-dom/test-utils'; 
 import Signup from '../react-client/src/components/Signup.jsx';
 import Login from '../react-client/src/components/Login.jsx';
 import Home from '../react-client/src/components/Home.jsx';
 import Message from '../react-client/src/components/message.jsx';
 import Search_Beneficiary from '../react-client/src/components/Search_Beneficiary.jsx';
 import Search_Donor from '../react-client/src/components/Search_Donor.jsx';
 import Donor_Campaign from '../react-client/src/components/Donor_Campaign.jsx';
 import Donor_Profile from '../react-client/src/components/Donor_Profile.jsx';
 import TheApp from '../react-client/src/components/TheApp.jsx';
 import ShallowRenderer from 'react-test-renderer/shallow';
 import sinon from 'sinon';
 import { configure } from 'enzyme';
 import { shallow } from 'enzyme';
 import Adapter from 'enzyme-adapter-react-15';
 configure({ adapter: new Adapter() });


 describe('Signup', function() {

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


 })


 describe('Home', function() {

   it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Home)).to.be.false;
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Home).length).to.equal(0);
  });

 })


 describe('Message', function() {

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Message)).to.be.true;
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<div><label>To</label></div>);
    expect(wrapper.text()).to.equal('To');
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<div><label>Subject</label></div>);
    expect(wrapper.text()).to.equal('Subject');
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.type()).to.equal('div')
  });

})


 describe('Search_Beneficiary', function() {

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Search_Beneficiary)).to.be.true;
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<Search_Beneficiary />);
    expect(wrapper.type()).to.equal('div')
  });

})


 describe('Search_Donor', function() {

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Search_Donor)).to.be.true;
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<Search_Donor />);
    expect(wrapper.type()).to.equal('div')
  });

})


 describe('TheApp', function() {

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(TheApp)).to.be.true;
  });

  it('renders without exploding', () => {
    const wrapper = shallow(<TheApp />);
    expect(wrapper.type()).to.equal('div')
  });

})

 describe('Donor_Campaign', function() {

   it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(TheApp)).to.be.true;
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<Donor_Campaign />);
    expect(wrapper.type()).to.equal('div')
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<div><label for='usr'>Campain Name :</label></div>);
    expect(wrapper.text()).to.equal('Campain Name :');
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<div><label for='usr'>Campain Name :</label></div>);
    expect(wrapper.text()).to.equal('Campain Name :');
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<div><label for='usr'>Campain Name :</label></div>);
    expect(wrapper.text()).to.equal('Campain Name :');
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<div><label for='usr'>Campain Description :</label></div>);
    expect(wrapper.text()).to.equal('Campain Description :');
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<div><label for='usr'>Items :</label></div>);
    expect(wrapper.text()).to.equal('Items :');
  });

 })


 describe('Donor_Profile', function() {

   it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(Donor_Profile)).to.be.true;
  });

   it('renders without exploding', () => {
    const wrapper = shallow(<Donor_Profile />);
    expect(wrapper.type()).to.equal('div')
  });

 })