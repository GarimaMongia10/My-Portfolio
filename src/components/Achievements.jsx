import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Trophy, Users, Star } from 'lucide-react';

const achievementsData = [
  {
    icon: <FileText size={32} />,
    title: "Research Paper",
    desc: "Successfully published research work in an academic journal, demonstrating strong analytical and writing skills."
  },
  {
    icon: <Trophy size={32} />,
    title: "Hackathon",
    desc: "Progressed to the 2nd round in a 3-stage hackathon, displaying creativity, technical ability, and collaborative skills."
  },
  {
    icon: <Users size={32} />,
    title: "Class Representative",
    desc: "Elected as Class Representative twice for demonstrating high academic performance among 60+ students."
  },
  {
    icon: <Star size={32} />,
    title: "Summer Training",
    desc: "Completed my summer training internship with an excellent grade, demonstrating strong learning performance."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Awards & <span className="highlight">Achievements</span>
      </motion.h2>

      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -15, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            className="achievement-card"
          >
            <div className="ach-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
