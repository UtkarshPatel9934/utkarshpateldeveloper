
import React from 'react'
// now importing the about component css file
import './headerComponent.css'

import CTA from './CTA'
import ME from '../../assets/utkarsh.png'
import HeaderSocials from './headerSocials'

const headerComponent = () => {
  return (
    /* Symentic tags */
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Utkarsh Patel</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" id='my__image'/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default headerComponent
