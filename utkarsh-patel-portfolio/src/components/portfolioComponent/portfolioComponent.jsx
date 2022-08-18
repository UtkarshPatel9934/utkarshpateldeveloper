import React from 'react'
// now importing the about component css file
import './portfolioComponent.css'


// importing proptfolio projects array from data folder
import {projectsContentArray} from '../../data/portfolioProjectsContent'

const portfolioComponent = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio Projects</h2>

    <div className="container portfolio__container">
      {
        projectsContentArray.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">  
                <a href={github} className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default portfolioComponent
