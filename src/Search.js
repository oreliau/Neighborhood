import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Search extends Component {

	static propTypes = {
		places: PropTypes.array.isRequired
	}

	state = {
		query: '',
		newPlaces: [],
		searchErr: false
	}

	//compare functin wich compare value (when we write into the input with the onChange method)
	getPlaces = (event) => {

		const query = event.target.value.trim()
		this.setState({ query: query })

	}



	render() {
	
			const { query, newPlaces, searchErr } = this.state
			const places = this.props

		return (
			<div className="search-places">
			  <div className="search-places-bar">
				<Link className="close-search"  to="/">Close</Link>
				<div className="search-places-input-wrapper">
				  <input type="text"
					placeholder="Search by name"
					value={ query }
					onChange={ this.getPlaces } />
				</div>
			  </div>
			  <div className="search-places-results">
				{ newPlaces.length > 0 && (
				  <div>
					<div className=''>
					  <h3>Search returned { newPlaces.length } books </h3>
					</div>
				  </div>
				)}
				{ searchErr  && (
				  <div>
					<div className=''>
					  <h3>Search returned 0 places.  Please try again!</h3>
					  </div>
					</div>
				)}
			  </div>
			</div>
		)
	 }
}

export default Search

