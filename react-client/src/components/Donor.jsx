import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import Cards from 'react-credit-cards'

import Donor_Profile from './Donor_Profile.jsx'
import Search_Donor from './Search_Donor.jsx'
import Donor_Campaign from './Donor_Campaign.jsx'
import Message from './message.jsx'

function searching (term) {
  return function (x) {
    return x.campaignName.toLowerCase().includes(term.toLowerCase())
  }
}

class Donor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      camp: [],
      amount: '',
      term: ''
    }
    this.logout = this.logout.bind(this)
    this.search = this.search.bind(this)
    this.handlechangeAmount = this.handlechangeAmount.bind(this)
  }

  search (e) {
    this.setState({term: e.target.value})
  }

  logout () {
    axios.get('/logout')
      .then(function (res) {
        console.log('ea eshe ')
        window.location.href = '/'
      }).catch(function (err) {
        console.log('logout err ', err)
      })
  }

  componentDidMount () {
    var x = this
    axios.get('/companyCam')
      .then(function (res) {
        console.log(res.data)
        x.setState({camp: res.data})
      // const camp=res.data.results.map(obj=>{})
      }).catch(function (err) {
        console.log(err)
      })
  }

  handlechangeAmount (evt) { // change the state for the input text
    var amount = evt.target.value
    this.setState({
      amount: amount
    })
    // this.input.value="";
  };

  submitDonate () {
    console.log('Donate')
  }

  render () {
    // console.log(this.state.camp)
    return (
      <div >
        <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#'></a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            <ul className='navbar-nav mr-auto nav '>
              <li><a href='/donor'>Home</a></li>
              <li><a href='/Donor_Campaign'>Campaign</a></li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <Router>
                <ul className='nav navbar-nav navbar-right ' >
                  {/* } <li> <a href='/searchD' className='icon-bar' >Search</a> </li> */}
                  <li> <a href='/searchD' className='icon-bar' >Search</a> </li> 
                  <li> <a href='/message' className='icon-bar' to='/message'>Message</a> </li>
                  <li> <a href='/Donor_Profile' className='icon-bar' to='/Donor_Profile'>Profile</a> </li>
                  <li> <a href='#'onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                  <li><a /></li>
                  <Route path='/message' component={Message} />
                  <Route path='/Donor_Campaign' component={Donor_Campaign} />
                  <Route path='/Donor_Profile' component={Donor_Profile} />
                  <Route path='/searchD' component={Search_Donor} />
                </ul>
              </Router>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
              <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
            </form>
          </div>
        </nav>

        <div className='container-fluid'>
          <br />
          <br />

          <div id='pricing' className='container-fluid'>
            <div className='row slideanim'>
               {this.state.camp.filter(searching(this.state.term)).map(item =>
                <div key={item._id}>

                  <div className=' col-xs-12'>
                    <div className='panel panel-default text-center'>
                      <div className='panel-heading'>
                        <h1>{item.campaignName}</h1>
                      </div>
                      <div className='panel-body'>
                        <h2>From : {item.username}</h2>
                        <img alt='Profile' style={{width: '300px'}} src={item.campaignImage || 'https://orig00.deviantart.net/3cc1/f/2012/247/1/b/meelo_facebook_default_profile_picture_by_redjanuary-d5dmoxd.jpg'} />

                        
                      </div>
                      <p> {item.campaignDescription}</p>
                      <div className='panel-footer'>
                        <h3>{item.campaignAmount}</h3><h3>JOD</h3>
                        <button type='button' className='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Donate</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='modal fade' id='myModal' role='dialog'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h4 className='modal-title'>Your Donation Will Make A Difference</h4>
                  <button type='button' className='close' data-dismiss='modal'>&times;</button>
                </div>
                <div className='modal-body'>
                  <p>ENTER YOUR AMOUNT</p>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <span className='input-group-text'>$</span>
                    </div>
                    <input type='number' className='form-control' aria-label='Amount (to the nearest dollar)'
                      onChange={
                        this.handlechangeAmount
                      } />
                    <div className='input-group-append'>
                      <span className='input-group-text'>.JOD</span>
                    </div>
                  </div>
                  <div className='card' style={{width: '30rem'}}>
                    <img className='card-img-top' src='https://images-na.ssl-images-amazon.com/images/I/51yXB%2BW5RcL.jpg' alt='Card image cap' />
                    <div className='card-body'>

                      <input type='number' className='form-control' placeholder='Card Number' />
                      <input type='number' className='form-control' placeholder='Zip Code' />

                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                  <button type='button' className='btn btn-default' data-dismiss='modal' onClick={this.submitDonate}>Donate</button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Donor
