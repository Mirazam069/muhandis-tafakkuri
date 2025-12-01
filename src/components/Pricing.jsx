// src/components/Pricing.jsx
import "./Pricing.css";
import { motion } from "framer-motion";

const features = [
  "2 oy davom etadigan to‘liq intensiv dastur",
  "Muhandis tafakkuri bo‘yicha barcha modullar va darslar",
  "Real loyihalar bo‘yicha tahlillar va case’lar",
  "Yopiq guruhda savol-javob va mentorlik yordami",
  "Bitiruv ishi va shaxsiy feedback",
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-inner">
        {/* Header qismi */}
        <div className="pricing-header">

          <h2 className="pricing-title">
            “Muhandis tafakkuri” kursining narxi{" "}
            <span>2 oylik to‘liq dastur uchun.</span>
          </h2>
        </div>

        {/* Narx kartochkasi */}
        <motion.div
          className="pricing-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="pricing-top">
            <p className="pricing-label">Kursning to‘liq narxi</p>

            <div className="pricing-amount-wrap">
              <span className="pricing-amount">Kurs narxini bilish uchun</span>
            </div>
            <a
              href="https://t.me/username" // bu yerga o‘zingizning Telegram linkni qo‘ying
              className="pricing-cta"
            >
              Kursga yozilish
            </a>

            <p className="pricing-note">
              2 oy intensiv dastur, barcha darslar, materiallar va
              qo‘llab-quvvatlash ushbu narxga kiradi.
            </p>
          </div>

          <div className="pricing-divider" />

          <div className="pricing-bottom">
            <ul className="pricing-features">
              {features.map((item) => (
                <li key={item} className="pricing-feature-item">
                  <span className="pricing-bullet" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="pricing-extra">
               Batafsil ma’lumot va
              ro‘yxatdan o‘tish uchun pastdagi tugma orqali bog‘laning.
            </p>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
