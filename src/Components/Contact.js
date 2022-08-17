import '../Styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';

const Contact = () => {
	function sendEmail(event) {
		event.preventDefault();

		emailjs
			.sendForm(
				'service_lnjstfm',
				'template_zm1qh9h',
				document.getElementById('Contact-form')
			)
			.then(
				function () {
					console.log('SUCCESS!');
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	}

	useEffect(() => {
		emailjs.init('rkUND9_gVvQpyN4ly');
		document
			.getElementById('Contact-form')
			.addEventListener('submit', (e) => {
				sendEmail(e);
			});
	}, []);

	return (
		<div id='contact' className='Contact'>
			<div className='Contact-details'>
				<p id='Contact-intro'>Need to send a message?</p>
				<h1 id='Contact-touch'>Let's get in touch.</h1>
				<p id='Contact-email'>
					<i className='fa-solid fa-envelope'></i> jgohrwork@gmail.com
				</p>
				<div className='Contact-icons'>
					<a href='https://github.com/JGohr'>
						<i className='fa-brands fa-square-github'></i>
					</a>
					<a href='https://www.linkedin.com/in/joshua-g-36bb3213b/'>
						<i className='fa-brands fa-linkedin'></i>
					</a>
				</div>
			</div>
			<div className='Contact-form-container'>
				<form id='Contact-form'>
					<label htmlFor='full-name-input'>Full Name</label>
					<input
						id='full-name-input'
						required
						placeholder='Angela Small'
						name='from_name'
					></input>
					<label htmlFor='email-input'>E-Mail</label>
					<input
						id='email-input'
						required
						placeholder='ASmall@yourcompany.com'
						name='from_email'
					></input>
					<label htmlFor='desc-input'>Message</label>
					<textarea
						id='desc-input'
						required
						placeholder='Hey Josh, checked out your portfolio...'
						name='message'
					></textarea>
					<button id='submit-btn' type='submit'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
