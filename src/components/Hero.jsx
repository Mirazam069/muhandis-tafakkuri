// src/components/Hero.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../components/Hero.css";
import bgVideoDesktop from "../assets/architecture-bg.mp4";
import bgVideoMobile from "../assets/arch-bg2.mp4"; // 🔥 2-video

const WORDS = ["Bilim", "Amaliyot", "Nazariya", "Tajriba", "Tafakkur"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // So'zlarni almashtirish
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Ekran kengligini kuzatish
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 768px)");

    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Dastlab bir marta ishlatamiz
    handleChange(mq);

    // Keyin o'zgarishlarni kuzatamiz
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const videoSrc = isMobile ? bgVideoMobile : bgVideoDesktop;

  return (
    <section className="hero">
      <video
        key={videoSrc}           // src o'zgarganda video qayta mount bo'ladi
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        src={videoSrc}           // 🔥 src to'g'ridan-to'g'ri shu yerda
      >
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
