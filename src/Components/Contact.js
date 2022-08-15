import '../Styles/Contact.css';

const Contact = () => {
	return (
		<div className='Contact'>
			<div className='Contact-details'>
				<p id='Contact-intro'>Need to send a message?</p>
				<h1 id='Contact-touch'>Let's get in touch.</h1>
				<p id='Contact-email'>
					<i class='fa-solid fa-envelope'></i> jgohrwork@gmail.com
				</p>
				<div className='Contact-icons'>
					<a href='https://github.com/JGohr'>
						<i class='fa-brands fa-square-github'></i>
					</a>
					<a href='https://www.linkedin.com/in/joshua-g-36bb3213b/'>
						<i class='fa-brands fa-linkedin'></i>
					</a>
				</div>
			</div>
			<div className='Contact-form-container'>
				<form id='Contact-form'>
					<label for='full-name-input'>Full Name</label>
					<input
						id='full-name-input'
						required
						placeholder='Angela Small'
					></input>
					<label for='email-input'>E-Mail</label>
					<input
						id='email-input'
						required
						placeholder='ASmall@yourcompany.com'
					></input>
					<label for='desc-input'>Message</label>
					<textarea
						id='desc-input'
						required
						placeholder='Hey Josh, checked out your portfolio...'
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
