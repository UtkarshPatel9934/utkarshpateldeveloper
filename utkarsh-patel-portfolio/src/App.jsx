// we name it with .jsx because we are going to use Emmet for ShortCut 
// if we add .js extention it is difficult to use the shortcut in it


// to generate this template we can use simply : rafce
import React from 'react'

// imp the  headerComponent
import Header from './components/headerComponent/headerComponent'

// imp the  headerComponent
import Nav from './components/navComponent/navComponent'

// imp the  headerComponent
import About from './components/aboutComponent/aboutComponent'

// imp the  headerComponent
import Experience from './components/expComponent/expComponent'

// imp the  headerComponent
import Services from './components/serviceComponent/serviceComponent'

// imp the  headerComponent
import Portfolio from './components/portfolioComponent/portfolioComponent'

// imp the  headerComponent
import Testimonials from './components/testimonialComponent/testimonialComponent'

// imp the  headerComponent
import Contact from './components/contactComponent/contactComponent'

// imp the  headerComponent
import Footer from './components/footerComponent/footerComponent'


const App = () => {
  return (
// jsx Fragment : <> </>
    <>
	<Header></Header>
	<Nav></Nav>
	<About></About>
	<Experience></Experience>
	<Services></Services>
	<Portfolio></Portfolio>
	<Testimonials></Testimonials>
	<Contact></Contact>
	<Footer></Footer>
    </>
  )
}

export default App
