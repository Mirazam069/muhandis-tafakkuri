// src/components/FAQ.jsx
import "./FAQ.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Kurs online emasmi?",
    a: "Yo‘q. Kurs to‘liq offline formatda o‘tiladi. Darslar auditoriyada, real chizmalar va obyektlar ustida olib boriladi. Ba’zi mashg‘ulotlarda joyning o‘ziga chiqib, konstruktsiyalarni jonli ko‘rib tahlil qilamiz.",
  },
  {
    q: "Kurs qancha davom etadi?",
    a: "O‘rtacha 2–3 oy davom etadi. Haftasiga bir necha marotaba dars bo‘ladi va har bir modul muayyan maqsadga yo‘naltirilgan. Oxirida o‘zingiz mustaqil bajargan loyiha orqali bilimlaringizni mustahkamlaysiz.",
  },
  {
    q: "Arxitektura bo‘yicha tajribam bo‘lmasa ham qatnashsam bo‘ladimi?",
    a: "Ha, qatnashsa bo‘ladi. Kurs bosqichma-bosqich tushuntiriladi, boshlang‘ich tushunchalardan murakkab konstruktiv qarorlargacha boramiz. Eng muhimi, sizda o‘rganishga qiziqish bo‘lsa kifoya.",
  },
  {
    q: "Darslar qayerda va qaysi vaqtda bo‘ladi?",
    a: "Darslar Toshkentdagi markazimizda o‘tiladi. Aniq manzil va jadval ro‘yxatdan o‘tayotganingizda yuboriladi. Guruhlar kechki va dam olish kunlariga moslab ham shakllantiriladi.",
  },
  {
    q: "Kurs tugaganda sertifikat beriladimi?",
    a: "Ha, kurs yakunida ishtirokingiz va bajargan loyihangiz asosida sertifikat beriladi. Uni portfoliongizga qo‘shishingiz va kelajakdagi ish suhbatlarida ko‘rsatishingiz mumkin.",
  },
  {
    q: "Kurs narxi qancha va to‘lovni bo‘lib to‘lash mumkinmi?",
    a: "Narx modul va oqimga qarab biroz farq qilishi mumkin, lekin oyma-oy bo‘lib to‘lash imkoni mavjud. Batafsil narx va to‘lov rejalarini ro‘yxatdan o‘tish formasi orqali aniqlab olasiz.",
  },
  {
    q: "Joylar cheklanganmi?",
    a: "Ha, har bir oqimga atigi 25–30 nafar o‘quvchi qabul qilinadi. Bu har bir ishtirokchiga individual e’tibor qaratish va darslarda savol-javob uchun yetarli vaqt ajratish imkonini beradi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <p className="faq-kicker">FAQ</p>
          <h2 className="faq-title">
            Eng ko‘p beriladigan <span>savollar</span>
          </h2>
          <p className="faq-subtitle">
            Agar quyidagi javoblar orasida o‘zingizni qiziqtirgan savolni
            topa olmasangiz, bizga Telegram orqali yozishingiz mumkin.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                className={`faq-item ${isOpen ? "open" : ""}`}
                layout
                transition={{ layout: { duration: 0.35, ease: "easeOut" } }}
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
                    transition={{ duration: 0.25 }}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer"
                      key="content"
                      initial={{ opacity: 0, scaleY: 0.85 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.9 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{ transformOrigin: "top" }}
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
