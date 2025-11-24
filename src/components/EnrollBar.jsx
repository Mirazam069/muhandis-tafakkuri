// src/components/EnrollBar.jsx
import "./EnrollBar.css";
import { motion } from "framer-motion";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../assets/logo.png"; // <-- LOGO IMPORT

export default function EnrollBar() {
  return (
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
          onClick={() => {
            window.open("https://t.me/username", "_blank");
          }}type="button">
          <img src={logo} alt="Logo" className="enroll-logo" />
          <div className="enrollAllDiv">
            <span>Kursga yozilish</span>
          <FaTelegramPlane className="enroll-full-icon" />
          </div>
          
        </button>
      </motion.div>
    </motion.div>
  );
}
