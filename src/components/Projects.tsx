import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

const Projects = () => {
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
    <section id="projects" ref={ref} className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 px-4 py-1 rounded-full text-sm font-semibold mb-3">
              Projects
            </span>
            <h2 className="mb-6 text-primary-900 dark:text-white">My Recent Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each project represents different challenges and solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden"
              >
                {/* Project Image with Overlay */}
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-bold text-xl">{project.title}</h3>
                        <div className="flex gap-3">
                          {project.codeUrl && (
                            <a 
                              href={project.codeUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-accent-400 transition-colors"
                              aria-label="View source code"
                            >
                              <Github size={20} />
                            </a>
                          )}
                          {project.demoUrl && (
                            <a 
                              href={project.demoUrl} 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-accent-400 transition-colors"
                              aria-label="View live demo"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a 
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-outline inline-flex items-center gap-2"
            >
              View More on GitHub <Github size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;