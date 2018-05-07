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
      value: ''

    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
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
          // go to the home page
        }).catch(function (err) {
          alert('this username is exist')
        })
      } else {
        alert('enter your password ya 7mar')
      }
    } else {
      console.log('cococ  ', confirmPassword)
      alert("password doesn't match,rewrite it again ya 7mar")
      this.pass.value = ''
      this.conPass.value = ''
    }
  };

  submit (username, email, password, confirmPassword) { // sending post reqeust to the server
  	if (confirmPassword === password) {
      if (password !== '' && confirmPassword !== '') {
        axios.post('/Donater', {username: username,
   						email: email,
   						password: password
        }).then(function (res) {
   	 // go to the home page
        }).catch(function (err) {
   		alert('this username is exist')
        })
      } else {
        alert('enter your password ya 7mar')
      }
    } else {
      console.log('cococ  ', confirmPassword)
	 alert("password doesn't match,rewrite it again ya 7mar")
      this.pass.value = ''
      this.conPass.value = ''
    }
  };

  render () {
    return (

      <div className='containter text-center'>
        <select value={this.state.value} onChange={this.alo}>

          <option value='false'>Donater</option>
          <option value=''>company</option>
        </select>

        <br />

        <br />
        { this.state.value ? (
          <div>

            <h2 > Name: </h2> <input type='text'
              name='username'
              onChange={
                this.onChange

              }
            /> <h2 > Email: </h2>

            <input type='text'
              name='email'
              onChange={
                this.onChange
              }
            /> <h2 > Password: </h2> <input type='password'
              name='password'
              onChange={
                this.onChange
              }
              ref={el => this.pass = el}
            />

            <h2 > confirmPassword: </h2> <input type='Password'
              name='confirmPassword'
              onChange={
                this.onChange
              }
              ref={el => this.conPass = el}
            />

            <button onClick={

              () => this.submit(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
            } > Signup </button>
          </div>
        ) : <div>

          <h2 > Name: </h2> <input type='text'
            name='username'
            onChange={
              this.onChange

            }
          /> <h2 > Email: </h2>

          <input type='text'
            name='email'
            onChange={
              this.onChange
            }
          /> <h2 > Password: </h2> <input type='password'
            name='password'
            onChange={
              this.onChange
            }
            ref={el => this.pass = el}
          />

          <h2 > confirmPassword: </h2> <input type='Password'
            name='confirmPassword'
            onChange={
              this.onChange
            }
            ref={el => this.conPass = el}
          />

          <button onClick={

            () => this.submitCompany(this.state.username, this.state.email, this.state.password, this.state.confirmPassword)
          } > SignupYUSUR </button>
        </div> }

      </div>

    )
  }
};

export default Signup
