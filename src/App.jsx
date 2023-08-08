import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavMain from './assets/components/shared/NavMain/NavMain';
import Home from './assets/components/pages/Home/Home';
import AllBeers from './assets/components/pages/AllBeers/AllBeers';
import BeerDetails from './assets/components/pages/BeerDetails/BeerDetails';
export const allBeersLink = '/beers';

function App() {
	const location = useLocation();

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/beers'
					element={<AllBeers />}
				/>
				<Route
					path='/beers/:beerId'
					element={<BeerDetails />}
				/>
				<Route
					path='/beers/random'
					element={<BeerDetails />}
				/>
			</Routes>
			{location.pathname == '/' || <NavMain />}
		</>
	);
}

export default App;
