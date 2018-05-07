import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }


  render () {
    return (<div>
   
    <Login/>
    <Signup/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));