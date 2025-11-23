// src/components/WhatYouLearn.jsx
import "./Curriculum.css";
import { motion } from "framer-motion";

const blocks = [
  {
    id: "01",
    title: "Muhandislik asoslari",
    text: "Yuklanishlar mantiqi, kesim va konstruktiv sxemalar, temir-beton va metall konstruksiyalar fikrlash darajasida tushuntiriladi.",
  },
  {
    id: "02",
    title: "Real loyihalar anatomiyasi",
    text: "Uy, savdo markazi va jamoat binolari misolida chizmalar ustidan jonli tahlil: nima uchun aynan shu yechim tanlangan va qanday xavflar hisobga olingan.",
  },
  {
    id: "03",
    title: "Kasbiy yo‘l va portfolio",
    text: "Portfolio tuzish, brif olish, buyurtmachi bilan muloqot, katta proyektlarga kirib borish strategiyasi va real bozor talablariga moslashish.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Curriculum() {
  return (
    <section className="learn" id="curriculum">
      <div className="learn-inner">
        {/* Chap tomoni – sarlavha */}
        <div className="learn-header">
          <p className="learn-kicker">INSIDE THE COURSE</p>
          <h2 className="learn-title">
            Bu kursda siz{" "}
            <span>chizmadan tashqarida o‘ylashni</span> o‘rganasiz.
          </h2>
          <p className="learn-subtitle">
            Maqsad – formulani yodlatish emas, balki real obyektlar ortida
            turgan muhandis tafakkurini ko‘rsatish. Har bir bo‘lim
            nazariya+amaliyot+case tahlil bilan ketadi.
          </p>
        </div>

        {/* O‘ng tomoni – timeline */}
        <div className="learn-track">
          <div className="learn-line" />

          <div className="learn-items">
            {blocks.map((b, index) => (
              <motion.article
                key={b.id}
                className="learn-item"
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}
              >
                <div className="learn-dot-wrap">
                  <div className="learn-dot" />
                  <span className="learn-id">{b.id}</span>
                </div>

                <div className="learn-text">
                  <h3 className="learn-item-title">{b.title}</h3>
                  <p className="learn-item-body">{b.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
