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

import Message from './Message.jsx'
import BeneficiariesCampaign from './Beneficiaries_Campaign.jsx'
import BeneficiariesProfile from './Beneficiaries_Profile.jsx'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchInput: '',
      searchOut: [],
      arr: [],
      image: ''
    }
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleClickSearch = this.handleClickSearch.bind(this)
  }

  handleSearchInput (evt) {
    console.log(evt.target.value,"joos")
    this.setState({ searchInput: evt.target.value })
  }

  handleClickSearch (input) {
    console.log(this.state.searchInput)
    var that = this
    console.log('input')
    $.ajax({
      type: 'POST',
      url: '/search_beneficiary',
      data: {
        name: that.state.searchInput
      },
      success: function (data) {
        console.log('Success in GET search!', data)
        that.setState({searchOut: data})
        that.getImage()
      },
      error: function (err) {
        alert('Not Found')
      }
    })
  }

  getImage () {
    var x = this
    axios.get('/imageSearch')
      .then(function (res) {
        console.log('show image for mais', res.data)
        var alo = []
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].image !== undefined) {
            alo.push(res.data[i].image)
            x.setState({
              arr: alo
            })
          }
          console.log('alo is here', alo)
        }
      }).catch(function (err) {
        alert('Not found!')
      })
  }

  render () {
		 return (
  <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top navbar-defaul'>
          <a href='#'></a>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto' />
            <ul className='navbar-nav mr-auto nav '>
              <li><a href='/beneficiaries' to='/beneficiaries'>Home</a></li>
              <li><a href='/Beneficiaries_Campaign' to='/Beneficiaries_Campaign'>Campaign</a></li>
            </ul>
            <form className='form-inline my-2 my-lg-0'>
              <Router>
                <ul className='nav navbar-nav navbar-right ' >
                  <li> <a href='/search' className='icon-bar' >Search</a> </li>
                  <li> <a href='/message' className='icon-bar' to='/message' replace >Message</a> </li>
                  <li> <a href='/Beneficiaries_Profile' className='icon-bar' to='/Beneficiaries_Profile'>Profile</a> </li>
                  <li> <a href='/' onClick={this.logout} className='icon-bar' to='/logout'>Logout</a> </li>
                  <li><a /></li>
                  <Route path='/Beneficiaries_Profile' component={BeneficiariesProfile} />
                  <Route path='/message' component={Message} />
                  <Route path='/Beneficiaries_Campaign' component={BeneficiariesCampaign} />
                </ul>
              </Router>
              <input className='form-control mr-sm-2' type='search' placeholder='Search' aria-label='Search' onChange={this.search} value={this.state.term} />
              <button className='btn btn-outline-success my-2 my-sm-0 w3-bar-item w3-button w3-hide-small w3-right w3-hover-red' type='submit'> <i className='fa fa-search' />Search</button>
            </form>
          </div>
        </nav>

  
        {console.log(this.state.searchOut)}
        <div className='container' >
      <div className='row'>
            <div className='col align-self-center'>
          <input type='text' name='SearchItems' className='form-control' onChange={this.handleSearchInput} />
        </div>

            <div className='col-3'>
          <button type='button' className='btn btn-raised btn-info' onClick={this.handleClickSearch}>Search</button>
        </div>

            {this.state.searchOut.map(record =>
          <div className='col-lg-3 col-md-4 col-sm-6'>
                <div>
              <p>{record.name}</p>
              <br />
              <p>{record.description}</p>
              <br />
              <p>{record.email}</p>
              <br />
              <p>{record.contactNum}</p>
              <br />
              <p>{record.address}</p>
              <br />
              <img src={this.state.arr[0]} />
              <br />
            </div>
              </div>
            )}

          </div>
    </div>
      </div>
    )
  }
}

export default Search
