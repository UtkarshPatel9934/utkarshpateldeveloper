
import React from 'react'
// now importing the about component css file
import './serviceComponent.css'

import {BiCheck} from 'react-icons/bi'

const serviceComponent = () => {
  return (
    <section id='services'>
      <h4>What I Offer?</h4>
      <h2>Services</h2>

      <div className="container services__container">
        <acticle className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will help in creating Logos using Adobe Photoshop and Adobe Illustrator.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Will help in creating design or layout in the Figma for Website or Web Applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will help in creating custom themes or colour palettes for Websites or Web Applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Will help in creating Clickable Prototypes or Mock Models for Websites or Web Applications using Figma or Balsamiq.</p>
            </li>
          </ul>
        </acticle>



        <acticle className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will help in creating the basic structure of the Website or Web Application from scratch.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design the structure of the website using CSS3 as well as SCSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I will help in adding User-Interactivity to the website using JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Will have the ability to use JavaScript frameworks such as Angular and React.js to create a robust website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manage the website content using CMS (Content Management Solution) such as Contentful, Sanity.io.</p>
            </li>
          </ul>
        </acticle>
        
      </div>

    </section>
  )
}

export default serviceComponent
