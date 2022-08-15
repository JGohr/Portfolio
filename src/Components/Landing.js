import '../Styles/Landing.css';
import landingIMG from '../images/landing_graphic.svg';

const Landing = () => {
	return (
		<div className='Landing'>
			<div className='Landing-greeting-container'>
				<div className='Landing-greeting'>
					<p id='Landing-intro'>Oh hey there, I'm</p>
					<h1 id='Landing-name'>Joshua Gohr.</h1>
					<p>Software Developer bringing ideas to life in</p>
					<p>Full Stack Web & Game Development</p>
					<button id='Landing-button'>View My Work</button>
				</div>
			</div>
			<div className='Landing-img-container'>
				<div className='Landing-img'>
					<h1 id='Landing-project'>Projects</h1>
					<img
						id='Landing-hero-svg'
						src={landingIMG}
						alt='Pixel Art Josh'
					></img>
					<h1 id='Landing-about-me'>About Me</h1>
				</div>
			</div>
		</div>
	);
};

export default Landing;
