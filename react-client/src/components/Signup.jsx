import React from 'react'
import $ from 'jquery'
import axios from 'axios'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      value: 'true'

    }
    this.onChange = this.onChange.bind(this)
    this.submitDonater = this.submitDonater.bind(this)
    this.alo = this.alo.bind(this)
    this.submitCompany = this.submitCompany.bind(this)
  }
  alo (event) {
    this.setState({value: event.target.value})
  }

  onChange (e) { // change the state for the input text
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  submitCompany (username, email, password, confirmPassword) { // sending post reqeust to the server
    if (confirmPassword === password) {
      if (password !== '' && confirmPassword !== '') {
        axios.post('/Company', {username: username,
          email: email,
          password: password
        }).then(function (res) {
          window.location.href = '/beneficiaries'

          // go to the home page
        }).catch(function (err) {
          alert('this username is exist')
        })
      } else {
        alert('enter your password')
      }
    } else {
      console.log('cococ  ', confirmPassword)
      alert("password doesn't match,rewrite it again")
      this.pass.value = ''
      this.conPass.value = ''
    }
  };
  submitDonater (username, email, password, confirmPassword) { // sending post reqeust to the server
  	if (confirmPassword === password) {
      if (password !== '' && confirmPassword !== '') {
        axios.post('/Donater', {username: username,
          email: email,
          password: password
        }).then(function (res) {
          console.log('hello')
          window.location.href = '/donor'
   	 // go to the home page
        }).catch(function (err) {
          alert('this username is exist')
        })
      } else {
        alert('enter your password')
      }
    } else {
      console.log('cococ  ', confirmPassword)
      alert("password doesn't match,rewrite it again")
      this.pass.value = ''
      this.conPass.value = ''
    }
  };

  render () {
    return (
      <div className='containter text-center'>
        <div className='login-wrap'>
          <div className='login-html'>
            <input id='tab-1' type='radio' name='tab' className='sign-in' /><label for='tab-1' className='tab'><a href='/login'>Login In</a></label>
            <input id='tab-2' type='radio' name='tab' className='sign-up' checked /><label for='tab-2' className='tab'>Sign Up</label>
            <div className='login-form'>
              <div className='sign-up-htm'>
                <div className='form-group group' >
                  <div className='input-group mb-3'>
                    <select className='custom-select' value={this.state.value} onChange={this.alo}>
                      <option selected value='true'>Donor</option>
                      <option value='false'>Beneficiary</option>
                    </select>
                  </div>
                  <br />
                  <label for='user' className='label'>Username</label>
                  <input id='user' type='text' className='input'
                    name='username'
                    onChange={
                      this.onChange

                    } />
                </div>
                <div className='group'>
                  <label for='pass' className='label'>Email Address</label>
                  <input id='pass' type='text' className='input'
                    name='email'
                    onChange={
                      this.onChange
                    } />
                </div>
                <div className='group'>
                  <label for='pass' className='label'>Password</label>
                  <input id='pass' type='password' className='input' data-type='password'
                    name='password'
                    onChange={
                      this.onChange
                    }
                    ref={el => this.pass = el} />
                </div>
                <div className='group'>
                  <label for='pass' className='label'>Repeat Password</label>
                  <input id='pass' type='password' className='input' data-type='password'
                    name='confirmPassword'
                    onChange={
                      this.onChange
                    }
                    ref={el => this.conPass = el} />
                </div>

                <div className='group'>
                  { this.state.value === 'true' ? (
                    <div>

                      <input type='submit' className='button' value='Signup' onClick={

                        () => this.submitDonater(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
                      } />
                    </div>
                  )
                    : <div>
                      <input type='submit' className='button' value='Signup ' onClick={

                        () => this.submitCompany(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
                      } />
                    </div> }
                </div>

                <div className='hr' />
                <div className='foot-lnk'>
                  <label for='tab-1'>Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
};

export default Signup
