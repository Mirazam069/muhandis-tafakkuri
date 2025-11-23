// src/components/Hero.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImage from "../assets/bg-dark.jpg"; // rasmni shu papkaga qo'y

import "./Hero.css";

const WORDS = ["Tajriba", "Fikrlash", "Bilim", "Amaliyot"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Har 2 soniyada so'zni almashtirish
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {/* Fixed background layer */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="hero-content">
        <h1 className="hero-title">
          Muhandis Tafakkuri –
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
