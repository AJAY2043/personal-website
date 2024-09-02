import React from 'react'
import NavigationBar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
