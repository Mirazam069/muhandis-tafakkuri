// src/components/Marquee.jsx
import "./Marquee.css";

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-inner">
        <div className="marquee-track">
          <span className="marquee-text"> Muhandis tafakkuri • Muhandis tafakkuri • Muhandis tafakkuri • </span>
          <span className="marquee-text"> Muhandis tafakkuri • Muhandis tafakkuri • Muhandis tafakkuri • </span>
        </div>
      </div>
    </section>
  );
}
