import './Styles/App.css';
import Header from './Components/Header';
import Landing from './Components/Landing';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Technology from './Components/Technology';

function App() {
	return (
		<div className='App'>
			<Header />
			<Landing />
			<About />
			<Projects />
			<Contact />
			<Technology />
		</div>
	);

	/*
  
    <Header> 
    <Landing> 
    <Projects>
      <>Headline</>
      <Project>
      <Project>
      <Project>
    <About>
    <Tech>
    <Contact>
  
  */
}

export default App;
