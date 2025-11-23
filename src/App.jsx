import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Architects from './components/Architects'
import Curriculum from './components/Curriculum'
import FAQ from './components/FAQ'
import EnrollBar from './components/EnrollBar'
import Marquee from './components/Marquee'
import FloatingLines from "./components/FloatingLines";

function App() {

  return (

    <div>
       <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[10, 15, 20]}
        lineDistance={[8, 6, 4]}
        animationSpeed={0}      // 0 qilsa – TO‘LIQ STATIC
        interactive={false}     // sichqoncha ta'sirini o‘chirib qo‘yamiz
        parallax={false}        // scroll bo'yicha siljish bo‘lmaydi
        bendRadius={5.0}
        bendStrength={-0.5}
        mixBlendMode="normal"   // 'screen' emas, oddiy fon bo‘lsin
        linesGradient={["#050505", "#111111", "#222222"]} // iliq qorong'i gradient (xohlasang o'zgartirasan)
      />

      <div>
        <Marquee/>
        <Hero/>
        <Architects/>
        <Curriculum/>
        <FAQ/>
        <EnrollBar/>
        </div>
      
    </div>
  )
}

export default App
