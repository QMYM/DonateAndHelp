import React from 'react'
import $ from 'jquery'

import axios from 'axios'

import Signup from './Signup.jsx'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
    this.handlechangeUserName = this.handlechangeUserName.bind(this)
    this.handlechangePassword = this.handlechangePassword.bind(this)
    this.submitLogin = this.submitLogin.bind(this)
  };

  handlechangeUserName (evt) {
    var user = evt.target.value
    this.setState({
      userName: user
    })
  };

  handlechangePassword (evt) {
    var pass = evt.target.value
    this.setState({
      password: pass
    })
  };

  submitLogin () {
    axios.post('/login', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
        window.location.href = '/profile'
      }).catch(error => {
        console.log('error login', error)
      })
  };

  render () {
    return (

      <div >
        <input type='text'
          onChange={
            this.handlechangeUserName
          }
        /> <br />
        <input type='password'
          onChange={
            this.handlechangePassword
          }
        /> <br />
        <button onClick={
          this.submitLogin
        } > Login </button> </div >

    )
  };
};
export default Login
