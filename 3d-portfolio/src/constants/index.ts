import {
  andy,
  backend,
  ben,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  opn,
  quotedeck,
  reactjs,
  redux,
  seba,
  tailwind,
  tao,
  typescript,
  web,
  wiiizy,
  zipmex,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mentor",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
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

export interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: IExperience[] = [
  {
    title: "Full Stack Engineer",
    company_name: "Opn",
    icon: opn,
    iconBg: "#E6DEDD",
    date: "March 2021 - April 2022",
    points: [
      "Streamlined user communication and platform security by planning and implementing full-stack features including automated email delivery flow, admin-user interaction, and user authentication using Elixir and React.",
      "Bolstered inter-server communication security by developing server-to-server endpoint authentication using JWT access tokens and hash encrypted client secrets.",
      "Ensured user data protection and privacy by implementing auto-logoff prevention across browser tabs with local storage and session management in React.",
      "Contributed to a 25% increase in mini-app submissions by implementing an intuitive UX/UI flow for the software developer portal.",
      "Improved user convenience during authentication processes by enabling OTP SMS autofill functionality using webOTP API in React.",
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Zipmex",
    icon: zipmex,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Optimized website performance by implementing strategic lazy loading and optimally placed API requests, reducing First Contentful Paint by 30%, Largest Contentful Paint by 25%, Total Blocking Time by 40%, and Cumulative Layout Shift by 35%.",
      "Enhanced user experience by developing and launching API Trading Key management for automated cryptocurrency trading, contributing to an alternate gateway for professional users seeking advanced trading options.",
      "Collaborated with the design team to develop fully responsive mobile web pages, resulting in a 40% increase in mobile user engagement and a 25% improvement in user satisfaction.",
      "Streamlined user authentication by designing a custom OTP input component for 2FA authorization flows using React and improved code maintainability by transitioning React class-based components to functional ones.",
      "Improved code quality and readability by migrating JavaScript files to TypeScript in React, reducing potential runtime errors.",
    ],
  },
];

export interface ITestimonial {
  testimony: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const testimonials: ITestimonial[] = [
  {
    testimony:
      "Alex's ability to work under pressure while maintaining a high level of performance and delivering outstanding results has been vital to our team's success.",
    name: "Benjamin Lim",
    designation: "Engineering Lead",
    company: "Zipmex",
    image: ben,
  },
  {
    testimony:
      "Having Alex on our team has been a game-changer. His enthusiasm and passion for his work is contagious.",
    name: "Andy Nguyen",
    designation: "Sr. Frontend Engineer",
    company: "Zipmex",
    image: andy,
  },
  {
    testimony:
      "I'm always impressed by the quality and reliability of Alex's work. He's truly committed to ensuring our products meet the highest standards.",
    name: "Pimpakarn Wannasirikun",
    designation: "Quality Assurance",
    company: "Zipmex",
    image: tao,
  },
];

interface ITag {
  name: string;
  color: string;
}

export interface IProject {
  name: string;
  description: string;
  tags: ITag[];
  image: string;
  source_code_link: string;
  website: string;
}

const projects: IProject[] = [
  {
    name: "Wiiizy",
    description:
      "Experience the magic of Mother Nature at Wiiizy, your one-stop online shop for premium cannabis products. Elevate your senses and soar high with a carefully curated selection, all just a click away!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: wiiizy,
    source_code_link: "",
    website: "https://www.wiiizy.store",
  },
  {
    name: "Seba",
    description:
      "A heartfelt homage to the legendary Nujabes, where you can immerse yourself in a curated collection of my favorite soul-stirring tunes. Paying tribute to the timelessness of the GOAT. Rest in beats.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: seba,
    source_code_link: "https://github.com/alexdang1993374/Seba",
    website: "https://seba-45e88.web.app/",
  },
  {
    name: "QuoteDeck",
    description:
      "Your ultimate destination for reliving iconic TV moments! Embark on a nostalgia-fueled journey with favorites like Spongebob, The Simpsons, and It's Always Sunny in Philadelphia - one legendary line at a time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: quotedeck,
    source_code_link: "https://github.com/alexdang1993374/QuoteDeck",
    website: "https://quotedeck.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
