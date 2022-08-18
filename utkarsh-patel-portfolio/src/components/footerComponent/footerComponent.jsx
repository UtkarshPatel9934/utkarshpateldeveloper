
import React from 'react'
// now importing the about component css file
import './footerComponent.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const footerComponent = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Utkarsh Patel</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/utkarshpateldeveloper/" rel="noopener"><BsLinkedin/></a>
        <a href="https://github.com/UtkarshPatel9934" rel="noopener"><BsGithub/></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; Utkarsh Patel. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footerComponent
