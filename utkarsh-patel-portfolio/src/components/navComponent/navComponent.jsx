import React from 'react'
// now importing the about component css file
import './navComponent.css'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsCodeSlash} from 'react-icons/bs'


/* react use states - react hooks : for changing the active class automatic*/
import {useState} from 'react';

const navComponent = () => {

// eslint-disable-next-line react-hooks/rules-of-hooks
const [activeNav, setActiveNav] = useState('#')

  return (
    // html 5 symentic tag
    <nav>
      {/* <a href="/" className='active'><AiOutlineHome/></a> */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""}><AiOutlineBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ""}><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ""}><BsCodeSlash/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default navComponent
