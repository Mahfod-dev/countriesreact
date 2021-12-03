import React, { Component } from 'react'

class SearchBar extends Component {
	state = {
		term: '',
	}

	onInputChange = (e) => {
		this.setState({ term: e.target.value })
		console.log(this.state.term)
	}

	onFormSubmit = (e) => {
		e.preventDefault()
		this.props.onTermSubmit(this.state.term)
	}

	render() {
		return (
			<div>
				<form
					onSubmit={this.onFormSubmit}
					className='search-bar center aligned ui segment'
				>
					<input
						type='text'
						placeholder='Enter a country'
						onChange={this.onInputChange}
						value={this.state.search}
					/>
				</form>
			</div>
		)
	}
}

export default SearchBar
