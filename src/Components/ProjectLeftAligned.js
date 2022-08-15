import '../Styles/ProjectLeft.css';
import '../Styles/Project.css';

const ProjectLeftAligned = ({
	title,
	desc,
	tech,
	recap,
	github,
	demo,
	imgurl,
}) => {
	return (
		<div className='ProjectLeftAligned'>
			<div className='project-body-left'>
				<p className='project-featured'>Featured Project</p>
				<h1 className='project-title'>{title}</h1>
				<div className='project-details'>
					<p className='project-desc-left'>{desc}</p>
					<div>
						<p className='project-tech-used'>Technologies Used</p>
						<p className='project-tech-left'>{tech}</p>
					</div>
				</div>
				<div className='project-links-left'>
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
			<img
				className='project-img'
				src={imgurl}
				alt='Project Preview'
			></img>
		</div>
	);
};

export default ProjectLeftAligned;
