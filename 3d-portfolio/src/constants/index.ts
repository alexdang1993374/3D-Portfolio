import {
  backend,
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
  reactjs,
  redux,
  seba,
  tailwind,
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
      "Skillfully planned, coordinated, and implemented full-stack features such as automated email delivery flow, admin-user interaction, and user authentication in Elixir and React, streamlining user communication and enhancing platform security.",
      "Developed server-to-server endpoint authentication using JWT access tokens and hash encrypted client secrets, bolstering the security of inter-server communication.",
      "Implemented auto-logoff prevention across browser tabs with local storage and session management in React, ensuring user data protection and privacy",
      "Enabled seamless OTP SMS autofill functionality using webOTP API in React, enhancing user convenience during authentication processes.",
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Zipmex",
    icon: zipmex,
    iconBg: "#383E56",
    date: "April 2022 - Present",
    points: [
      "Developed and launched API Trading Key management, enhancing user experience by enabling easy creation and maintenance of API keys and secrets for automated cryptocurrency trading, while providing an alternative gateway into trading for professional users seeking advanced trading options.",
      "Collaborated with design team to develop and launch fully responsive mobile web pages, mirroring desktop site aesthetics while enhancing user experience, resulting in a significant increase in mobile user engagement and satisfaction.",
      "Designed a custom and reusable OTP input component for 2FA authorization flows with React, bolstering security and streamlining user authentication.",
      "Transitioned several React class-based components to functional components, optimizing codebase for better maintainability and performance.",
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimony:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimony:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
}

const projects: IProject[] = [
  {
    name: "Seba",
    description:
      "A heartfelt homage to the legendary Nujabes, where you can immerse yourself in a curated collection of my favorite soul-stirring tunes. Paying tribute to the timeless tunes of the GOAT. Rest in beats.",
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
  },
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
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "shopify",
        color: "pink-text-gradient",
      },
    ],
    image: wiiizy,
    source_code_link: "https://github.com/alexdang1993374/Wiiizy",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
