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

  // 🔥 QIMIRLASHI UCHUN
  animationSpeed={0.8}     // 0.5–1 oralig‘i yaxshi
  interactive={true}       // sichqonchaga reaksiya bersin desang
  parallax={true}          // scroll/kursor bo‘yicha ozgina siljisin

  // 🎨 RANGSIZ (oq/kulrang) CHIZIQLAR
  linesGradient={[
    "#444444",
    "#777777",
    "#777777",
    "#777777"
  ]}

  bendRadius={5.0}
  bendStrength={-0.5}
  parallaxStrength={0.2}
  mixBlendMode="screen"
  style={{ opacity: 0.5 }}     // yoki "normal" – juda silliq bo‘lishini xohlasang
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
