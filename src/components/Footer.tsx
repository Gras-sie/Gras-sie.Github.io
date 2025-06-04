import React from 'react';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { navLinks, socialLinks, personalInfo } from '../data/index';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
              <Code size={28} className="text-accent-500" />
              <span>Junior Developer</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              As an emerging developer with under a year of experience, I'm passionate about learning and building user-friendly applications. 
              Eager to grow and take on new challenges in software development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconMap = {
                  'Github': Github,
                  'Linkedin': Linkedin,
                  'Mail': Mail,
                  'LeetCode': Code, // Added LeetCode using Code icon as fallback
                };
                const Icon = IconMap[link.icon as keyof typeof IconMap];

                return Icon ? (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                ) : null;
              })}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: {personalInfo.email}</li>
              <li>Phone: {personalInfo.phone}</li>
              <li>Location: {personalInfo.location}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Marius Grasman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;