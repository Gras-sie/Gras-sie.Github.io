import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Calendar, Download } from 'lucide-react';
import { personalInfo } from '../data/index';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" ref={ref} className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 px-4 py-1 rounded-full text-sm font-semibold mb-3">
              About Me
            </span>
            <h2 className="mb-6 text-primary-900 dark:text-white">Get to know me better</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I craft digital experiences that combine technical excellence with aesthetic appeal. Learn more about my background, skills, and approach to development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white">My Background</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I am a passionate and driven Computer Science student at Belgium Campus ITversity, with a strong foundation in software engineering, web development, and data science. My academic journey has equipped me with hands-on experience in a variety of programming languages and frameworks, including JavaScript, TypeScript, React, Node.js, Python, and C#.
                </p>
                <p>
                  I have a keen interest in full stack development and artificial intelligence, and I enjoy building innovative solutions that solve real-world problems. My experience includes working on personal and academic projects, collaborating in teams, and continuously learning new technologies to stay ahead in the fast-evolving tech landscape.
                </p>
                <p>
                  I am always eager to connect with like-minded professionals, contribute to open-source projects, and take on new challenges that foster both personal and professional growth.
                </p>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Download CV <Download size={16} />
                </a>
              </div>
            </motion.div>

            {/* Personal Info Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-primary-900 dark:text-white">Personal Information</h3>
              
              <div className="card p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-white">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-white">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-primary-900 dark:text-white">Experience</h4>
                    <p className="text-gray-600 dark:text-gray-300">1 Year</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;