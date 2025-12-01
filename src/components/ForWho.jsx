// src/components/ForWho.jsx
import "./ForWho.css";
import { motion } from "framer-motion";

const people = [
  {
    tag: "Talabalar",
    title: "Arxitektura yo‘nalishida o‘qiyotganlar",
    text: "Universitetda o‘qiyotgan, ammo Universitet bilimlariga qo'shimcha ravishda real bilim va tajriba olmoqchi bo'lganlar uchun.",
  },
  {
    tag: "Junior mutaxassislar",
    title: "Arxitektor va interyer dizaynerlar",
    text: "AutoCAD, Revit yoki 3ds Max dasturlarida ishlaydigan ammo loyihalash asoslaridan hamda bino konstruksiyalaridan muayyan bilimi bo'lmaganlar uchun.",
  },
  {
    tag: "Karyera izlayotganlar",
    title: "Qurilish jarayonida texnik ilmiy bazasi bo'lmaganlar",
    text: "Qurilish jarayonlarida faoliyat yuritayotganlar, ammo ushbu faoliyatga zarur bo'lgan texnik kollej yoki oliygohni bitirmaganlar uchun.",
  },
  {
    tag: "Qurilish sohasi",
    title: "Qurilish kompaniyalarida ishlamoqchi bo'lganlar",
    text: "Qurilish - ishchi chizmalari (Geologiya, AR, KR)dagi jadvallar, spetsifikatsiyalar, markirovkalarni o'qib fahmlay olmaydiganlar uchun.",
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
            “Muhandis tafakkuri” kursi -{" "}
            <span>Arxitektura - qurilish</span> sohalarida o'z tajriba va malakasini oshirmoqchi bo'lganlar uchun eng zo'r taklifdir.
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
