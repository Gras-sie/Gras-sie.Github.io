import React from 'react';
import { Code } from 'lucide-react';
import { navLinks, socialLinks } from '../data';

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
              <span>Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional, and user-friendly applications is my passion. 
              I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const IconComponent = {
                  'Github': 'Github',
                  'Linkedin': 'Linkedin',
                  'Twitter': 'Twitter',
                  'Mail': 'Mail',
                }[link.icon];
                
                // Import the right icon dynamically
                const DynamicIcon = React.lazy(() => 
                  import('lucide-react').then(mod => ({ 
                    default: mod[IconComponent as keyof typeof import('lucide-react')] 
                  }))
                );

                return (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-accent-400 transition-colors"
                    aria-label={link.name}
                  >
                    <React.Suspense fallback={<div className="w-5 h-5" />}>
                      <DynamicIcon size={20} />
                    </React.Suspense>
                  </a>
                );
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
              <li>Email: your.email@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Location: City, Country</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;