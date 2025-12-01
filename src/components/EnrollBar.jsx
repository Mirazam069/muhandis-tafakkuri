// src/components/EnrollBar.jsx
import "./EnrollBar.css";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.png"; // <-- LOGO IMPORT

export default function EnrollBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className="enroll-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="enroll-full-box"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <button
            className="enroll-full-btn"
            type="button"
            onClick={handleOpenModal}
          >
            <img src={logo} alt="Logo" className="enroll-logo" />
            <div className="enrollAllDiv">
              <span>Kursga yozilish</span>
              <FaTelegramPlane className="enroll-full-icon" />
            </div>
          </button>
        </motion.div>
      </motion.div>

      {/* 🔹 To'liq ekran shaffof modal */}
      {isOpen && (
        <div className="enroll-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="enroll-modal"
            onClick={(e) => e.stopPropagation()} // ichkariga bosganda yopilib ketmasin
          >
            <button
              type="button"
              className="enroll-modal-close"
              onClick={handleCloseModal}
            >
              ×
            </button>

            <h3 className="enroll-modal-title">Biz bilan bog‘laning</h3>

            <a
              href="https://t.me/username"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-modal-telegram"
            >
              <FaTelegramPlane className="enroll-modal-telegram-icon" />
              <span>Telegramga yozish</span>
            </a>

            <div className="enroll-modal-phone">
              <span>Yoki qo‘ng‘iroq qiling:</span>
              <a href="tel:+998887001001" className="enroll-modal-phone-link">
                +998 88 700 10 01
              </a>
              <a href="tel:+998974487666" className="enroll-modal-phone-link">
                +998 97 448 76 66
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
