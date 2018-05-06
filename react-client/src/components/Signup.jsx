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
      confirmPassword: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  submit (username, email, password, confirmPassword) {
  	if (confirmPassword === password) {
      if(password !== '' && confirmPassword !== ''){
      axios.post('/user', {username: username,
   						email: email,
   						password: password
      }).then(function (res) {
   	 // go to the home page
      }).catch(function (err) {
   		alert('this username is exist')
      })
    }
    else{
      alert('enter your password ya 7mar')
    }

  } else {
      console.log('cococ  ', confirmPassword)
	 alert("password doesn't match,rewrite it again")
      this.pass.value = ''
      this.conPass.value = ''
    }
  };

  render () {
    return (<div >
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
        () => this.submit(this.state.username, this.state.email, this.state.password , this.state.confirmPassword)
      } > Signup </button> </div>
    )
  }
};

export default Signup
