import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Backend Developer", icon: backend },
  { title: "Python Developer", icon: creator },
  { title: "Full Stack Developer", icon: web },
  { title: "Web Developer", icon: mobile },
];

const achievements = [
  {
    title: ["FreeCodeCamp"],
    company_name: "freeCodeCamp",
    icon: fcc,
    iconBg: "#383E56",
    date: "May 2024",
    points: ["Responsive Web Design", "JavaScript"],
  },
  {
    title: ["HackerRank"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "Apr 2025",
    points: [
      "Python (Basic) Certificate",
      "SQL (Basic) Certificate",
      "CSS (Basic) Certificate",
      "Go (Basic) Certificate",
    ],
  },
  {
    title: ["Certiport"],
    company_name: "Certiport",
    icon: cp,
    iconBg: "#383E56",
    date: "Apr 2025",
    points: ["IT Specialist - HTML and CSS", "IT Specialist - Databases"],
  },
  {
    title: ["Coursera"],
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#0056d2",
    date: "Jul 2025",
    points: ["IBM Full Stack Software Developer"],
  },
];

const testimonials = [];

// const projects = [
//   {
//     name: "Nova-Learn",
//     description:
//       "NovaLearn is an AI-powered platform that creates personalized learning paths with interactive content and quizzes. Designed with a futuristic 3D UI, it makes learning immersive, efficient, and goal-driven. 🚀",
//     tags: [
//       {
//         name: "node",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "spline",
//         color: "green-text-gradient",
//       },
//       {
//         name: "JavaScript",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "Flask",
//         color: "violet-text-gradient",
//       },
//       {
//         name: "sqlite3",
//         color: "orange-text-gradient",
//       },
//     ],
//     image: novalearn,
//     source_code_link: "https://www.youtube.com/@heygenzcoder",
//   },
//   {
//     name: "Multiplayer Pong Game",
//     description:
//       "Multiplayer Pong Game with three modes: Play with a friend online, play side-by-side on the same screen, or challenge an AI opponent. Fast, fun, and competitive — classic Pong with modern multiplayer options! 🕹️🔥",
//     tags: [
//       {
//         name: "socket",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "express",
//         color: "green-text-gradient",
//       },
//       {
//         name: "JavaScript",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: ponggame,
//     source_code_link: "https://www.youtube.com/@heygenzcoder",
//   },
// ];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

export { achievements, /* projects, */ services, testimonials, words };
