import '../Styles/Projects.css';
import raycasterIMG from '../images/raycaster image.jpg';
import ProjectRightAligned from './ProjectRightAligned';
import ProjectLeftAligned from './ProjectLeftAligned';

const Projects = () => {
	return (
		<div className='Projects'>
			<h1 id='Projects-check-out'>
				Check Out <span id='my-work'>My Work.</span>
			</h1>
			<ProjectRightAligned
				title={'Raycaster Engine'}
				desc={
					'A javascript recreation of the raycasting technique used in the old but popular DOOM engine.'
				}
				tech={'HTML/CSS, Javscript(ES6+), React, P5.js'}
				imgurl={raycasterIMG}
				recap={''}
				github={''}
				demo={''}
			/>
			<ProjectLeftAligned
				title={'Personal Blog'}
				desc={
					'A person blog site used to document and educate on numerous topics of the programming world!'
				}
				tech={'HTML/CSS, Javscript(ES6+), React, GraphQL'}
				imgurl={raycasterIMG}
				recap={''}
				github={''}
				demo={''}
			/>
			<ProjectRightAligned
				title={'Valorant Profile Tracker'}
				desc={
					'A web app utilizing Riot Games VALORANT API to gain access to individual statistics and daily item shop.'
				}
				tech={'HTML/CSS, Javscript(ES6+), React, SASS & Firebase'}
				imgurl={raycasterIMG}
				recap={''}
				github={''}
				demo={''}
			/>
		</div>
	);
};

export default Projects;
