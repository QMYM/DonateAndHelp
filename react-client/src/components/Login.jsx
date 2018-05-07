import React from 'react'
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

  handlechangeUserName (evt) { //change the state for the input text
    var user = evt.target.value
    this.setState({
      userName: user
    })
  };

  handlechangePassword (evt) { //change the state for the input text
    var pass = evt.target.value
    this.setState({
      password: pass
    })
  };

  submitLogin () { // send post request to the server
    axios.post('/login', {
      userName: this.state.userName,
      password: this.state.password
    })
    .then(response => {
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
    };

    render () {
      return (
        <div>
        <input type='text'
        onChange={
          this.handlechangeUserName
        }
        /> <br />
        <input type='password'
        onChange={
          this.handlechangePassword
        }
        /> 
        <br />
        <button onClick={
          this.submitLogin
        } > Login </button> 
        
        </div>
        )


    }
  };

  export default Login;
