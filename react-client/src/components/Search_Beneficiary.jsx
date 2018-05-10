
import React from 'react';
import $ from 'jquery';
import axios from 'axios'
class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			searchInput : '',
			searchOut : [],
			arr:[],
			image:''
		}
		this.handleSearchInput = this.handleSearchInput.bind(this);
		this.handleClickSearch = this.handleClickSearch.bind(this);
	}

	handleSearchInput(evt){
		console.log(evt.target.value)
    this.setState({ searchInput: evt.target.value });
	}

	handleClickSearch(input){
		console.log(this.state.searchInput)
		var that  = this	
		console.log('input');
		$.ajax({
			type:'POST',
			url:'/search_beneficiary',
			data: {
				name : that.state.searchInput
			},
			success: function(data) {
				console.log("Success in GET search!", data);
					that.setState({searchOut: data});
					that.getImage();
			},
			error: function(err) {
				alert("Not Found");
			}
		})
	}

	getImage(){
		var x = this;
		axios.get('/imageSearch')
		.then(function(res){
			console.log("show image for mais", res.data);
			var alo =[];
			for(var i =0; i<res.data.length; i++){
				if(res.data[i].image !== undefined){
					alo.push(res.data[i].image)
					x.setState({
						arr:alo
					})
				}	
				console.log("alo is here", alo);	
			}		
		}).catch(function(err){
			alert("Not found!")
		})		
	}

		render(){ 
			
			return (
			<div>
				{console.log(this.state.searchOut)}
				<div className="container" >
					<div className="row">
						<div className = 'col align-self-center'>
							<input type="text" name="SearchItems" className="form-control" onChange={this.handleSearchInput}/>
						</div>

						<div className = 'col-3'>
							<button type="button" className="btn btn-raised btn-info" onClick={this.handleClickSearch}>Search</button>
						</div>

						{this.state.searchOut.map(record =>
							   <div className='col-lg-3 col-md-4 col-sm-6'>
								<div>
									<p>{record.name}</p>
									<br/>
									<p>{record.description}</p>
									<br/>
									<p>{record.email}</p>
									<br/>
									<p>{record.contactNum}</p>
									<br/>
									<p>{record.address}</p>
									<br/>
									<img src={this.state.arr[0]}/>
									<br/>
								</div>
			                   </div>
							)}

						</div>
					</div>
				</div>
				)
			}
	}

export default Search;
