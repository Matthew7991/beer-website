import React, { useEffect, useState } from 'react';
import backImg from '../../../img/Back.svg';
import { useParams, Link } from 'react-router-dom';
import './BeerDetails.scss';

function BeerDetails() {
	let beerId = useParams().beerId;
	const [beer, setBeer] = useState({});

	if (!beerId) beerId = 'random';

	useEffect(() => {
		fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('fetching failed');
				}
				return response.json();
			})
			.then((data) => {
				setBeer(data);
			})
			.catch((error) => console.error(error.message));
	}, []);

	return (
		<article className='beer-details'>
			<div className='img-wrapper'>
				<img
					className='product-img'
					src={beer.image_url}
					alt=''
				/>
			</div>
			<div className='text'>
				<h2>{beer.name}</h2>
				<p className='tagline'>{beer.tagline}</p>
				<div className='stats'>
					<p className='brewed'>
						<span>First brewed:</span> <span>{beer.first_brewed}</span>
					</p>
					<p className='attenuation'>
						<span>Attenuation level:</span>
						<span>{beer.attenuation_level}</span>
					</p>
				</div>
				<p className='description'>{beer.description}</p>
				<Link to={`/beers`}>
					<img
						src={backImg}
						alt='back Arrow'
					/>
				</Link>
			</div>
		</article>
	);
}

export default BeerDetails;
