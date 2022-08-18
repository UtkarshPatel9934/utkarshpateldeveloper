import React from 'react'
// now importing the contact component css file
import './contactComponent.css'
import {FiMail} from 'react-icons/fi'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'


// Email Js React import Link
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contactComponent = () => {

  // for Email : Emailjs
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xmcsadi', 'template_8gsu54v', form.current, 'dfwu6uftRtScHLji5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn Message</h4>
            <h5>Utkarsh Patel Developer</h5>
            <a href="https://www.linkedin.com/in/utkarshpateldeveloper/" target="_blank" rel="noreferrer">Send Message</a>
          </article>
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mail.utkarshpatel@gmail.com</h5>
            <a href="mailto:mail.utkarshpatel@gmail.com" target="_blank" rel="noreferrer">Send Mail</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+1(647)779-8261</h5>
            <a href="https://api.whatsapp.com/send?phone=16477798261" target="_blank" rel="noreferrer">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} autocomplete="off">
          <input autocomplete="false" type="text" name='name' placeholder='Enter Your Name Here' required/>
          <input autocomplete="false" type="email" name="email" placeholder='Enter Your Mail Address' required />
          <input autocomplete="false" type="text" name="subject" placeholder='Enter Subject Here' required />
          <textarea name="message" placeholder='Type Your Message' rows="7" required></textarea>
          <button className='btn btn-primary' type='submit'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}


export default contactComponent