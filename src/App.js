import React, { Component } from 'react'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
	state = {
		countries: [],
		selectedCountrie: null,
	}
	componentDidMount() {
		fetch('https://restcountries.com/v3.1/all')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ countries: data })
			})
	}

	onTermSubmit = async (term) => {
		if (term)
			try {
				await fetch(`https://restcountries.com/v3.1/name/${term}`)
					.then((res) => res.json())
					.then((data) => {
						// if (data.status === 404) {
						// 	this.setState({ countries: [] })
						// } else {
						// 	this.setState({ countries: data })
						// }
						this.setState({ countries: data })
					})
			} catch (error) {
				console.log(error)
			}
	}

	render() {
		return (
			<div className='ui container'>
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<CardList countries={this.state.countries} />
			</div>
		)
	}
}

export default App
