// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import company_logo from './assets/company_logo/company_logo.jpeg';

// Education Section Logo's
import kiet_logo from './assets/education_logo/kiet_logo.jpg';
import school_logo from './assets/education_logo/school_logo.jpg';


// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: company_logo,
    role: "Frontend Developer",
    company: "BuildQuick",
    date: "May 2025- June 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: kiet_logo,
    school: "KIET Group Of Institutions , Ghaziabad",
    date: "Nov 2022 - June 2026",
    grade: "8.01 CGPA",
    desc: "I have completed my graduation degree (B.Tech) in Computer Science and Engineering from KIET Group Of Institutions , Ghaziabad. During my time at KIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIET Group Of Institutions has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - Computer Science and Engineering)",
  },
  {
    id: 1,
    img: school_logo,
    school: "Seth Chhoteylal Academy , Rath",
    date: "Apr 2021 - March 2022",
    grade: "76.6%",
    desc: "I completed my class 12 education from Seth Chhoteylal Academy , Rath, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) ",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: school_logo,
    school: "Seth Chhoteylal Academy , Rath",
    date: "Apr 2019 - March 2020",
    grade: "75.5%",
    desc: "I completed my class 10 education from Seth Chhoteylal Academy , Rath, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [

  {
    id: 0,
    title: "My Portfolio",
    description:
      "A visually engaging and interactive portfolio built with React.js to showcase my academic progression from school to college. The project highlights key milestones, achievements, and transitions in a timeline format, offering visitors a smooth and informative experience. Designed with a clean UI and responsive layout to ensure accessibility across all devices.",
    image: taskremLogo,
    tags: ["JavaScript", "ReactJs", "HTML", "CSS"],
    github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "https://luminous-sopapillas-3973c4.netlify.app",
  },
  {
    id: 1,
    title: "New-Bloom-Together",
    description:
      "A comprehensive and user-friendly web platform built with HTML, CSS, JavaScript, and Firebase, designed to support parenting and mental wellness during pregnancy. The application integrates secure MetaMask-based blockchain login, and features yoga session modules, parenting podcasts, and community forums for peer support. With a focus on accessibility and mental health, this platform offers a safe space for expecting parents and caregivers.",
    image: movierecLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Blockchain", 'MongoDB'],
    github: "https://github.com/CodesavvySiddharth/New-Bloom-Together",
    webapp: "https://new-bloom-together.vercel.app/",
  },
  {
    id: 2,
    title: "Ticket Booking Website",
    description:
      "A fast and responsive web-based application developed using HTML, CSS, and JavaScript for seamless ticket reservations. Designed with user experience in mind, it supports real-time booking features, ensures smooth performance across devices through responsive design, and offers an intuitive interface for hassle-free navigation and booking.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/prasoon2506/Ticket-Booking",
    webapp: "https://ticket-booking-one-tau.vercel.app/",
  },
  {
    id: 3,
    title: "Country API",
    description:
      "A powerful and user-friendly React.js application that fetches and displays comprehensive data about countries worldwide. Simply load the app to explore real-time details such as flags, capitals, populations, currencies, and more. With an intuitive interface and seamless API integration, this tool offers an engaging experience for learners, travelers, and geography enthusiasts alike.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://heroic-mandazi-1dacab.netlify.app",
  },
  {
    id: 4,
    title: "Amazon Clone",
    description:
      "A static front-end clone of the Amazon homepage, meticulously crafted using HTML and CSS. This project replicates the layout, design, and visual structure of Amazon’s user interface, including the header, product grid, navigation bar, and footer. Built to sharpen skills in semantic HTML, CSS Flexbox/Grid, and responsive design principles.",
    image: webverLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/prasoon2506/Amazon-Clone",
    webapp: "https://amazon-clone1.vercel.app",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description:
      "A pixel-perfect front-end replica of Netflix's homepage created using HTML and CSS. This project mirrors the sleek and modern UI of Netflix, featuring banners, content sections, and a responsive layout. Designed to enhance skills in UI design, responsive web development, and CSS styling techniques like Flexbox and Grid.",
    image: cmLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/prasoon2506/Netflix-clone",
    webapp: "https://netflix-clone-pi-ruddy.vercel.app",
  },
  {
    id: 6,
    title: "Library Management System",
    description:
      "A console-based application developed in C to efficiently manage books and student records. Utilized file handling and structs to perform operations such as adding, searching, issuing, and returning books. Designed to ensure organized data storage and retrieval, this project strengthened core programming logic and understanding of data structures in C.",
    image: imagesearchLogo,
    tags: ["C Language"],
    github: "https://github.com/prasoon2506/Library-Management",
  },
];  
