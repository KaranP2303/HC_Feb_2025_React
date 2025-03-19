import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Unauthorized.css";

export const  Unauthorized=()=> {
  const navigate = useNavigate();

  return (
    <div className="unauthorized-container">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="unauthorized-content"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaExclamationTriangle className="warning-icon" />
        </motion.div>

        <h1 className="unauthorized-title">Unauthorized Access</h1>
        <p className="unauthorized-text">You do not have permission to view this page.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/")}
          className="unauthorized-button"
        >
          Go to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
