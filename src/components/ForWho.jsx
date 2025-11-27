// src/components/ForWho.jsx
import "./ForWho.css";
import { motion } from "framer-motion";

const people = [
  {
    tag: "Talabalar",
    title: "Arxitektura yo‘nalishida o‘qiyotganlar",
    text: "Universitetda o‘qiyotgan, lekin konstruktiv fikrlashni real obyektlar misolida ko‘rishni istaydigan talabalar.",
  },
  {
    tag: "Junior mutaxassislar",
    title: "Arxitektor va interyer dizaynerlar",
    text: "AutoCAD, Revit yoki 3ds Max bilan ishlaydigan, lekin yuklanishlar va konstruksiyalar mantiqini chuqurlashtirmoqchi bo‘lganlar.",
  },
  {
    tag: "Karyera izlayotganlar",
    title: "Studiya yoki freelancer bo‘lishni xohlaganlar",
    text: "Portfolio yig‘ib, yirik studiyalar yoki chet el mijozlari bilan ishlashni maqsad qilgan yosh mutaxassislar.",
  },
  {
    tag: "Qurilish sohasi",
    title: "Qurilish kompaniyalarida ishlamoqchilar",
    text: "Loyiha, smeta, texnik nazorat yoki qurilish menejmenti yo‘nalishida mustahkam asosga ega bo‘lishni istaganlar.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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
          <span className="forwho-badge">Kurs kimlar uchun?</span>

          <h2 className="forwho-title">
            “Muhandis tafakkuri” kursi{" "}
            <span>qurilishga jiddiy qaraydiganlar</span> uchun yaratilgan.
          </h2>
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
