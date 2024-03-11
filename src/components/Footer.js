import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
      </div>
      <p> &copy; 2024; Powered by React</p>
    </div>
  );
}

export default Footer;