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
    url: 'https://github.com/Gras-sie', 
    icon: 'Github' 
  },
  { 
    id: 2, 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/marius-grassman-8b9859296/', 
    icon: 'Linkedin' 
  },
  { 
    id: 3, 
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Gras-sie/',
    icon: 'LeetCode'
  },
  { 
    id: 4, 
    name: 'Email', 
    url: 'mailto:marius-jnr@outlook.com', 
    icon: 'Mail' 
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
  { id: 2, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
  { id: 3, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
  { id: 4, name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
  { id: 7, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
  { id: 5, name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', category: 'frontend' },
  { id: 6, name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', category: 'frontend' },
  { id: 38, name: 'EJS', icon: 'https://www.svgrepo.com/show/373574/ejs.svg', category: 'frontend' },

  // Backend
  { id: 13, name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
  { id: 14, name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
  { id: 40, name: 'Mongoose', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg', category: 'backend' },
  { id: 9, name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
  { id: 10, name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', category: 'backend' },
  { id: 11, name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', category: 'backend' },
  { id: 12, name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', category: 'backend' },

  // Database
  { id: 15, name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', category: 'database' },
  { id: 16, name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
  { id: 17, name: 'Apache Cassandra', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg', category: 'database' },

  // AI & Data Science
  { id: 18, name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', category: 'ai' },
  { id: 19, name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', category: 'ai' },
  { id: 20, name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg', category: 'ai' },
  { id: 21, name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', category: 'ai' },
  { id: 22, name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg', category: 'ai' },
  { id: 23, name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', category: 'ai' },
  { id: 24, name: 'Jupyter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', category: 'ai' },
  { id: 25, name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg', category: 'ai' },

  // Tools & Cloud
  { id: 26, name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
  { id: 27, name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', category: 'tools' },
  { id: 28, name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
  { id: 29, name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
  { id: 37, name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', category: 'tools' },
  { id: 32, name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
  { id: 36, name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'tools' },
  { id: 33, name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'tools' },
  { id: 34, name: 'Amazon S3', icon: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/aws-s3.svg', category: 'tools' },
  { id: 30, name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'tools' },
  { id: 31, name: 'Anaconda', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg', category: 'tools' }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase my projects and skills.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
    demoUrl: 'https://gras-sie.github.io/portfolio/',
    codeUrl: 'https://github.com/Gras-sie/Personal-Website'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts using the OpenWeatherMap API.',
    tags: ['React', 'APIs', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    demoUrl: 'https://gras-sie.github.io/weather-dashboard/',
    codeUrl: 'https://github.com/Gras-sie/weather-dashboard'
  }
];

export const personalInfo = {
  name: 'Marius Grasman',
  title: 'Full Stack || AI & Automation Developer',
  email: 'marius-jnr@outlook.com',
  phone: '(+27) 82 414 3629',
  location: 'Centurion, South Africa',
  bio: `I'm a passionate Full Stack Developer with a strong foundation in modern web technologies. I specialize in building responsive, user-friendly applications using React, TypeScript, and Node.js.

Currently pursuing my studies in Computer Science, I combine academic knowledge with practical experience in software development. I'm particularly interested in web development and always eager to learn new technologies.

When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.`,
};