import netlify from "assets/images/skills/netlify.png";
import etherjs from "assets/images/skills/etherjs.png";
import solidity from "assets/images/skills/solidity.svg";
import hardhat from "assets/images/skills/hardhat.jpeg";
import freecodecamp from "assets/images/logos/freecodecamp.png";
import SfrLogo from "assets/images/logos/sfr.svg.png";
import onWave from "assets/images/logos/onWave.png";
import Dauphine from "assets/images/logos/Dauphine.jpeg";
import Capsule from "assets/images/logos/capsule.png";
import piscine from "assets/images/logos/42.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import mongo from "assets/images/skills/mongo.png";
import vba from "assets/images/skills/vba.png";
import notion from "assets/images/skills/notion.png";
import redux from "assets/images/skills/redux.png";
import javascript from "assets/images/skills/javascript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";

import bootstrap from "assets/images/skills/bootstrap.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";


export const companies = [
  {
    title: "SFR - Groupe Altice",
    alt: "Sfr image",
    role: "Data analyst - Project Manager",
    skills: ["VBA", "Tableau Software", "Management", "Intern Softwares"],
    period: "2 years / 2019 - 2021",
    logo: SfrLogo,
  },
  {
    title: "onWave",
    alt: "onWave image",
    role: "Co-Founder - Product Owner",
    skills: ["Figma", "UX/UI", "Entrepreneurship", "JavaScript", "React Native", "Notion"],
    period: "10 months / 2020 - 2021",
    logo: onWave
  }
];

