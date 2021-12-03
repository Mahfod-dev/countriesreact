import React from 'react'

const componentName = ({ countries }) => {
	const filteredCountrie =
		countries.status !== 404 ? (
			countries.map((countrie) => {
				const capital = countrie.capital
				const population = countrie.population
				const image = countrie.flags.svg

				return (
					<div style={{ margin: '10px' }}>
						<div className='ui card'>
							<div className='image'>
								<img src={image} alt='flag' />
							</div>
							<div className='content'>
								<div className='description'>
									<p>Capital : {capital}</p>
									<p>Population : {population}</p>
								</div>
							</div>
						</div>
					</div>
				)
			})
		) : (
			<h1 style={{ alignItems: 'center' }}>Please enter an existing Country</h1>
		)

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'space-between',
				padding: '20px',
				marginTop: '10px',
			}}
		>
			{filteredCountrie}
		</div>
	)
}

export default componentName
