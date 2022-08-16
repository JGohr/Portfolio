import '../Styles/Header.css';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='app' smooth={true}>
				<p id='Header-logo'>Joshua Gohr.</p>
			</Link>
			<div className='Header-icons'>
				<a href='https://github.com/JGohr'>
					<i class='fa-brands fa-square-github'></i>
				</a>
				<a href='https://www.linkedin.com/in/joshua-g-36bb3213b/'>
					<i class='fa-brands fa-linkedin'></i>
				</a>
			</div>
		</div>
	);
};

export default Header;