export const institutes = [
  {
    short_title: "La Capsule",
    title: "La Capsule - Coding Bootcamp",
    alt: "capsule image",
    role: "Full-Stack Web and mobile Developement",
    skills: ["JavaScript", "React", "React Native", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Bootstrap", "Git", "Github", "Heroku"],
    period: "2022",
    startingYear: "2022",
    logo: Capsule,
  },
  {
    short_title: "Dauphine",
    title: "Université Paris Dauphine",
    alt: "Dauphine image",
    role: "Master's degree in digital economy and innovation",
    skills: ["Project Management", "Data Science", "Python", "R", "Marketing", "Digital Economy", "Innovation"],
    period: "2019 - 2021",
    startingYear: "2019",
    logo: Dauphine,
    awards: [
      {
        title: "Start-up Challenge",
        description:
          "Won the 2nd price in the Start-up Challenge of the Dauphine University with the project 'DeepClimb App - AI for Climbing'",
        date: "February, 2020"
      }
    ]
  },
  {
    short_title: "Ecole 42",
    title: " Piscine Ecole 42",
    alt: "capsule image",
    role: "Candidat to the 42 piscine - First coding experience",
    skills: ["C", "Algorithmique"],
    period: "2019",
    startingYear: "2019",
    logo: piscine,
  }
];

export const story = [
  {
    short_title: "Ecole 42",
    type: "school",
    title: " Piscine Ecole 42",
    alt: "capsule image",
    role: "Candidat to the 42 piscine - First coding experience",
    skills: ["C", "Algorithmique"],
    period: "August 2019",
    startingYear: "2019",
    logo: piscine,
    icon: FaGraduationCap
  },
  {
    short_title: "Dauphine",
    type: "school",
    title: "Université Paris Dauphine",
    alt: "Dauphine image",
    role: "Started my Master's degree in digital economy and innovation",
    skills: ["Project Management", "Data Science", "Python", "R", "Marketing", "Digital Economy", "Innovation"],
    period: "September 2019",
    startingYear: "2019",
    logo: Dauphine,
    icon: FaGraduationCap
  },
  {
    title: "SFR - Groupe Altice",
    type: "company",
    alt: "Sfr image",
    role: "Became Data analyst - Project Manager at SFR",
    skills: ["VBA", "Tableau Software", "Management", "Intern Softwares"],
    period: "December 2019",
    logo: SfrLogo,
    icon: BsFillBriefcaseFill
  },
  {
    title: "Start-up Challenge",
    type: "award",
    role:
      "Won the 2nd price in the Start-up Challenge of the Dauphine University with the project 'DeepClimb App - AI for Climbing'",
    skills: ["VBA", "Tableau Software", "Management", "Intern Softwares"],
    period: "February 2020",
    logo: Dauphine,
    icon: FaAward
  },

  {
    title: "onWave",
    type: "company",
    alt: "onWave image",
    role: "Started an entrepreneurial project - a social audio app named onWave",
    skills: ["Figma", "UX/UI", "Entrepreneurship", "JavaScript", "React Native", "Notion"],
    period: "April 2021",
    logo: onWave,
    icon: BsFillBriefcaseFill
  },
  {
    short_title: "La Capsule",
    type: "school",
    title: "La Capsule - Coding Bootcamp",
    alt: "capsule image",
    role: "Got admitted and started the La Capsule - Coding Bootcamp. Full-Stack Web and mobile Developement",
    skills: ["JavaScript", "React", "React Native", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Bootstrap", "Git", "Github", "Heroku"],
    period: "March 2022",
    startingYear: "2022",
    logo: Capsule,
    icon: FaGraduationCap
  },
  {
    short_title: "La Capsule",
    type: "award",
    title: "La Capsule - Coding Bootcamp",
    alt: "capsule image",
    role: "Created my first mobile app from scratch - Finded - App for finding  any kind of services near your location",
    skills: ["JavaScript", "React", "React Native", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Bootstrap", "Git", "Github", "Heroku"],
    period: "May 2022",
    startingYear: "2022",
    logo: Capsule,
    icon: FaAward
  },
  {
    short_title: "Solidity Learning",
    type: "school",
    title: "FreeCodeCamp - Solidity Learning",
    alt: "freecodecamp image",
    role: "Started learning solidity with an 32hours online course made by Patrick Collins",
    skills: ["Solidty", "JavaScript", "Node.js", "Git", "Github"],
    period: "July 2022",
    startingYear: "2022",
    logo: freecodecamp,
    icon: FaGraduationCap
  },
  {
    short_title: "Solidity Learning",
    type: "school",
    title: "FreeCodeCamp - Solidity Learning",
    alt: "freecodecamp image",
    role: "Deployed my first smart contract on an Ethereum testnet",
    skills: ["Solidty", "JavaScript", "Node.js", "Git", "Github"],
    period: "July 2022",
    startingYear: "2022",
    logo: freecodecamp,
    icon: FaAward
  }
];

export const skills = [

  {
    name: "Netlify",
    description: "Web hosting",
    link: "https://www.netlify.com/",
    type: "devops",
    image: netlify
  },
  {
    name: "Ether Js",
    description: "Web3 library",
    link: "https://docs.ethers.io/v5/",
    type: "web3",
    image: etherjs
  },
  {
    name: "Hardhat",
    description: "Ethereum environment",
    link: "https://hardhat.org/",
    type: "web3",
    image: hardhat
  },
  {
    name: "Solidity",
    description: "Web3 development",
    link: "https://docs.soliditylang.org/en/v0.8.15/",
    type: "web3",
    image: solidity
  },
  {
    name: "JavaScript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "React Native",
    description: "Mobile development",
    link: "https://reactnative.dev/",
    type: "development",
    image: react
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Redux",
    description: "Development",
    link: "https://redux.js.org/",
    type: "development",
    image: redux
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "MongoDB",
    description: "Database",
    link: "https://www.mongodb.com/",
    type: "database",
    image: mongo
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  },
  {
    name: "VBA",
    description: "Automation",
    link: "https://docs.microsoft.com/fr-fr/office/vba/api/overview/",
    type: "automation",
    image: vba
  },
  {
    name: "Notion",
    description: "Project management",
    link: "https://www.notion.so/",
    type: "project-management",
    image: notion
  },
  {
    name: "Discord",
    description: "Communication",
    link: "https://discord.com/",
    type: "communication",
    image: docean
  }
];
