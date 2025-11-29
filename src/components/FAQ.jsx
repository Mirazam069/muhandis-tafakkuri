import "./FAQ.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Kurs online emasmi?",
    a: "Ushbu taqdim etilayotgan kurs offlayn formatida bo'lib o'tadi.",
  },
  {
    q: "Kurs qancha vaqt davom etadi?",
    a: "Ushbu taqdim etilayotgan kurs haftasiga 3 marotaba 2 oy davom etadi.",
  },
  {
    q: "Darslar qayerda va qaysi vaqtda bo‘ladi?",
    a: "Darslar Toshkent shahri markazida bo'lib o'tadi, guruh to'planishi bilan aniq vaqt va manzili o'quvchilarga havardor qilinadi.",
  },
  {
    q: "Kurs to‘lovini bo‘lib to‘lash mumkinmi?",
    a: "Ha albatta, kurs to'lovlarni 3 qismga bo'lib tolash imkoniyati mavjud.",
  },
  {
    q: "Joylar soni cheklanganmi?",
    a: "Joylar soni cheklangan, guruh 30 kishidan iborat bo'ladi.",
  },
  {
    q: "Kursda kimlar dars beradi?",
    a: "Kursda Toshkent Arxitektura-qurilish Universitetining, Arxitektura qurilish muhandisligi, sanoat va fuqarolik qurilishi muhandisligi fakultetlarining ustozlari dars beradilar.",
  },
];

export default function FAQ() {
  // Har bir savol uchun alohida open/close holat
  const [openStates, setOpenStates] = useState(() =>
    faqs.map(() => false)
  );

  const toggle = (index) => {
    setOpenStates((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <h2 className="faq-title">
            Eng ko‘p beriladigan <span>savollar</span>
          </h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openStates[i];

            return (
              <motion.div
                key={i}
                className={`faq-item ${isOpen ? "open" : ""}`}
                layout="position"
                transition={{ layout: { duration: 0.25, ease: "easeOut" } }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  type="button"
                >
                  <span className="faq-question-text">{item.q}</span>

                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      key={`content-${i}`}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
