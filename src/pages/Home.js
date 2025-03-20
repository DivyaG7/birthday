import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          🎉 Happy Birthday, My Love! 🎂
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A special surprise, just for you! 💖
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/memories" className="btn-explore">
            Let's Go!✨
          </Link>
        </motion.div>
      </div>

      {/* Falling Hearts */}
      <div className="falling-hearts">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 5}s`, /* Slower fall */
              fontSize: `${30 + Math.random() * 20}px`, /* Bigger hearts */
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
