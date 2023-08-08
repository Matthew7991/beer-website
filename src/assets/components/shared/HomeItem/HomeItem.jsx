import React from 'react';
import { Link } from 'react-router-dom';
import './HomeItem.scss';

function HomeItem(props) {
	return (
		<article className='home-item'>
			<Link to={props.link}>
				<img
					src={props.img}
					alt=''
				/>
				<h2>{props.title}</h2>
			</Link>
			<p>{props.description}</p>
		</article>
	);
}

export default HomeItem;
