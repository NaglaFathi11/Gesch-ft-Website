import { useEffect } from "react";
import { motion } from "framer-motion";
import "./SuccessfulMessage.css";

function SuccessfulMessage({ successfulMessage, updateSuccessfulMessage }) {
  useEffect(() => {
    if (successfulMessage) {
      const timer = setTimeout(() => {
        updateSuccessfulMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successfulMessage, updateSuccessfulMessage]);

  return (
    <>
      {successfulMessage ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="successfulMessage"
        >
          <img src="/assets/contact/checked.webp" alt="checked" />
          <h3>Thank you!</h3>
          <p>Your submission has been sent.</p>
        </motion.div>
      ) : null}
    </>
  );
}

export default SuccessfulMessage;
