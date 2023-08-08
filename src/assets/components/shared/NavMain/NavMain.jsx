import React from 'react';
import { Link } from 'react-router-dom';

import beerLogo from '../../../img/bier.svg';
import './NavMain.scss';

function NavMain() {
	return (
		<nav className='nav-main'>
			<Link to={'/'}>
				<div className='logo'>
					<img
						src={beerLogo}
						alt=''
					/>
				</div>
			</Link>
		</nav>
	);
}

export default NavMain;
