// src/components/ForWho.jsx
import "./ForWho.css";
import { motion } from "framer-motion";

const people = [
  {
    tag: "Talabalar",
    title: "Arxitektura yo‘nalishida o‘qiyotganlar",
    text: "Universitetda o‘qiyotgan, ammo konstruktor fikrlashini haqiqiy obyektlar misolida ko‘rmoqchi bo‘lgan talabalar.",
  },
  {
    tag: "Junior mutaxassislar",
    title: "Arxitektor va interyer dizaynerlar",
    text: "Allaqachon AutoCAD / Revit / 3ds Max bilan ishlaydigan, lekin konstruktiv qarorlarni tushunishni chuqurlashtirmoqchi bo‘lganlar.",
  },
  {
    tag: "Karyera qidirayotganlar",
    title: "Freelance va studiya yo‘lini tanlayotganlar",
    text: "Portfolio yig‘ib, yirik studiyalar yoki xorijiy mijozlar bilan ishlashni maqsad qilgan yosh mutaxassislar.",
  },
  {
    tag: "Qurilish sohasi",
    title: "Loyiha, smeta va texnik nazoratga qiziqqanlar",
    text: "Qurilish kompaniyalarida, pudratchi yoki texnik nazoratchi sifatida ishlashni rejalashtirayotganlar.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function ForWho() {
  return (
    <section className="forwho" id="for-who">
      <div className="forwho-inner">
        {/* Chap blok – sarlavha + izoh */}
        <div className="forwho-header">
          <p className="forwho-kicker">Kurs kimlar uchun?</p>
          <h2 className="forwho-title">
            Bu dastur{" "}
            <span>“chizmani chiroyli qilish” emas, fikrlashni o‘rgatish</span>{" "}
            uchun tuzilgan.
          </h2>
          <p className="forwho-text">
            Agar siz chizmoqlar ortida qanday xavfsizlik zanjiri, yuklanish
            sxemasi va konstruktiv mantiq borligini tushunishni istasangiz —
            bu kurs aynan siz uchun. Darajangiz junior bo‘lsa ham, 2–3 yil
            tajribangiz bo‘lsa ham qatnashishingiz mumkin.
          </p>
        </div>

        {/* O‘ng blok – kartochkalar */}
        <div className="forwho-grid">
          {people.map((p, index) => (
            <motion.article
              key={p.title}
              className="forwho-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <span className="forwho-tag">{p.tag}</span>
              <h3 className="forwho-card-title">{p.title}</h3>
              <p className="forwho-card-text">{p.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
