/* Change this file to get your personal Porfolio */

//SEO Related settings
const seo = {
  title: "Prabhat's Portfolio",
  description:
    "A passionate software developer focused on building end-to-end solutions that are scalable, sustainable, and make a real-world impact through thoughtful design and technology.",
  og: {
    title: "Prabhat Verma Portfolio",
    type: "website",
    url: "http://prabhat.great-site.net/",
  },
};

//Home Page
const greeting = {
  title: "Prabhat Verma",
  logo_name: "Prabhat Verma",
  nickname: "Software Developer",
  subTitle:
    "A passionate software developer focused on building end-to-end solutions that are scalable, sustainable, and make a real-world impact through thoughtful design and technology.",
  resumeLink:
    "https://drive.google.com/file/d/1SIB52HUyNK8rUu1aPYGMNrSh-qF-Mq4L/view?usp=drivesdk",
  githubProfile: "https://github.com/prabhat708",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/prabhat708",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prabhat708/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:prabhat708431@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/prabhat708",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/prabhat_708/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-JS and also with HTML, CSS, JavaScript, Bootstrap",
        "⚡ Creating application backend in Node, Express & Django",
        "⚡ Some Projects based on it Fruitswallah- an ecommerce website, CRM Portal etc",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#27548A",
          },
        },
      ],
    },
    {
      title: "Python Scripting and Development",
      fileName: "pythonscripting",
      skills: [
        "⚡ Experience working on multiple Scripts",
        "⚡ Some Projects based on it Automatic email sender, Face Authenticator, Weather forecast etc",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#27548A",
          },
        },
        {
          skillName: "Sqlite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#27548A",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "yellow",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Prabhat708/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/prabhat708",
    },
    {
      siteName: "GeeksForGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "green",
      },
      profileLink: "https://www.geeksforgeeks.org/user/prabhat708/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "R.R. Institute of Modern Technology, Lucknow",
      subtitle: "B.Tech. in Computer Science And Design",
      logo_path: "RRlogo.png",
      alt_name: "RRGI",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development.",
      ],
      website_link: "http://rrgi.in",
    },

  ],
  schools: [
    {
      title: "Sita Bal V. M. Inter College, Mahmudabad, Sitapur",
      subtitle: "Intermediate with PCM",
      logo_path: "Sitalogo.png",
      alt_name: "SIC",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ I have studied subjects like Physics, Chemistry, and Mathematics with Hindi and English.",
        "⚡ I scored 91.8% marks in UP BOARD.",
      ],
      website_link: "https://sitagroup.co.in/",
    },
    {
      title: "Sita Bal V. M. Inter College, Mahmudabad, Sitapur",
      subtitle: "High School",
      logo_path: "Sitalogo.png",
      alt_name: "SIC",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ I have studied subjects like Physics, Chemistry, and Mathematics.",
        "⚡ I scored 91.5% marks in UP BOARD.",
        "⚡ I secured 3rd Position in my district Sitapur and honored by CM Yogi Adityanath.",
      ],
      website_link: "https://sitagroup.co.in/",
    },
  ],
};

const certifications = {
  certifications: [
    
    {
      title: "Frontend Development",
      subtitle: "SharpCareer Technologies Pvt. Ltd.",
      logo_path: "sharpcareerlogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ha2kpDR6YnJ5PUVAyr-IZWVdFsI91FCQ/view?usp=sharing",
      alt_name: "SharpCareer",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Programming",
      subtitle: "Infosys Springboard",
      logo_path: "infosyslogo.png",
      certificate_link:
        "https://drive.google.com/file/d/16D4oV1PXXVIp2neZFL3Hp7g9D_5WJpSK/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#1F70C199",
    },
    {
      title: "AI Tools Workshop",
      subtitle: "Be10x",
      logo_path: "be10xlogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Ynea76_y5uNrg0PC781oc2HKTWZ4OwQK/view?usp=sharing",
      alt_name: "Be10x",
      color_code: "#00000099",
    },
    {
      title: "Introduction To Internet Of Things",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs35/Course/NPTEL24CS35S56070002930632540.pdf",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Google Cloud Computing Foundations",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs131/Course/NPTEL24CS131S55120161604199630.pdf",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Developing Soft Skills and Personality",
      subtitle: "NPTEL",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/109/noc24-hs176/Course/NPTEL24HS176S65120168704199630.pdf",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "District Ranker",
      subtitle: "U.P. Board (High School)",
      logo_path: "upgovlogo.png",
      certificate_link:
        "https://drive.google.com/file/d/1yrLl88g6E6bJRIDdztHSrOkP1HXU5ELx/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Exercising Leadership",
      subtitle: "Edx,Harvard University",
      logo_path: "edxlogo.png",
      certificate_link:
        "https://courses.edx.org/certificates/506c89439ef349d69069712e46e44923?_gl=1*7s3f5p*_gcl_au*MTk2NjUzOTUwMi4xNzQ0MTM5OTkx*_ga*MTE0NTU2NjY0My4xNzQ0MTM5OTY4*_ga_D3KS4KMDT0*MTc0NDEzOTk2OC4xLjEuMTc0NDE0MDA5MC4yLjAuMA..",
      alt_name: "edx certificate",
      color_code: "#00000099",
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create full stack projects and create scripts to make easy and deploy them to web applications.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prabhat.png",
    description:
      "I am available on almost every social media. You can message me. I am open to work on Python Development,Node.js, React.js, JavaScript, Backend Development and Fullstack Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Biswan, Sitapur, Uttar Pradesh, India, 261201",
    locality: "Biswan",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "261201",
    streetAddress: "Sitapur",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/jERt2KVcz8k34Ybr9",
  },

};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  projectsHeader,
  contactPageData,
};
