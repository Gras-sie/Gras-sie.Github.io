import { NavLink, Project, Skill, SocialLink } from '../types';

export const navLinks: NavLink[] = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Skills', href: '#skills' },
  { id: 4, name: 'Projects', href: '#projects' },
  { id: 5, name: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { 
    id: 1, 
    name: 'GitHub', 
    url: 'https://github.com/mariusgrasman', 
    icon: 'Github' 
  },
  { 
    id: 2, 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/marius-grasman-b2b1b7234/', 
    icon: 'Linkedin' 
  },
  { 
    id: 3, 
    name: 'Email', 
    url: 'mailto:marius-jnr@outlook.com', 
    icon: 'Mail' 
  }
];

export const skills: Skill[] = [
  { 
    id: 1, 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', 
    category: 'frontend' 
  },
  { 
    id: 2, 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', 
    category: 'frontend' 
  },
  { 
    id: 3, 
    name: 'JavaScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', 
    category: 'frontend' 
  },
  { 
    id: 4, 
    name: 'HTML5', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', 
    category: 'frontend' 
  },
  { 
    id: 5, 
    name: 'CSS3', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', 
    category: 'frontend' 
  },
  { 
    id: 6, 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', 
    category: 'backend' 
  },
  { 
    id: 7, 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', 
    category: 'backend' 
  },
  { 
    id: 8, 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', 
    category: 'backend' 
  },
  { 
    id: 9, 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', 
    category: 'tools' 
  },
  { 
    id: 10, 
    name: 'GitHub', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', 
    category: 'tools' 
  },
  { 
    id: 11, 
    name: 'VS Code', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', 
    category: 'tools' 
  },
  { 
    id: 12, 
    name: 'Tailwind CSS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', 
    category: 'frontend' 
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    demoUrl: 'https://mariusgrasman.com',
    codeUrl: 'https://github.com/mariusgrasman/portfolio'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts using the OpenWeatherMap API.',
    tags: ['React', 'APIs', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    demoUrl: 'https://weather.mariusgrasman.com',
    codeUrl: 'https://github.com/mariusgrasman/weather-dashboard'
  }
];

export const personalInfo = {
  name: 'Marius Grasman',
  title: 'Full Stack Developer',
  email: 'marius-jnr@outlook.com',
  phone: '(+27) 82 414 3629',
  location: 'Centurion, South Africa',
  bio: `I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. I specialize in building responsive, user-friendly applications using React, TypeScript, and Node.js.

Currently pursuing my studies in Computer Science, I combine academic knowledge with practical experience in software development. I'm particularly interested in web development and always eager to learn new technologies.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.`,
};