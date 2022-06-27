import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Santiago Tonoli de Maussion. All Rights Reserved.`,
  author: {
    name: "Santiago Tonoli de Maussion",
    accounts: [
      {
        url: "https://github.com/santiagotonoli",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/santiago-tonoli-355429173/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:stonolidm@gmail.com",
        label: "Mail santiago",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
