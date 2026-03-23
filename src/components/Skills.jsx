import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, PenTool, Brain } from 'lucide-react';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12
      } 
    }
  };

  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        My <span className="highlight">Skills</span>
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="skills-container"
      >
        <motion.div variants={itemVariants} whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }} className="skill-category">
          <div className="category-header">
            <Laptop className="skill-icon" size={32} />
            <h3>Languages</h3>
          </div>
          <div className="tags">
            {['C++', 'Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }} className="skill-category">
          <div className="category-header">
            <PenTool className="skill-icon" size={32} />
            <h3>Tools/Platforms</h3>
          </div>
          <div className="tags">
            {['Ubuntu', 'Linux', 'AWS', 'Git', 'MERN Stack'].map(tech => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }} className="skill-category">
          <div className="category-header">
            <Brain className="skill-icon" size={32} />
            <h3>Soft Skills</h3>
          </div>
          <div className="tags">
            {['Problem-Solving', 'Conceptual Learner', 'Analytical Thinker', 'Collaborative'].map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
