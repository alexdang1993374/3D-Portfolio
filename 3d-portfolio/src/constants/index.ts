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
    website: "https://seba-45e88.web.app/",
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
    website: "https://wiiizy.vercel.app/",
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
