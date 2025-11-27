// src/components/LastCall.jsx
import "./LastCall.css";
import { FiUsers, FiCalendar, FiPlayCircle, FiPhoneCall } from "react-icons/fi";

export default function LastCall() {
  return (
    <section className="lc" id="last-call">
      <div className="lc-inner">
        {/* Yuqori qator: sarlavha */}
        <div className="lc-header">
          <h2 className="lc-title">
            “Muhandislik tafakkuri” kursining umumiy ma'lumotlari
          </h2>
        </div>

        {/* Uchta asosiy fakt – bitta qatorda (yoki mobilga tushganda ustma-ust) */}
        <div className="lc-facts">
          <div className="lc-fact">
            <div className="lc-fact-icon">
              <FiUsers />
            </div>
            <div>
              <p className="lc-fact-label">Yopiq format</p>
              <p className="lc-fact-text">
                Guruh atigi <strong>25 nafar</strong> ishtirokchidan iborat.
              </p>
            </div>
          </div>

          <div className="lc-fact">
            <div className="lc-fact-icon">
              <FiCalendar />
            </div>
            <div>
              <p className="lc-fact-label">Darslar jadvali</p>
              <p className="lc-fact-text">
                <strong>Haftada 3 marta</strong>, jami <strong>2 oy</strong> davom etadi.
              </p>
            </div>
          </div>

          <div className="lc-fact">
            <div className="lc-fact-icon">
              <FiPlayCircle />
            </div>
            <div>
              <p className="lc-fact-label">Start</p>
              <p className="lc-fact-text">
                Guruh to‘lishi bilan darslar{" "}
                <strong>darhol boshlanadi</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Pastki “strip” – joylar chegara + telefonlar */}
        <div className="lc-strip">
          <div className="lc-strip-left">
            <p className="lc-strip-main">
              Shoshiling, <span>joylar soni chegaralangan.</span>
            </p>
            <p className="lc-strip-sub">
              Savol va ro‘yxatdan o‘tish uchun qo‘ng‘iroq qiling.
            </p>
          </div>

          <div className="lc-strip-phones">
            <div className="lc-phone-row">
              <FiPhoneCall className="lc-phone-icon" />
              <a href="tel:+998887001001" className="lc-phone">
                +998 88 700 10 01
              </a>
            </div>
            <div className="lc-phone-row">
              <FiPhoneCall className="lc-phone-icon" />
              <a href="tel:+998974487666" className="lc-phone">
                +998 97 448 76 66
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
