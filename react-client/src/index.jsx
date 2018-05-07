<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import AppRoute from './components/AppRoute.jsx'
>>>>>>> 0bb383269cb2429601e59adcecb8016a61999dee

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (<div>
<<<<<<< HEAD
   
    <Login/>
    <Signup/>
=======
      <AppRoute />
>>>>>>> 0bb383269cb2429601e59adcecb8016a61999dee
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
