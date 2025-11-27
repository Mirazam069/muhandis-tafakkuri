// src/components/WhatYouLearn.jsx
import "./Curriculum.css";
import { motion } from "framer-motion";

const blocks = [
  {
    id: "01",
    title: "Geologik xulosalar va chizmalar",
    text: "Geologiya xulosalari, me'moriy hamda konstruktiv chizmalarni professional darajada o‘qish, fahmlash va ular bilan ishlash.",
  },
  {
    id: "02",
    title: "Bino va inshootlar sxemalari",
    text: "Bino va inshootlarning sxemaviy turlari va ularni qo‘llash joylari.",
  },
  {
    id: "03",
    title: "Temir-beton konstruksiyalar",
    text: "Temir-beton konstruksiyalarining asosiy turlari, ish prinsipi va ularni to‘g‘ri qo‘llash tamoyillari.",
  },
  {
    id: "04",
    title: "Qurilish ashyolari va xossalari",
    text: "Qurilish ashyolari va ularning fizikaviy xossalari, yuk ko‘tarish qobiliyati hamda material tanlash mezonlari.",
  },
  {
    id: "05",
    title: "Qurilish jarayoni texnologiyasi",
    text: "Qurilish jarayoni texnologiyasi va uning samarali, xavfsiz hamda bosqichma-bosqich tatbiqi.",
  },
  {
    id: "06",
    title: "Muammolar va yechimlar",
    text: "Qurilish yoki ta'mir jarayonidagi muammolarni aniqlash va ularni bartaraf etish yo‘l hamda uslublari.",
  },
  {
    id: "07",
    title: "Qurilish biznesi asoslari",
    text: "Qurilish yoki qurilish xizmatlari biznesini tashkil qilish va uni barqaror rivojlantirishning asosiy prinsiplarini o‘rganasiz.",
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
          <span className="learn-badge">2 oylik intensiv</span>

          <h2 className="learn-title">
            Ushbu{" "}
            <span>2 oy davom etadigan intensiv kurs</span>
            da siz quyidagilarni o‘rganasiz:
          </h2>
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
