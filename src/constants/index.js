import {
  mobile,
  backend,
  writing,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cLanguage,
  java,
  hat,
  recoil, jobportal, streamVibe,nations,live,piyush,sandeep,raja
} from "../assets";
import writingIcon from '../assets/writing.png'; // Default import for images
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Poetic Engineer",
    icon: writing,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Recoil Toolkit",
    icon: recoil,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "C",
    icon: cLanguage,
  },
];

const experiences = [
  {
    title: "C Programming — First Step into the World of Code",
    company_name: "Academic Projects",
    icon: cLanguage, // Use FaCode icon or C logo
    iconBg: "#383E56",
    date: "2021-2022",
    points: [
      "Developed 10+ C programs including a directory management system using file handling",
      "Implemented core programming concepts like pointers, structures, and dynamic memory allocation",
      "Built console applications including library management system, and inventory management",
      "Optimized algorithms for better time complexity in academic projects",
      "Participated in college coding competitions using C"
    ],
  },
  {
    title: "Java & DSA Learner",
    company_name: "Problem Solving & Self-Learning",
    icon: java,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Project Lead in Java-based academic projects and Data Structures exploration.",
      "Solved 200+ DSA problems on platforms like CodeStudio and GeeksforGeeks using Java.",
      "Built foundational Java projects to strengthen OOP concepts and programming logic.",
      "Explored key data structures like arrays, linked lists, stacks, queues, trees, and graphs.",
      "Practiced algorithmic problem-solving and participated in coding contests.",
      "Built a strong base for full-stack development and real-world project building.",
    ],
  },
  
  {
    title: "Web Developer & Literary Club Lead",
    company_name: "Academic Projects & Sahitykaar: College Literary Club",
    icon: web,
    iconBg: "#383E56",
    date: "2023 - 2024",
    points: [
      "Project Lead for fashion Recommender System as a curricular academic project.",
      "Learnt,Built and deployed web applications using React.js, Node.js, MongoDB, and other modern technologies.",
      "Led and contributed to various academic projects focusing on real-world problem-solving.",
      "Explored advanced frontend and backend concepts while working on MERN stack projects.",
      "Organized and led literary and tech events as the core team member of Sahitykaar, enhancing communication and leadership skills.",
      "Collaborated with peers and faculty, ensuring impactful and successful project deliveries."
    ],
  },
  
  {
    title: "Full Stack Developer & Research Contributor",
    company_name: "Final Year - Academic Projects & Independent Work",
    icon: hat,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Leading the final year capstone project on Disease Prediction using ML & Streamlit.",
      "Authoring a research paper based on the project for potential publication.",
      "Building advanced full-stack web applications with React.js, Node.js, and MongoDB .",
      "Leading a research project focused on disease prediction using Machine Learning and deploying the system via Streamlit.",
      "Publishing a research paper on the Multiple Disease Prediction Model, emphasizing accuracy, usability, and societal impact.",
      "Actively solving Data Structures and Algorithms (DSA) problems to enhance problem-solving and coding interview skills.",
      "Collaborating with peers and mentors on innovative tech ideas and participating in development-based college activities."
    ],
  }
  
];

const testimonials = [
  {
    testimonial:
      "His consistency, deep passion for technology, and unstoppable drive to learn and build are something I truly admire.",
    name: "Sandeep yadav",
    designation: "project partner & classmate",
    company: "B.Tech CSE",
    image: sandeep,
  },
  {
    testimonial:
      "Working with Rajshree as my project lead was truly inspiring. His passion for technology, sharp problem-solving skills, and ability to think creatively always stood out.",
    name: "Piyush singh",
    designation: "Project Partner",
    company: "B.Tech CSE",
    image: piyush,
  },
  {
    testimonial:
      "Whether it’s late-night debugging or leading a project with clarity and vision, he always delivers with unmatched energy and talent.",
    name: "Raja Prasad",
    designation: "Project partner & Friend",
    company: "Personal Experience",
    image: raja, 
  }
  
];

const projects = [
  {
    name: "StreamVibe",
    description:
      "StreamVibe is a sleek and responsive web application built with React that allows users to explore and discover shows. It features a clean UI, seamless navigation, and smooth integration with an external API to fetch show data. The app ensures a great user experience across devices with Tailwind CSS for styling and Redux for state management. Followed a structured project setup .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: streamVibe,
    source_code_link: "https://github.com/rsakm/streamVibe",
    live_link: "https://streamvibebyrajshree.netlify.app/",
  },
  {
    name: "Nations navigator",
    description:
      "Built a responsive web application that provides detailed country information using the rest countries API. Implemented dark mode with theme persistence using LocalStorage.Users can search countries, filter by region, and view detailed data (population, capital, currency, languages, etc.). Fully responsive UI optimized for all screen sizes.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nations,
    source_code_link: "https://github.com/rsakm/Countries-API",
    live_link:"https://restcountriesapirs.netlify.app/"
  },
  {
    name: "Job Portal Backend",
    description:
      " Developed and deployed a Job Portal Backend with secure user authentication and authorization using JWT and middleware-based role management.Implemented RESTful APIs for job creation, updating, deletion, and fetching job statistics & documented APIs with Swagger, enabling easy integration for front-end developers and third-party applications",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobportal,
    source_code_link: "https://github.com/rsakm/Job-Portal-backend",
    live_link:"https://job-portal-backend-website.onrender.com/api-doc/",
  },
];

export { services, technologies, experiences, testimonials, projects };
