import '../Styles/About.css';

const About = () => {
	return (
		<div id='about' className='About'>
			<div className='About-details'>
				<div className='details'>
					<p id='About-heading'>Let me tell you,</p>
					<h1 id='About-me'>About me</h1>
					<p id='About-desc'>
						I’m a{' '}
						<span className='gradient-text'>
							self-taught software developer
						</span>{' '}
						with a love for education. I live by the motto of{' '}
						<span className='gradient-text'>
							“Never have a 0% day”.
						</span>
						<br />
						<br />
						With my main focus being dedicated to{' '}
						<span className='gradient-text'>
							full stack web development
						</span>
						, I’m also studying{' '}
						<span className='gradient-text'>Unreal Engine 5</span>{' '}
						to create 3D games for clients & self projects!
					</p>
				</div>
				<img src='' alt='About'></img>
			</div>
			<div className='About-tech'>
				<img src='' alt='Tech'></img>
				<div className='tech-details'>
					<p id='Tech-heading'>Here's some,</p>
					<h1 id='Tech-i-use'>Technologies I Use</h1>
					<p className='Tech-list'>
						Languages:{' '}
						<span className='bold'>
							Javscript(ES6+ / Typescript), C# & C++
						</span>
					</p>
					<p className='Tech-list'>
						Frameworks/Utilities:{' '}
						<span className='bold'>
							React, NodeJS, MongoDB & Express
						</span>
					</p>
					<p className='Tech-list'>
						Misc:{' '}
						<span className='bold'>
							Git, Unreal Engine, Figma & Blender
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
