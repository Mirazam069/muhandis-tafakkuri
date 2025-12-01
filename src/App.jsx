import React from 'react'
import './App.css'
import Hero from './components/Hero'
import ForWho from "./components/ForWho";
import Architects from './components/Architects'
import Curriculum from './components/Curriculum'
import Pricing from "./components/Pricing";
import FAQ from './components/FAQ'
import LastCall from './components/LastCall'
import EnrollBar from './components/EnrollBar'
import FloatingLines from "./components/FloatingLines";

function App() {

  return (

    <div>
       {/* <FloatingLines
  enabledWaves={["top", "middle", "bottom"]}
  lineCount={[10, 15, 20]}
  lineDistance={[8, 6, 4]}

  animationSpeed={0.8}      // 3 juda tez, 0.6–1 oraliq yoqimli
  interactive={true}
  parallax={true}
  bendRadius={5.0}
  bendStrength={-0.5}
  parallaxStrength={0.25}

  // 🔥 ReactBits’ga o‘xshash ko‘k–binafsha–pushti gradient
  linesGradient={[
    "#3b82f6", // yorqin ko‘k
    "#6366f1", // indigo
    "#8b5cf6", // binafsha
    "#ec4899"  // neon pushti
  ]}

  mixBlendMode="screen"
  // style={{ opacity: 0.8 }}   // biroz shaffof, lekin yorqin
/> */}



      <div>

        <Hero/>
        <ForWho/>
        <Architects/>
        <Curriculum/>
        <Pricing /> 
        <FAQ/>
        <LastCall/>
        <EnrollBar/>
        </div>
      
    </div>
  )
}

export default App
