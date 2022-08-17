import '../Styles/Header.css';
import { Link } from 'react-scroll';
import { useEffect } from 'react';

const Header = () => {
	function showSocials() {
		const icons = document.querySelectorAll(".menu > a > i[id^='social']");
		icons.forEach((icon) => {
			icon.classList.toggle('hidden');
			icon.classList.toggle('show');
		});
	}

	useEffect(() => {
		document
			.getElementById('Hamburger-icon')
			.addEventListener('click', showSocials);
	}, []);

	return (
		<div className='Header'>
			<Link to='app' smooth={true}>
				<p id='Header-logo'>Joshua Gohr</p>
			</Link>
			<div className='menu'>
				<a href='https://github.com/JGohr'>
					<i
						id='social-github'
						className='fa-brands fa-square-github fa-inverse hidden'
					></i>
				</a>
				<a href='https://www.linkedin.com/in/joshua-g-36bb3213b/'>
					<i
						id='social-linkedin'
						className='fa-brands fa-linkedin fa-inverse hidden'
					></i>
				</a>
				<i id='Hamburger-icon' className='fa-solid fa-bars'></i>
			</div>
			<div className='Header-icons'>
				<Link to='contact' smooth={true}>
					<p id='Header-contact'>Contact Me</p>
				</Link>
				<a href='https://github.com/JGohr'>
					<i className='fa-brands fa-square-github'></i>
				</a>
				<a href='https://www.linkedin.com/in/joshua-g-36bb3213b/'>
					<i className='fa-brands fa-linkedin'></i>
				</a>
			</div>
		</div>
	);
};

export default Header;
