import '../Styles/ProjectRight.css';
import '../Styles/Project.css';

const ProjectRightAligned = ({
	title,
	desc,
	tech,
	recap,
	github,
	demo,
	imgurl,
}) => {
	return (
		<div className='ProjectRightAligned' id='project'>
			<img
				className='project-img'
				src={imgurl}
				alt='Project Preview'
			></img>
			<div className='project-body-right'>
				<p className='project-text' id='project-featured'>
					Featured Project
				</p>
				<h1 className='project-text' id='project-title'>
					{title}
				</h1>
				<div className='project-details'>
					<p className='project-text' id='project-desc-right'>
						{desc}
					</p>
					<div>
						<p className='project-text' id='project-tech-used'>
							Technologies Used
						</p>
						<p className='project-text' id='project-tech-right'>
							{tech}
						</p>
					</div>
				</div>
				<div className='project-links-right'>
					<span>
						<a href={recap}>Project Recap {'(Youtube)'}</a>
					</span>
					<span>
						<a href={github}>Github Repo</a>
					</span>
					<span>
						<a href={demo}>Live Demo</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectRightAligned;
