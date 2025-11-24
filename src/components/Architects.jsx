import "./Architects.css";
import { motion } from "framer-motion";
import arch1 from '../assets/arch-1.JPG'
import arch2 from '../assets/arch-2.JPG'
import arch3 from '../assets/arch-3.JPG'

const architects = [
  {
    id: 1,
    name: "AZIZOV FARHOD",
    role: "Lead Structural Architect",
    exp: "20+ ish tajribasi",
    bio: "Ko‘p qavatli turar-joy va sanoat inshootlarida yuzlab loyihalar muallifi. Amaliy konstruktiv yechimlar bo‘yicha yetakchi mutaxassis.",
    photo: arch1,
  },
  {
    id: 2,
    name: "Madina Rasulova",
    role: "Concept & Planning Architect",
    exp: "15+ years experience",
    bio: "Master reja, landshaft va ichki makonlarni bir butun tizim sifatida ko‘rish bo‘yicha katta tajribaga ega. Shaharsozlik yondashuvini o‘rgatadi.",
    photo: arch2,
  },
  {
    id: 3,
    name: "Javlon Akhmedov",
    role: "Construction Technology Expert",
    exp: "18+ years experience",
    bio: "Qurilish texnologiyalari, materiallar va obyektni noldan ekspluatatsiyaga topshirishgacha bo‘lgan jarayon bo‘yicha chuqur bilimga ega.",
    photo: arch3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 },
  }),
};

export default function Architects() {
  return (
    <section className="architects" id="architects">
      <div className="architects-inner">
        <div className="architects-header">
          <p className="architects-kicker">43 YILLIK SOF BILIMLAR</p>
          <h2 className="architects-title">
            3 arxitektorning umumiy bilimlari
          </h2>
          <p className="architects-subtitle">
            Kursda siz nazariya emas, balki yillar davomida sinovdan o‘tgan real
            obyektlar va amaliy qarorlar ortida turgan fikrlash uslubini o‘rganasiz.
          </p>
        </div>

        <div className="architects-grid">
          {architects.map((arch, index) => (
            <motion.article
              key={arch.id}
              className="arch-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="arch-top">
                <div className="arch-avatar-wrap">
                  <div
                    className="arch-avatar"
                    style={{ backgroundImage: `url(${arch.photo})` }}
                  />
                </div>
                <div className="arch-meta">
                  <h3 className="arch-name">{arch.name}</h3>
                  <p className="arch-role">{arch.role}</p>
                  <p className="arch-exp">{arch.exp}</p>
                </div>
              </div>

              <p className="arch-bio">{arch.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
