import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Projects from './components/Projects'
const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Services/>
   <Contact/>
   </>
  )
}

export default App
