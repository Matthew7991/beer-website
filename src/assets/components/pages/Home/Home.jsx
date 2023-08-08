import React from 'react';
import allBeersImg from '../../../img/all-beers.png';
import randomBeerImg from '../../../img/random-beer.png';
import './Home.scss';
import HomeItem from '../../shared/HomeItem/HomeItem';

const sections = [
	{
		id: 1,
		title: 'All Beers',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jussto, a, eleifend vitae varius venenatis.',
		imgURL: allBeersImg,
		link: '/beers',
	},
	{
		id: 2,
		title: 'Random Beer',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Jussto, a, eleifend vitae varius venenatis.',
		imgURL: randomBeerImg,
		link: '/beers/random',
	},
];

function Home() {
	return (
		<div className='home'>
			{sections.map((section) => {
				return (
					<HomeItem
						key={section.id}
						title={section.title}
						description={section.description}
						img={section.imgURL}
						link={section.link}
					/>
				);
			})}
		</div>
	);
}

export default Home;
