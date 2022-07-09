import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
function HomePage() {
	return (
		<div className='homepage'>
			<div className='header'>
				<h1>Italian Pizza</h1>
				<p>TASTE LIKE HEAVEN</p>
				<Link to='/menu'>
					<button>ORDER NOW</button>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;
