import React from 'react'
// now importing the about component css file
import './aboutComponent.css'

import ME from '../../assets/utkarsh.png'
// import ME from '../../assets/noimg.jpeg'
import {FaAward} from 'react-icons/fa'


const aboutComponent = () => {
  return (
	<section id='about'>
    <h4>Get to Know</h4>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About ME" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward id='expIcon1' className='about__icon'/>
            <FaAward id='expIcon2' className='about__icon'/>
            <h3>Experience</h3>
            <small>2+ Years Working</small>
          </article>
          <article className='about__card'>
            <FaAward id='awdIcon1' className='about__icon'/>
            <FaAward className='about__icon'/>
            <FaAward id='awdIcon3' className='about__icon'/>
            <h3>Awards</h3>
            <small>Academic Distinction</small>
          </article>
        </div>

        <p>Graduate in <strong> Internet Application and Web Development </strong> achieved <strong>4.0 GPA</strong> along with <strong> Academic Distinction Award</strong>.In addition, <strong>2+ years </strong>of knowledge in using wide range of web development skillsets to create robust web applications,and built it more secure, effective as well as achieve attractiveuser interface.</p>

        <a href="#contact" id='about__btn' className='btn btn-primary'>Get In Touch</a>
      </div>
    </div>
  </section>
  )
}

export default aboutComponent
