import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  return (
    <section id="education" className="education-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Education
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '700px' }}
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          className="card"
          style={{ padding: '25px' }}
        >
          <h3>Bachelor of Technology - CSE</h3>
          <h4 style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>Lovely Professional University, Phagwara</h4>
          <span className="tag" style={{ display: 'inline-block', marginTop: '12px' }}>CGPA: 7.70</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          className="card"
          style={{ padding: '25px' }}
        >
          <h3>Intermediate - PCM</h3>
          <h4 style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>Cambridge Innovative School, Jalandhar</h4>
          <span className="tag" style={{ display: 'inline-block', marginTop: '12px' }}>Percentage: 80%</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          className="card"
          style={{ padding: '25px' }}
        >
          <h3>Matriculation</h3>
          <h4 style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>Cambridge Innovative School, Jalandhar</h4>
          <span className="tag" style={{ display: 'inline-block', marginTop: '12px' }}>Percentage: 95%</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
