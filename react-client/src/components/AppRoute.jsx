
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import $ from 'jquery';

import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx'


// const AppRoute = (props) => (
//   <BrowserRouter history={hashHistory}>
//   <Switch>
//   <Route exact path="/" component={Login} />
//   <Route exact path="/login" component={Login} />
//   <Route exact path="/signup" component={Signup} />
//   </Switch>
//   </BrowserRouter>
// )


// const AuthExample = () => (
//   <Router>
//     <div>
      
//       <ul>
//         <li>
//           <Link to="/public">Public Page</Link>
//         </li>
//         <li>
//           <Link to="/protected">Protected Page</Link>
//         </li>
//       </ul>
//       <Route path="/public" component={Public} />
//       <Route path="/protected" component={Protected} />
//     </div>
//   </Router>
// );


class AppRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
    <div>
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/register">Sign Up Page</Link>
        </li>
      </ul>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Signup} />
    </div>
  </Router>
   </div>)
  }
}


export default AppRoute;
