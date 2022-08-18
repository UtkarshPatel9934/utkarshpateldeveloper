import React from 'react'
import CV from '../../assets/Utkarsh Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
	{/* To add functionality to download pdf we use: download attribute tag */}
	<a href={CV} download className='btn'>Download CV</a>
	<a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA