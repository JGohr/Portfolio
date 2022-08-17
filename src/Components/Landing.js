import '../Styles/Landing.css';
import landingIMG from '../images/landing_graphic.svg';
import { Link } from 'react-scroll';

const Landing = () => {
	return (
		<div id='landing' className='Landing'>
			<div className='Landing-greeting'>
				<p id='Landing-intro'>Oh hey there, I'm</p>
				<h1 id='Landing-name'>Joshua Gohr</h1>
				<p id='Landing-para'>
					Software Developer bringing ideas to life in
					<br />
					Full Stack Web Development
				</p>
				<p id='Landing-para-mobile'>
					Software Developer
					<br />
					Full Stack Web Development
				</p>
				<Link to='contact' smooth={true}>
					<button id='Landing-button'>Contact Me</button>
				</Link>
			</div>
			<div className='Landing-img'>
				<Link to='projects' smooth={true} id='Landing-project'>
					<h1>Projects</h1>
				</Link>
				<img
					id='Landing-hero-svg'
					src={landingIMG}
					alt='Pixel Art Josh'
				></img>
				<Link to='about' smooth={true} id='Landing-about-me'>
					<h1>About Me</h1>
				</Link>
			</div>
		</div>
	);
};

export default Landing;
