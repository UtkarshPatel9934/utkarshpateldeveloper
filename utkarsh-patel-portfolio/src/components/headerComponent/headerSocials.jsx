import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const headerSocials = () => {
  return (
    <div className='header__socials'>
	<a href="https://www.linkedin.com/in/utkarshpateldeveloper/" rel="noopener"><BsLinkedin/></a>
	<a href="https://github.com/UtkarshPatel9934" rel="noopener"><BsGithub/></a>
    </div>
  )
}

export default headerSocials