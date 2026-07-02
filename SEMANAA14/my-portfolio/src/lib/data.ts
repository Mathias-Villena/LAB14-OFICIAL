import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'stockella',
    title: 'Stockella (Tesis)',
    description: 'Sistema inteligente de gestión de almacén e inventarios para PYMEs desarrollado como proyecto de tesis. Integra reconocimiento automático de productos mediante visión artificial y lectura de códigos de barras, una app móvil multiplataforma en Flutter y un portal web de administración.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Next.js', 'Flutter', 'Python', 'OpenCV', 'AWS', 'PostgreSQL', 'Machine Learning'],
    demoUrl: 'https://stockella.vercel.app/login',
    githubUrl: 'https://github.com/Mathias-Villena',
    apkUrl: '/stockella.apk',
    featured: true,
  },
  {
    slug: 'pawme',
    title: 'Pawme',
    description: 'Plataforma para la adopción y búsqueda de mascotas sin hogar. Conecta a adoptantes interesados con albergues y veterinarias, integrando mapas de ubicación y filtros inteligentes para facilitar la adopción responsable.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Swiper', 'AOS'],
    demoUrl: 'https://pawme-eta.vercel.app/',
    githubUrl: 'https://github.com/Mathias-Villena',
    featured: true,
  },
  {
    slug: 'lab11-node-dashboard',
    title: 'Lab11 Node Dashboard',
    description: 'Dashboard full stack interactivo para el control administrativo de operaciones. Ofrece monitoreo en tiempo real, gestión completa de accesos y roles de usuario, y visualización de métricas mediante gráficos dinámicos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Node.js', 'Express'],
    demoUrl: 'https://lab11-node.vercel.app/dashboard',
    githubUrl: 'https://github.com/Mathias-Villena',
    featured: true,
  },
  {
    slug: 'estilo-ya',
    title: 'Estilo Ya',
    description: 'Plataforma e-commerce multiplataforma académica. Cuenta con un backend distribuido usando Spring Boot para servicios de usuario y Django/Python para el portal de administración, una interfaz web en React y una aplicación móvil nativa en Kotlin.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1000&auto=format&fit=crop',
    technologies: ['React', 'Kotlin Nativo', 'Spring Boot', 'Django', 'Python', 'PostgreSQL'],
    demoUrl: '',
    githubUrl: 'https://github.com/Mathias-Villena',
    featured: false,
  }
];

export const personalInfo = {
  name: 'Mathias Josue Villena Gomez',
  title: 'Software Developer | Python · Automatización · IA Aplicada',
  description: 'Egresado de Diseño y Desarrollo de Software de TECSUP. Especializado en la automatización de procesos empresariales con Python y el desarrollo de aplicaciones fullstack modernas. Apasionado por la inteligencia artificial aplicada y el análisis de datos.',
  email: 'josuemathias03@gmail.com',
  phone: '934 841 065',
  location: 'San Juan de Lurigancho, Lima',
  github: 'https://github.com/Mathias-Villena',
  linkedin: 'https://www.linkedin.com/in/mathias-villena16/',
  siteUrl: 'http://localhost:3000',
  avatar: '/avatar.jpeg',
};

