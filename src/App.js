import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
	const pizzaList = [
		{
			name: 'pizza margarita',
			image:
				'https://expertphotography.b-cdn.net/wp-content/uploads/2018/11/pizza-photography-overhead.jpg',
			price: 20,
		},
		{
			name: 'cheese pizza',
			image:
				'https://www.audiosciencereview.com/forum/index.php?attachments/53110049-gif.102150/',
			price: 25.0,
		},
		{
			name: 'pinnaple pizza',
			image:
				'https://therecipecritic.com/wp-content/uploads/2022/03/pineapplepizza-2-750x1000.jpg',
			price: 17.0,
		},
	];

	return (
		<div className='App'>
			<Router>
				<Navbar />
				{/* we want to keep the navbar in all place */}
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/menu' element={<Menu pizzaList={pizzaList} />} />
					<Route path='/about/' element={<About />} />
					<Route path='/contact/' element={<Contact />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}
