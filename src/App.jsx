import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Architects from './components/Architects'
import Curriculum from './components/Curriculum'
import FAQ from './components/FAQ'
import EnrollBar from './components/EnrollBar'
import Marquee from './components/Marquee'

function App() {

  return (

    <div>
      <div className="page-bg"></div>
      <Marquee/>
      <Hero/>
      <Architects/>
      <Curriculum/>
      <FAQ/>
      <EnrollBar/>
    </div>
  )
}

export default App
