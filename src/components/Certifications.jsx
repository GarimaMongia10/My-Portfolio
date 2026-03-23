import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: "Infosys Springboard", issuer: "Infosys", link: "/certificates/infosys-springboard.pdf" },
  { name: "Data Structures and Algorithms", issuer: "NeoColab", link: "/certificates/dsa-bootcamp.pdf" },
  { name: "Java Programming", issuer: "NeoColab", link: "/certificates/java-programming.pdf" },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS", link: "/certificates/aws-cloud-foundations.pdf" },
  { name: "Object Oriented Programming", issuer: "NeoColab", link: "/certificates/oop-neocolab.pdf" },
  { name: "Crash Course on Python", issuer: "Google", link: "/certificates/python-google.pdf" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", link: "/certificates/responsive-web-design.pdf" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Certifications
      </motion.h2>

      <div className="cert-grid">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ x: 10, y: -5, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
            viewport={{ amount: 0.2 }}
            transition={{ delay: index * 0.12, duration: 0.8, type: "spring", stiffness: 100, damping: 12 }}
            className="card cert-card"
          >
            <div className="cert-card-icon">
              <Award size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 className="cert-name">{cert.name}</h4>
              <p className="cert-issuer">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                <ExternalLink size={13} style={{ marginRight: '5px' }} />
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
