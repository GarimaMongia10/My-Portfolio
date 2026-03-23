import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import profilePic from '../assets/hero_real.jpg';
import resumePdf from '../assets/resume.pdf'; 


const words = ["Cloud Engineer", "Tech Enthusiast", "Problem Solver"];

const Hero = () => {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const fullWord = words[wordIndex];

      setCurrentWord(prev =>
        isDeleting
          ? fullWord.substring(0, prev.length - 1)
          : fullWord.substring(0, prev.length + 1)
      );

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentWord === fullWord) {
        typingSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="greeting"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="name"
        >
          Garima Mongia.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="title"
        >
          Cloud Engineer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bio"
        >
          A passionate Cloud Engineer with hands-on experience in AWS, cloud infrastructure, and scalable application deployment. I enjoy designing resilient cloud solutions, automating workflows, and leveraging technologies like EC2, S3, and RDS to build efficient, secure systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="cta-group"
        >
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View My Resume</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="social-links"
        >
          <a href="https://github.com/GarimaMongia10" target="_blank" rel="noreferrer" className="social-icon"><Github /></a>
          <a href="https://www.linkedin.com/in/garima-mongia-" target="_blank" rel="noreferrer" className="social-icon"><Linkedin /></a>
          <a href="mailto:garimamongia10@gmail.com" className="social-icon"><Mail /></a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero-graphic profile-graphic"
      >
        <div className="blob"></div>
        <div className="solid-card profile-card">
          <img src={profilePic} alt="Garima Mongia" className="profile-image" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
