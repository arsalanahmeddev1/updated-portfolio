
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  mysql,
  express,
  aws,
  mui,

  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  astro,
  bootstrap,
  laravel,
} from '../assets'


// Import Tekisky separately
import legacyTech from "../assets/company/legacy-tech.png";


export const navLinks = [


  {
    id: "about",
    title: "About",

  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Astro JS",
    icon: astro,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "MySql",
    icon: mysql,
  },

    {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "Sr Frontend React Developer",
    company_name: "Legacy tech",
    icon: legacyTech,
    iconBg: "#383E56",
    date: "April 2025 - present",
    points: [
      "Developing and maintaining web applications using React and Laravel via Inertia.js.",
      "Using Ai to speed up the development Experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Arsalan Ahmed proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Arsalan Ahmed does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Arsalan Ahmed optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Khryslis",
    link: 'https://khrylis-social.vercel.app/',
    description:
      "khrislis is a social media platform where users can share videos and stream live videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "Inertia",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },

    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "ONE OFF AUTOS",
    link: 'https://one-off-autos-beta.vercel.app/',
    description:
      "One Off Autos is a car dealership website where users can browse and purchase cars.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
      {
        name: "Inertia",
        color: "pink-text-gradient",
      },
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Diginsy",
    link: 'https://diginsy.com/',
    description:
      "Diginsy Web",
      
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Inertia",
        color: "white-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "Grooves",
    link: 'https://groves-web-app.vercel.app/',
    description:
      "Grooves Web",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design Foxy",
    link: 'https://designfoxy.com/',
    description:
      "Design Foxy Web",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "white-text-gradient",
      },
      {
        name: "Js",
        color: "white-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/",
  },
  {
    name: "Design Sketchers",
    link: 'https://designsketchers.com/',
    description:
      "Design Sketchers Web",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "white-text-gradient",
      },
      {
        name: "Js",
        color: "white-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
