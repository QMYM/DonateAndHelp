import React from 'react'
import axios from 'axios'
import Signup from './Signup.jsx'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      value:''
    }
    this.handlechangeUserName = this.handlechangeUserName.bind(this)
    this.handlechangePassword = this.handlechangePassword.bind(this)
    this.submitLoginDonater = this.submitLoginDonater.bind(this)
    this.submitLoginCompany = this.submitLoginCompany.bind(this)
    this.alo = this.alo.bind(this)
  };

  alo (event) {
    this.setState({value: event.target.value})
  }
  handlechangeUserName (evt) { // change the state for the input text
    var user = evt.target.value
    this.setState({
      userName: user
    })
  };

  handlechangePassword (evt) { // change the state for the input text
    var pass = evt.target.value
    this.setState({
      password: pass
    })
  };

  submitLoginCompany(){
    axios.post('/loginCompany', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
          window.location.href = "/beneficiaries"
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
  }

  submitLoginDonater () { // send post request to the server
    axios.post('/loginDonater', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
          window.location.href = "/donor"
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
  };

  render () {
    return (

      <div >
       <select value={this.state.value} onChange={this.alo}>

          <option value='false'>Donater</option>
          <option value=''>company</option>
        </select>

        <br />

        <br />
        { this.state.value ? (
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
        /> <br />
        <button onClick={
          this.submitLoginDonater
        } > LoginDonater </button>
        </div>
        ) : <div>
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
          this.submitLoginCompany
        } > Login </button>
          </div>}
        </div>
    )
  };
};
export default Login
