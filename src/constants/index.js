import {
  mobile,
  backend,
  creator,
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
  academic_mind_match,
  university_chatbot,
  dev_events,
  arduino_physics,
  ai_summer_school,
  entrepreneurship_exchange,
  explorer_logo,
  forage_logo,
} from "../assets";

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
    title: "AI/Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Virtual Internships",
    company_name: "The Forage & Coursera",
    icon: forage_logo,
    iconBg: "#E6DEDD",
    date: "Self-paced",
    points: [
      "JPMorgan Chase & Co: Completed hands-on tasks including project setup, Kafka integration, H2 database integration, REST API development, and controller implementation.",
      "Walmart Global Tech: Focused on advanced data structures, software architecture, relational database design, and data processing techniques.",
      "Wells Fargo: Developed data models, implemented business logic, and prepared for real-world software engineering challenges.",
    ],
  },
  {
    title: "AI Summer School Participant",
    company_name: "Al Akhawayn University (AUI)",
    icon: ai_summer_school,
    iconBg: "#E6DEDD",
    date: "August 2025",
    points: [
      "Implemented a lightweight convolutional neural network to process CT data.",
      "Applied preprocessing and feature extraction to enable real-time prediction and visualization.",
      "Completed within hackathon constraints, demonstrating rapid prototyping and AI deployment skills.",
    ],
  },
  {
    title: "Software Engineer (1st Place Winner)",
    company_name: "Entrepreneurship Exchange (WDI - UMich)",
    icon: entrepreneurship_exchange,
    iconBg: "#383E56",
    date: "Pitch Competition Selection",
    points: [
      "Lead Software Engineer for the Entrepreneurship Exchange team, developing a full-stack solution.",
      "Architected a high-performance backend using FastAPI and MongoDB.",
      "Built an immersive, animated frontend interface using React and GSAP.",
      "Awarded 1st Place in the pitch competition, validating the product's technical execution and business viability.",
    ],
  },
  {
    title: "Founder - ByteDoc",
    company_name: "UM6P Explorer Program (MIT Sandbox)",
    icon: explorer_logo,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Founded ByteDoc, an AI-powered solution designed for early full-body cancer detection.",
      "Leveraging local clinical expertise and high-performance computing to drive better patient outcomes.",
      "Selected for the prestigious UM6P Explorer Program in collaboration with MIT Sandbox to accelerate startup growth.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Elmahdi's dedication to mastering full-stack technologies like FastAPI and React during our AI projects was truly impressive. He has a unique talent for turning complex problems into elegant code.",
    name: "Dr. Sophia Chen",
    designation: "Ex Professor of CS",
    company: "AUI",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Elmahdi on the Entrepreneurship Exchange project was a game-changer. His ability to architect a robust backend while ensuring a smooth GSAP-animated UI helped us secure 1st place.",
    name: "Leo Martinez",
    designation: "Lead Partner",
    company: "WDI - UMich",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Elmahdi's work on ByteDoc shows his incredible potential as a technical founder. His vision for using AI in healthcare, combined with his HPC skills, is truly visionary.",
    name: "Sarah Johnson",
    designation: "Startup Mentor",
    company: "UM6P Explorer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Academic-Mind-Match App",
    description:
      "AI-assisted academic guidance platform that matches students’ learning needs with structured explanations and problem-solving strategies. It effectively solves the problem of personalized academic support.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "system-design",
        color: "pink-text-gradient",
      },
    ],
    image: academic_mind_match,
    source_code_link: "https://github.com/mehdi18lhmer",
  },
  {
    name: "University Chatbot (LLaMA)",
    description:
      "Fine-tuned a LLaMA-based large language model on university-specific data to deliver accurate academic and campus guidance. Demonstrates capability in NLP and AI deployment.",
    tags: [
      {
        name: "llm",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "fine-tuning",
        color: "pink-text-gradient",
      },
    ],
    image: university_chatbot,
    source_code_link: "https://github.com/mehdi18lhmer",
  },
  {
    name: "Dev Events App",
    description:
      "A modern web platform that aggregates and showcases developer events using Next.js 16. It balances the portfolio with a strong example of modern frontend and full-stack web development.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "ui-ux",
        color: "pink-text-gradient",
      },
    ],
    image: dev_events,
    source_code_link: "https://github.com/mehdi18lhmer",
  },
  {
    name: "Arduino Physics AI",
    description:
      "Combines Arduino hardware (sensors + actuators) with an AI model to analyze physical signals (magnetic field effects, motion, force) and make decisions in real time.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "physics",
        color: "pink-text-gradient",
      },
    ],
    image: arduino_physics,
    source_code_link: "https://github.com/mehdi18lhmer",
  },
];

export { services, technologies, experiences, testimonials, projects };
