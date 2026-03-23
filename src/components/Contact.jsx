import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.div 
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
        className="contact-box glass-panel"
      >
        <h2>Get In Touch</h2>
        <p>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-details">
          <a href="mailto:garimamongia10@gmail.com" className="contact-item">
            <Mail className="contact-icon" /> garimamongia10@gmail.com
          </a>
          <a href="tel:+917681900170" className="contact-item">
            <Phone className="contact-icon" /> +91 7681900170
          </a>
        </div>
        
        <a href="mailto:garimamongia10@gmail.com" className="btn btn-primary lg">Say Hello</a>
      </motion.div>
    </section>
  );
};

export default Contact;
