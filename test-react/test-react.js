 var App = require('../react-client/src/components/Signup.jsx')
 var chai = require('chai')
var expect = chai.expect;
var assert = require('chai').assert
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6
import Signup from '../react-client/src/components/Signup.jsx';
// import { shallow, mount } from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow';
import sinon from 'sinon';
import { configure } from 'enzyme';

import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

describe('Signup', function() {
describe('sayHello()', function () {
	 it('app should return hello', function () {
      let result = new Signup().sayHello();
      assert.equal(result, 'hello');
    });
	  });

  // it('should be ', function() {
  //   // const wrapper = shallow(<Button />);
  //   expect(function () { throw "Parameter is not a number!";}).to.throw();
  //   // expect(ReactTestUtils.isCompositeComponent(App)).to.be.true;
  // });

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
const wrapper = shallow(<Signup />);
expect(wrapper.type()).to.equal('div')
});



// const node = this.textInput;
// node.value = 'giraffe';
// ReactTestUtils.Simulate.change(node);
// ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});

const input = wrapper.find('input');
wrapper.find('input').simulate('keydown');

})




describe('Login', function() {
  // beforeEach(function() {
 
  // });


  // it('should be ', function() {
  //   // const wrapper = shallow(<Button />);
  //   expect(function () { throw "Parameter is not a number!";}).to.throw();
  //   // expect(ReactTestUtils.isCompositeComponent(App)).to.be.true;
  // });
})