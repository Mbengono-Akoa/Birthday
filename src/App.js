import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const name = "NGOUFFO TCHIOPBEUA DANIELLE";
  const age = 24;
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHearts(true), 1000);
  }, []);

  return (
    <div className="container">
      {showHearts && (
        <div className="hearts">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="heart"
              style={{
                top: Math.random() * 100 + "vh",
                left: Math.random() * 100 + "vw",
              }}
              animate={{
                y: [0, -200],
                opacity: [1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      )}

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Happy Birthday 🎉 My Love ❤️
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {name}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        Wishing you a magical {age}th birthday filled with endless love and joy! 💕
      </motion.p>

      <motion.div
        className="love-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        "Danielle, you are my sunshine, my heartbeat, and my greatest blessing.  
        On this special day, I just want you to know how deeply I love you.  
        May this birthday be as amazing as you are, my Queen! ❤️🎂"
      </motion.div>
    </div>
  );
}
