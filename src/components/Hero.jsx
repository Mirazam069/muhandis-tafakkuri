import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Hero.css";
import bgVideo from "../assets/architecture-bg.mp4";

const WORDS = ["Bilim", "Amaliyot", "Nazariya", "Tajriba", "Tafakkur"]; // <-- SHU YO'Q EDI

export default function Hero() {
  const [index, setIndex] = useState(0);


  const videoRef = useRef(null);



  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <video
      ref={videoRef}
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={bgVideo} type="video/mp4" />
      Sizning brauzeringiz video tag'ni qo'llab-quvvatlamaydi.
    </video>

    {/* Qoraytiruvchi overlay */}
    <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          'Muhandis Tafakkuri'
          <br />
          Arxitektura va qurilishdagi{" "}
          <span className="hero-dynamic-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[index]}
                className="hero-dynamic-word"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {WORDS[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          ni oshiring.
        </h1>
      </div>
    </section>
  );
}
