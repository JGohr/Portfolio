import '../Styles/Landing.css';
import landingIMG from '../images/landing_graphic.svg';

const Landing = () => {
	return (
		<div className='Landing'>
			<div className='Landing-greeting'>
				<p id='Landing-intro'>Oh hey there, I'm</p>
				<h1 id='Landing-name'>Joshua Gohr.</h1>
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
				<button id='Landing-button'>View My Work</button>
			</div>
			<div className='Landing-img'>
				<a href='' id='Landing-project'>
					<h1>Projects</h1>
				</a>
				<img
					id='Landing-hero-svg'
					src={landingIMG}
					alt='Pixel Art Josh'
				></img>
				<a href='' id='Landing-about-me'>
					<h1>About Me</h1>
				</a>
			</div>
		</div>
	);
};

export default Landing;
