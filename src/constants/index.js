export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
]

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
]

export const myProjects = [
  {
    title: "Terminal Protfolio",
    desc: "Terminal Portfolio is a unique, interactive showcase that lets users explore my work in a terminal-style interface. Mimicking a command-line environment, it allows for easy navigation through projects, skills, and experiences, offering a retro yet modern twist on traditional portfolios. The clean and minimal design enhances user engagement, making it a memorable way to present my professional journey",
    subdesc:
      "Built with Next.js 14 and TypeScript, this project emphasizes performance, scalability, and modern web development practices, offering a seamless, interactive experience for users.",
    href: "https://terminal-portfolio-wheat.vercel.app",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },

      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "SocialSphere",
    desc: "Social Sphere is an innovative platform designed for creating and participating in discussions across various topics, much like Reddit. Users can post, comment, and engage in community-driven content, fostering interaction and idea-sharing.",
    subdesc:
      "Developed with ReactJs,  SCSS, php, and MySql, SocialSphere ensures a seamless, scalable experience with a focus on performance and usability.",
    href: "https://github.com/Agrimzz/SocialSphere",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "rgba(72,69,158,0.4)",
      border: "0.2px solid #545299",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
      {
        id: 3,
        name: "php",
        path: "/assets/php.png",
      },
      {
        id: 4,
        name: "MySql",
        path: "/assets/mysql.png",
      },
    ],
  },
  {
    title: "MovieInfo",
    desc: "MovieInfo is a dynamic platform that provides detailed information on movies. Powered by the TMDB API, it allows users to search for and explore a vast collection of films, making it easy to stay updated on the latest releases and all-time favorites",
    subdesc:
      "Built using React and CSS, MovieInfo offers a sleek, responsive design and smooth user experience. With seamless integration of the TMDB API, it ensures fast and accurate movie data retrieval, making it a reliable go-to for movie enthusiasts.",
    href: "https://movieinfoasd.netlify.app/?",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
    ],
  },
  {
    title: "Gizmos",
    desc: "Gizmos is a sleek e-commerce web app tailored for gaming headphone enthusiasts. It offers a curated selection of high-quality gaming headphones with detailed product descriptions and seamless shopping experience. ",
    subdesc:
      "Powered by Next.js for optimal performance and MongoDB for efficient data management, Gizmos delivers a fast, responsive user experience. With its modern design and focus on gaming headphones, the app is built to scale, ensuring users can browse, compare, and shop effortlessly, all while maintaining data security and reliability.",
    href: "https://github.com/Agrimzz/gizmos",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "assets/mongo.png",
      },
    ],
  },
  // {
  //   title: "CarePulse - Health Management System",
  //   desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
  //   subdesc:
  //     "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
  //   href: "https://www.youtube.com/watch?v=lEflo_sc82g",
  //   texture: "/textures/project/project3.mp4",
  //   logo: "/assets/project-logo3.png",
  //   logoStyle: {
  //     backgroundColor: "#60f5a1",
  //     background:
  //       "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
  //     border: "0.2px solid rgba(208, 213, 221, 1)",
  //     boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
  //   },
  //   spotlight: "/assets/spotlight3.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },

  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 50 : isMobile ? 50 : 74,
    deskPosition: isSmall
      ? [3.9, -2.2, 0]
      : isMobile
      ? [3.5, 0.4, 0]
      : [5.5, -4.2, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [4, -1, 0]
      : isTablet
      ? [5, -6, 0]
      : [13, -7, -5],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [7, 5, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 6, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-13, 13, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-32, 18, -7],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-8, -2, -10]
      : isTablet
      ? [-14, -15, -10]
      : [-12, -10, -3],
  }
}

export const workExperiences = [
  {
    id: 1,
    name: "Freelance",
    pos: "Web Developer",
    duration: "2024 - Present",
    title:
      "Freelance front-end developer specializing in building responsive, user-friendly web and mobile apps using React, Next.js, and Tailwind CSS.",
    icon: "/assets/react.svg",
    animation: "victory",
    projects: [
      {
        name: "Ford Nepal",
        description:
          "Developed dynamic vehicle category navigation for ford.com.np, improving user experience by enabling real-time updates based on available categories.",
        link: "https://ford.com.np",
      },
      {
        name: "Manabiya Nepal",
        description:
          "Built the official website for Manabiya Nepal, a Japanese language institute, with a focus on responsive design, mobile compatibility, and fast loading times.",
        link: "https://manabiyanepal.com.np",
      },
    ],
  },

  // {
  //   id: 2,
  //   name: "Figma",
  //   pos: "Web Developer",
  //   duration: "2020 - 2022",
  //   title:
  //     "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
  //   icon: "/assets/figma.svg",
  //   animation: "clapping",
  // },
  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
]
