import React from 'react';
import { Link } from 'react-router-dom';
import './BeerItem.scss';

function BeerItem({ beer }) {
	return (
		<article className='beer-item'>
			<div className='img-wrapper'>
				<img
					src={beer.image_url}
					alt=''
				/>
			</div>
			<div className='text'>
				<h2>{beer.name}</h2>
				<p className='tagline'>{beer.tagline}</p>
				<p className='producer'>Created by: {beer.name}</p>
				<Link to={`/beers/${beer['_id']}`}>Details</Link>
			</div>
		</article>
	);
}

export default BeerItem;
