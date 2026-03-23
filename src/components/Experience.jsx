import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="experience" className="experience-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Professional <span className="highlight">Experience</span>
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          className="card"
          style={{ padding: '30px' }}
        >
          <div className="timeline-header">
            <h3>Summer Bootcamp Intern</h3>
          </div>
          <h4 className="company" style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>CodeQuest</h4>
          <ul className="duties">
            <li>Developed an interactive web application that computes the Next Greater Element using Stack data structures, indicating efficient algorithm design and front-end implementation.</li>
            <li>Integrated step-by-step algorithm visualization, which enhanced learning outcomes and helped exploring data structures intuitively.</li>
            <li>Achieved an efficient O(n) solution for the Next Greater Element problem.</li>
          </ul>
          <div className="tags" style={{ marginTop: '20px' }}>
            <span className="tag">Python</span><span className="tag">C++</span><span className="tag">Data Structures</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
