import React, { useEffect, useState } from 'react';
import BeerItem from '../../shared/BeerItem/BeerItem';
import './AllBeers.scss';

function AllBeers() {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		fetch('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => {
				if (!response.ok) {
					throw new Error('fetch failed');
				}
				return response.json();
			})
			.then((data) => {
				setBeers(data);
			})
			.catch((error) => console.error(error.message));
	}, []);
	return (
		<div className='all-beers'>
			{beers.map((beer) => {
				return (
					<BeerItem
						key={beer['_id']}
						beer={beer}
					/>
				);
			})}
		</div>
	);
}

export default AllBeers;
