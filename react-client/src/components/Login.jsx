import React from 'react'
import axios from 'axios'
import Signup from './Signup.jsx'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      value: ''
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

  submitLoginCompany () {
    axios.post('/loginCompany', {
      userName: this.state.userName,
      password: this.state.password
    })
      .then(response => {
        window.location.href = '/beneficiaries'
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
        window.location.href = '/donor'
        // should go to the home page from here
      }).catch(error => {
        alert('password or username is wrong')
      })
  };

  render () {
    return (

      <div >
        <div className='login-wrap'>
          <div className='login-html'>
            <input id='tab-1' type='radio' name='tab' className='sign-in' checked /> <label for='tab-1' className='tab'>Login In</label>
            <input id='tab-2' type='radio' name='tab' className='sign-up' /><label for='tab-2' className='tab'><a href='/signup'>Sign Up</a></label>

            <div className='login-form'>
              <div className='sign-in-htm'>
                <div className='group'>
                  <div className='input-group mb-3'>
                    <select className='custom-select' value={this.state.value} onChange={this.alo}>
                      <option selected value='false'>Donor</option>
                      <option value=''>Beneficiary</option>
                    </select>
                  </div>
                  <br />
                  <label for='user' className='label'>Username</label>
                  <input id='user' type='text' className='input'
                    onChange={
                      this.handlechangeUserName
                    } />
                </div>
                <div className='group'>
                  <label for='pass' className='label'>Password</label>
                  <input id='pass' type='password' className='input' data-type='password'
                    onChange={
                      this.handlechangePassword
                    } />
                </div>
                <div className='group'>
                  <input id='check' type='checkbox' className='check' checked />
                  <label for='check'><span className='icon' /> Keep me Signed in</label>
                </div>
                <div className='group'>
                  { this.state.value ? (
                    <div>
                      <input type='submit' className='button' value='Sign In'
                        onClick={
                          this.submitLoginDonater
                        } />
                    </div>
                  )
                    : <div>
                      <input type='submit' className='button' value='Sign In'
                        onClick={
                          this.submitLoginCompany
                        } />
                    </div>
                  }
                </div>
                <div className='hr' />
                <div className='foot-lnk'>
                  <a href='#forgot'>Forgot Password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  };
};
export default Login
