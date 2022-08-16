import './Styles/App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
	return (
		<div className='App'>
			<Header />
			<Landing />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
