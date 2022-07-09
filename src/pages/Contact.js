import '../styles/Contact.css';
function Contact() {
	return (
		<div className='contact'>
			<div className='left-side'>
				<img
					src={
						'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80'
					}
					alt=''
				/>
			</div>
			<div className='right-side'>
				<h2>Our Contact</h2>
				<form className='form' method='post'>
					<label htmlFor='name'>Enter Your Name</label>
					<input name='name' placeholder='Enter Name' type='text' />
					<label htmlFor='email'>Enter Your Email</label>
					<input name='email' placeholder='Enter Email' type='email' />
					<lable htmlFor='message'>Your Message</lable>
					<textarea
						rows='5'
						placeholder='Enter Your Message'
						name='message'
						required
					></textarea>
					<button className='button' type='submit'>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
}
export default Contact;
