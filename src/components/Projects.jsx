import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "Complaint Management System",
    desc: "A comprehensive Complaint Management System utilizing the MERN stack. Enables users to securely submit and track complaints online, while providing a dedicated admin panel for efficient resolution management.",
    tech: ["MERN", "HTML", "CSS"],
    github: "https://github.com/GarimaMongia10/Complaint-Management-System-"
  },
  {
    title: "College Event Management",
    desc: "A responsive platform to manage college events efficiently. Features robust workflows for event creation, updating, deletion, and participant tracking. Built with React for smooth coordination.",
    tech: ["React", "Node.js", "CSS"],
    github: "https://github.com/GarimaMongia10/College-event-management-system-"
  },
  {
    title: "Online Shopping with AWS",
    desc: "An online e-commerce application integrated with AWS services. Leveraging EC2 for deployment, S3 for media storage, and RDS for secure data handling to improve performance and scalability.",
    tech: ["AWS", "Python", "HTML/CSS"],
    github: "https://github.com/GarimaMongia10/Online-Shopping-with-AWS"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured <span className="highlight">Projects</span>
      </motion.h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -12, scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            className="project-card"
          >
            <div className="project-content">
              <div className="project-top">
                <FolderOpen className="folder-icon" size={40} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>
                  <a href="#"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
