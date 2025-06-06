import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Github, Linkedin, Mail, Code } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/index';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="mb-4">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 px-4 py-1 rounded-full text-sm font-semibold mb-3"
            >
              {personalInfo.title}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-primary-900 dark:text-white"
            >
              Hi, I'm Marius Grasman
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              I'm a Computer Science student passionate about building robust, efficient, and impactful software. I enjoy tackling real-world problems with code, exploring new technologies, and turning ideas into reality through full stack development and AI.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">Connect with me:</span>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = {
                  'Github': Github,
                  'Linkedin': Linkedin,
                  'Mail': Mail,
                  'LeetCode': Code, // Added LeetCode mapping
                }[link.icon];

                return (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-accent-600 dark:text-gray-400 dark:hover:text-accent-400 transition-colors"
                    aria-label={link.name}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-primary-600 rounded-xl blur-xl opacity-60 dark:opacity-40 animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden aspect-square max-w-md">
              <img                src="/Reference_Image.jpg"
                alt="Marius Grasman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400"
      >
        <span className="mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;