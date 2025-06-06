import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/index';

const Contact = () => {
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
    <section id="contact" ref={ref} className="section">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200 px-4 py-1 rounded-full text-sm font-semibold mb-3">
              Contact
            </span>
            <h2 className="mb-6 text-primary-900 dark:text-white">Get in Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you! Feel free to reach out through any of the following channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-xl font-semibold mb-6 text-primary-900 dark:text-white">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg text-accent-700 dark:text-accent-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-primary-900 dark:text-white">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg text-accent-700 dark:text-accent-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-primary-900 dark:text-white">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent-100 dark:bg-accent-900/30 p-3 rounded-lg text-accent-700 dark:text-accent-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1 text-primary-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.location}</p>
                </div>
              </div>
              
              {/* Map or Additional Info */}
              <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm currently <span className="text-accent-600 font-medium">seeking graduate opportunities and internships</span> in software development, with a particular interest in full-stack development and AI/ML projects.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;