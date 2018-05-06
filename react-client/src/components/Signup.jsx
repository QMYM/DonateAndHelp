import React from 'react'
import $ from 'jquery'
<<<<<<< HEAD

=======
import axios from 'axios'
>>>>>>> d66c23d80bb7dfe344eb823a4fdbb1d25ee3eff6
class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.submit = this.submit.bind(this)
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  submit (username, email, password) {
<<<<<<< HEAD
    $.ajax({
      type: 'POST',
      url: '/user',
      data: {
        username: username,
        email: email,
        password: password

      },
      success: (data) => {
        console.log('aaa', data)
      }
=======
    axios.post('/user', {username: username,
   						email: email,
   						password: password
    }).then(function (res) {
   	 // go to the home page
    }).catch(function (err) {
   		alert('this username is exist')
>>>>>>> d66c23d80bb7dfe344eb823a4fdbb1d25ee3eff6
    })
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
      />

      <button onClick={
        () => this.submit(this.state.username, this.state.email, this.state.password)
      } > Signup </button> </div>
    )
  }
};

export default Signup
